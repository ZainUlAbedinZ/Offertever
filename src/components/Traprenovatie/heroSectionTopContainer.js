import { Link } from 'react-router-dom';
// import Traprenovatie from './Traprenovatie';
import { Container,Row,Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Label, Input } from 'reactstrap';

import heroTextLogo from '../../assets/img/hero_section_Col_6_text_logo.png';

import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';

import ThumbsUp from '../../assets/img/ThumbCard.png';

const heroSectionTopContainer = props => {
	return (
		<>
			{/* Container */}
				<Row >
					<Col lg='6' md='6' sm='12' xs='12' className='hero_section_col_1'>
						{/* <div className='text-right pt-39 hero_section_col_1_text'> */}
						<Row className='mt-5'>
							<Col md='3'>
							</Col>
							<Col md='9' className='hero_section_col_1_text'>
							{/* <div className='d-block'>  */}
							 <Row className='mt-1'>
								<Col md='12' lg='12' sm='12' className='p-0'>
							<div>
						<img src={heroTextLogo} className='float-right'  rounded width='130px' />
						</div>
						<h3 className='text-light text-left fw-800'>
							Gratis en Vrijblijvend <br />
							offertes aanvragen bij een <br />
							netwerk van Speicallisten 
						</h3>
							</Col>
							   {/* </div>    */}
							  {/* <Col className='d-inline-block'> */}
							<p className='text-light text-justify'>
							Zo krijg je de beste prijs voor jouw traprenovatie!
							<br />Is jouw trap ook toe aan een opknapbeaurt? Dan is dit jouw kans.Het
							Kost je niets en je zit nergens aan vast. Zo kies jij zelf de bestie aanbieder.
							Moeiteloos en zonder verplichtingen. Laat snel je gegevens achter en pak deze kans
							</p>
							{/* </Col> */}
							</Row>
							</Col>
						</Row>
					</Col>
					<Col lg='6' md='6' sm='12' xs='12' className='hero_section_col_2'>
						<Row className='ml-2'>
						<Col lg='9' md='9' sm='9'>
						<img src={HeroTextTopLogo} className='mt-2 text-center' />
						<br />
						{/* Text Top Header */}
						{/* <p className='fs-1 pt-3'>
							
						<strong className='text-site-orange hero_section_col_2_text1'>Bespaar 30%</strong> 
						<span className='text-light font-weight-normal fs-3'>in slechts 2 minuten </span> <br />
						
						
						<strong className='text-site-primary fs-3 fw-700 hero_section_col_2_text2'> Vraag nu voor gratis offertes  aan voor jouw </strong>TRAPRENOVATIE
						<strong className='text-site-orange fs-2'></strong> 
						
						</p> */}
						{/* Text Top Header */}
						<p className='fs-1 pt-3 hero_section_col_2_text1'>
					   <span className='text-site-orange'>Bespaar 30%</span>
						<span className='text-light font-weight-normal fs-3'>in slechts 2 minuten</span> 
						<br />
						{/* font-size: 36px;
letter-spacing: -1px;
color: #03223f;
font-weight: 700;
font-family: "Open Sans"; */}
						<span className='font-weight-bold fs-1 text-site-text'>Vraag nu voor gratis offertes  aan voor jouw</span><span className='text-site-orange'> TRAPRENOVATIE </span> 
						</p>
						</Col>
						</Row>
						<Card
                       className="my-2 bg-site-primary  hero_section_col_2_Card"
                     style={{
                              width: '24rem'
                              }}
                                      >
    <CardHeader className='text-light fs-1 font-weight-normal d-flex border-bottom-1  border-light w-85 hero_section_col_2_Card_header'>
	<Col md='9' lg='9' sm='9'>
    <p className='fw-600 fs-2'>Naar wie mongen we de Gratis offertes sturen? </p>
    </Col>
    <Col md='3' lg='3' sm='3'>
    <img width="60rem" className='float-right' src={ThumbsUp} alt="Card image cap" />
    </Col>
    </CardHeader>
  {/* site-primary */}
  {/* <hr className='text-light w-50'  /> */}
    <CardBody color='text-light'>
     {/* <CardTitle tag="h5">
      Special Title Treatment
    </CardTitle> */}
     <CardText>
		<Row>
			<Col>
      <Label className='text-light'>Postcode</Label>
	  <Input type='text' />
	
	  </Col>
	  <Col>
      <Label className='text-light'>Straat</Label>
	  <Input type='text' />
	  </Col>
	  <Col>
      <Label className='text-light'>Huisnument</Label>
	  <Input type='text' />
	  </Col>
	  <Col>
	  <Label className='text-light pt-2'>WoonPlates</Label>
	  <Input type='text' />
	  </Col>
	  </Row>
	  <Row>
	  {/* <Col> */}
	  <p className='text-light fs-1 ml-4'><small>Door vrijblijvend offertes aan te vragen ga je akhoord met onze<span className='text-primary'>algemene voorwaarden</span></small></p>
	  {/* </Col> */}
	  </Row>
    </CardText>
    <Button className='bg-site-orange text-light'>
     GRATIS OFFERTES VERGELIJKN -{'>'}
    </Button>
  </CardBody>
  <CardFooter className='text-light'>
  Meer den <strong>109.000</strong> mension gingen je voor
  </CardFooter>
</Card>						

					</Col>
				</Row>
		</>
	);
};

export default heroSectionTopContainer;
