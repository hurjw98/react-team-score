// TeamScore.jsx
// TeamScore는 팀과 학생들의 점수를 관리하는 메인 컴포넌트임

import React, { useState } from "react";
import TeamButton from "../components/TeamButton";
import ScoreChange from "../components/ScoreChange";
import ScoreLog from "../components/ScoreLog";
import style from "../css/TeamScore.module.css";

// 팀 데이터 배열
const teams = [
  { team_id: 1, team_name: "팀 A" },
  { team_id: 2, team_name: "팀 B" },
  { team_id: 3, team_name: "팀 C" },
  { team_id: 4, team_name: "팀 D" },
  { team_id: 0, team_name: "팀 없음" },
];

// 학생 데이터 배열
const students = [
  { std_id: 1, std_name: "학생1", score: 0, team_id: 1 },
  { std_id: 2, std_name: "학생2", score: 0, team_id: 1 },
  { std_id: 3, std_name: "학생3", score: 0, team_id: 1 },
  { std_id: 4, std_name: "학생4", score: 0, team_id: 1 },
  { std_id: 5, std_name: "학생5", score: 0, team_id: 1 },
  { std_id: 6, std_name: "학생6", score: 0, team_id: 2 },
  { std_id: 7, std_name: "학생7", score: 0, team_id: 2 },
  { std_id: 8, std_name: "학생8", score: 0, team_id: 2 },
  { std_id: 9, std_name: "학생9", score: 0, team_id: 2 },
  { std_id: 10, std_name: "학생10", score: 0, team_id: 3 },
  { std_id: 11, std_name: "학생11", score: 0, team_id: 3 },
  { std_id: 13, std_name: "학생13", score: 0, team_id: 3 },
  { std_id: 14, std_name: "학생14", score: 0, team_id: 3 },
  { std_id: 15, std_name: "학생15", score: 0, team_id: 3 },
  { std_id: 16, std_name: "학생16", score: 0, team_id: 4 },
  { std_id: 17, std_name: "학생17", score: 0, team_id: 4 },
  { std_id: 18, std_name: "학생18", score: 0, team_id: 4 },
  { std_id: 19, std_name: "학생19", score: 0, team_id: 4 },
  { std_id: 20, std_name: "학생20", score: 0, team_id: 4 },
  { std_id: 21, std_name: "학생21", score: 0, team_id: 4 },
  { std_id: 22, std_name: "학생22", score: 0, team_id: 0 },
  { std_id: 23, std_name: "학생23", score: 0, team_id: 0 },
  { std_id: 24, std_name: "학생24", score: 0, team_id: 0 },
  { std_id: 25, std_name: "학생25", score: 0, team_id: 0 },
  { std_id: 26, std_name: "학생26", score: 0, team_id: 0 },
  { std_id: 27, std_name: "학생27", score: 0, team_id: 0 },
  { std_id: 28, std_name: "학생28", score: 0, team_id: 0 },
  { std_id: 29, std_name: "학생29", score: 0, team_id: 0 },
];

const TeamScore = () => {
  // 로그 상태를 관리하는 useState 훅 -> 초기값은 빈 배열
  const [log, setLog] = useState([]);

  // 선택된 점수를 관리하는 useState 훅 -> 초기값은 0
  const [selectedScore, setSelectedScore] = useState(0);

  // 학생 데이터를 관리하는 useState 훅 -> 초기값은 students 배열
  const [studentData, setStudentData] = useState(students);

  // 로그 추가 함수
  const addLog = (team, member, change) => {
    // 현재 날짜와 시간 객체 생성
    const currentDateTime = new Date();

    // 날짜 및 시간 문자열 생성
    const year = currentDateTime.getFullYear(); // 연도
    const month = String(currentDateTime.getMonth() + 1).padStart(2, "0"); // 월 (1월은 0부터 시작하므로 +1 필요)
    const date = String(currentDateTime.getDate()).padStart(2, "0"); // 일
    const day = currentDateTime.toLocaleString("ko-KR", { weekday: "long" }); // 요일 : en-US로 해도 됨
    const hours = String(currentDateTime.getHours()).padStart(2, "0"); // 시
    const minutes = String(currentDateTime.getMinutes()).padStart(2, "0"); // 분
    ////  참고 :
    ////   padStart는 JavaScript의 String 객체 메서드 중 하나로,
    ////   문자열의 시작 부분을 다른 문자열로 채워 주어진 길이를 맞추는 기능을 한다.

    // 년/월/일/요일 시간:분
    const dateTimeString = `${year}/${month}/${date} ${day} ${hours}:${minutes}`;

    // 기존 로그 배열에 새로운 로그 항목 추가
    setLog([...log, { team, member, change, dateTimeString }]);
  };

  // 점수 선택 함수 : 선택한 점수를 다른 곳에서 사용하기 위해 필요한 함수
  const handleScoreSelect = (score) => {
    setSelectedScore(score);
  };

  // 점수 변경 함수 : 학생의 점수를 변경하는 함수
  const handleScoreChange = (memberId, change) => {
    const updatedStudents = studentData.map((student) => {
      if (student.std_id === memberId) {
        return { ...student, score: student.score + change }; // 점수를 변경하고 반환
      }

      return student; // 해당 학생이 아닌 경우 그대로 반환
    });

    // 업데이트된 학생 데이터를 상태로 설정
    setStudentData(updatedStudents);
  };

  // 로그 제거 함수
  const removeLog = (index) => {
    const newLog = [...log]; // 기존 로그 배열 복사

    // 해당 인덱스의 로그 항목 제거 및 해당 항목 반환
    const { member, change } = newLog.splice(index, 1)[0];
    // 참고 : array.splice(배열 변경 시작 인덱스, 베열에서 제거할 요소의 수, 추가할 요소, 추가할 요소, ...);
    // 참고 : const { member, change }는 구조 배당 할당을 이용한 것임

    setLog(newLog); // 새로운 로그 배열 설정

    // 로그를 삭제하면 해당 학생의 점수가 복원됨
    const updatedStudents = studentData.map((student) => {
      if (student.std_name === member) {
        return { ...student, score: student.score - change }; // 학생의 점수를 변경 전으로 복원
      }
      return student; // 해당 학생이 아닌 경우 그대로 반환
    });
    setStudentData(updatedStudents); // 업데이트된 학생 데이터 설정
  };

  // 모든 로그 제거 및 모든 점수 초기화
  const clearLogs = () => {
    const updatedStudents = studentData.map((student) => {
      // 모든 학생 데이터에 대해 총 점수 변화를 계산
      const totalChange = log

        // filter를 사용하여 해당하는 학생의 로그 항목만 추출
        .filter(({ member }) => member === student.std_name)

        // reduce를 사용하여 총 점수 변화 계산
        .reduce((sum, { change }) => sum + change, 0);

      return { ...student, score: student.score - totalChange }; // 학생의 점수를 원래대로 초기화
    });
    setStudentData(updatedStudents); // 업데이트된 학생 데이터 설정
    setLog([]); // 로그 초기화
  };

  return (
    <div className={style.container}>
      <h1>팀 점수 관리</h1>

      <div className={style.scoreChangeContainer}>
        {/* ScoreChange는 점수를 선택하는 인터페이스를 제공함 */}
        <ScoreChange
          onScoreSelect={handleScoreSelect} /* 점수 선택 시 호출될 함수 전달 */
          selectedScore={selectedScore} /* 현재 선택된 점수 전달 */
        />
      </div>

      <div className={style.teamButtons}>
        {/* TeamButton는 각 팀의 정보를 표시하고 팀원들의 점수를 변경하는 인터페이스를 제공함 */}
        {teams.map((team) => (
          <TeamButton
            key={team.team_id} /* 각 팀 버튼의 고유 번호 */
            team={team.team_name} /* 팀 이름 전달 */
            /* */
            /* filter: 학생 데이터 중 해당 팀에 속한 학생들만 추출 */
            members={studentData.filter(
              (student) => student.team_id === team.team_id
            )}
            /* */
            selectedScore={selectedScore} /* 현재 선택된 점수 전달 */
            addLog={addLog} /* 로그 추가 함수 전달 */
            onScoreChange={handleScoreChange} /* 점수 변경 함수 전달 */
          />
        ))}
      </div>

      {/* ScoreLog는 점수 변경 기록을 테이블 형식으로 표시함, 그리고
      개별 로그 항목을 삭제하거나 모든 로그를 삭제할 수 있는 인터페이스를 제공함 */}
      <ScoreLog
        log={log} /* 현재 로그 전달 */
        onRemoveLog={removeLog} /* 로그 제거 함수 전달 */
        onClearLogs={clearLogs} /* 모든 로그 제거 및 초기화 함수 전달 */
      />
    </div>
  );
};

export default TeamScore;
