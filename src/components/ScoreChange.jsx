// ScoreChange.jsx
import React from "react"; // React 라이브러리를 임포트
import style from "../css/ScoreChange.module.css"; // CSS 모듈을 임포트하여 컴포넌트의 스타일을 적용

const ScoreChange = ({ onScoreSelect, selectedScore }) => {
  // onScoreSelect: 점수 선택 시 호출될 함수
  // selectedScore: 현재 선택된 점수

  // 점수 선택 시 호출되는 핸들러 함수
  const handleChange = (e) => {
    onScoreSelect(parseInt(e.target.value)); // 선택된 값을 정수로 변환하여 onScoreSelect 함수 호출
  };

  return (
    <div className={style.scoreChange}>
      <div className={style.description}>점수 변경 값을 선택하세요:</div>
      <select
        className={style.selector} /* CSS 모듈 클래스 적용 */
        onChange={handleChange} /* 선택 값이 변경될 때 호출될 함수 */
        value={selectedScore} /* 현재 선택된 값 설정 */
      >
        {[
          -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          10,
        ].map((value) => (
          <option key={value} value={value}>
            {value} {/* 점수 변경 값 옵션 생성 */}
          </option>
        ))}
      </select>
      <span
        className={style.scoreDisplay} /* CSS 모듈 클래스 적용 */
        style={{
          backgroundColor:
            selectedScore < 0
              ? "blue"
              : selectedScore > 0
              ? "red"
              : "gray" /* 선택된 점수에 따라 배경색 변경 */,
        }}
      >
        {selectedScore} {/* 현재 선택된 점수 표시 */}
      </span>
    </div>
  );
};

export default ScoreChange; // ScoreChange 컴포넌트를 기본 내보내기
