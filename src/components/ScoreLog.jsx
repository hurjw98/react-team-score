// ScoreLog.jsx
// ScoreLog는 점수 변경 기록을 테이블 형식으로 표시함, 그리고
// 개별 로그 항목을 삭제하거나 모든 로그를 삭제할 수 있는 인터페이스를 제공함

import React from "react";
import style from "../css/ScoreLog.module.css";

const ScoreLog = ({ log, onRemoveLog, onClearLogs }) => {
  // log : 점수 변경 로그의 배열
  // onRemoveLog : 개별 로그 항목을 삭제하는 함수
  // onClearLogs : 모든 로그를 삭제하는 함수

  return (
    <div className={style.scoreLog}>
      <div className={style.logHeader}>
        <h2>점수 변경 기록</h2>
        <button className={style.clearButton} onClick={onClearLogs}>
          전체 삭제{/* 모든 로그를 삭제하는 버튼 */}
        </button>{" "}
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
          {/* log 배열을 이용해 <tbody> 내부의 <tr> 요소들을 동적으로 생성 */}
          {/* 참고로 log 배열에는 여러 개의 { team, member, change, dateTimeString }가 있음 */}
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
                      : "lightgray" /* 변경된 점수의 범위에 따라 배경색이 다름 */,
                }}
              >
                {/* 변경된 점수가 양수일 경우 "+" 기호 추가 */}
                {entry.change > 0 ? "+" : ""}
                {/* 변경된 점수 표시 */}
                {entry.change}{" "}
              </td>
              <td>{entry.dateTimeString}</td>
              <td>
                {/* 개별 로그 항목 삭제 버튼 */}
                <button onClick={() => onRemoveLog(index)}>삭제</button>{" "}
              </td>
            </tr>
          ))}
          {/* log.map이 끝남 */}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreLog;
