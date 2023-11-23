import { useState } from "react";

const Time = () => {
  const [amount, setAmount] = useState(1);
  const [fromUnit, setFromUnit] = useState(5); // 기본값: 시간
  const [toUnit, setToUnit] = useState(4); // 기본값: 분

  const timeUnits = [
    "나노초",
    "마이크로초",
    "밀리초",
    "초",
    "분",
    "시간",
    "일",
    "주",
    "개월",
    "년",
    "연대",
    "세기",
  ];

  const conversionFactors = [
    1e9, // 나노초
    1e6, // 마이크로초
    1e3, // 밀리초
    1, // 초
    1 / 60, // 분
    1 / 3600, // 시간
    1 / 86400, // 일
    1 / 604800, // 주
    1 / 2629746, // 개월 (평균값)
    1 / 31556952, // 년 (평균값)
    1 / 315569520, // 연대 (10년)
    1 / 3155695200, // 세기 (100년)
  ];

  const convertTime = () => {
    const inputValue = parseFloat(amount);
    const convertedValue =
      (inputValue * conversionFactors[toUnit]) / conversionFactors[fromUnit];
    return Math.round(convertedValue);
  };

  return (
    <div>
      <h1>Time</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(parseInt(e.target.value))}
        >
          {timeUnits.map((unit, index) => (
            <option key={index} value={index}>
              {unit}
            </option>
          ))}
        </select>
        <h2>=</h2>
        <input type="number" value={convertTime()} readOnly />
        <select
          value={toUnit}
          onChange={(e) => setToUnit(parseInt(e.target.value))}
        >
          {timeUnits.map((unit, index) => (
            <option key={index} value={index}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Time;
