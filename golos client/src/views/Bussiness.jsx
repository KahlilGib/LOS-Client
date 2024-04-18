import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Card from "../components/Approval/CardComponentApproval";

export default function Bussiness() {
  const [dataBusiness, setDataBusiness] = useState([]);
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

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/business/delete/${id}`,
        {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
        setDataBusiness(dataBusiness.filter((data) => data.id !== id));
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data.message,
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
              <Card title="Business">
                <div class="table-responsive mt-3 ">
                  <table className="table table-striped table-bordered table-hover">
                    <thead className="table-success">
                      <tr>
                        <th scope="col " class="text-center">
                          Company Name
                        </th>
                        <th scope="col " class="text-center">
                          Establish Place
                        </th>
                        <th scope="col " class="text-center">
                          Company Address
                        </th>
                        <th scope="col " class="text-center">
                          Business Type
                        </th>
                        <th scope="col " class="text-center">
                          Akta Pendirian
                        </th>
                        <th scope="col " class="text-center">
                          No. Telepon
                        </th>
                        <th scope="col " class="text-center">
                          NPWP
                        </th>
                        <th scope="col " class="text-center">
                          Contact Person
                        </th>

                        <th scope="col " class="text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataBusiness.map((value, index) => {
                        return (
                          <tr>
                            <td>
                              {value.company_first_name}. {value.company_name}
                            </td>
                            <td>{value.establish_place}</td>
                            <td>{value.company_address}</td>
                            <td>{value.business_type}</td>
                            <td>{value.akta_pendirian}</td>
                            <td>{value.no_telepon}</td>
                            <td>{value.npwp}</td>
                            <td>{value.contact_person}</td>
                            <td>
                              <div class="btn-group" role="group">
                                <div className="mx-1">
                                  <button type="button" class="btn btn-success">
                                    Edit
                                  </button>
                                </div>

                                <div className="mx-1">
                                  <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={() => handleDelete(value.id)}
                                  >
                                    Delete
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
