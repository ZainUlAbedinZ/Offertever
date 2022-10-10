import { Container,Row,Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Label, Input } from 'reactstrap';
// import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';
import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';
import React from 'react';
import { COMMENT_KEYS } from '@babel/types';
import Checkbox from '../../assets/img/CheckBox.png';


const MainNavbar = props => {
	return (
		<>
  <Container className='text-center'>
  
  <Row className='align-content-sm-start w-75 hero_section_topBar '>
      {/* <div className='m-2 fw-600 fs-3 text-center py-5 '> */}
        
        <Col lg='3' md='6' sm='12' className='py-2  py-md-5  d-flex flex-fill justify-content-evenly hero_section_topBar_column'>
        <img src={Checkbox} color='light'  className='text-light h-50 w-25' /> 
        {/* width='20px' height='20px' */}
           <strong className='d-inline-block text-left ml-2'>GRATIS en VERGELIJKN vergelijken </strong> 
           {/* className='fw-700 fs-4 ml-2 ' */}
          </Col>
      {/* </div> */}
      {/* <div  className='m-2 fw-600 fs-3 text-center py-5 '>  */}
      <Col lg='3' md='6' sm='12' className='py-3 py-md-5 d-flex flex-fill justify-content-evenly hero_section_topBar_column'>
      <img src={Checkbox} color='light'  className='text-light h-50 w-25' /> 
      {/* width='20px' height='20px' */}
     <strong className='d-inline-block text-left ml-2'>BESPAAR 30% in<span className='fs-6'>slechts 2 minuten</span></strong>
      </Col>
      {/* <div  className='m-2 fw-600 fs-3 text-center py-5 '> */}
      <Col lg='3' md='6' sm='12' className='py-3 py-md-5 d-flex flex-fill justify-content-evenly hero_section_topBar_column'>
      <img src={Checkbox} color='light' className='text-light h-50 w-25' />
       {/* width='20px' height='20px'  */}
       <strong className='d-inline-block text-left ml-2'>TRAPRENOVATIE al vanaf $ 2.500 </strong>
          </Col>
      {/* <div  className='m-2 fw-600 fs-3 text-center py-5 '> */}
      <Col lg='3' md='6' sm='12' className='py-3 py-md-5 d-flex flex-fill justify-content-evenly hero_section_topBar_column'>
       <img src={Checkbox} color='light' className='text-light h-50 w-25 text-left' /> 
       {/*  width='20px' height='20px' */}
       <strong className='d-inline-block text-left ml-2'>Binnen 1WERKDAG geplaatst</strong>
      </Col>
  </Row>
  </Container>

		</>
	);
};

export default MainNavbar;