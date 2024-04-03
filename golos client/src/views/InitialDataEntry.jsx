import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CardComponent from "../components/CardComponent";
import BadanUsahaForm from "../components/BadanUsahaForm";
import PeroranganForm from "../components/PeroranganForm";

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
  const [selectedOption, setSelectedOption] = useState("badan_usaha");
  const handleZipCodeChange = (newZipCode) => {
    newZipCode.map((zip) => {
      setZipCode(zip);
    });
  };
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

      setTimeout(() => {
        window.location.reload();
      }, 2000);

      Swal.fire({
        icon: "success",
        title: "Create Success!",
        text: "You have successfully created!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(formDataBadanUsaha);
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

  const dataApplicant = async (formData) => {
    try {
      await axios.post("http://localhost:8000/api/applicant/create", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);

      Swal.fire({
        icon: "success",
        title: "Create Success!",
        text: "You have successfully created!",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(formDataBadanUsaha);
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
                          id="ExistingCustomer"
                          value="badan_usaha"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ExistingCustomer"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="extCust"
                          id="ExistingCustomer"
                          value="perorangan"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ExistingCustomer"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="border-ide border-3 rounded p-4">
                    <div class="row g-3 p-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radio-bupo"
                          id="flexRadioDefault1"
                          value="badan_usaha"
                          checked={selectedOption === "badan_usaha"}
                          onChange={(e) => setSelectedOption(e.target.value)}
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
                          checked={selectedOption === "perorangan"}
                          onChange={(e) => setSelectedOption(e.target.value)}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Perorangan
                        </label>
                      </div>
                    </div>

                    {selectedOption === "badan_usaha" ? (
                      <BadanUsahaForm
                        cif={cif}
                        setCif={setCif}
                        companyName={companyName}
                        setCompanyName={setCompanyName}
                        selectedCompanyFirstName={selectedCompanyFirstName}
                        setSelectedCompanyFirstName={
                          setSelectedCompanyFirstName
                        }
                        companyFirstName={companyFirstName}
                        onSubmit={data}
                        companyTypes={companyTypes}
                        setCompanyTypes={setCompanyTypes}
                        establishPlace={establishPlace}
                        setEstablishPlace={setEstablishPlace}
                        establishDate={establishDate}
                        setEstablishDate={setEstablishDate}
                        companyAddress={companyAddress}
                        setCompanyAddress={setCompanyAddress}
                        district={district}
                        setDistrict={setDistrict}
                        city={city}
                        setCity={setCity}
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                        addressType={addressType}
                        setAddressType={setAddressType}
                        eternalRating={eternalRating}
                        setEternalRating={setEternalRating}
                        ratingClass={ratingClass}
                        setRatingClass={setRatingClass}
                        ratingDate={ratingDate}
                        setRatingDate={setRatingDate}
                        businessType={businessType}
                        setBusinessType={setBusinessType}
                        aktaPendirian={aktaPendirian}
                        setAktaPendirian={setAktaPendirian}
                        kodeListingBursa={kodeListingBursa}
                        setKodeListingBursa={setKodeListingBursa}
                        tanggalListingBursa={tanggalListingBursa}
                        setTanggalListingBursa={setTanggalListingBursa}
                        tglTerbit={tglTerbit}
                        setTglTerbit={setTglTerbit}
                        aktaPerubahan={aktaPerubahan}
                        setAktaPerubahan={setAktaPerubahan}
                        tglPerubahan={tglPerubahan}
                        setTglPerubahan={setTglPerubahan}
                        namaNotaris={namaNotaris}
                        setNamaNotaris={setNamaNotaris}
                        jumlahKaryawan={jumlahKaryawan}
                        setJumlahKaryawan={setJumlahKaryawan}
                        noTelepon={noTelepon}
                        setNoTelepon={setNoTelepon}
                        noFax={noFax}
                        setNoFax={setNoFax}
                        npwp={npwp}
                        setNpwp={setNpwp}
                        tdp={tdp}
                        setTdp={setTdp}
                        tglPenerbitan={tglPenerbitan}
                        setTglPenerbitan={setTglPenerbitan}
                        tglJatuhTempo={tglJatuhTempo}
                        setTglJatuhTempo={setTglJatuhTempo}
                        contactPerson={contactPerson}
                        setContactPerson={setContactPerson}
                        selectedCompanyTypes={selectedCompanyTypes}
                        setSelectedCompanyTypes={setSelectedCompanyTypes}
                        selectedAddressTypes={selectedAddressTypes}
                        setSelectedAddressTypes={setSelectedAddressTypes}
                        selectedRatingClass={selectedRatingClass}
                        setSelectedRatingClass={setSelectedRatingClass}
                        selectedKodeBursa={selectedKodeBursa}
                        setSelectedKodeBursa={setSelectedKodeBursa}
                        selectedBusinessType={selectedBusinessType}
                        setSelectedBusinessType={setSelectedBusinessType}
                        funcZipCode={handleZipCodeChange}
                      />
                    ) : (
                      <PeroranganForm />
                    )}
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
