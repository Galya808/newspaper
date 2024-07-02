import React, { useEffect } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="bg-info-subtle py-4 mt-4">
      <Container>
        <Nav className="justify-content-around" style={{ fontSize: "18px" }}>
          <Nav.Link as={Link} to='/typography'>Редакция</Nav.Link>
          <Nav.Link as={Link} to='/basshylyk'>Бас редакторлар</Nav.Link>
          <Nav.Link as={Link} to='/gazet-turaly'>Газет туралы</Nav.Link>
          <Nav.Link as={Link} to='/contact'>Бізбен байланыс</Nav.Link>
        </Nav>

        <Row className='mt-4'>
          <Col className='mt-3' md={9}>
            <p>
              "Қазақ әдебиеті" — Қазақстан Республикасының әдебиет, мәдениет және өнер газеті. Әр апта сайын, жұма күні шығады.
            </p>
            <p>
              Газет 1934 жылдың 10 қаңтарынан бастап шыға бастады. «Қазақ әдебиеті» газеті — Қазақстан жазушылар одағының органы ретінде тұңғыш саны 1934 жылдың қаңтарында жарық көрген.
            </p>
            <h6 className='pt-3'>
              <strong>«Қазақ әдебиеті» - газетінің тарихы</strong>
            </h6>
          </Col>
          <Col md={3}>
            <Nav className="flex-column">
              <Nav.Link href="https://www.facebook.com/groups/qazaqadebietikz">
                <i className="fab fa-facebook-f"></i> Facebook
              </Nav.Link>
              <Nav.Link href="https://vk.com/public210959379">
                <i className="fab fa-vk"></i> VK
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i> Instagram
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} "Қазақ әдебиеті".</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;





// import React from 'react'
// import { Nav, Container, Row, Col } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'


// function Footer() {
//   return (
//     <footer className="bg-info-subtle py-4 mt-4">
//       <Container>        
//         <Nav className="justify-content-around" style={{fontSize: "18px"}}>
//           <LinkContainer to='/typography'>
//             <Nav.Link>Редакция</Nav.Link>
//           </LinkContainer>

//           <LinkContainer to='/basshylyk'>
//             <Nav.Link>Бас редакторлар</Nav.Link>
//           </LinkContainer>

//           <LinkContainer to='/gazet-turaly'>
//             <Nav.Link>Газет туралы</Nav.Link>
//           </LinkContainer>

//           <LinkContainer to='/contact'>
//             <Nav.Link>Бізбен байланыс</Nav.Link>
//           </LinkContainer>
//         </Nav>

//         <Row className='mt-4'>
//           <Col className='mt-3' md={9}>
//             <p>
//               "Қазақ әдебиеті" — Қазақстан Республикасының әдебиет, мәдениет және өнер газеті. Әр апта сайын, жұма күні шығады. 
//             </p>

//             <p>
//               Газет 1934 жылдың 10 қаңтарынан бастап шыға бастады. «Қазақ әдебиеті» газеті — Қазақстан жазушылар одағының органы ретінде тұңғыш саны 1934 жылдың қаңтарында жарық көрген. 
//             </p>

//             <h6 className='pt-3'>
//               <strong>«Қазақ әдебиеті» - газетінің тарихы</strong>
//             </h6>
//           </Col>

//           <Col md={3}>
//             <Nav className="flex-column">
//                 <Nav.Link href="https://www.facebook.com/groups/qazaqadebietikz">
//                   <i className="fab fa-facebook-f"></i> Facebook
//                 </Nav.Link>

//                 <Nav.Link href="https://vk.com/public210959379">
//                   <i className="fab fa-vk"></i> VK
//                 </Nav.Link>

//                 <Nav.Link href="https://www.instagram.com/">
//                   <i className="fab fa-instagram"></i> Instagram
//                 </Nav.Link>
//             </Nav>
//           </Col>
//         </Row>

//         <Row className="mt-3">
//           <Col className="text-center">
//             <small>&copy; {new Date().getFullYear()} "Қазақ әдебиеті".</small>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   ) 
// }

// export default Footer

