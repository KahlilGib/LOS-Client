import React from "react";
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
  return (
    <Navbar variant="light" expand="lg" className="shadow ">
      <CustomNavbarBrand className="navbar-title ms-3 " href="#home">
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
            className="nav-item"
          >
            <NavDropdown title="Slik Checking" id="slik-checking-dropdown">
              <NavDropdown.Item href="/slikChecking">
                Slik Checking (ILP)
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Initiation" id="Initiation-dropdown">
              <NavDropdown.Item href="/BadanUsaha">
                Initial Data Enty (ILP)
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Credit Proposal (ILP)"
              id="creedit-proposal-dropdown"
            >
              <NavDropdown.Item href="/creditProposal">
                Credit Proposal
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Approved/Reject Letter (ILP)"
              id="approved-reject-dropdown"
            >
              <NavDropdown.Item href="/approvedreject">
                Approved/Reject Letter (ILP)
              </NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
          <Nav.Link href="#credit-admin" className="nav-link">
            Credit Admin
          </Nav.Link>
          <Nav.Link href="#facilities" className="nav-link">
            Facilities
          </Nav.Link>
          <Nav.Link href="#logout" className="nav-link">
            Username
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
