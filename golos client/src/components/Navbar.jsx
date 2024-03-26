import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/logoTeknologinovasiMandiri.png";
import styled from "styled-components";

const CustomNavbarBrand = styled(Navbar.Brand)`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: purple;
  margin-right: 1rem;
`;

export default function MyNavbar() {
  // State to manage hover status for dropdowns
  const [dropdownHover, setDropdownHover] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (response.ok) {
          const content = await response.json();
          setUsername(content.username);
        } else {
          throw new Error("Failed to fetch username");
        }
      } catch (error) {
        console.error(Error);
      }
    };
    fetchUsername();
  });
  // Event handlers for hovering over and leaving dropdown items
  const handleMouseEnter = () => {
    setDropdownHover(true);
  };

  const handleMouseLeave = () => {
    setDropdownHover(false);
  };
  return (
    <Navbar expand="lg" className="shadow nav-custom-color">
      <CustomNavbarBrand
        className="navbar-title ms-3 navbar-item fw-bold "
        href="#home"
      >
        {/* <img
          src={Logo}
          width="100"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />{" "} */}
        Integrated Processing System
      </CustomNavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ justifyContent: "flex-end", marginRight: "15px" }}
      >
        <Nav className="mr-auto">
          <NavDropdown
            title="Loan Process"
            id="loan-process-dropdown"
            className="nav-item navbar-item"
            show={dropdownHover} // Show dropdown on hover
            onMouseEnter={handleMouseEnter} // Handle mouse enter event
            onMouseLeave={handleMouseLeave} // Handle mouse leave event
          >
            <NavDropdown
              title="Slik Checking"
              id="slik-checking-dropdown"
              className="ms-3"
            >
              <NavDropdown.Item href="/slikChecking">
                Slik Checking (ILP)
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Initiation"
              id="Initiation-dropdown"
              className="ms-3"
            >
              <NavDropdown.Item href="/BadanUsaha">
                Initial Data Enty (ILP)
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Credit Proposal (ILP)"
              id="creedit-proposal-dropdown"
              className="ms-3"
            >
              <NavDropdown.Item href="/creditProposal">
                Credit Proposal
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Approved/Reject Letter (ILP)"
              id="approved-reject-dropdown"
              className="ms-3"
            >
              <NavDropdown.Item href="/approvedreject">
                Approved/Reject Letter (ILP)
              </NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
          <Nav.Link href="#credit-admin" className="nav-link navbar-item">
            Credit Admin
          </Nav.Link>
          <Nav.Link href="#facilities" className="nav-link navbar-item">
            Facilities
          </Nav.Link>
          <Nav.Link href="#logout" className="nav-link navbar-item">
            {username}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
