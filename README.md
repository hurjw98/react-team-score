# 📌 팀 점수 관리, TOY 프로젝트

![react_team_score_mainpage](https://github.com/hurjw98/react-team-score/assets/157206299/8f370866-fba3-480c-ae7b-316c7b7bdba8)

<br/>
<br/>

## 1. Project

### 1-1. Project Description

팀 점수 관리 프로젝트는 팀별로 점수를 관리하고, 점수 변경 기록을 확인할 수 있는 웹 페이지입니다. 사용자들은 점수를 추가하거나 삭제할 수 있으며, 각 팀원의 점수와 전체 팀 점수를 실시간으로 확인할 수 있습니다. 또한, 점수 변경 기록을 확인하고 필요시 삭제할 수 있습니다.

<br/>

### 1-2. Project Duration & Participants

- 2023-5-26 ~ 2023-5-28
- 개인 프로젝트 (1인)

<br/>
<br/>

## 2. Skills

![JAVASCRIPT](https://img.shields.io/badge/JavaScript-f6e158?style=for-the-badge&logo=JavaScript&logoColor=ffffff)
![REACT](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=ffffff)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff)
![Git](https://img.shields.io/badge/Git-f05032?style=for-the-badge&logo=git&logoColor=ffffff)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<br/>
<br/>

## 3. Main Features

1. [점수 변경](#3-1-score-change)
2. [점수 기록 확인 및 삭제](#3-2-view-and-delete-score-log)
3. [점수 기록 전체 삭제](#3-3-clear-all-score-logs)

<br/>

### 3-1. Score Change

사용자는 점수 변경 값을 선택하고, 해당 값을 팀원에게 적용하여 점수를 변경할 수 있습니다. 점수는 양수와 음수를 선택할 수 있으며, 선택된 값에 따라 색상이 다르게 표시됩니다.

<br>

![score01](https://github.com/hurjw98/react-team-score/assets/157206299/7c1d1a1a-0b2c-476b-ae27-6552b54fa44f)

<br>

```jsx
import React from "react";
import style from "../css/ScoreChange.module.css";

const ScoreChange = ({ onScoreSelect, selectedScore }) => {
  const handleChange = (e) => {
    onScoreSelect(parseInt(e.target.value));
  };

  return (
    <div className={style.scoreChange}>
      <div className={style.description}>점수 변경 값을 선택하세요:</div>
      <select className={style.selector} onChange={handleChange} value={selectedScore}>
        {[-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
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
```

<br/>

### 3-2. View and Delete Score Log
사용자는 점수 변경 기록을 확인하고 개별 기록을 삭제할 수 있습니다. 기록은 팀명, 팀원, 변경된 점수, 날짜 및 시간으로 구성되어 있습니다.

<br>

![score02](https://github.com/hurjw98/react-team-score/assets/157206299/91148649-1fa1-4167-9330-55f3632801ee)

<br>

```jsx
import React from "react";
import style from "../css/ScoreLog.module.css";

const ScoreLog = ({ log, onRemoveLog, onClearLogs }) => {
  return (
    <div className={style.scoreLog}>
      <div className={style.logHeader}>
        <h2>점수 변경 기록</h2>
        <button className={style.clearButton} onClick={onClearLogs}>전체 삭제</button>
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
              <td style={{ backgroundColor: entry.change < 0 ? "lightblue" : entry.change > 0 ? "lightcoral" : "lightgray" }}>
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
```

<br/>

### 3-3. Clear All Score Logs
사용자는 모든 점수 변경 기록을 삭제할 수 있습니다. 이때, 모든 기록이 삭제되며, 삭제된 기록에 해당하는 점수 변경도 복구됩니다.

<br>

![score03](https://github.com/hurjw98/react-team-score/assets/157206299/d6ffcf2e-e28f-4ad9-80ae-dec8f5f612cd)

<br>

```jsx
import React from "react";
import style from "../css/ScoreLog.module.css";

const ScoreLog = ({ log, onRemoveLog, onClearLogs }) => {
  return (
    <div className={style.scoreLog}>
      <div className={style.logHeader}>
        <h2>점수 변경 기록</h2>
        <button className={style.clearButton} onClick={onClearLogs}>전체 삭제</button>
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
              <td style={{ backgroundColor: entry.change < 0 ? "lightblue" : entry.change > 0 ? "lightcoral" : "lightgray" }}>
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
```

<br/>
<br/>

## 4. UI/UX

### 4-1. Responsive Web
팀 점수 관리 웹 페이지는 화면 크기에 따라 유동적으로 사이즈가 조절됩니다.

<br>

![score04](https://github.com/hurjw98/react-team-score/assets/157206299/1b133fdd-b8ab-4010-a15a-694e47796a5a)

<br>

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .scoreChangeContainer, .teamButtons, .scoreLog {
    width: 100%;
    margin-bottom: 20px;
  }
}
```
<br/>
<br/>


## 5. 실행 방법
 <br/>
 
(1) visual studio code 설치 <br/> <br/>
(2) node.js 설치 <br/> <br/>
(3) visual studtio code에서 폴더 열기 <br/> <br/>
(4) 터미널에서 npm install 입력 <br/> <br/>
(5) 터미널에서 npm run dev 입력 (입력하면 나오는 링크 클릭)

<br/>
<br/>

[맨위로 이동하기](#-팀-점수-관리-toy-프로젝트)





