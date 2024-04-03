import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";

export default function ModalZipCode({ onReceiveZipCodes }) {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subdistrict, setSubdistrict] = useState([]);
  const [zipCodes, setZipCodes] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubdistrict, setSelectedSubdistrict] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Get list of provinces from API
    fetch("http://localhost:8000/api/provinces")
      .then((response) => response.json())
      .then((data) => setProvinces(data));
  }, []);

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setSelectedProvince(selectedProvince);
    setSelectedDistrict("");
    setSelectedSubdistrict("");

    // Get list of cities based on the selected province
    fetch(`http://localhost:8000/api/cities?province=${selectedProvince}`)
      .then((response) => response.json())
      .then((data) => setCities(data));
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
    setSelectedSubdistrict("");

    // Get districts based on the selected city
    fetch(`http://localhost:8000/api/districts?city=${selectedCity}`)
      .then((response) => response.json())
      .then((data) => setDistrict(data));
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setSelectedDistrict(selectedDistrict);

    // Get subdistricts based on the selected district
    fetch(`http://localhost:8000/api/subdistricts?district=${selectedDistrict}`)
      .then((response) => response.json())
      .then((data) => setSubdistrict(data));
  };

  const handleSubdistrictChange = (e) => {
    const selectedSubdistrict = e.target.value;
    setSelectedSubdistrict(selectedSubdistrict);

    // Get zip codes based on the selected subdistrict
    fetch(
      `http://localhost:8000/api/zip-codes?subdistrict=${selectedSubdistrict}`
    )
      .then((response) => response.json())
      .then((data) => {
        setZipCodes(data);
        // Panggil fungsi callback untuk mengirim nilai zipCodes ke komponen induk
        onReceiveZipCodes(data);
        // Setelah mengirim nilai zipCodes, tutup modal
        handleClose();
      });
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="danger"
        className="btn-custom-color"
        onClick={handleShow}
      >
        Search
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Zip Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
            <Form.Label>Province</Form.Label>
            <Form.Control
              value={selectedProvince}
              onChange={handleProvinceChange}
              as="select"
            >
              <option disabled value="">
                Pilih Provinsi
              </option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect2">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={selectedCity}
              onChange={handleCityChange}
              as="select"
              autoFocus
            >
              <option disabled value="">
                Pilih Kota
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect3">
            <Form.Label>District</Form.Label>
            <Form.Control
              value={selectedDistrict}
              onChange={handleDistrictChange}
              as="select"
              autoFocus
            >
              <option disabled value="">
                Pilih Distrik
              </option>
              {district.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlSelect4">
            <Form.Label>Sub Distrik</Form.Label>
            <Form.Control
              value={selectedSubdistrict}
              onChange={handleSubdistrictChange}
              as="select"
              autoFocus
            >
              <option disabled value="">
                Pilih Sub Distrik
              </option>
              {subdistrict.map((subdistrict) => (
                <option key={subdistrict} value={subdistrict}>
                  {subdistrict}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            className="btn-custom-color"
            onClick={handleClose}
          >
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
