import React, { useState } from "react";

const useStatePractice = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userObject = {
    firstName: firstName,
    email: email,
    password: password
  };

  const handleSubmit = (e) => {
    console.log(userObject);
    e.preventDefault();

    // Clear form fields after submission
    setFirstName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      className="center"
      style={{ textAlign: "center", margin: "auto", maxWidth: "300px" }}
      onSubmit={handleSubmit}
    >
      <div style={{ marginBottom: "10px" }}>
        <label>
          Enter your name:
          <input
            type="text"
            style={{ marginLeft: "5px" }}
            value={firstName}
            placeholder="your name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Enter your email:
          <input
            type="text"
            style={{ marginLeft: "5px" }}
            value={email}
            placeholder="your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Enter your password:
          <input
            type="password"
            style={{ marginLeft: "5px" }}
            value={password}
            placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <hr />
      <button
        type="submit"
        style={{ padding: "5px 10px", color: "blue", backgroundColor: "pink" }}
      >
        Submit
      </button>
    </form>
  );
};

export default useStatePractice;
