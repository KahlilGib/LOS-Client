import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function BadanUsaha() {
  const [cif, setCif] = useState("");
  const [establishPlace, setEstablishPlace] = useState("");
  const navigate = useNavigate();

  const data = async (e) => {
    e.preventDefault();

    const cifValue = parseInt(cif);

    const formData = {
      cif: cifValue,
      establishPlace: establishPlace,
    };
    try {
      await axios.post("http://localhost:8000/api/business/create", formData, {
        withCredentials: true,
      });

      // SweetAlert untuk submit berhasil
      Swal.fire({
        icon: "success",
        title: "Create Success!",
        text: "You have successfully created!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(formData);
      navigate("/BadanUsaha");
    } catch (error) {
      // SweetAlert untuk submit gagal
      Swal.fire({
        icon: "error",
        title: "Submit Failed!",
        text: `${error.message}`,
        confirmButtonText: "OK",
      });
      console.log(error);
    }
  };

  return (
    <div className="badanUsaha">
      <Navbar />
      <Sidebar />
      <h1 class="display-5 ml-5 mt-3 text-center">Customer Information</h1>
      <div className="container-IDE">
        {/* <div class="row justify-content-center">
          <div class="col-12 col-md-7"> */}
        <div class="card rounded-3 text-dark bg-light mb-4">
          <div class="card-header border-0 rounded">CUSTOMER INFORMATION</div>
          <div class="card-body">
            <div className="row g-3 p-4">
              <label className=" col-md-2" for="product-category">
                Existing Customer{" "}
              </label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="extCust"
                  id="flexRadioDefault1"
                  value="badan_usaha"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="extCust"
                  id="flexRadioDefault2"
                  value="perorangan"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>

            <div class="border border-3 rounded p-4">
              <div className="row g-3 p-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="badan_usaha"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Badan Usaha
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="perorangan"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Perorangan
                  </label>
                </div>
              </div>

              <form id="post-form" class="row g-3 p-3" onSubmit={data}>
                <div class="mb-4 ">
                  <label className="mb-1" for="CIF-No">
                    CIF No.{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cif"
                    placeholder="Enter CIF No. "
                    autoComplete="off"
                    value={cif}
                    onChange={(e) => setCif(e.target.value)}
                  />
                </div>
                <div class="mb-4">
                  <label className="mb-1" for="product-category">
                    Company Name <span class="text-danger fw-bold">*</span>
                  </label>

                  <div class="mb-4 d-flex align-items-center">
                    <select
                      id="post-type"
                      class="form-select w-25 me-1"
                      required
                    >
                      <option value="" selected disabled>
                        -- Select Company Category --
                      </option>
                      <option value="PT">PT</option>
                      <option value="CV">CV</option>
                    </select>

                    <input
                      type="text"
                      class="form-control"
                      id="job-title"
                      placeholder="Enter Company Name "
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <label className="mb-1" for="product-category">
                    Company Type <span class="text-danger fw-bold">*</span>
                  </label>
                  <select id="post-type" class="form-select" required>
                    <option value="" selected disabled>
                      -- Select Company Type --
                    </option>
                    <option value="swasta">Badan Usaha Swasta</option>
                    <option value="bumn">Badan Usaha Milik Negara</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label className="mb-1" for="estabDate">
                    Establish Date <span class="text-danger fw-bold">*</span>
                  </label>{" "}
                  <br />
                  <input type="date" id="estabDate" name="estabDate" />
                </div>

                <div class="mb-4">
                  <label className="mb-1" for="estabPlace">
                    Establish Place <span class="text-danger fw-bold">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control rounded"
                    id="estabPlace"
                    placeholder="Enter Established Place"
                    autoComplete="off"
                    required
                    value={establishPlace}
                    onChange={(e) => setEstablishPlace(e.target.value)}
                  />
                </div>

                <div class="mb-4">
                  <label className="mb-1" for="companyAddress">
                    Company Address <span class="text-danger fw-bold">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="companyAddress"
                    placeholder="Enter Company Address"
                    autoComplete="off"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label className="mb-1" for="District">
                    District{" "}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="District"
                    placeholder="Enter District"
                    autoComplete="off"
                    required
                  />
                </div>

                <label for="City">City </label>
                <div class="input-group mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="City"
                    placeholder="Enter City"
                    autoComplete="off"
                    required
                  />{" "}
                </div>

                <label for="ZipCode">Zip Code </label>
                <div class="input-group mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="ZipCode"
                    placeholder="Enter Zip Code"
                    autoComplete="off"
                    required
                  />

                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">
                      Search
                    </button>
                  </div>
                </div>

                <div class="row mt-5 mb-4">
                  <div class="col-6">
                    <a
                      class="btn btn-custom-color btn-lg btn-danger rounded-pill w-100 p-2"
                      id="cancel-form"
                      href="#"
                    >
                      Cancel
                    </a>
                  </div>
                  <div class="col-6">
                    <button
                      class="btn btn-custom-color btn-lg btn-danger rounded-pill w-100 p-2"
                      type="submit"
                      id="submit-form"
                      href="#"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      //{" "}
    </div>
    // </div>
  );
}
