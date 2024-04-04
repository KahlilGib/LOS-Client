import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="badanUsaha">
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Footer />
          <Sidebar />

          <div className="row justify-content-center">
            <div className="col-md-15">
              <span className="position-absolute top-50 start-50">
                <h1>Home</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
