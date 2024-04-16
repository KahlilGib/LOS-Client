// BadanUsahaForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Modal from "./ModalZipCode";
import ModalZipCode from "./ModalZipCode";
import Input from "./Input";

const PeroranganForm = () => {
  const [cif, setCif] = useState("");
  const [titleBeforeName, setTitleBeforeName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [titleAfterName, setTitleAfterName] = useState("");
  const [nickname, setNickname] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [homeStatus, setHomeStatus] = useState("");
  const [staySince, setStaySince] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [nomorKK, setNomorkk] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [spouseIdCard, setSpouseIdCard] = useState("");
  const [spouseAddress, setSpouseAddress] = useState("");
  const [spouseIdIssued, setSpouseIdIssued] = useState("");
  const [idCard, setIdCard] = useState("");
  const [idCardExpire, setIdCardExpire] = useState("");
  const [idCardAddress, setIdCardAddress] = useState("");
  const [idCardDistrict, setIdCardDistrict] = useState("");
  const [idCardCity, setIdCardCity] = useState("");
  const [idCardZipCode, setIdCardZipCode] = useState("");
  const [addressType, setAddressType] = useState("");
  const [education, setEducation] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [businessSector, setBusinessSector] = useState("");
  const [establishDate, setEstablishDate] = useState("");
  const [npwp, setnpwp] = useState("");
  const [grossIncomePerMonth, setGrossIncomePerMonth] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [motherName, setMotherName] = useState("");
  const [namaPelaporan, setNamaPelaporan] = useState("");
  const [negaraDomisili, setNegaraDomisili] = useState("");
  const [namaInstansi, setNamaInstansi] = useState("");
  const [kodeInstansi, setKodeInstansi] = useState("");
  const [noPegawai, setNoPegawai] = useState("");
  const [sektorEkonomi1, setSektorEkonomi1] = useState("");
  const [sektorEkonomi2, setSektorEkonomi2] = useState("");
  const [sektorEkonomi3, setSektorEkonomi3] = useState("");
  const [sektorEkonomiOjk, setSektorEkonomiOjk] = useState("");
  const [groupNasabah, setGroupNasabah] = useState("");
  const [netIncome, setNetIncome] = useState("");
  const [lokasiPabrik, setLokasiPabrik] = useState("");
  const [keyPerson, setKeyPerson] = useState("");
  const [lokasiPabrik2, setLokasiPabrik2] = useState("");
  const [hubunganNasabahBank, setHubunganNasabahBank] = useState("");
  const [hubunganKeluarga, setHubunganKeluarga] = useState("");
  //select option state
  const [homeStatusOptions, setHomeStatusOptions] = useState([]);
  const [idCardAddressTypeOptions, setIdCardAddressTypeOptions] = useState([]);
  const [educationOptions, setEducationOptions] = useState([]);
  const [nationalityOptions, setNationalityOptions] = useState([]);
  const [addressTypeOption, setAddressTypeOption] = useState([]);
  const [jobPositionOption, setJobPositionOption] = useState([]);
  const [businessSectorOption, setBusinessSectorOption] = useState([]);
  const [negaraDomisilioption, setNegaraDomisiliOption] = useState([]);
  const [kodeInstansiOption, setKodeInstansiOption] = useState([]);
  const [sektorEkonomi1Option, setSektorEkonomi1Option] = useState([]);
  const [sektorEkonomi2Option, setSektorEkonomi2Option] = useState([]);
  const [sektorEkonomi3Option, setSektorEkonomi3Option] = useState([]);
  const [sektorEkonomiOjkOption, setSektorEkonomiOjkOption] = useState([]);
  const [lokasiPabrikOption, setLokasiPabrikOption] = useState([]);
  const [lokasiPabrikOption2, setLokasiPabrikOption2] = useState([]);
  const [hubunganNasabahBankOption, setHubunganNasabahBankOption] = useState(
    []
  );
  const [hubunganKeluargaOption, setHubunganKeluargaOption] = useState([]);

  const handleZipCodeChange = (newZipCode) => {
    newZipCode.map((zip) => {
      setZipCode(zip);
    });
  };

  const handleIDZipCodeChange = (newZipCode) => {
    newZipCode.map((zip) => {
      setIdCardZipCode(zip);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = [
          "http://localhost:8000/api/applicant/show-homestatus",
          "http://localhost:8000/api/applicant/show-applicant-addresstype",
          "http://localhost:8000/api/applicant/show-education",
          "http://localhost:8000/api/applicant/show-negara",
          "http://localhost:8000/api/applicant/show-job-position",
          "http://localhost:8000/api/applicant/show-business-sector",
          "http://localhost:8000/api/applicant/show-kode-instansi",
          "http://localhost:8000/api/applicant/show-sektor-ekonomi",
          "http://localhost:8000/api/applicant/show-lokasi-pabrik",
          "http://localhost:8000/api/applicant/show-hubungan-nasabah",
          "http://localhost:8000/api/applicant/show-hubungan-keluarga",
        ];

        const requests = endpoints.map((endpoint) =>
          axios.get(endpoint, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          })
        );

        const responses = await Promise.all(requests);
        setHomeStatusOptions(responses[0].data);
        setIdCardAddressTypeOptions(responses[1].data);
        setEducationOptions(responses[2].data);
        setNationalityOptions(responses[3].data);
        setAddressTypeOption(responses[1].data);
        setJobPositionOption(responses[4].data);
        setBusinessSectorOption(responses[5].data);
        setKodeInstansiOption(responses[6].data);
        setNegaraDomisiliOption(responses[3].data);
        setSektorEkonomi1Option(responses[7].data);
        setSektorEkonomi2Option(responses[7].data);
        setSektorEkonomi3Option(responses[7].data);
        setSektorEkonomiOjkOption(responses[7].data);
        setLokasiPabrikOption(responses[8].data);
        setLokasiPabrikOption2(responses[8].data);
        setHubunganNasabahBankOption(responses[9].data);
        setHubunganKeluargaOption(responses[10].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const intNumChildren = parseInt(numberOfChildren);
    const grossIncomePM = parseInt(grossIncomePerMonth);
    const numberEmployee = parseInt(numberOfEmployees);
    const netIncomeINT = parseInt(netIncome);
    try {
      const formData = {
        title_before_name: titleBeforeName,
        customer_name: customerName,
        title_after_name: titleAfterName,
        nickname: nickname,
        home_address: homeAddress,
        district: district,
        city: city,
        zip_code: zipCode,
        home_status: homeStatus,
        stay_since: staySince,
        no_telp: phoneNumber,
        no_fax: faxNumber,
        birth_place: birthPlace,
        birth_date: birthDate,
        marital_status: maritalStatus,
        gender: gender,
        nationality: nationality,
        number_of_children: intNumChildren,
        no_kartu_keluarga: nomorKK,
        spouse_name: spouseName,
        spouse_id_card: spouseIdCard,
        spouse_address: spouseAddress,
        id_card_issued_date: spouseIdIssued,
        id_card: idCard,
        id_card_expire_date: idCardExpire,
        id_card_address: idCardAddress,
        id_card_district: idCardDistrict,
        id_card_city: idCardCity,
        id_card_zip_code: idCardZipCode,
        address_type: addressType,
        education: education,
        job_position: jobPosition,
        business_sector: businessSector,
        establish_date: establishDate,
        npwp: npwp,
        gross_income_per_month: grossIncomePM,
        number_of_employees: numberEmployee,
        mother_name: motherName,
        nama_pelaporan: namaPelaporan,
        negara_domisili: negaraDomisili,
        nama_instansi: namaInstansi,
        kode_instansi: kodeInstansi,
        no_pegawai: noPegawai,
        group_nasabah: groupNasabah,
        sektor_ekonomi_1: sektorEkonomi1,
        sektor_ekonomi_2: sektorEkonomi2,
        sektor_ekonomi_3: sektorEkonomi3,
        sektor_ekonomi_ojk: sektorEkonomiOjk,
        net_income: netIncomeINT,
        lokasi_pabrik: lokasiPabrik,
        key_person: keyPerson,
        lokasi_dati_2: lokasiPabrik2,
        hubungan_nasabah_bank: hubunganNasabahBank,
        hubungan_keluarga: hubunganKeluarga,
      };

      console.log("Data Form:", formData);

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
      console.log(formData);
      // Clear form fields after successful submission
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submit Failed!",
        text: `${error.message}`,
        confirmButtonText: "OK",
      });
      console.error("Error submitting data:", error);
    }
  };
  return (
    <form className="row g-3 p-3" onSubmit={handleSubmit}>
      {/* Example input field */}
      <div className="row">
        <div className="col-md-6">
          <div class="d-flex justify-content-center mb-3 text-muted">
            Applicant Data
          </div>
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
              readOnly
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="nickname">
              Title Before Name
            </label>
            <input
              type="text"
              class="form-control"
              id="nickname"
              placeholder="Enter Nickname"
              autoComplete="off"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="custName">
              Customer Name <span class="text-danger fw-bold">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="custName"
              placeholder="Enter Customer Name"
              autoComplete="off"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="titleAfterName">
              Title After Name
            </label>
            <input
              type="text"
              class="form-control"
              id="titleAfterName"
              placeholder="Enter Title After Name"
              autoComplete="off"
              value={titleAfterName}
              onChange={(e) => setTitleAfterName(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="titleBeforeName">
              Nickname
            </label>
            <input
              type="text"
              class="form-control"
              id="titleBeforeName"
              placeholder="Enter Nickname"
              autoComplete="off"
              value={titleBeforeName}
              onChange={(e) => setTitleBeforeName(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="homeAddress">
              Home Address <span class="text-danger fw-bold">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="homeAddress"
              placeholder="Enter home Address"
              autoComplete="off"
              value={homeAddress}
              onChange={(e) => setHomeAddress(e.target.value)}
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
            <label className="mb-1" for="ZipCode">
              Zip Code <span class="text-danger fw-bold">*</span>{" "}
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
              <ModalZipCode onReceiveZipCodes={handleZipCodeChange} />
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

          <div className="mb-4">
            <label className="mb-1" for="home-status">
              Home Status
            </label>
            <select
              id="home-status"
              class="form-select"
              onChange={(e) => setHomeStatus(e.target.value)}
              value={homeStatus}
            >
              <option value="" selected disabled>
                -- Select Home Status --
              </option>
              {homeStatusOptions.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="staySince">
              Stay Since{" "}
            </label>{" "}
            <br />
            <input
              type="date"
              class="form-control rounded"
              id="staySince"
              name="staySince"
              value={staySince}
              onChange={(e) => setStaySince(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              autoComplete="off"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="faxNumber">
              Fax Number
            </label>
            <input
              type="text"
              class="form-control"
              id="faxNumber"
              placeholder="Enter Fax Number"
              autoComplete="off"
              value={faxNumber}
              onChange={(e) => setFaxNumber(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="birthPlace">
              Birth Place
            </label>
            <input
              type="text"
              class="form-control"
              id="birthPlace"
              placeholder="Enter Birth Place"
              autoComplete="off"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="birthDate">
              Birth Date <span class="text-danger fw-bold">*</span>
            </label>{" "}
            <br />
            <input
              type="date"
              class="form-control rounded"
              id="birthDate"
              name="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="marital-status">
              Marital Status <span class="text-danger fw-bold">*</span>
            </label>
            <select
              id="marital-status"
              class="form-select"
              onChange={(e) => setMaritalStatus(e.target.value)}
              value={maritalStatus}
              required
            >
              <option value="" selected disabled>
                -- Select marital Status --
              </option>
              <option value="Kawin">Kawin</option>
              <option value="belum_kawin">Belum Kawin</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1" for="gender">
              Gender <span class="text-danger fw-bold">*</span>
            </label>
            <select
              id="gender"
              class="form-select"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              required
            >
              <option value="" selected disabled>
                -- Select Gender --
              </option>
              <option value="pria">Pria</option>
              <option value="wanita">Wanita</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1" for="home-status">
              Nationality <span class="text-danger fw-bold">*</span>
            </label>
            <select
              id="home-status"
              class="form-select"
              onChange={(e) => setNationality(e.target.value)}
              value={nationality}
              required
            >
              <option value="" selected disabled>
                -- Select Home Status --
              </option>
              {nationalityOptions.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="Number Of Children">
              Number of Children <span class="text-danger fw-bold">*</span>
            </label>
            <div class="input-group mb-4">
              <input
                min={0}
                type="number"
                class="form-control"
                id="Number of Children"
                placeholder="Enter Number of Children"
                autoComplete="off"
                value={numberOfChildren}
                onChange={(e) => setNumberOfChildren(e.target.value)}
                required
              />{" "}
            </div>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="nomorKK">
              No. Kartu Keluarga
            </label>
            <input
              type="text"
              class="form-control"
              id="nomorKK"
              placeholder="Enter No. KK"
              autoComplete="off"
              value={nomorKK}
              onChange={(e) => setNomorkk(e.target.value)}
            />
          </div>

          <div class="d-flex justify-content-center mb-3 mt-3 text-muted">
            Spouse Data
          </div>

          <div class="mb-4">
            <label className="mb-1" for="spouseName">
              Spouse Name
            </label>
            <input
              type="text"
              class="form-control"
              id="spouseName"
              placeholder="Enter Spouse Name"
              autoComplete="off"
              value={spouseName}
              onChange={(e) => setSpouseName(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="spouseIdCard">
              Spouse ID Card No.
            </label>
            <input
              type="text"
              class="form-control"
              id="spouseIdCard"
              placeholder="Enter Spouse IdCard"
              autoComplete="off"
              value={spouseIdCard}
              onChange={(e) => setSpouseIdCard(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="spouseAddress">
              Spouse Address
            </label>
            <input
              type="text"
              class="form-control"
              id="spouseAddress"
              placeholder="Enter Spouse Address"
              autoComplete="off"
              value={spouseAddress}
              onChange={(e) => setSpouseAddress(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="spouseIdIssued">
              Spouse ID Card Issued Date{" "}
            </label>{" "}
            <br />
            <input
              type="date"
              class="form-control rounded"
              id="spouseIdIssued"
              name="spouseIdIssued"
              value={spouseIdIssued}
              onChange={(e) => setSpouseIdIssued(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <Input
              type="text"
              name="groupNasabah"
              placeholder="Enter Group Nasabah"
              autocomplete="off"
              value={groupNasabah}
              handleChange={(e) => setGroupNasabah(e.target.value)}
              label="Group Nasabah"
              required="false"
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Sektor Ekonomi 1 <span class="text-danger fw-bold">*</span>
            </label>
            <Input
              type="select"
              name="sektorEkonomi1"
              placeholder="Enter Sektor Ekonomi"
              autocomplete="off"
              value={sektorEkonomi1}
              handleChange={(e) => setSektorEkonomi1(e.target.value)}
              required="true"
              options={sektorEkonomi1Option}
              className="form-select"
              disabledSelected="Sektor Ekonomi 1"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Sektor Ekonomi 2 <span class="text-danger fw-bold">*</span>
            </label>
            <Input
              type="select"
              name="sektorEkonomi2"
              placeholder="Enter Sektor Ekonomi"
              autocomplete="off"
              value={sektorEkonomi2}
              handleChange={(e) => setSektorEkonomi2(e.target.value)}
              required="true"
              options={sektorEkonomi2Option}
              className="form-select"
              disabledSelected={"Sektor Ekonomi 2"}
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Sektor Ekonomi 3 <span class="text-danger fw-bold">*</span>
            </label>
            <Input
              type="select"
              name="sektorEkonomi3"
              placeholder="Enter Sektor Ekonomi"
              autocomplete="off"
              value={sektorEkonomi3}
              handleChange={(e) => setSektorEkonomi3(e.target.value)}
              required="true"
              options={sektorEkonomi3Option}
              className="form-select"
              disabledSelected={"Sektor Ekonomi 3"}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div class="d-flex justify-content-center mb-3 text-muted">
            ID Card Data
          </div>
          <div class="mb-4">
            <label className="mb-1" for="idcard">
              ID Card No. <span class="text-danger fw-bold">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="idcard"
              placeholder="Enter ID Card Number"
              autoComplete="off"
              required
              value={idCard}
              onChange={(e) => setIdCard(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label className="mb-1" for="idCardExpired">
              ID Card Expired Date <span class="text-danger fw-bold">*</span>
            </label>{" "}
            <br />
            <input
              type="date"
              class="form-control rounded"
              id="idCardExpired"
              name="idCardExpired"
              value={idCardExpire}
              onChange={(e) => setIdCardExpire(e.target.value)}
              required
            />
          </div>
          <div class="mb-4">
            <label className="mb-1" for="idCardAddress">
              ID Card Address <span class="text-danger fw-bold">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="idCardAddress"
              placeholder="Enter ID Card Address"
              autoComplete="off"
              value={idCardAddress}
              onChange={(e) => setIdCardAddress(e.target.value)}
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
              value={idCardDistrict}
              onChange={(e) => setIdCardDistrict(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="IdCardCity">
              City <span class="text-danger fw-bold">*</span>
            </label>
            <div class="input-group mb-4">
              <input
                type="text"
                class="form-control"
                id="IdCardCity"
                placeholder="Enter City"
                autoComplete="off"
                value={idCardCity}
                onChange={(e) => setIdCardCity(e.target.value)}
                required
              />{" "}
            </div>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="IDCARDZipCode">
              Zip Code <span class="text-danger fw-bold">*</span>{" "}
            </label>
            <div class="input-group mb-4">
              <input
                type="text"
                class="form-control"
                id="IDCARDZipCode"
                placeholder="Enter Zip Code"
                autoComplete="off"
                value={idCardZipCode}
                onChange={(e) => setIdCardZipCode(e.target.value)}
                required
              />

              <ModalZipCode onReceiveZipCodes={handleIDZipCodeChange} />

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

          <div className="mb-4">
            <label className="mb-1" for="address_type">
              Address Type
            </label>
            <select
              id="address_type"
              class="form-select"
              onChange={(e) => setAddressType(e.target.value)}
              value={addressType}
            >
              <option value="" selected disabled>
                -- Select Address Type --
              </option>
              {addressTypeOption.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1" for="education">
              Education <span class="text-danger fw-bold">*</span>
            </label>
            <select
              id="education"
              class="form-select"
              onChange={(e) => setEducation(e.target.value)}
              value={education}
              required
            >
              <option value="" selected disabled>
                -- Select Education --
              </option>
              {educationOptions.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1" for="jobPosition">
              Job Position
            </label>
            <select
              id="jobPosition"
              class="form-select"
              onChange={(e) => setJobPosition(e.target.value)}
              value={jobPosition}
            >
              <option value="" selected disabled>
                -- Select Job Position --
              </option>
              {jobPositionOption.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-1" for="businessSector">
              Business Sector
            </label>
            <select
              id="businessSector"
              class="form-select"
              onChange={(e) => setBusinessSector(e.target.value)}
              value={businessSector}
            >
              <option value="" selected disabled>
                -- Select Business Sector --
              </option>
              {businessSectorOption.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="EstabDate">
              Establish Date{" "}
            </label>{" "}
            <br />
            <input
              type="date"
              class="form-control rounded"
              id="EstabDate"
              name="EstabDate"
              value={establishDate}
              onChange={(e) => setEstablishDate(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="npwp">
              NPWP
            </label>
            <input
              type="text"
              class="form-control"
              id="npwp"
              placeholder="Enter NPWP"
              autoComplete="off"
              value={npwp}
              onChange={(e) => setnpwp(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="grossIncomePerMonth">
              Gross Income Per Month <span class="text-danger fw-bold">*</span>
            </label>
            <div class="input-group mb-4">
              <input
                type="number"
                class="form-control"
                id="grossIncomePerMonth"
                placeholder="Enter grossIncomePerMonth"
                autoComplete="off"
                value={grossIncomePerMonth}
                onChange={(e) => setGrossIncomePerMonth(e.target.value)}
                required
              />{" "}
            </div>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="numberOfEmployees">
              Number Of Employees <span class="text-danger fw-bold">*</span>
            </label>
            <div class="input-group mb-4">
              <input
                type="number"
                class="form-control"
                id="numberOfEmployees"
                placeholder="Enter numberOfEmployees"
                autoComplete="off"
                value={numberOfEmployees}
                onChange={(e) => setNumberOfEmployees(e.target.value)}
                required
              />{" "}
            </div>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="motherName">
              Mother Name <span class="text-danger fw-bold">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="motherName"
              placeholder="Enter Mother Name"
              autoComplete="off"
              required
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="Nama Pelaporan">
              Nama Pelaporan <span class="text-danger fw-bold">*</span>
            </label>
            <div class="input-group mb-4">
              <input
                type="text"
                class="form-control"
                id="Nama Pelaporan"
                placeholder="Enter Nama Pelaporan"
                autoComplete="off"
                value={namaPelaporan}
                onChange={(e) => setNamaPelaporan(e.target.value)}
                required
              />{" "}
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Negara Domisili">
              Negara Domisili <span class="text-danger fw-bold">*</span>
            </label>
            <select
              id="Negara Domisili"
              class="form-select"
              onChange={(e) => setNegaraDomisili(e.target.value)}
              value={negaraDomisili}
              required
            >
              <option value="" selected disabled>
                -- Select Negara Domisili --
              </option>
              {negaraDomisilioption.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="Nama Instansi">
              Nama Instansi
            </label>
            <input
              type="text"
              class="form-control"
              id="Nama Instansi"
              placeholder="Enter Nama Instansi"
              autoComplete="off"
              value={namaInstansi}
              onChange={(e) => setNamaInstansi(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Kode Instansi">
              Kode Instansi
            </label>
            <select
              id="Kode Instansi"
              class="form-select"
              onChange={(e) => setKodeInstansi(e.target.value)}
              value={kodeInstansi}
            >
              <option value="" selected disabled>
                -- Select Kode Instansi --
              </option>
              {kodeInstansiOption.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div class="mb-4">
            <label className="mb-1" for="No. Pegawai">
              No. Pegawai
            </label>
            <input
              type="text"
              class="form-control"
              id="No. Pegawai"
              placeholder="Enter No. Pegawai"
              autoComplete="off"
              value={noPegawai}
              onChange={(e) => setNoPegawai(e.target.value)}
            />
          </div>

          <div class="d-flex justify-content-center mb-3 mt-3 text-muted">
            Spouse Data
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Sektor Ekonomi OJK <span class="text-danger fw-bold">*</span>
            </label>
            <Input
              type="select"
              name="sektorEkonomiOjk"
              placeholder="Enter Sektor Ekonomi"
              autocomplete="off"
              value={sektorEkonomiOjk}
              handleChange={(e) => setSektorEkonomiOjk(e.target.value)}
              required="true"
              options={sektorEkonomiOjkOption}
              className="form-select"
              disabledSelected={"Sektor Ekonomi OJK"}
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Net Income <span class="text-danger fw-bold">*</span>
            </label>
            <Input
              type="number"
              name="netIncome"
              placeholder="Enter Nett Income"
              autocomplete="off"
              value={netIncome}
              handleChange={(e) => setNetIncome(e.target.value)}
              required="true"
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Lokasi Pabrik/Kebun/Proyek{" "}
            </label>
            <Input
              type="select"
              name="lokasiPabrik"
              placeholder="Enter Lokasi Pabrik/Kebun/Proyek"
              autocomplete="off"
              value={lokasiPabrik}
              handleChange={(e) => setLokasiPabrik(e.target.value)}
              required="false"
              options={lokasiPabrikOption}
              className="form-select"
              disabledSelected="Lokasi Pabrik/Kebun/Proyek"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Key Person <span class="text-danger fw-bold">*</span>
            </label>
            <Input
              type="text"
              name="keyPerson"
              placeholder="Enter Key Person"
              autocomplete="off"
              value={keyPerson}
              handleChange={(e) => setKeyPerson(e.target.value)}
              required="true"
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Lokasi Dati II{" "}
            </label>
            <Input
              type="select"
              name="lokasiPabrik2"
              placeholder="Enter Lokasi DATI II"
              autocomplete="off"
              value={lokasiPabrik2}
              handleChange={(e) => setLokasiPabrik2(e.target.value)}
              required="false"
              options={lokasiPabrikOption2}
              className="form-select"
              disabledSelected={"Lokasi DATI II"}
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Hubungan Nasabah Dengan Executive Bank{" "}
              <span class="text-danger fw-bold">*</span>
            </label>
            <Input
              type="select"
              name="hubunganNasabahBank"
              placeholder="Enter Hubungan Nasabah Dengan Pejabat Executive Bank"
              autocomplete="off"
              value={hubunganNasabahBank}
              handleChange={(e) => setHubunganNasabahBank(e.target.value)}
              required="true"
              options={hubunganNasabahBankOption}
              className="form-select"
              disabledSelected={
                "Hubungan Nasabah Dengan Pejabat Executive Bank"
              }
            />
          </div>

          <div className="mb-4">
            <label className="mb-1" for="Net Income">
              Hubungan Keluarga{" "}
            </label>
            <Input
              type="select"
              name="hubunganKeluarga"
              placeholder="Enter Hubungan Nasabah Dengan Pejabat Executive Bank"
              autocomplete="off"
              value={hubunganKeluarga}
              handleChange={(e) => setHubunganKeluarga(e.target.value)}
              required="true"
              options={hubunganKeluargaOption}
              className="form-select"
              disabledSelected={"Hubungan Keluarga"}
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
            href="initaldataentry"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default PeroranganForm;
