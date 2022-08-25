import React from "react";
import "./Currencycomponent.css";

const Currencycomponent = (props) => {
  const {
    currencyChoice,
    selectCurrency,
    changeCurrency,
    amount,
    onChangeAmount,
  } = props;
  //   const { currencyChoice } = props;

  return (
    <div className="currency">
      <select value={selectCurrency} onChange={changeCurrency}>
        {currencyChoice.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>
      <input type="number" value={amount} onChange={onChangeAmount} />
    </div>
  );
};

export default Currencycomponent;
