'use client';

import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
      <div className="flex flex-wrap gap-2 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" size="sm" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }>
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
            </Dropdown.Item>
        </Dropdown>
        </div>
        <Navbar.Collapse>
        <Navbar.Link href="/userprofile">Profile</Navbar.Link>
        <Navbar.Link href="/friends">Friends</Navbar.Link>
        
      </Navbar.Collapse>
    </>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
    
  }

  return (
    
    <Navbar fluid rounded>

      <Navbar.Brand href="/">
        <img src="/" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Gift Genius</span>
      </Navbar.Brand>

        {showNavigation()}
     
      </Navbar>
  );
}

export default Nav;
