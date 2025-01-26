import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // window.alert("This is a test website. Do not enter your real credentials");
  }, []);

  return (
    <div className="App">
      <div id="top-bar" />
      <div id="sign-in-body">
        <header>
          <svg viewBox="0 0 780 250" aria-hidden="true">
            <path
              fill="#231F20"
              d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
              stroke-width="5"
              stroke="#f7f7f7"
            ></path>
          </svg>
        </header>

        <div id="form-body">
          <form id="login" method="POST">
            <h1>Sign In</h1>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div>
              <div id="password-label-container">
                <label>Password</label>
                <a href="https://www.npmjs.com/forgot">Forgot Password?</a>
              </div>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
