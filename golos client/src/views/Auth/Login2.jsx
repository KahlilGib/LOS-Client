import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login2() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        username: username,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:8000/api/login",
        userData,
        { withCredentials: true }
      );

      // SweetAlert untuk login berhasil
      Swal.fire({
        icon: "success",
        title: "Login Success!",
        text: "You have successfully logged in!",
        showConfirmButton: false,
        timer: 1500,
      });

      const cookies = response.data["Set-Cookie"];
      localStorage.setItem("cookies", JSON.stringify(cookies));
      navigate("/");
    } catch (error) {
      // SweetAlert untuk login gagal
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: `${error.response.data.message}`,
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div id="LoginCard">
          <div id="cardContent">
            <div id="login-card-title">
              <div className="login-title">
                <label className="login-title">CREDIT RATING SYSTEM</label>
              </div>
              <div class="login-underline-title"></div>
            </div>
            <form method="post" class="login-form" onSubmit={data}>
              <label
                className="login-form-label"
                for="user-email"
                style={{ paddingTop: "13px" }}
              >
                Username
              </label>
              <input
                id="user-email"
                class="login-form-content"
                type="username"
                name="email"
                placeholder="Enter username ..."
                autocomplete="off"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div class="login-form-border"></div>
              <label for="user-password" style={{ paddingTop: "22px" }}>
                {" "}
                Password
              </label>
              <input
                id="user-password"
                class="login-form-content"
                type="password"
                name="password"
                value={password}
                placeholder="Enter password ..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div class="login-form-border"></div>

              <input id="login-submit-btn" type="submit" name="submit" />
              {/* <a href="#" id="signup">
                Don't have account yet?
              </a> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
