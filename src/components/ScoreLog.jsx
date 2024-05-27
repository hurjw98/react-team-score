// ScoreLog.jsx
import React from "react";
import style from "../css/ScoreLog.module.css";

const ScoreLog = ({ log, onRemoveLog, onClearLogs }) => {
  return (
    <div className={style.scoreLog}>
      <div className={style.logHeader}>
        <h2>점수 변경 기록</h2>
        <button className={style.clearButton} onClick={onClearLogs}>
          전체 삭제
        </button>
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
                      : "lightgray",
                }}
              >
                {entry.change > 0 ? "+" : ""}
                {entry.change}
              </td>
              <td>{entry.dateTimeString}</td>
              <td>
                <button onClick={() => onRemoveLog(index)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreLog;
