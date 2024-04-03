import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Approval/NavbarApproval";
import Sidebar from "../components/Approval/SidebarApproval";
import Card from "../components/Approval/CardComponentApproval";

export default function Approval() {
  const [dataBusiness, setDataBusiness] = useState([]);
  const [dataApplicant, setDataApplicant] = useState([]);
  useEffect(() => {
    const fetchDataApproval = async () => {
      try {
        const endpoints = [
          "http://localhost:8000/api/business/show",
          "http://localhost:8000/api/applicant/show",
        ];

        const requests = endpoints.map((endpoint) =>
          axios.get(endpoint, {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          })
        );

        const responses = await Promise.all(requests);

        setDataBusiness(responses[0].data);
        setDataApplicant(responses[1].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataApproval();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
          <div className="row justify-content-center mt-4">
            <div className="col-md-15">
              <Card title="Approval">
                <table className="table table-striped table-bordered">
                  <thead className="table-success">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">CIF</th>
                      <th scope="col">COMPANY NAME</th>
                      <th scope="col">EXTERNAL RATING</th>
                      <th scope="col">BANDING</th>
                      <th scope="col">TANGGAL BANDING</th>
                      <th scope="col">BANDING OLEH</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataBusiness.map((value, index) => {
                      return (
                        <tr>
                          <td>{value.id}</td>
                          <td>{value.cif}</td>
                          <td>{value.company_name}</td>
                          <td>{value.eternal_rating_company}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button type="button" class="btn btn-success">
                              Action
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
