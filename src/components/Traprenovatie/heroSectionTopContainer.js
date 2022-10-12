import { Link } from 'react-router-dom';

import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	CardText,
	Button,
	CardFooter,
	Label,
	Input,
} from 'reactstrap';

import heroTextLogo from '../../assets/img/hero_section_Col_6_text_logo.png';

import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';

import ThumbsUp from '../../assets/img/ThumbCard.png';

const heroSectionTopContainer = props => {
	return (
		<>
			<Container>
				{/* justify-content-end */}
				<Row className='align-items-end justify-content-center'>
					{/* mr-5  px-3 */}
					<Col
						md='5'
						xs='12'
						className='align-items-end order-2 justify-content-end order-sm-2 order-md-1 order-xs-2 '
					>
						<div>
							<img
								src={heroTextLogo}
								className='pl-3 d-none d-md-flex pl-md-0  float-right'
								rounded
								width='130px'
							/>
						</div>
						<div className='p-0 justify-content-center mt-5 fs-5'>
							{/* pl-4 */}
							<h4 className=' pl-md-0 fs-3 pl-md-0 text-light text-left mt-3 fw--800'>
								Gratis en Vrijblijvend <br />
								<span className='w-100'>
									offertes aanvragen bij een <br />{' '}
								</span>
								netwerk van Speicallisten ?
							</h4>
							{/* pl-4 */}
							<p className=' pl-md-0 pl-md-0 fs-5 pr-md-5 pr-md-3 text-justify text-light fw-100 shadow-sm'>
								<span className='w-75 font-weight-bold'>
									Zo krijg je de beste prijs voor jouw
									traprenovatie!
								</span>
								.Is jouw trap ook toe aan een opknapbeaurt? Dan
								is dit jouw kans.Het Kost je niets en je zit
								nergens aan vast. Zo kies jij zelf de bestie
								aanbieder. Moeiteloos en zonder verplichtingen.
								Laat snel je gegevens achter en pak deze kans
							</p>
						</div>
					</Col>
					<Col
						md='5'
						xs='12'
						className='hero_section_col_2 align-items-end order-sm-1 order-1 order-md-2 order-xs-1 pl-0 ml-0'
					>
						<img
							src={HeroTextTopLogo}
							className='mt-3 text-center'
							width='140px'
						/>
						<br />
						{/* Text Top Header */}
						<p className='fs-1 mt-3 hero_section_col_2_text1'>
							<span className='text-site-orange fs--30 fw--700'>
								Bespaar 30%
							</span>
							<span className='text-light font-weight-normal fs--20 fw--300'>
								in slechts 2 minuten
							</span>
							<br />
							<span className='font-weight-bold fs--30 fw--700 text-site-text'>
								Vraag nu voor gratis offertes aan voor jouw
							</span>
							<span className='text-site-orange fs--30 fw--700'>
								{' '}
								TRAPRENOVATIE{' '}
							</span>
						</p>

						<Card
							//  w-100 w-sm-100 w-md-75 w-lg-75 w-xl-75
							className='px-3 mt-3 mb-3 bg-site-primary  hero_section_col_2_Card'
						>
							{/*  style={{width: '30rem'}} */}
							<CardHeader className='text-light fs-1 font-weight-normal d-flex border-bottom-1  border-light border-w-75 w-85 hero_section_col_2_Card_header'>
								<Col md='8' lg='8' sm='8' className='p-0'>
									<p className='w-100 fs--20 fw--400'>
										Naar wie mongen we <br />
										de Gratis offertes sturen?{' '}
									</p>
								</Col>
								<Col md='4' lg='4' sm='4'>
									<img
										className='float-right'
										src={ThumbsUp}
										alt='Card image cap'
									/>
								</Col>
							</CardHeader>
							<CardBody color='text-light hero_section_col_2_Card_body'>
								<CardText className='hero_section_col_2_Card_body_text'>
									<Row className='justify-content-center'>
										{/* pr-md-2 */}
										<Col
											className='p-0  w-100 w-md-25'
											lg='3'
											md='3'
											sm='12'
										>
											<Label className='text-light fs--16 fw--600'>
												Postcode
											</Label>
											<Input type='text' />
										</Col>
										<Col
											className='px-0 px-md-2'
											lg='6'
											md='6'
											sm='12'
										>
											<Label className='text-light fs--16 fw--600'>
												Straat
											</Label>
											<Input type='text' />
										</Col>
										{/* pl-md-2 */}
										<Col
											className='p-0  w-100 w-md-25'
											lg='3'
											md='3'
											sm='12'
										>
											<Label className='text-light fs--16 fw--600'>
												Huisnument
											</Label>
											<Input type='text' />
										</Col>
									</Row>
									{/* nEW rOW  */}
									<Row>
										<Col className='p-0'>
											<Label className='text-light pt-2 fs--16 fw--600'>
												WoonPlates
											</Label>
											<Input type='text' />
										</Col>
									</Row>
									<Row>
										{/* <Col className='p-0'> */}
										<small className='text-light font-weight-lighter mt-3 d-block fw--100'>
											Door vrijblijvend offertes aan te
											vragen ga je akhoord met onze
											<a className='text-primary pl-1'>
												algemene voorwaarden
											</a>
										</small>
										{/* </Col> */}
									</Row>
								</CardText>
								<div className='text-center'>
									<Button className='bg-site-orange text-light fs--16 fw--400'>
										GRATIS OFFERTES VERGELIJKN -{'>'}
									</Button>
								</div>
							</CardBody>
							<CardFooter className='text-light text-center'>
								Meer den <strong>109.000</strong> mension gingen
								je voor
							</CardFooter>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default heroSectionTopContainer;
