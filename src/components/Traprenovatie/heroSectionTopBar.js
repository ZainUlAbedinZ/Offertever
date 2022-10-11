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
  <Row className='justify-content-center w-100 flex-wrap flex-stretch'>
    {/* md='9 */}
        <Col md='11' sm='12' className='d-md-flex d-col'>
    <Col lg='3' md='3' sm='8' className='py-2 py-md-4  d-flex'>
       <div >
         {/*className='w-50'  */}
       {/* h-50 w-25 */}
        <img src={Checkbox} color='light' className='text-light' /> 
       </div >
       <div className='ml-2'>
         <p className='fw--600'>GRATIS en VERGELIJKN vergelijken </p> 
        </div>
          </Col>
      <Col lg='3' md='3' sm='8' className='py-2 py-md-4 d-flex '>
        {/* h-50 w-25 */
        }
        {/* className='w-50' */}
        <div >
      <img src={Checkbox} color='light'  className='text-light ' /> 
      </div>
      <div className='ml-2'>
     <p className='fw--600'>BESPAAR 30% in<span className='fs-6'>slechts 2 minuten</span></p>
     </div>
      </Col>
      <Col lg='3' md='3' sm='8' className='py-2 py-md-4  d-flex '>
        <div>
            {/* className='w-50' */}
            {/*  h-50 w-25 */}
      <img src={Checkbox} color='light' className='text-light' />
      </div>
      <div className='ml-2'>
       <p className='fw--400'> <span className='fw--600'>TRAPRENOVATIE </span> <br /><span className='fw--600'>al vanaf $ 2.500 </span> </p>
       </div>
          </Col>
      <Col lg='3' md='3' sm='8' className='py-2  py-md-4  d-flex'>
      <div >
       <img src={Checkbox} color='light' className='text-light text-left' /> 
       </div>
       <div className='ml-2'>
       <p className='fw--600'>Binnen <br /> 1WERKDAG geplaatst</p>
       </div>
      </Col>
      </Col>      
  </Row>
  
  </Container>

		</>
	);
};

export default MainNavbar;