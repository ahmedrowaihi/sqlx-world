import React from "react";
import "./App.css";
import { sqlxs } from "./sqlx.jsx";
export default function App() {
  return (
    <main>
      <h1>SQLX | @ahmedrowaihi</h1>
      <p>my 1$ dollar version of SQLX for illegal use only</p>
      <div className="code-container">
        {sqlxs.map((Sqlx) => (
          <code>
            <Sqlx />
          </code>
        ))}
      </div>
    </main>
  );
}
