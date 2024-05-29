// TeamButton.jsx
// TeamButton는 각 팀의 정보를 표시하고 팀원들의 점수를 변경하는 인터페이스를 제공함

import React, { useState } from "react";
import style from "../css/TeamButton.module.css";

const TeamButton = ({
  team, // 팀 이름
  members, // 팀 멤버 배열
  selectedScore, // 선택된 점수
  addLog, // 로그 추가 함수
  onScoreChange, // 점수 변경 함수
}) => {
  // 팀 버튼이 열려 있는지 여부를 관리하는 훅 -> 초기값은 닫힘(false)
  const [isOpen, setIsOpen] = useState(false);

  // 팀 버튼을 열고 닫는 함수
  const toggleOpen = () => {
    setIsOpen(!isOpen); // isOpen 상태를 반전시킴
  };

  // 점수 변경 처리 함수
  const handleScoreChange = (memberId, change) => {
    onScoreChange(memberId, change); // 점수 변경 함수 호출
    // find를 통해 주어진 조건에 맞는 첫 번째 요소를 반환함
    const member = members.find((m) => m.std_id === memberId);
    addLog(team, member.std_name, change); // 로그 추가 함수 호출
  };

  return (
    <div className={style.teamButton}>
      <button onClick={toggleOpen} className={style.teamHeader}>
        {team} (총 점수 :{" "}
        {/* reduce를 통해 멤버들의 점수를 합산(sum의 초기값은 0)*/}
        {members.reduce((sum, member) => sum + member.score, 0)}){" "}
      </button>

      {/* && 패턴을 이용한 조건부 렌더링을 사용함 */}
      {isOpen /* isOpen 상태가 true일 때만 멤버 목록을 표시 */ && (
        <div className={style.members}>
          {/* members 배열을 이용해 각 멤버의 div을 동적으로 생성 */}
          {members.map((member) => (
            <div key={member.std_id} className={style.member}>
              {/* 각 멤버의 점수를 span에 표시 */}
              <span>
                {member.std_name} (점수 : {member.score})
              </span>

              {/* 각 멤버의 점수를 변경하는 button */}
              <button
                className={style.scoreButton}
                // 점수 변경 버튼 클릭 시 handleScoreChange 호출
                onClick={() => handleScoreChange(member.std_id, selectedScore)}
              >
                점수 변경
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamButton;
