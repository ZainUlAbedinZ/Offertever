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
import Arrow from '../../assets/img/ArrowSign.png';

import heroTextLogo from '../../assets/img/hero_section_Col_6_text_logo.png';

import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';

import ThumbsUp from '../../assets/img/ThumbCard.png';

const heroSectionTopContainer = props => {
	return (
		<>
			<Container>
				<Row>
					<Col md='6' className='d-none d-md-flex'></Col>
					<Col md='6'>
						<img
							src={HeroTextTopLogo}
							className='mt-3 text-center'
							width='140px'
						/>
					</Col>
				</Row>
				<Row className='align-items-end justify-content-center'>
					<Col
						md='6'
						xs='12'
						className='align-items-end  position-relative justify-content-end'
					>
						{/* <div className='position-relative'> */}
						<img
							src={heroTextLogo}
							className=' d-md-flex pl-lg-3 position-absolute end-0 promotion-logo'
							rounded

							// style={{
							// 	// right: '0px',
							// 	right: '63px',
							// 	// marginTop: '-59px',
							// 	marginTop: '-59px',
							// }}
						/>
						<h4 className='mb-4 fs--32 pl-md-0 fs--35 pl-md-0 text-light text-left mt-3 fw--600'>
							Gratis en Vrijblijvend <br />
							<span className='w-100'>
								offertes aanvragen bij een <br />
							</span>
							netwerk van Speicallisten ?
						</h4>
						{/* </div> */}
						<div className='mt-3 p-0 fs-5'>
							<p className='pl-md-0 pl-md-0  pr-md-5 pr-md-3  text-light fw-100 shadow-sm'>
								<span className='w-100 fs--22 fw-400'>
									Zo krijg je de beste prijs voor jouw
									traprenovatie! <br />
								</span>
								<p className='text-justify'>
									Is jouw trap ook toe aan een opknapbeaurt?
									Dan is dit jouw kans.Het Kost je niets en je
									zit nergens aan vast. Zo kies jij zelf de
									bestie aanbieder. Moeiteloos en zonder
									verplichtingen. Laat snel je gegevens achter
									en pak deze kans
								</p>
							</p>
						</div>
						{/* </div> */}
					</Col>
					<Col md='6' xs='12' className='align-items-ends  pl-0 ml-0'>
						{/* <img
							src={HeroTextTopLogo}
							className='mt-3 ml-md-3 text-center'
							width='140px'
						/> */}
						<br />

						<p className='mt-3 ml-md-3'>
							<span className='text-site-orange fs--30 fw--600'>
								Bespaar 30%
							</span>
							<span className='text-light font-weight-normal fs--30 fw--600'>
								in slechts 2 minuten
							</span>
							<br />
							<span className='font-weight-bold fs--30 fw--300 text-site-primary'>
								Vraag nu gratis offertes aan voor jouw
							</span>
							<span className='text-site-orange fs--30 fw--500'>
								{' '}
								TRAPRENOVATIE{' '}
							</span>
						</p>

						<Card
							//  w-100 w-sm-100 w-md-75 w-lg-75 w-xl-75
							className='px-3 mt-3 mb-3 bg-site-primary'
						>
							<CardHeader className='text-light fs-1 font-weight-normal d-flex border-bottom-1  border-light border-w-75 w-85'>
								<Col md='8' lg='8' sm='8' className='p-0'>
									<p className='w-100 fs--20 fw--410'>
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
							<CardBody color='text-light'>
								<CardText>
									{/* className='justify-content-center p-0' */}
									{/* className='mx-auto' */}
									<Row>
										{/* pr-md-2 w-100 p-0 w-25 w-md-25  */}
										<Col
											// className='p-0 pr-md-2 w-25 w-md-25'
											md='3'
											xs='3'
											className='p-1'
										>
											<Label className='text-light fs--16 fw--400'>
												Postcode
											</Label>
											<Input type='text' />
										</Col>
										{/* px-0  px-2 px-md-2  className='px-md-2'*/}
										<Col md='5' xs='5' className='p-1'>
											<Label className='text-light fs--16 fw--400'>
												Straat
											</Label>
											<Input type='text' />
										</Col>
										{/* pl-md-2 p-0 pl-2 w-25 w-md-25 */}
										<Col
											// className='p-0 pl-md-2 w-25 w-md-25'
											md='4'
											xs='4'
											className='p-1'
										>
											<Label className='text-light fs--16 fw--400'>
												Huisnument
											</Label>
											<Input type='text' />
										</Col>
									</Row>
									{/* nEW rOW  */}
									<Row>
										{/* className='p-0' */}
										<Col md='12' xs='12' className='p-1'>
											<Label className='text-light fs--16 fw--400'>
												WoonPlates
											</Label>
											<Input type='text' />
										</Col>
									</Row>
									<Row>
										{/* <Col className='ml-2'> */}
										<small className='ml-3 text-light font-weight-lighter d-block fw--200'>
											Door vrijblijvend offertes aan te
											vragen ga je akhoord met onze {''}
											<a className='text-site-horizontalBar-color'>
												algemene voorwaarden
											</a>
										</small>
										{/* <p>
											<span className='fs-1 text-light'>
												Door vrijblijvend offertes aan
												te vragen ga je akhoord met onze
												<a className='text-primary'>
													algemene voorwaarden{' '}
												</a>
											</span>
										</p> */}
										{/* </Col> */}
									</Row>
								</CardText>
								<div className='text-center'>
									<Button className='btn btn-lg bg-site-orange text-light fs--16 fw--400 border-light rounded-0'>
										GRATIS OFFERTES VERGELIJKN{' '}
										<span>
											<img src={Arrow} />
										</span>
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
