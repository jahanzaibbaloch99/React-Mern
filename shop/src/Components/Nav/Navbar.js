import React from 'react';
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

// https://www.coursera.org/lecture/front-end-react/exercise-video-fetch-post-comment-SLc2y

import { Link } from "react-router-dom"

class MyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>

          <Navbar  color="light" light expand="md">
            <NavLink>
              <Link to={"/"}>Game Store</Link>
            </NavLink>
           
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="m-auto" navbar>
                <NavItem>
                  <NavLink><Link to={"/product"}>Products</Link> </NavLink>

                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to={"/login"}>Login</Link> </NavLink>

                </NavItem>
                <NavItem><NavLink>
                  <Link to="/cart">Cart</Link> 
                  </NavLink>


                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>

          
          

        </div>
        
        


    );
  }
}

export default MyNav;