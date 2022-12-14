import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

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
	FormFeedback,
	Form,
} from 'reactstrap';
import Arrow from '../../assets/img/ArrowSign.png';

import heroTextLogo from '../../assets/img/hero_section_Col_6_text_logo.png';

import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';

import ThumbsUp from '../../assets/img/ThumbCard.png';

import {
	validEmail,
	validPassword,
	validPostCode,
	validStraat,
	vaildHuisnument,
	vaildWoonPlates,
	validHuisnument,
	validWoonPlates,
} from '../FormComponents/regex';

// import PromotionLogo from '../../assets/img/PromotionLogo';

const Header = props => {
	const [postCode, setPostCode] = useState('');
	const [straat, setStraat] = useState('');
	const [huisnument, setHuisnument] = useState('');
	const [WoonPlates, setWoonPlates] = useState('');
	const [trapreData, setTrapreData] = useState({});

	let history = useHistory();

	const checkZipRegex = val => {
		let validName = /^([0-9]{4}[a-zA-Z]{2})$/;
		if (val != '') {
			if (validName.test(val)) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	const checkPostCodeRegex = postCode => {
		let validName = /^([0-9]{4})$/;
		if (postCode != '') {
			if (validName.test(postCode)) {
				return false;
			} else {
				return true;
			}
		}
		//  else {
		// 	return false;
		// }
	};

	const checkStraatRegex = straat => {
		let validName = /^[a-zA-Z ]*$/;
		if (straat != '') {
			if (validName.test(straat)) {
				return false;
			} else {
				return true;
			}
		}
		//  else {
		// 	return false;
		// }
	};

	const checkHuisnumentRegex = val => {
		let validName = /^[0-9]+$/;
		if (val != '') {
			if (validName.test(val)) {
				return false;
			} else {
				return true;
			}
		}
		// else {
		// 	return false;
		// }
	};

	const checkWoonPlatesRegex = WoonPlates => {
		let validName = /^[a-zA-Z ]*$/;
		if (WoonPlates != '') {
			if (validName.test(WoonPlates)) {
				return false;
			} else {
				return true;
			}
		}
		//  else {
		// 	return false;
		// }
	};

	const TraprenovatieData = e => {
		e.preventDefault();
		let update = {
			postCode: postCode,
			straat: straat,
			huisnument: huisnument,
			WoonPlates: WoonPlates,
		};

		// console.log(update, 'update');
		// history.push('/page2', update);
		history.push({
			pathname: '/page2',
			state: { update },
		});
		// setTrapreData(update);
		// console.log(update, 'update======>');
	};

	return (
		<>
			<Container className='px-md-5'>
				<Row className='hero_section_row1'>
					<Col md='6' className='d-none d-md-flex'></Col>
					<Col md='6' className='p-0 pl-md-3'>
						<img
							src={HeroTextTopLogo}
							className='ml-md-4 text-center'
						/>
					</Col>
				</Row>
				<Row className='align-items-end justify-content-center hero_section_row2'>
					<Col
						md='6'
						xs='12'
						className='align-items-end  position-relative justify-content-end py-0 hero_section_row2_Col1'
					>
						<div className='d-flex'>
							<div>
								<img
									src={heroTextLogo}
									className='d-md-flex pl-lg-3 position-absolute end-0 promotion-logo'
									rounded
								/>
							</div>
							<h4 className='fs--28  pl-md-0 fs--35 pl-md-0 text-light text-left mt-5 mt-md-3 fw--600'>
								Gratis en Vrijblijvend <br />
								<span className='w-100'>
									offertes aanvragen bij een <br />
								</span>
								netwerk van Speicallisten ?
							</h4>
						</div>

						<div className='mt-2 p-0 fs-5'>
							<p className='text-light fw-100 shadow-sm'>
								<span className='w-100 fs--22 fw-400'>
									Zo krijg je de beste prijs voor jouw
									traprenovatie! <br />
								</span>
								<p className='text-justify fs--18'>
									Is jouw trap ook toe aan een opknapbeaurt?
									Dan is dit jouw kans.Het Kost je niets en je
									zit nergens aan vast. Zo kies jij zelf de
									bestie aanbieder. Moeiteloos en zonder
									verplichtingen. Laat snel je gegevens achter
									en pak deze kans
								</p>
							</p>
						</div>
					</Col>
					<Col
						md='6'
						xs='12'
						className='align-items-end  pl-0 ml-0 hero_section_row2_Col2'
					>
						<div className='mx-4 mx-md-0 px-md-3 ml-md-4 hero_section_row2_Col2_OffertParagraph'>
							<p className='mt-2 mt-md-2'>
								<span className='text-site-orange fs--28 fw--600'>
									Bespaar 30%
								</span>{' '}
								<span className='text-light font-weight-normal fs--28 fw--600'>
									in slechts 2 minuten
								</span>
								<br />
								<span className='font-weight-bold fs--28 fw--600 text-site-primary'>
									Vraag nu gratis offertes aan
								</span>{' '}
								<span className='font-weight-bold fs--28 fw--600 text-site-primary'>
									voor jouw
								</span>
								<span className='text-site-orange fs--28 fw--600'>
									{' '}
									TRAPRENOVATIE{' '}
								</span>
							</p>
						</div>

						<Card
							style={{ height: '500px' }}
							className='px-3 mx-3 mt-3 mb-3 bg-site-primary card'
						>
							<CardHeader className='text-light fs-1 font-weight-normal d-flex border-bottom-1  border-light border-w-75 w-85'>
								<Col md='8' lg='8' sm='9' className='p-0'>
									<p className='w-100 fs--24 fw--410'>
										Naar wie mongen we <br />
										de Gratis offertes sturen?{' '}
									</p>
								</Col>
								<Col md='4' lg='4' sm='3' className='p-0'>
									<img
										className='float-right w-75'
										src={ThumbsUp}
										alt='Card image cap'
									/>
								</Col>
							</CardHeader>
							<Form onSubmit={TraprenovatieData}>
								<CardBody color='text-light'>
									<CardText>
										<Row>
											<Col md='3' xs='3' className='p-1'>
												<Label className='text-light fs--16 fw--400'>
													Postcode
												</Label>
												<Input
													type='text'
													invalid={checkPostCodeRegex(
														postCode
													)}
													onChange={e =>
														setPostCode(
															e.target.value
														)
													}
													required
												/>
												<FormFeedback invalid>
													<small>
														Invalid Format
													</small>
												</FormFeedback>
											</Col>
											<Col md='5' xs='5' className='p-1'>
												<Label className='text-light fs--16 fw--400'>
													Straat
												</Label>
												<Input
													type='text'
													invalid={checkStraatRegex(
														straat
													)}
													onChange={e =>
														setStraat(
															e.target.value
														)
													}
													required
												/>
												<FormFeedback invalid>
													<small>
														Invalid Format
													</small>
												</FormFeedback>
											</Col>
											<Col md='4' xs='4' className='p-1'>
												<Label className='text-light fs--16 fw--400'>
													Huisnument
												</Label>
												<Input
													type='text'
													invalid={checkHuisnumentRegex(
														huisnument
													)}
													onChange={e =>
														setHuisnument(
															e.target.value
														)
													}
													required
												/>
												<FormFeedback invalid>
													<small>
														Invalid Format
													</small>
												</FormFeedback>
											</Col>
										</Row>
										{/* nEW rOW  */}
										<Row>
											<Col
												md='12'
												xs='12'
												className='p-1'
											>
												<Label className='text-light fs--16 fw--400'>
													WoonPlates
												</Label>
												<Input
													type='text'
													invalid={checkWoonPlatesRegex(
														WoonPlates
													)}
													onChange={e =>
														setWoonPlates(
															e.target.value
														)
													}
													required
												/>
												<FormFeedback invalid>
													<small>
														Invalid Format
													</small>
												</FormFeedback>
											</Col>
										</Row>
										<Row>
											<small className='py-2 ml-3 text-light fw--200'>
												Door vrijblijvend offertes aan
												te vragen ga je akhoord met onze
												<a className='text-site-horizontalBar-color'>
													algemene voorwaarden
												</a>
											</small>
										</Row>
									</CardText>
								</CardBody>
								<div className='text-center'>
									{checkPostCodeRegex(postCode) === false &&
									checkStraatRegex(straat) === false &&
									checkHuisnumentRegex(huisnument) ===
										false &&
									checkWoonPlatesRegex(WoonPlates) ===
										false ? (
										<>
											{/* <Link
												to={{
													pathname: '/page2',
													state: trapreData,
												}}
												className='text-decoration-none'
											> */}
											<Button
												type='submit'
												className='btn d-inline btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0'
											>
												GRATIS OFFERTES VERGELIJKN{' '}
												<span>
													<i
														class='fa fa-arrow-right'
														aria-hidden='true'
													></i>
												</span>
											</Button>
											{/* </Link> */}
										</>
									) : (
										<>
											<Button
												type='button'
												className='btn d-inline btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0'
											>
												GRATIS OFFERTES VERGELIJKN{' '}
												<span>
													<i
														class='fa fa-arrow-right'
														aria-hidden='true'
													></i>
												</span>
											</Button>
										</>
									)}
								</div>
							</Form>
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

export default Header;
