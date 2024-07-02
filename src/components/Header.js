import React from 'react';
import { Form, Navbar, Nav, Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

function Header() {
  return (
    <header>
      <Navbar expand="lg" className='bg-info-subtle'>
        <Container>
          <Navbar.Brand as={Link} to='/'>Қазақ Әдебиеті</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className='ms-auto'>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Іздеу"
                    className="mr-sm-2 rounded"
                  />
                </Col>

                <Col xs="auto">
                  <Button type="submit" className='bg-info rounded'>
                    <i className='fas fa-search'></i>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Nav fill variant="tabs" defaultActiveKey="/" className='bg-info nav-no-spacing'>
        <Nav.Item>
          <Nav.Link as={Link} to='/category/proza'>Проза</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/category/poezia'>Поэзия</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/category/adebi-syn'>Әдеби сын</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/category/ruhaniyat'>Руханият</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/category/oner'>Өнер</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/category/suhbat'>Сұхбат</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/category/tarih'>Тарих</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to='/category/alem-adebieti'>Әлем әдебиеті</Nav.Link>
        </Nav.Item>


        <Dropdown as={Nav.Item}>
          <Dropdown.Toggle as={Nav.Link}>Айдарлар</Dropdown.Toggle>
          <Dropdown.Menu style={{ fontSize: "18px" }}>
            <Dropdown.Item as={Link} to='/category/aqparat'>Ақпарат</Dropdown.Item>
            <Dropdown.Item as={Link} to='/category/qogam'>Қоғам</Dropdown.Item>
            <Dropdown.Item as={Link} to='/category/tanym'>Таным</Dropdown.Item>
            <Dropdown.Item as={Link} to='/category/qobyz-saryny'>Қобыз сарыны</Dropdown.Item>
            <Dropdown.Item as={Link} to='/category/satira'>Сатира</Dropdown.Item>
            <Dropdown.Item as={Link} to='/category/jas-tulpar'>Жас тұлпар</Dropdown.Item>
            <Dropdown.Item as={Link} to='/category/photoshezhire'>Фотошежіре</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </header>
  );
}

export default Header;



// import React from 'react'
// import { Form, Navbar, Nav, Container, Row, Col, Button, Dropdown} from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import '../index.css'

// function Header() {
//   return (
//     <header>
//       <Navbar expand="lg" className='bg-info-subtle'>
//         <Container>
//           <LinkContainer to='/'>
//             <Navbar.Brand>Қазақ Әдебиеті</Navbar.Brand>
//           </LinkContainer>
//           <Form inline>
//             <Row>
//               <Col xs="auto">
//                 <Form.Control
//                   type="text"
//                   placeholder="Іздеу"
//                   className="mr-sm-2 rounded"
//                 />
//               </Col>
//               <Col xs="auto">
//                 <Button type="submit" className='bg-info rounded'>
//                   <i className='fas fa-search'></i>
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </Container>
//       </Navbar>
      
//       <Nav fill variant="tabs" defaultActiveKey="/" className='bg-info nav-no-spacing'>
//         <Nav.Item>
//           <LinkContainer to='/category/proza'>
//             <Nav.Link>Проза</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         <Nav.Item>
//           <LinkContainer to='/category/poezia'>
//             <Nav.Link>Поэзия</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         <Nav.Item>
//           <LinkContainer to='/category/adebi-syn'>
//             <Nav.Link>Әдеби сын</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         <Nav.Item>
//           <LinkContainer to='/category/ruhaniyat'>
//             <Nav.Link>Руханият</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         <Nav.Item>
//           <LinkContainer to='/category/oner'>
//             <Nav.Link>Өнер</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         <Nav.Item>
//           <LinkContainer to='/category/suhbat'>
//             <Nav.Link>Сұхбат</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         <Nav.Item>
//           <LinkContainer to='/category/tarih'>
//             <Nav.Link>Тарих</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         <Nav.Item>
//           <LinkContainer to='/category/alem-adebieti'>
//             <Nav.Link>Әлем әдебиеті</Nav.Link>
//           </LinkContainer>
//         </Nav.Item>

//         <Dropdown as={Nav.Item}>
//           <Dropdown.Toggle as={Nav.Link}>Айдарлар</Dropdown.Toggle>

//           <Dropdown.Menu style={{fontSize: "18px"}}>
//             <LinkContainer to='/category/aqparat'>
//               <Dropdown.Item>Ақпарат</Dropdown.Item>
//             </LinkContainer>

//             <LinkContainer to='/category/qogam'>
//               <Dropdown.Item>Қоғам</Dropdown.Item>
//             </LinkContainer>

//             <LinkContainer to='/category/tanym'>
//               <Dropdown.Item>Таным</Dropdown.Item>
//             </LinkContainer>
            
//             <LinkContainer to='/category/qobyz-saryny'>
//               <Dropdown.Item>Қобыз сарыны</Dropdown.Item>
//             </LinkContainer>

//             <LinkContainer to='/category/satira'>
//               <Dropdown.Item>Сатира</Dropdown.Item>
//             </LinkContainer>

//             <LinkContainer to='/category/jas-tulpar'>
//               <Dropdown.Item>Жас тұлпар</Dropdown.Item>
//             </LinkContainer>

//             <LinkContainer to='/category/photoshezhire'>
//               <Dropdown.Item>Фотошежіре</Dropdown.Item>
//             </LinkContainer>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Nav>
//     </header>
//   )
// }

// export default Header


