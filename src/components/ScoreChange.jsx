// ScoreChange.jsx
// ScoreChange는 점수를 선택하는 인터페이스를 제공함

import React from "react";
import style from "../css/ScoreChange.module.css";

// 선택 가능한 점수의 배열
const scoreOptions = [
  -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

const ScoreChange = ({ onScoreSelect, selectedScore }) => {
  // onScoreSelect : 점수 선택 시 호출될 함수
  // selectedScore : 현재 선택된 점수

  // 사용자가 선택한 값을 정수로 변환하는 함수
  const handleChange = (e) => {
    onScoreSelect(parseInt(e.target.value)); // 선택된 값을 정수로 변환하여 onScoreSelect 함수 호출
  };

  return (
    <div className={style.scoreChange}>
      <div className={style.description}>점수 변경 값을 선택하세요 : </div>

      {/* 점수를 선택하는 select문 */}
      <select
        className={style.selector}
        onChange={handleChange} /* 선택 값이 변경될 때 handleChange를 호출 */
        value={selectedScore} /* 현재 선택된 점수 */
      >
        {/* 점수 배열을 사용하여 <option>을 동적으로 생성 */}
        {scoreOptions.map((value) => (
          <option key={value} value={value}>
            {value} {/* 점수 변경 값 옵션 생성 */}
          </option>
        ))}
      </select>

      {/* span은 현재 선택된 점수 표시하는 곳 */}
      <span
        className={style.scoreDisplay}
        style={{
          backgroundColor:
            selectedScore < 0
              ? "blue"
              : selectedScore > 0
              ? "red"
              : "gray" /* 선택된 점수의 범위에 따라 배경색이 다름 */,
        }}
      >
        {selectedScore} {/* = 현재 선택된 점수 */}
      </span>
    </div>
  );
};

export default ScoreChange;
