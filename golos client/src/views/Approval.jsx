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

  const handleApprove = async (id) => {
    try {
      // Kirim permintaan ke API untuk menyetujui dengan ID yang diberikan
      const response = await axios.post(
        `http://localhost:8000/api/approval/${id}`
      );
      // Tampilkan pesan sukses jika permintaan berhasil
      Swal.fire("Success!", "Approval has been updated.", "success");
      // Lakukan pembaharuan data jika diperlukan
      // Misalnya, Anda dapat memanggil kembali fetchDataApproval() untuk memperbarui data
    } catch (error) {
      // Tangani kesalahan jika permintaan gagal
      console.error("Error updating approval:", error);
      // Tampilkan pesan kesalahan kepada pengguna
      Swal.fire("Error!", "Failed to update approval.", "error");
    }
  };

  const handleReject = async (id) => {
    try {
      // Kirim permintaan ke API untuk menyetujui dengan ID yang diberikan
      const response = await axios.put(
        `http://localhost:8000/api/approval/${id}/reject`
      );
      // Tampilkan pesan sukses jika permintaan berhasil
      Swal.fire("Success!", "Data has been rejected.", "success");
      // Lakukan pembaharuan data jika diperlukan
      // Misalnya, Anda dapat memanggil kembali fetchDataApproval() untuk memperbarui data
    } catch (error) {
      // Tangani kesalahan jika permintaan gagal
      console.error("Error updating approval:", error);
      // Tampilkan pesan kesalahan kepada pengguna
      Swal.fire("Error!", "Failed to reject approval.", "error");
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
                            <td>{value.approval_setting_id}</td>
                            <td>{value.data}</td>
                            <td>{value.created_date}</td>
                            <td>{value.created_by}</td>
                            <td>{value.updated_date}</td>
                            <td>{value.approval_status}</td>
                            <td>{value.process_date}</td>
                            <td>
                              <div class="btn-group" role="group">
                                <div className="mx-1">
                                  <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => handleReject(value.id)}
                                  >
                                    Reject
                                  </button>
                                </div>
                                <div className="mx-1">
                                  <button
                                    type="button"
                                    class="btn btn-success"
                                    onClick={() => handleApprove(value.id)}
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
