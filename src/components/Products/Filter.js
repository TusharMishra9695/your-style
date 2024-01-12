import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];
export default function Filter() {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <div>
        <h1>Price </h1>
        <input type="range" className="price_range" />
        <div className="price_select">
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            className="price_multi"
          />
          <span>to</span>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            className="price_multi"
          />
        </div>
        <hr />
      </div>
      <div className="custom_select__div">
        <h1>Select Fruits</h1>
        {options.length > 10 ? (
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        ) : (
          <div>
            {options.map((item, index) => {
              return (
                <div key={index} className="custom_select">
                  <input type="checkbox" />
                  <label>{item.label}</label>
                </div>
              );
            })}
          </div>
        )}
        <hr />
      </div>
    </>
  );
}
