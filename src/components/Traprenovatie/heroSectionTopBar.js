import { Container,Row,Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Label, Input } from 'reactstrap';
// import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';
import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';
import React from 'react';
import { COMMENT_KEYS } from '@babel/types';
import Checkbox from '../../assets/img/CheckBox.png';


const MainNavbar = props => {
	return (
		<>
  <Container>
{/* justify-content-center */}
  <Row className='justify-content-center w-100 flex-wrap'>
    {/* md='9 */}
        <Col md='12' sm='12' className='d-md-flex d-col'>
    <Col lg='3' md='3' sm='8' className='py-2  py-md-4  d-flex'>
        <img src={Checkbox} color='light' className='text-light h-50 w-25' /> 
           <strong className='d-inline-block text-left ml-2'>GRATIS en VERGELIJKN vergelijken </strong> 
          </Col>
      <Col lg='3' md='3' sm='8' className='py-2  py-md-4 d-flex '>
      <img src={Checkbox} color='light'  className='text-light h-50 w-25' /> 
     <strong className='d-inline-block text-left ml-2'>BESPAAR 30% in<span className='fs-6'>slechts 2 minuten</span></strong>
      </Col>
      <Col lg='3' md='3' sm='8' className='py-2 py-md-4  d-flex '>
      <img src={Checkbox} color='light' className='text-light h-50 w-25' />
       <strong className='d-inline-block text-left ml-2'>TRAPRENOVATIE al vanaf $ 2.500 </strong>
          </Col>
      <Col lg='3' md='3' sm='8' className='py-2 py-md-4  d-flex'>
       <img src={Checkbox} color='light' className='text-light h-50 w-25 text-left' /> 
       <strong className='d-inline-block text-left ml-2'>Binnen 1WERKDAG geplaatst</strong>
      </Col>
      </Col>
      
  </Row>
  
  </Container>

		</>
	);
};

export default MainNavbar;