import { useState } from "react";

const PlayerInput = ({ id, label, onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id, username);
  };
  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor={label}>
        {label}
        <input
          id={label}
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
      </label>
      <button className="button" type="submit" disabled={!username.length}>
        Submit
      </button>
    </form>
  );
};

export default PlayerInput;
