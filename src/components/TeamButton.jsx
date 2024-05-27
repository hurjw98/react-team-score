// TeamButton.jsx
import React, { useState } from "react";
import style from "../css/TeamButton.module.css";

const TeamButton = ({
  team,
  members,
  selectedScore,
  addLog,
  onScoreChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleScoreChange = (memberId, change) => {
    onScoreChange(memberId, change);
    const member = members.find((m) => m.std_id === memberId);
    addLog(team, member.std_name, change);
  };

  return (
    <div className={style.teamButton}>
      <button onClick={toggleOpen} className={style.teamHeader}>
        {team} (총 점수:{" "}
        {members.reduce((acc, member) => acc + member.score, 0)})
      </button>
      {isOpen && (
        <div className={style.members}>
          {members.map((member) => (
            <div key={member.std_id} className={style.member}>
              <span>
                {member.std_name} (점수: {member.score})
              </span>
              <button
                className={style.scoreButton}
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
