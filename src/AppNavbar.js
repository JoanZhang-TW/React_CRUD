import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';


export default class AppNavbar extends Component {

   constructor(props) {
    super(props);
    this.state = { isOpen: false};
    this.toggle = this.toggle.bind(this);
}

toggle() {
    this.setState = ({
        isOpen: !this.state.isOpen
    });
}



   render() {
      return <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      </Navbar>
   }

}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
