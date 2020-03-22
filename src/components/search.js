import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { GithubContext } from "../context/github/githubContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);
  const onSubmit = event => {
    if (event.key !== "Enter") {
      return;
    }
    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show("Enter smth");
      github.clearUsers();
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
