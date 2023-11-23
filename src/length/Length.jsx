import { useState } from "react";

const Length = () => {
  const [amount, setAmount] = useState(1);
  const [fromUnit, setFromUnit] = useState(1); // 기본값: 미터
  const [toUnit, setToUnit] = useState(2); // 기본값: 센티미터

  const lengthUnits = [
    "킬로미터",
    "미터",
    "센티미터",
    "밀리미터",
    "마이크로미터",
    "나노미터",
    "마일",
    "야드",
    "피트",
    "인치",
    "해리",
  ];

  const conversionFactors = [
    1, // 킬로미터
    1000, // 미터
    100000, // 센티미터
    1000000, // 밀리미터
    1e9, // 마이크로미터
    1e12, // 나노미터
    0.000621371, // 마일
    1094, // 야드
    3281, // 피트
    39370, // 인치
    0.000189394, // 해리
  ];

  const convertLength = () => {
    const inputValue = parseFloat(amount);
    const convertedValue =
      (inputValue * conversionFactors[toUnit]) / conversionFactors[fromUnit];
    return convertedValue;
  };

  return (
    <div>
      <h1>Length</h1>
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
          {lengthUnits.map((unit, index) => (
            <option key={index} value={index}>
              {unit}
            </option>
          ))}
        </select>
        <h2>=</h2>
        <input type="number" value={convertLength()} readOnly />
        <select
          value={toUnit}
          onChange={(e) => setToUnit(parseInt(e.target.value))}
        >
          {lengthUnits.map((unit, index) => (
            <option key={index} value={index}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Length;
