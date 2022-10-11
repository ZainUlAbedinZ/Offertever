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
{/*  */}
  <Row className=' w-100 flex-wrap flex-stretch'>
    {/* md='9 */}
        <Col md='11' sm='12' className='d-md-flex d-col'>
            
    <Col lg='3' md='3' sm='8' className='py-2  py-md-4  d-flex'>
       <div >
         {/*className='w-50'  */}
       {/* h-50 w-25 */}
        <img src={Checkbox} color='light' className='text-light' /> 
       </div>
           <div><strong className='d-inline-block text-left'>GRATIS en VERGELIJKN vergelijken </strong> 
           </div>
          </Col>
      <Col lg='3' md='3' sm='8' className='py-2  py-md-4 d-flex '>
        {/* h-50 w-25 */
        }
        {/* className='w-50' */}
        <div >
      <img src={Checkbox} color='light'  className='text-light ' /> 
      </div>
     <strong className='d-inline-block text-left'>BESPAAR 30% in<span className='fs-6'>slechts 2 minuten</span></strong>
      </Col>
      <Col lg='3' md='3' sm='8' className='py-2  py-md-4  d-flex '>
        <div >
            {/* className='w-50' */}
            {/*  h-50 w-25 */}
      <img src={Checkbox} color='light' className='text-light' />
      </div>
       <strong className='d-inline-block text-left'>TRAPRENOVATIE al vanaf $ 2.500 </strong>
          </Col>
      <Col lg='3' md='3' sm='8' className='py-2  py-md-4  d-flex'>
      <div >
        {/* className='w-50' */}
        {/*  h-50 w-25 */}
       <img src={Checkbox} color='light' className='text-light text-left' /> 
       </div>
       <strong className='d-inline-block text-left'>Binnen 1WERKDAG geplaatst</strong>
      </Col>
      </Col>      
  </Row>
  
  </Container>

		</>
	);
};

export default MainNavbar;