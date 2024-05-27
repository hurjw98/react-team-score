// ScoreChange.jsx
import React from "react";
import style from "../css/ScoreChange.module.css";

const ScoreChange = ({ onScoreSelect, selectedScore }) => {
  const handleChange = (e) => {
    onScoreSelect(parseInt(e.target.value));
  };

  return (
    <div className={style.scoreChange}>
      <div className={style.description}>점수 변경 값을 선택하세요:</div>
      <select
        className={style.selector}
        onChange={handleChange}
        value={selectedScore}
      >
        {[
          -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          10,
        ].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <span
        className={style.scoreDisplay}
        style={{
          backgroundColor:
            selectedScore < 0 ? "blue" : selectedScore > 0 ? "red" : "gray",
        }}
      >
        {selectedScore}
      </span>
    </div>
  );
};

export default ScoreChange;
