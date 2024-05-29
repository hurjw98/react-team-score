// ScoreLog.jsx
import React from "react"; // React 라이브러리를 임포트
import style from "../css/ScoreLog.module.css"; // CSS 모듈을 임포트하여 컴포넌트의 스타일을 적용

const ScoreLog = ({ log, onRemoveLog, onClearLogs }) => {
  // log: 점수 변경 로그 배열
  // onRemoveLog: 개별 로그 항목을 삭제하는 함수
  // onClearLogs: 모든 로그를 삭제하는 함수

  return (
    <div className={style.scoreLog}>
      <div className={style.logHeader}>
        <h2>점수 변경 기록</h2>
        <button className={style.clearButton} onClick={onClearLogs}>
          전체 삭제
        </button>{" "}
        {/* 모든 로그를 삭제하는 버튼 */}
      </div>
      <table>
        <thead>
          <tr>
            <th>팀명</th>
            <th>팀원</th>
            <th>변경된 점수</th>
            <th>날짜 및 시간</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {log.map((entry, index) => (
            <tr key={index}>
              <td>{entry.team}</td>
              <td>{entry.member}</td>
              <td
                style={{
                  backgroundColor:
                    entry.change < 0
                      ? "lightblue"
                      : entry.change > 0
                      ? "lightcoral"
                      : "lightgray" /* 변경된 점수에 따라 배경색 변경 */,
                }}
              >
                {entry.change > 0 ? "+" : ""}
                {entry.change}{" "}
                {/* 변경된 점수 표시, 양수일 경우 "+" 기호 추가 */}
              </td>
              <td>{entry.dateTimeString}</td>
              <td>
                <button onClick={() => onRemoveLog(index)}>삭제</button>{" "}
                {/* 개별 로그 항목 삭제 버튼 */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreLog; // ScoreLog 컴포넌트를 기본 내보내기
