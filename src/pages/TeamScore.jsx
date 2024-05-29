// TeamScore.jsx
import React, { useState } from "react"; // React 라이브러리와 상태 관리를 위한 useState 훅을 임포트
import TeamButton from "../components/TeamButton"; // TeamButton 컴포넌트를 임포트
import ScoreChange from "../components/ScoreChange"; // ScoreChange 컴포넌트를 임포트
import ScoreLog from "../components/ScoreLog"; // ScoreLog 컴포넌트를 임포트
import style from "../css/TeamScore.module.css"; // CSS 모듈을 임포트하여 컴포넌트의 스타일을 적용

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
  const [log, setLog] = useState([]); // 로그 상태를 관리하는 useState 훅. 초기값은 빈 배열
  const [selectedScore, setSelectedScore] = useState(0); // 선택된 점수를 관리하는 useState 훅. 초기값은 0
  const [studentData, setStudentData] = useState(students); // 학생 데이터를 관리하는 useState 훅. 초기값은 students 배열

  // 로그 추가 함수
  const addLog = (team, member, change) => {
    const currentDateTime = new Date(); // 현재 날짜 및 시간 객체 생성
    const dateTimeString = `${currentDateTime.getFullYear()}/${String(
      currentDateTime.getMonth() + 1
    ).padStart(2, "0")}/${String(currentDateTime.getDate()).padStart(
      2,
      "0"
    )} ${currentDateTime.toLocaleString("en-US", { weekday: "long" })} ${String(
      currentDateTime.getHours()
    ).padStart(2, "0")}:${String(currentDateTime.getMinutes()).padStart(
      2,
      "0"
    )}`;

    setLog([...log, { team, member, change, dateTimeString }]); // 기존 로그 배열에 새로운 로그 항목 추가
  };

  // 점수 선택 함수
  const handleScoreSelect = (score) => {
    setSelectedScore(score); // 선택된 점수를 업데이트
  };

  // 점수 변경 함수
  const handleScoreChange = (memberId, change) => {
    const updatedStudents = studentData.map((student) => {
      if (student.std_id === memberId) {
        return { ...student, score: student.score + change }; // 해당 학생의 점수 변경
      }
      return student;
    });
    setStudentData(updatedStudents); // 업데이트된 학생 데이터 설정
  };

  // 로그 제거 함수
  const removeLog = (index) => {
    const newLog = [...log]; // 기존 로그 배열 복사
    const { member, change } = newLog.splice(index, 1)[0]; // 해당 인덱스의 로그 항목 제거 및 해당 항목 반환
    setLog(newLog); // 새로운 로그 배열 설정

    const updatedStudents = studentData.map((student) => {
      if (student.std_name === member) {
        return { ...student, score: student.score - change }; // 해당 학생의 점수 복원
      }
      return student;
    });
    setStudentData(updatedStudents); // 업데이트된 학생 데이터 설정
  };

  // 모든 로그 제거 및 점수 초기화 함수
  const clearLogs = () => {
    const updatedStudents = studentData.map((student) => {
      // 모든 학생 데이터에 대해 총 점수 변화를 계산
      const totalChange = log
        .filter(({ member }) => member === student.std_name) // filter: 학생 이름이 로그의 멤버와 같은 로그 항목만 추출
        .reduce((sum, { change }) => sum + change, 0); // reduce를 사용하여 총 점수 변화 계산
      return { ...student, score: student.score - totalChange }; // 학생의 점수를 초기화
    });
    setStudentData(updatedStudents); // 업데이트된 학생 데이터 설정
    setLog([]); // 로그 초기화
  };

  return (
    <div className={style.container}>
      <h1>팀 점수 관리</h1>
      <div className={style.scoreChangeContainer}>
        <ScoreChange
          onScoreSelect={handleScoreSelect} /* 점수 선택 시 호출될 함수 전달 */
          selectedScore={selectedScore} /* 현재 선택된 점수 전달 */
        />
      </div>
      <div className={style.teamButtons}>
        {teams.map((team) => (
          <TeamButton
            key={team.team_id} /* 각 팀 버튼에 고유 키 설정 */
            team={team.team_name} /* 팀 이름 전달 */
            members={studentData.filter(
              (student) => student.team_id === team.team_id // filter: 학생 데이터 중 해당 팀에 속한 학생들만 추출
            )}
            selectedScore={selectedScore} /* 선택된 점수 전달 */
            addLog={addLog} /* 로그 추가 함수 전달 */
            onScoreChange={handleScoreChange} /* 점수 변경 함수 전달 */
          />
        ))}
      </div>
      <ScoreLog
        log={log} /* 현재 로그 전달 */
        onRemoveLog={removeLog} /* 로그 제거 함수 전달 */
        onClearLogs={clearLogs} /* 모든 로그 제거 및 초기화 함수 전달 */
      />
    </div>
  );
};

export default TeamScore; // TeamScore 컴포넌트를 기본 내보내기
