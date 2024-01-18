import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { getAPI } from "../../utils/apiCalls";
import { useNavigate } from "react-router-dom";

export default function Filter() {
  const [rerender, setrerender] = useState(false);
  const [selected, setSelected] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    if (!selected) {
      handleFilter();
    }
    handleNavigate();
  }, [rerender]);
  function handleNavigate() {
    let url = "";
    selected &&
      selected.map((value) => {
        value.list.map((inside) => {
          if (inside.checked) {
            url += `${inside.name}=${inside.value}&`;
          }
        });
      });
    navigation(`${window.location.pathname}?${url}`);
  }

  function handleFilter() {
    const url = `${process.env.REACT_APP_URL}/filters`;
    getAPI(url).then((res) => {
      res &&
        res.map((value) => {
          value.list = value.list.map((inside, id) => ({
            id: id,
            checked: false,
            value: inside,
            name: value.heading,
          }));
        });
      setSelected(res);
    });
  }

  function handleCheck(cvalue, id) {
    selected[id].list.map((items) => {
      if (items.id == cvalue.id) {
        items.checked = !items.checked;
      }
    });
    setrerender(!rerender);
  }
  return (
    <>
      {/* <div>
        <h1>Price Custom</h1>
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
      </div> */}
      {selected &&
        selected.map((data, ids) => {
          let { heading, list } = data;
          return (
            <>
              <div className="custom_select__div" key={ids}>
                <h1>{heading}</h1>
                <div className="custome_select__hgt">
                  {list &&
                    list.map((item, index) => {
                      return (
                        <div key={index} className="custom_select">
                          <input
                            type="checkbox"
                            name={item.name}
                            id={index}
                            checked={item.checked}
                            onChange={() => handleCheck(item, ids)}
                          />
                          <label>{item.value}</label>
                        </div>
                      );
                    })}
                </div>
              </div>
              <hr />
            </>
          );
        })}
    </>
  );
}
