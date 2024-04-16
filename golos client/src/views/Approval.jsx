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
          "http://localhost:8000/api/approval/show",
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
                <div class="table-responsive">
                  <table className="table table-striped table-bordered table-hover">
                    <thead className="table-success">
                      <tr>
                        <th scope="col">Display Data</th>
                        <th scope="col">Approval Setting ID</th>
                        <th scope="col">Data</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Created By</th>
                        <th scope="col">Updated Date</th>
                        <th scope="col">Approval Status</th>
                        <th scope="col">Process Date</th>
                        <th scope="col">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataBusiness.map((value, index) => {
                        return (
                          <tr>
                            <td>{value.display_data}</td>
                            <td>{value.approval_setting_id}</td>
                            <td>{value.data}</td>
                            <td>{value.created_date}</td>
                            <td>{value.created_by}</td>
                            <td>{value.updated_date}</td>
                            <td>{value.approval_status}</td>
                            <td>{value.process_date}</td>
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
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
