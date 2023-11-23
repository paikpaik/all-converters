import { useState } from "react";
import "./App.css";
import Time from "./times/Time";

function App() {
  const [index, setIndex] = useState("select");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <>
      <h1>All Converters In The World</h1>
      <select value={index} onChange={onSelect}>
        <option value="select">Select your units</option>
        <option value="0">길이</option>
        <option value="1">데이터 전송 속도</option>
        <option value="2">데이터 크기</option>
        <option value="3">면적</option>
        <option value="4">부피</option>
        <option value="5">속도</option>
        <option value="6">시간</option>
        <option value="7">압력</option>
        <option value="8">에너지</option>
        <option value="9">연비</option>
        <option value="10">온도</option>
        <option value="11">주파수</option>
        <option value="12">질량</option>
        <option value="13">평면각</option>
      </select>
      <hr />
      {index === "select" ? "Please select your units" : null}
      {index === "0" ? "길이" : null}
      {index === "1" ? "데이터 전송 속도" : null}
      {index === "2" ? "데이터 크기" : null}
      {index === "3" ? "면적" : null}
      {index === "4" ? "부피" : null}
      {index === "5" ? "속도" : null}
      {index === "6" ? <Time /> : null}
      {index === "7" ? "압력" : null}
      {index === "8" ? "에너지" : null}
      {index === "9" ? "연비" : null}
      {index === "10" ? "온도" : null}
      {index === "11" ? "주파수" : null}
      {index === "12" ? "질량" : null}
      {index === "13" ? "평면각" : null}
      <p className="read-the-docs">
        Click on the Options and Enjoy Our Converters
      </p>
    </>
  );
}

export default App;
