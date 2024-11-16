import { useState } from "react";
import data from "./data.js";

export default function Accordian() {
  const [selected, setSelected] = useState(0);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const onSingleSelect = (selectedId) => {
    setSelected(selectedId === selected ? null : selectedId);
  };

  const onMultiSelect = (selectedId) => {
    let cpyMultiple = [...multipleSelected];

    const findIndexOfCurrentId = cpyMultiple.indexOf(selectedId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(selectedId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultipleSelected(cpyMultiple);
  };

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
          {enableMultiSelect
            ? "Now, Multiple accordian is selectable"
            : "Now, Single accordian is selectable"}
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  className="title"
                  onClick={
                    enableMultiSelect
                      ? () => onMultiSelect(dataItem.id)
                      : () => onSingleSelect(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>
                    <b>+</b>
                  </span>
                </div>

                {enableMultiSelect
                  ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                      <div className="answer">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="answer">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
}
