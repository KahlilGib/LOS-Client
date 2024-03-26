import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";

export default function InitialDataEntry() {
  const [cif, setCif] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyFirstName, setCompanyFirstName] = useState([]);
  const [companyTypes, setCompanyTypes] = useState([]);
  const [establishPlace, setEstablishPlace] = useState("");
  const [establishDate, setEstablishDate] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState([]);
  const [eternalRating, setEternalRating] = useState("");
  const [ratingClass, setRatingClass] = useState([]);
  const [ratingDate, setRatingDate] = useState("");
  const [businessType, setBusinessType] = useState([]);
  const [aktaPendirian, setAktaPendirian] = useState("");
  const [kodeListingBursa, setKodeListingBursa] = useState([]);
  const [tanggalListingBursa, setTanggalListingBursa] = useState("");
  const [tglTerbit, setTglTerbit] = useState("");
  const [aktaPerubahan, setAktaPerubahan] = useState("");
  const [tglPerubahan, setTglPerubahan] = useState("");
  const [namaNotaris, setNamaNotaris] = useState("");
  const [jumlahKaryawan, setJumlahKaryawan] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [noFax, setNoFax] = useState("");
  const [npwp, setNpwp] = useState("");
  const [tdp, setTdp] = useState("");
  const [tglPenerbitan, setTglPenerbitan] = useState("");
  const [tglJatuhTempo, setTglJatuhTempo] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [selectedCompanyFirstName, setSelectedCompanyFirstName] = useState("");
  const [selectedCompanyTypes, setSelectedCompanyTypes] = useState("");
  const [selectedAddressTypes, setSelectedAddressTypes] = useState("");
  const [selectedRatingClass, setSelectedRatingClass] = useState("");
  const [selectedKodeBursa, setSelectedKodeBursa] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataBadanUsaha = async () => {
      try {
        const endpoints = [
          "http://localhost:8000/api/business/showcompanytype",
          "http://localhost:8000/api/business/showcompanyfirstname",
          "http://localhost:8000/api/business/showbusinessaddresstype",
          "http://localhost:8000/api/business/showratingclass",
          "http://localhost:8000/api/business/showkodebursa",
          "http://localhost:8000/api/business/showbusinesstype",
        ];

        const requests = endpoints.map((endpoint) =>
          axios.get(endpoint, {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          })
        );

        const responses = await Promise.all(requests);

        setCompanyTypes(responses[0].data);
        setCompanyFirstName(responses[1].data);
        setAddressType(responses[2].data);
        setRatingClass(responses[3].data);
        setKodeListingBursa(responses[4].data);
        setBusinessType(responses[5].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataBadanUsaha();
  }, []);

  const data = async (e) => {
    e.preventDefault();

    try {
      const formDataBadanUsaha = {
        cif: cif,
        establish_place: establishPlace,
        company_first_name: selectedCompanyFirstName,
        company_name: companyName,
        company_type: selectedCompanyTypes,
        establishment_date: establishDate,
        company_address: companyAddress,
        district: district,
        city: city,
        zip_code: zipCode,
        address_type: selectedAddressTypes,
        eternal_rating_company: eternalRating,
        rating_class: selectedRatingClass,
        rating_date: ratingDate,
        business_type: selectedBusinessType,
        akta_pendirian: aktaPendirian,
        listing_bursa_code: selectedKodeBursa,
        listing_bursa_date: tanggalListingBursa,
        tgl_terbit: tglTerbit,
        akta_last_change: aktaPerubahan,
        last_change_date: tglPerubahan,
        notaris_name: namaNotaris,
        jumlah_karyawan: jumlahKaryawan,
        no_telp: noTelepon,
        no_fax: noFax,
        npwp: npwp,
        tdp: tdp,
        tgl_penerbitan: tglPenerbitan,
        tgl_jatuh_tempo: tglJatuhTempo,
        contact_person: contactPerson,
      };

      console.log("Data Form:", formDataBadanUsaha);

      await axios.post(
        "http://localhost:8000/api/business/create",
        formDataBadanUsaha,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      Swal.fire({
        icon: "success",
        title: "Create Success!",
        text: "You have successfully created!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(formDataBadanUsaha);
      navigate("/initialdataentry");
    } catch (error) {
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
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1 className="display-5 mt-3 text-center">Customer Information</h1>
            <div className="row justify-content-center">
              <div className="col-md-15">
                <CardComponent title="CUSTOMER INFORMATION">
                  <div className="row p-4">
                    <div className="row-xl-4">
                      <label htmlFor="product-category" className="form-label">
                        Existing Customer
                      </label>
                    </div>
                    <div className="col-md-10">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="extCust"
                          id="flexRadioDefault1"
                          value="badan_usaha"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="extCust"
                          id="flexRadioDefault2"
                          value="perorangan"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="border-ide border-3 rounded p-4">
                    <div className="row g-3 p-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio-bupo"
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
                          name="radio-bupo"
                          id="flexRadioDefault2"
                          value="perorangan"
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Perorangan
                        </label>
                      </div>
                    </div>

                    <FormComponent onSubmit={data}>
                      {/* Form Fields */}
                      {/* Example input field */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-4">
                            <label className="mb-1" htmlFor="CIF-No">
                              CIF No.
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="cif"
                              placeholder="Enter CIF No."
                              autoComplete="off"
                              value={cif}
                              onChange={(e) => setCif(e.target.value)}
                            />
                          </div>

                          <div className="mb-4">
                            <label className="mb-1" for="product-category">
                              Company Name{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>

                            <div class="mb-4 d-flex align-items-center">
                              <select
                                id="companySelect"
                                class="form-select w-25 me-1"
                                onChange={(e) =>
                                  setSelectedCompanyFirstName(e.target.value)
                                }
                                value={selectedCompanyFirstName}
                                required
                              >
                                <option value="" selected disabled>
                                  -- Select Company Category --
                                </option>
                                {companyFirstName.map((name, index) => (
                                  <option key={index} value={name}>
                                    {name}
                                  </option>
                                ))}
                              </select>

                              <input
                                type="text"
                                class="form-control"
                                id="job-title"
                                placeholder="Enter Company Name "
                                autoComplete="off"
                                onChange={(e) => setCompanyName(e.target.value)}
                                value={companyName}
                                required
                              />
                            </div>
                          </div>

                          <div className="mb-4">
                            <label className="mb-1" for="product-category">
                              Company Type{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>
                            <select
                              id="post-type"
                              class="form-select"
                              required
                              onChange={(e) =>
                                setSelectedCompanyTypes(e.target.value)
                              }
                              value={selectedCompanyTypes}
                            >
                              <option value="" selected disabled>
                                -- Select Company Type --
                              </option>
                              {companyTypes.map((name, index) => (
                                <option key={index} value={name}>
                                  {name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="estabDate">
                              Establish Date{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="form-control rounded"
                              id="estabDate"
                              name="estabDate"
                              value={establishDate}
                              onChange={(e) => setEstablishDate(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="estabPlace">
                              Establish Place{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="estabPlace"
                              placeholder="Enter Established Place"
                              autoComplete="off"
                              required
                              value={establishPlace}
                              onChange={(e) =>
                                setEstablishPlace(e.target.value)
                              }
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="companyAddress">
                              Company Address{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="companyAddress"
                              placeholder="Enter Company Address"
                              autoComplete="off"
                              value={companyAddress}
                              onChange={(e) =>
                                setCompanyAddress(e.target.value)
                              }
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
                              value={district}
                              onChange={(e) => setDistrict(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="City">
                              City <span class="text-danger fw-bold">*</span>
                            </label>
                            <div class="input-group mb-4">
                              <input
                                type="text"
                                class="form-control"
                                id="City"
                                placeholder="Enter City"
                                autoComplete="off"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                              />{" "}
                            </div>
                          </div>

                          <div class="mb-4">
                            <label for="ZipCode">
                              Zip Code{" "}
                              <span class="text-danger fw-bold">*</span>{" "}
                            </label>
                            <div class="input-group mb-4">
                              <input
                                type="text"
                                class="form-control"
                                id="ZipCode"
                                placeholder="Enter Zip Code"
                                autoComplete="off"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                required
                              />

                              {/* <div class="input-group-append">
                                <button
                                  class="btn btn-custom-color btn-danger text-white"
                                  type="button"
                                >
                                  Search
                                </button>
                              </div> */}
                            </div>
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="addressType">
                              Address Type{" "}
                            </label>
                            <select
                              id="addressType"
                              class="form-select"
                              value={selectedAddressTypes}
                              onChange={(e) =>
                                setSelectedAddressTypes(e.target.value)
                              }
                            >
                              <option value="" disabled>
                                -- Select Address Type --
                              </option>
                              {addressType.map((name, index) => (
                                <option key={index} value={name}>
                                  {name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="externalRating">
                              External Rating Company{" "}
                            </label>
                            <select
                              id="externalRating"
                              class="form-select"
                              value={eternalRating}
                              onChange={(e) => setEternalRating(e.target.value)}
                            >
                              <option value="" disabled>
                                -- Select External Rating --
                              </option>
                              <option value="AAA">AAA</option>
                              <option value="AA">AA</option>
                              <option value="A">A</option>
                              {/* Add more options as needed */}
                            </select>
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="ratingClass">
                              Rating Class{" "}
                            </label>
                            <select
                              id="ratingClass"
                              class="form-select"
                              value={selectedRatingClass}
                              onChange={(e) =>
                                setSelectedRatingClass(e.target.value)
                              }
                            >
                              <option value="" disabled>
                                -- Select Rating Class --
                              </option>
                              {ratingClass.map((name, index) => (
                                <option key={index} value={name}>
                                  {name}
                                </option>
                              ))}
                              {/* Add more options as needed */}
                            </select>
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="ratingDate">
                              Rating Date{" "}
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="form-control rounded"
                              id="ratingDate"
                              name="ratingDate"
                              value={ratingDate}
                              onChange={(e) => setRatingDate(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="kodeListingBursa">
                              Kode Listing Bursa{" "}
                            </label>
                            <select
                              id="kodeListingBursa"
                              class="form-select"
                              value={selectedKodeBursa}
                              onChange={(e) =>
                                setSelectedKodeBursa(e.target.value)
                              }
                            >
                              <option value="" disabled>
                                -- Select Kode Listing Bursa --
                              </option>
                              {kodeListingBursa.map((name, index) => (
                                <option key={index} value={name}>
                                  {name}
                                </option>
                              ))}
                              {/* Add more options as needed */}
                            </select>
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="tanggalListingBursa">
                              Tanggal Listing Bursa{" "}
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="form-control rounded"
                              id="tanggalListingBursa"
                              name="tanggalListingBursa"
                              value={tanggalListingBursa}
                              onChange={(e) =>
                                setTanggalListingBursa(e.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div class="mb-4">
                            <label className="mb-1" for="businessType">
                              Business Type{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>
                            <select
                              id="businessType"
                              class="form-select"
                              value={selectedBusinessType}
                              onChange={(e) =>
                                setSelectedBusinessType(e.target.value)
                              }
                              required
                            >
                              <option value="" disabled>
                                -- Select Business Type --
                              </option>
                              {businessType.map((name, index) => (
                                <option key={index} value={name}>
                                  {name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="aktaPendirian">
                              Akta Pendirian{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>
                            <input
                              type="text"
                              id="aktaPendirian"
                              class="form-control"
                              placeholder="Enter Akta Pendirian"
                              autoComplete="off"
                              value={aktaPendirian}
                              onChange={(e) => setAktaPendirian(e.target.value)}
                              required
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="tglTerbit">
                              Tanggal Terbit{" "}
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="form-control rounded"
                              id="tglTerbit"
                              name="tglTerbit"
                              value={tglTerbit}
                              onChange={(e) => setTglTerbit(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="aktaPerubahan">
                              Akta Perubahan Terakhir{" "}
                            </label>
                            <input
                              type="text"
                              id="aktaPerubahan"
                              class="form-control"
                              placeholder="Enter Akta Perubahan Terakhir"
                              autoComplete="off"
                              value={aktaPerubahan}
                              onChange={(e) => setAktaPerubahan(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="tglPerubahan">
                              Tanggal Perubahan Terakhir{" "}
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="form-control rounded"
                              id="tglPerubahan"
                              name="tglPerubahan"
                              value={tglPerubahan}
                              onChange={(e) => setTglPerubahan(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="namaNotaris">
                              Nama Notaris{" "}
                            </label>
                            <input
                              type="text"
                              id="namaNotaris"
                              class="form-control"
                              placeholder="Enter Nama Notaris"
                              autoComplete="off"
                              value={namaNotaris}
                              onChange={(e) => setNamaNotaris(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="jumlahKaryawan">
                              Jumlah Karyawan{" "}
                            </label>
                            <input
                              type="text"
                              id="jumlahKaryawan"
                              class="form-control"
                              placeholder="Enter Jumlah Karyawan"
                              autoComplete="off"
                              value={jumlahKaryawan}
                              onChange={(e) => {
                                // Mengonversi nilai input menjadi integer dan menyimpannya ke state
                                const parsedValue = parseInt(e.target.value);
                                setJumlahKaryawan(
                                  isNaN(parsedValue) ? "" : parsedValue
                                );
                              }}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="noTelepon">
                              No. Telepon{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>
                            <input
                              type="text"
                              id="noTelepon"
                              class="form-control"
                              placeholder="Enter No. Telepon"
                              autoComplete="off"
                              value={noTelepon}
                              onChange={(e) => setNoTelepon(e.target.value)}
                              required
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="noFax">
                              No. Fax
                            </label>
                            <input
                              type="text"
                              id="noFax"
                              class="form-control"
                              placeholder="Enter No. Fax"
                              autoComplete="off"
                              value={noFax}
                              onChange={(e) => setNoFax(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="npwp">
                              NPWP <span class="text-danger fw-bold">*</span>
                            </label>
                            <input
                              type="text"
                              id="npwp"
                              class="form-control"
                              placeholder="Enter NPWP"
                              autoComplete="off"
                              value={npwp}
                              onChange={(e) => setNpwp(e.target.value)}
                              required
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="tdp">
                              TDP <span class="text-danger fw-bold">*</span>
                            </label>
                            <input
                              type="text"
                              id="tdp"
                              class="form-control"
                              placeholder="Enter TDP"
                              autoComplete="off"
                              value={tdp}
                              onChange={(e) => setTdp(e.target.value)}
                              required
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="tglPenerbitan">
                              Tanggal Penerbitan{" "}
                            </label>{" "}
                            <br />
                            <input
                              class="form-control rounded"
                              type="date"
                              id="tglPenerbitan"
                              name="tglPenerbitan"
                              value={tglPenerbitan}
                              onChange={(e) => setTglPenerbitan(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="tglJatuhTempo">
                              Tanggal Jatuh Tempo{" "}
                            </label>{" "}
                            <br />
                            <input
                              type="date"
                              class="form-control rounded"
                              id="tglJatuhTempo"
                              name="tglJatuhTempo"
                              value={tglJatuhTempo}
                              onChange={(e) => setTglJatuhTempo(e.target.value)}
                            />
                          </div>

                          <div class="mb-4">
                            <label className="mb-1" for="contactPerson">
                              Contact Person{" "}
                              <span class="text-danger fw-bold">*</span>
                            </label>
                            <input
                              type="text"
                              id="contactPerson"
                              class="form-control"
                              placeholder="Enter Contact Person"
                              autoComplete="off"
                              value={contactPerson}
                              onChange={(e) => setContactPerson(e.target.value)}
                              required
                            />
                          </div>
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
                    </FormComponent>
                  </div>
                </CardComponent>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
