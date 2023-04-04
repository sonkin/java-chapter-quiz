import React, { useState, useEffect } from "react";
import { data } from "./test";
import "./UserTable.css";

const UserTable = ({ currentUserEmail }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserPosition, setCurrentUserPosition] = useState(-1);

  useEffect(() => {
    fetch("https://jquiz-athjd4btb4c0fadd.z01.azurefd.net/users")
      // new Promise((resolve) => setTimeout(() => resolve(data), 100))
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data
          .map((u, index) => ({ ...u, index }))
          .sort((a, b) => {
            const diff = b.score - a.score;
            if (diff === 0) return a.index - b.index;
            return diff + 0;
          })
          .reduce((accumulator, currentValue) => {
            const existingIndex = accumulator.findIndex(
              (item) => item.email === currentValue.email
            );
            if (existingIndex === -1) {
              currentValue.attempts = 1;
              accumulator.push(currentValue);
            } else {
              accumulator[existingIndex].attempts++;
            }
            return accumulator;
          }, []);
        setUsers(sortedData);

        const currentUserIndex = sortedData.findIndex(
          (user) => user.email === currentUserEmail
        );
        if (currentUserIndex > -1) {
          setCurrentUser(sortedData[currentUserIndex]);
          setCurrentUserPosition(currentUserIndex + 1);
        }
      });
  }, [currentUserEmail]);

  return (
    <div>
      {currentUser && <h2>Your position in rating: {currentUserPosition}</h2>}
      <p>You can repeat the test to improve your position.</p>
      <table className="user-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Score</th>
            <th>Attempts</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              className={user.email === currentUserEmail ? "current-user" : ""}
            >
              <td>{index + 1}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.username}</a>
              </td>
              <td>{user.score}</td>
              <td>{user.attempts}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "30px", fontSize: "8pt" }}>
        In case of the same score, the participant who got the result earlier
        has a higher position. Attempts shows how many times you tried.
      </div>
    </div>
  );
};

export default UserTable;
