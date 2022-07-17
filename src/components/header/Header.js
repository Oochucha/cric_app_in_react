import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import CreatePlayer from "../create-player/CreatePlayer";

// export default class AppNavbar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false,
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Navbar color="primary" dark expand="md">
//           <NavbarBrand href="/">Cricket Application</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/players">players</NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   options
//                 </DropdownToggle>
//                 <DropdownMenu end>
//                   <DropdownItem>Create Player</DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleModal = () => {
      console.log('Calling Toggle Function in Header');
      setModal(!modal)
    }

    return (
        <div>
          <Navbar color="primary" dark expand="md">
            <NavbarBrand href="/">Cricket Application</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/players">players</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    options
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem onClick={toggleModal}>Create Player</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
            <Modal isOpen={modal} toggle={toggleModal}>
              <ModalHeader>Create Player Form</ModalHeader>
              <ModalBody>
                <CreatePlayer toggle={toggleModal} />
              </ModalBody>
            </Modal>
          </Navbar>
        </div>
    );
}

export default AppNavbar;
