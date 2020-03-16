import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);
  const onSubmit = event => {
    if (event.key !== "Enter") {
      return;
    }
    if (value.trim()) {
      show("Request is made");
    } else {
      show("Enter smth");
    }
  };
  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Введите ник"
        className="form-control"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyDown={onSubmit}
      />
    </div>
  );
};
