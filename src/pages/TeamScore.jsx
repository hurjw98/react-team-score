// TeamScore.jsx
import React, { useState } from "react";
import TeamButton from "../components/TeamButton";
import ScoreChange from "../components/ScoreChange";
import ScoreLog from "../components/ScoreLog";
import style from "../css/TeamScore.module.css";

// 팀 데이터
const teams = [
  { team_id: 1, team_name: "팀 A" },
  { team_id: 2, team_name: "팀 B" },
  { team_id: 3, team_name: "팀 C" },
  { team_id: 4, team_name: "팀 D" },
  { team_id: 0, team_name: "팀 없음" },
];

// 학생 데이터
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
  const [log, setLog] = useState([]);
  const [selectedScore, setSelectedScore] = useState(0);
  const [studentData, setStudentData] = useState(students);

  const addLog = (team, member, change) => {
    const currentDateTime = new Date();
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

    setLog([...log, { team, member, change, dateTimeString }]);
  };

  const handleScoreSelect = (score) => {
    setSelectedScore(score);
  };

  const handleScoreChange = (memberId, change) => {
    const updatedStudents = studentData.map((student) => {
      if (student.std_id === memberId) {
        return { ...student, score: student.score + change };
      }
      return student;
    });
    setStudentData(updatedStudents);
  };

  const removeLog = (index) => {
    const newLog = [...log];
    const { member, change } = newLog.splice(index, 1)[0];
    setLog(newLog);

    const updatedStudents = studentData.map((student) => {
      if (student.std_name === member) {
        return { ...student, score: student.score - change };
      }
      return student;
    });
    setStudentData(updatedStudents);
  };

  const clearLogs = () => {
    const updatedStudents = studentData.map((student) => {
      const totalChange = log
        .filter(({ member }) => member === student.std_name)
        .reduce((sum, { change }) => sum + change, 0);
      return { ...student, score: student.score - totalChange };
    });
    setStudentData(updatedStudents);
    setLog([]);
  };

  return (
    <div className={style.container}>
      <h1>팀 점수 관리</h1>
      <div className={style.scoreChangeContainer}>
        <ScoreChange
          onScoreSelect={handleScoreSelect}
          selectedScore={selectedScore}
        />
      </div>
      <div className={style.teamButtons}>
        {teams.map((team) => (
          <TeamButton
            key={team.team_id}
            team={team.team_name}
            members={studentData.filter(
              (student) => student.team_id === team.team_id
            )}
            selectedScore={selectedScore}
            addLog={addLog}
            onScoreChange={handleScoreChange}
          />
        ))}
      </div>
      <ScoreLog log={log} onRemoveLog={removeLog} onClearLogs={clearLogs} />
    </div>
  );
};

export default TeamScore;
