// BadanUsahaForm.jsx
import React from "react";
import Input from "./Input";
import ModalZipCode from "./ModalZipCode";

const BadanUsahaForm = ({
  cif,
  setCif,
  companyName,
  setCompanyName,
  selectedCompanyFirstName,
  setSelectedCompanyFirstName,
  companyFirstName,
  companyTypes,
  setCompanyTypes,
  establishPlace,
  setEstablishPlace,
  establishDate,
  setEstablishDate,
  companyAddress,
  setCompanyAddress,
  district,
  setDistrict,
  city,
  setCity,
  zipCode,
  setZipCode,
  addressType,
  setAddressType,
  eternalRating,
  setEternalRating,
  ratingClass,
  setRatingClass,
  ratingDate,
  setRatingDate,
  businessType,
  setBusinessType,
  aktaPendirian,
  setAktaPendirian,
  kodeListingBursa,
  setKodeListingBursa,
  tanggalListingBursa,
  setTanggalListingBursa,
  tglTerbit,
  setTglTerbit,
  aktaPerubahan,
  setAktaPerubahan,
  tglPerubahan,
  setTglPerubahan,
  namaNotaris,
  setNamaNotaris,
  jumlahKaryawan,
  setJumlahKaryawan,
  noTelepon,
  setNoTelepon,
  noFax,
  setNoFax,
  npwp,
  setNpwp,
  tdp,
  setTdp,
  tglPenerbitan,
  setTglPenerbitan,
  tglJatuhTempo,
  setTglJatuhTempo,
  contactPerson,
  setContactPerson,
  selectedCompanyTypes,
  setSelectedCompanyTypes,
  selectedAddressTypes,
  setSelectedAddressTypes,
  selectedRatingClass,
  setSelectedRatingClass,
  selectedKodeBursa,
  setSelectedKodeBursa,
  selectedBusinessType,
  setSelectedBusinessType,
  onSubmit,
  funcZipCode,
  displayData,
  setDisplayData,
}) => {
  console.log(companyTypes);
  return (
    <form className="row g-3 p-3 mt-3" onSubmit={onSubmit}>
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
            <label className="mb-1" htmlFor="product-category">
              Company Name <span className="text-danger fw-bold">*</span>
            </label>

            <div className="mb-4 d-flex align-items-center">
              {/* <select
                id="companySelect"
                className="form-select w-25 me-1"
                onChange={(e) => setSelectedCompanyFirstName(e.target.value)}
                value={selectedCompanyFirstName}
                required
              >
                <option value="" disabled>
                  -- Select Company Category --
                </option>
                {companyFirstName.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select> */}
              <Input
                type="select"
                name="company_first_name"
                placeholder="Enter Company First Name"
                autocomplete="off"
                value={selectedCompanyFirstName}
                handleChange={(e) =>
                  setSelectedCompanyFirstName(e.target.value)
                }
                required="false"
                options={companyFirstName}
                className="form-select w-25 me-1"
              />

              <input
                type="text"
                className="form-control"
                id="job-title"
                placeholder="Enter Company Name"
                autoComplete="off"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* <div className="mb-4">
            <label className="mb-1" for="product-category">
              Company Type <span class="text-danger fw-bold">*</span>
            </label>
            <select
              id="post-type"
              class="form-select"
              required
              onChange={(e) => setSelectedCompanyTypes(e.target.value)}
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
          </div> */}

          <div className="mb-4">
            <Input
              id="company-type"
              required="false"
              handleChange={(e) => setSelectedCompanyTypes(e.target.value)}
              value={selectedCompanyTypes}
              options={companyTypes}
              label="Company Type"
              type="select"
              className="form-select"
            />
          </div>

          <div className="mb-4">
            <Input
              type="date"
              id="establish-date"
              placeholder=""
              autoComplete="off"
              value={establishDate}
              handleChange={(e) => setEstablishDate(e.target.value)}
              label="Establish Date"
              required="false"
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="estabPlace">
              Establish Place <span class="text-danger fw-bold">*</span>
            </label>
            <input
              type="text"
              class="form-control"
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
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
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
            <Input
              type="text"
              name="City"
              placeholder="Enter City"
              autocomplete="off"
              value={city}
              handleChange={(e) => setCity(e.target.value)}
              label="City"
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="ZipCode">
              Zip Code <span class="text-danger fw-bold">*</span>{" "}
            </label>
            <div class="input-group mb-4">
              <Input
                type="text"
                name="Zip-code"
                placeholder="Enter Zip-code"
                autocomplete="off"
                value={zipCode}
                handleChange={(e) => setZipCode(e.target.value)}
              />
              <ModalZipCode onReceiveZipCodes={funcZipCode} />

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
              onChange={(e) => setSelectedAddressTypes(e.target.value)}
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
              onChange={(e) => setSelectedRatingClass(e.target.value)}
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
              onChange={(e) => setSelectedKodeBursa(e.target.value)}
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
              onChange={(e) => setTanggalListingBursa(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div class="mb-4">
            <label className="mb-1" for="businessType">
              Business Type <span class="text-danger fw-bold">*</span>
            </label>
            <select
              id="businessType"
              class="form-select"
              value={selectedBusinessType}
              onChange={(e) => setSelectedBusinessType(e.target.value)}
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
              Akta Pendirian <span class="text-danger fw-bold">*</span>
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
                setJumlahKaryawan(isNaN(parsedValue) ? "" : parsedValue);
              }}
            />
          </div>

          <div class="mb-4">
            <label className="mb-1" for="noTelepon">
              No. Telepon <span class="text-danger fw-bold">*</span>
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
              Contact Person <span class="text-danger fw-bold">*</span>
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
          <div class="mb-4">
            <Input
              type="text"
              name="displayData"
              placeholder="Enter Display Data"
              autocomplete="off"
              value={displayData}
              handleChange={(e) => setDisplayData(e.target.value)}
              label="Display Data"
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

export default BadanUsahaForm;
