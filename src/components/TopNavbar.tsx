import { FC, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

interface TopNavbarProps {}

const TopNavbar: FC<TopNavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="custom-navbar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="me-3">
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/" className="custom-link-nav my-3">
                I am
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="custom-link-nav my-3">
                My experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="custom-link-nav my-3">
                Education
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="custom-link-nav my-3">
                Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="custom-link-nav my-3">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="custom-link-nav my-3">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="custom-link-nav my-3">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <Button color="primary" className="nav-btn">
                  HIRE ME
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
