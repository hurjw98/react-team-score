// TeamButton.jsx
import React, { useState } from "react"; // React 라이브러리와 useState 훅을 임포트
import style from "../css/TeamButton.module.css"; // CSS 모듈을 임포트하여 컴포넌트의 스타일을 적용

const TeamButton = ({
  team, // 팀 이름
  members, // 팀 멤버 배열
  selectedScore, // 선택된 점수
  addLog, // 로그 추가 함수
  onScoreChange, // 점수 변경 함수
}) => {
  const [isOpen, setIsOpen] = useState(false); // 팀 버튼이 열려 있는지 여부를 관리하는 상태. 초기값은 닫힘(false)

  // 팀 버튼을 열고 닫는 함수
  const toggleOpen = () => {
    setIsOpen(!isOpen); // isOpen 상태를 반전시킴
  };

  // 점수 변경 처리 함수
  const handleScoreChange = (memberId, change) => {
    onScoreChange(memberId, change); // 점수 변경 함수 호출
    const member = members.find((m) => m.std_id === memberId); // find: 주어진 조건에 맞는 첫 번째 요소를 반환
    addLog(team, member.std_name, change); // 로그 추가 함수 호출
  };

  return (
    <div className={style.teamButton}>
      <button onClick={toggleOpen} className={style.teamHeader}>
        {team} (총 점수:{" "}
        {members.reduce((acc, member) => acc + member.score, 0)}){" "}
        {/* reduce: 멤버들의 점수를 합산 */}
      </button>
      {isOpen /* isOpen 상태가 true일 때만 멤버 목록을 표시 */ && (
        <div className={style.members}>
          {members.map((member) => (
            <div key={member.std_id} className={style.member}>
              <span>
                {member.std_name} (점수: {member.score})
              </span>
              <button
                className={style.scoreButton}
                onClick={() => handleScoreChange(member.std_id, selectedScore)} // 점수 변경 버튼 클릭 시 handleScoreChange 호출
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

export default TeamButton; // TeamButton 컴포넌트를 기본 내보내기
