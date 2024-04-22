import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Approval/NavbarApproval";
import Sidebar from "../components/Approval/SidebarApproval";
import Card from "../components/Approval/CardComponentApproval";
import TableComponent from "../components/TableComponent";

export default function Approval() {
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
      const getCookie = (name) => {
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith(name))
          ?.split("=")[1];
        return cookieValue ? decodeURIComponent(cookieValue) : null;
      };

      const token = getCookie("jwt");

      const response = await axios.put(
        `http://localhost:8000/api/approval/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            // Kirim token sebagai otorisasi
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // Aktifkan penggunaan cookie
        }
      );

      Swal.fire({
        title: "Success!",
        text: "Data has been approved successfully.",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error approving data:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong, please try again later.",
        icon: "error",
      });
    }
  };

  const rejectData = async (id) => {
    try {
      const getCookie = (name) => {
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith(name))
          ?.split("=")[1];
        return cookieValue ? decodeURIComponent(cookieValue) : null;
      };

      const token = getCookie("jwt");

      const response = await axios.put(
        `http://localhost:8000/api/approval/${id}/reject`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            // Kirim token sebagai otorisasi
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // Aktifkan penggunaan cookie
        }
      );

      Swal.fire({
        title: "Success!",
        text: "Data has been rejected successfully.",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
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
              <Card title="Approval">
                <div class="table-responsive mt-3 ">
                  <table className="table table-striped table-bordered table-hover">
                    <thead className="table-success">
                      <tr>
                        <th scope="col " class="text-center">
                          Display Data
                        </th>

                        <th scope="col " class="text-center">
                          Created Date
                        </th>
                        <th scope="col " class="text-center">
                          Created By
                        </th>

                        <th scope="col " class="text-center">
                          Approval Status
                        </th>
                        <th scope="col " class="text-center">
                          Description
                        </th>
                        <th scope="col" class="text-center">
                          ACTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataBusiness.map((value, index) => {
                        return (
                          <tr>
                            <td>{value.display_data}</td>
                            <td>{value.created_date}</td>
                            <td>{value.created_by}</td>

                            <td>{value.approval_status}</td>
                            <td>{value.description}</td>
                            <td>
                              <div class="btn-group" role="group">
                                <div className="mx-1">
                                  <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => rejectData(value.id)}
                                  >
                                    Reject
                                  </button>
                                </div>
                                <div className="mx-1">
                                  <button
                                    type="button"
                                    class="btn btn-success"
                                    onClick={() => approveData(value.id)}
                                  >
                                    Approve
                                  </button>
                                </div>
                              </div>
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
