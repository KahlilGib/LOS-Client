import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Footer from "../components/Footer";
import Card from "../components/Approval/CardComponentApproval";

export default function Home() {
  const [dataBusiness, setDataBusiness] = useState([]);
  const [dataApplicant, setDataApplicant] = useState([]);
  const header = [
    "Display Data",
    "Approval Setting ID",
    "Data",
    "Created Date",
    "Created By",
    "Updated Date",
    "Approval Status",
    "Process Date",
    "ACTION",
  ];
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

  const approveData = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/approval/${id}`
      );

      if (response.data.message === "success") {
        Swal.fire({
          title: "Success!",
          text: "Data has been approved successfully.",
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong, please try again later.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error approving data:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong, please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5">
          <div className="row justify-content-center mt-4">
            <div className="col-md-15">
              <Card title="Dashboard">
                <div class="table-responsive mt-3 ">
                  <table className="table table-striped table-bordered table-hover">
                    <thead className="table-success">
                      <tr>
                        <th scope="col " class="text-center">
                          Display Data
                        </th>
                        <th scope="col " class="text-center">
                          Approval Setting ID
                        </th>
                        <th scope="col " class="text-center">
                          Data
                        </th>
                        <th scope="col " class="text-center">
                          Created Date
                        </th>
                        <th scope="col " class="text-center">
                          Created By
                        </th>
                        <th scope="col " class="text-center">
                          Updated Date
                        </th>
                        <th scope="col " class="text-center">
                          Approval Status
                        </th>
                        <th scope="col " class="text-center">
                          Process Date
                        </th>
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
