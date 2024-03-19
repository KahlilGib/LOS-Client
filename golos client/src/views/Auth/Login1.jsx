import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar";

export default function Login1() {
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
      navigate("/BadanUsaha");
    } catch (error) {
      // SweetAlert untuk login gagal
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: `User ${error.response.statusText}`,
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };

  return (
    <section className="login-container" id="login-section">
      <div className="col-12 text-center">
        <h1 className="mb-3 mt-5">Credit Rating System</h1>
      </div>
      <div className="align-items-center">
        <div className="form-signin m-auto">
          <form id="login-form" method="post" onSubmit={data}>
            <h1 className="h3 mb-3 display-1 text-center"></h1>
            <span></span>
            <div className="mb-3 mt-3">
              <div className="d-flex justify-content-between">
                <label for="login-username">Username</label>
                <label className="text-danger text-end fw-bold">*</label>
              </div>
              <input
                type="username"
                className="form-control"
                id="login-username"
                placeholder="Enter username address ..."
                autocomplete="off"
                required
                value={username}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <label for="login-password">Password</label>
                <label className="text-danger text-end fw-bold">*</label>
              </div>
              <input
                type="password"
                className="form-control"
                id="login-password"
                placeholder="Enter your password ..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="container d-flex flex-column align-items-center">
              <button
                className="btn btn-lg btn-primary rounded-pill w-100 p-2"
                type="submit"
              >
                Log In
              </button>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
