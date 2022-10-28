import { Link, useLocation, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
import FormCard3 from '../FormComponents/FormCard3';
import FormCard4 from '../FormComponents/FormCard4';
import FormCard5 from '../FormComponents/FormCard5';
import FormCardLaminaat from '../../assets/img/Form_Laminaat.png';
import FormCardhpl from '../../assets/img/Form_HPL_CPL.png';
import FormCardHout from '../../assets/img/Form_Hout.png';
import FormCardPVC from '../../assets/img/Form_PVC.png';

import laag1 from '../../assets/img/laag1.png';
import laag2 from '../../assets/img/laag2.png';
import laag3 from '../../assets/img/laag3.png';

import Stairs1 from '../../assets/img/Stairs1.png';
import Stairs2 from '../../assets/img/Stairs2.png';
import Laminaat from '../../assets/img/Form_Laminaat.png';
import hpl from '../../assets/img/Form_HPL_CPL.png';
import Hout from '../../assets/img/Form_Hout.png';
import PVC from '../../assets/img/Form_PVC.png';
import SlimImage from '../../assets/img/Form_SlimImage.png';

const Header = props => {
	const [active, setActive] = useState(1);
	const [treData, setTreData] = useState({});
	const [activeButton, setActiveButton] = useState([]);
	const [activeCard3, setActiveCard3] = useState([]);
	const [activeCard4, setActiveCard4] = useState([]);
	const [activeCard5, setActiveCard5] = useState([]);
	const [activeCard6, setActiveCard6] = useState([]);
	const [activeCard7, setActiveCard7] = useState([]);
	const [voornaam, setVoorNaam] = useState();
	const [achternaam, setAchternaam] = useState();
	const [email, setEmail] = useState('');
	const [telefoonnummer, setTelefoornnummer] = useState('');
	const [totalButtonData, setTotalButtonData] = useState([]);
	const [totalActiveCard3, setTotalActiveCard3] = useState([]);
	const [totalActiveCard4, setTotalActiveCard4] = useState([]);
	const [totalActiveCard5, setTotalActiveCard5] = useState([]);
	const [totalActiveCard6, setTotalActiveCard6] = useState([]);
	const [totalActiveCard7, setTotalActiveCard7] = useState([]);

	const [totalData, setTotalData] = useState([]);

	const [message, setMessage] = useState(false);

	// useLocation
	// const location = useLocation();
	// const { TraprenovatieData } = location.props;
	const history = useHistory();
	useEffect(() => {
		// console.log(history.location.state.update, 'history.location.update');

		if (history.location.state === null) {
			return history.push('/');
		} else {
			setTreData(history.location.state?.update);
		}
	}, []);

	const NextCard = () => {
		setActive(active + 1);

		if (active === 7) {
			viewFn();
			console.log(ConcatedObj);
		}
	};

	const ConcatedObj = {
		treData: treData,
		totalButtonData: totalButtonData,
		totalActiveCard3: totalActiveCard3,
		totalActiveCard4: totalActiveCard4,
		totalActiveCard5: totalActiveCard5,
		totalActiveCard6: totalActiveCard6,
		totalActiveCard7: totalActiveCard7,
		voornaam: voornaam,
		achternaam: achternaam,
		email: email,
		telefoonnummer: telefoonnummer,
	};
	// view

	const viewFn = () => {
		if (activeButton.includes(1)) {
			totalButtonData.push('Ja');
		}
		if (activeButton.includes(2)) {
			totalButtonData.push('Na');
		}
		if (activeCard3.includes(3)) {
			totalActiveCard3.push('Hout');
		}
		if (activeCard3.includes(4)) {
			totalActiveCard3.push('Laminaat CPL/HPL');
		}
		if (activeCard3.includes(5)) {
			totalActiveCard3.push('PVC/Vinyl');
		}
		if (activeCard3.includes(6)) {
			totalActiveCard3.push('Tapijt');
		}
		if (activeCard3.includes(7)) {
			totalActiveCard3.push('Geen');
		}
		if (activeCard3.includes(8)) {
			totalActiveCard3.push('Overig');
		}

		if (activeCard4.includes(9)) {
			totalActiveCard4.push('Laminaat CPL/HPL');
		}
		if (activeCard4.includes(10)) {
			totalActiveCard4.push('Hout');
		}
		if (activeCard4.includes(11)) {
			totalActiveCard4.push('PVC/Vinyl');
		}
		if (activeCard4.includes(12)) {
			totalActiveCard4.push('Geen idee, adviseer mij');
		}

		if (activeCard5.includes(13)) {
			totalActiveCard5.push('Rechte trap');
		}
		if (activeCard5.includes(14)) {
			totalActiveCard5.push('Kwart draai');
		}
		if (activeCard5.includes(15)) {
			totalActiveCard5.push('Dubbele draai');
		}
		if (activeCard5.includes(16)) {
			totalActiveCard5.push('Overig');
		}

		if (activeCard6.includes(17)) {
			totalActiveCard6.push('Gesloten');
		}
		if (activeCard6.includes(18)) {
			totalActiveCard6.push('Open');
		}

		if (activeCard7.includes(19)) {
			totalActiveCard7.push('In overleg');
		}
		if (activeCard7.includes(20)) {
			totalActiveCard7.push('Binnen 3 maanden');
		}
		if (activeCard7.includes(21)) {
			totalActiveCard7.push('Binnen 3 tot 6 maanden');
		}
	};
	// const viewFn = () => {
	// 	if (activeButton.length > 0) {
	// 		if (activeButton.includes(1)) {
	// 			// == 1
	// 			// text Ja
	// 			// let temp = [...activeButton];
	// 			// if (temp.includes(1)) {
	// 			let arr = [...totalButtonData];
	// 			arr.push('Ja');
	// 			// let unique = [...new Set(Arr)];
	// 			setTotalButtonData(arr);
	// 		}
	// 	} else {
	// 		//text Nee
	// 		let temp = [...activeButton];
	// 		if (activeButton.includes(2)) {
	// 			let arr = [...totalButtonData];
	// 			arr.push('Nee');
	// 			// let unique = [...new Set(Arr)];
	// 			setTotalButtonData(arr);
	// 		}
	// 	}

	// 	if (activeCard3.length > 0) {
	// 		if (activeCard3.includes(3)) {
	// 			// text hout
	// 			let temp = [...activeCard3];
	// 			if (temp.includes(3)) {
	// 				let arr = [...totalActiveCard3];
	// 				arr.push('TextHourt');
	// 				//
	// 				// let unique = [...new Set(Arr)];
	// 				setTotalActiveCard3(arr);
	// 			}
	// 		} else if (activeCard3.includes(4)) {
	// 			//text Laminaat
	// 			let temp = [...activeCard3];
	// 			if (temp.includes(4)) {
	// 				let arr = [...totalActiveCard3];
	// 				arr.push('Laminaat');
	// 				// let unique = [...new Set(Arr)];
	// 				setTotalActiveCard3(arr);
	// 			}
	// 		} else if (activeCard3.includes(5)) {
	// 			// PVC
	// 			let temp = [...activeCard3];
	// 			if (temp.includes(5)) {
	// 				let arr = [...totalActiveCard3];
	// 				arr.push('PVC');
	// 				// let unique = [...new Set(Arr)];
	// 				setTotalActiveCard3(arr);
	// 			}
	// 		} else if (activeCard3.includes(6)) {
	// 			// Tapijt
	// 			// let temp = [...activeCard3];
	// 			// if (temp.includes(6)) {
	// 			let arr = [...totalActiveCard3];
	// 			arr.push('Tapijt');
	// 			// let unique = [...new Set(Arr)];
	// 			setTotalActiveCard3(arr);
	// 			// }
	// 		} else if (activeCard3.includes(7)) {
	// 			// Green
	// 			// let temp = [...activeCard3];
	// 			// if (temp.includes(7)) {
	// 			let arr = [...totalActiveCard3];
	// 			arr.push('Green');
	// 			// let unique = [...new Set(Arr)];
	// 			setTotalActiveCard3(arr);
	// 			// }
	// 		} else {
	// 			// Overig
	// 			// let temp = [...activeCard3];
	// 			if (activeCard3.includes(8)) {
	// 				let arr = [...totalActiveCard3];
	// 				arr.push('Overig');
	// 				// let unique = [...new Set(Arr)];
	// 				setTotalActiveCard3(arr);
	// 			}
	// 		}

	// 		//
	// 		if (activeCard4.length > 0) {
	// 			if (activeCard4.includes(9)) {
	// 				// Text Laminaat
	// 				// let temp = [...activeCard4];
	// 				// if (temp.includes(9)) {
	// 				let arr = [...totalActiveCard4];
	// 				arr.push('Laminaat');
	// 				// let unique = [...new Set(Arr)];
	// 				setTotalActiveCard4(arr);
	// 			}
	// 		} else if (activeCard4.includes(10)) {
	// 			// Hout
	// 			// let temp = [...activeCard4];
	// 			// if (temp.includes(10)) {
	// 			let arr = [...totalActiveCard4];
	// 			arr.push('Hout');
	// 			// let unique = [...new Set(Arr)];
	// 			setTotalActiveCard4(arr);
	// 		}
	// 	} else if (activeCard4.includes(11)) {
	// 		// PVC
	// 		// let temp = [...activeCard4];

	// 		// if (temp.includes(11)) {
	// 		let arr = [...totalActiveCard4];
	// 		arr.push('PVC');
	// 		// let unique = [...new Set(arr)];
	// 		setTotalActiveCard4(arr);
	// 		// }
	// 	} else if (activeCard4.includes(12)) {
	// 		// Geen idee
	// 		// let temp = [...activeCard4];

	// 		// if (temp.includes(12)) {
	// 		let arr = [...totalActiveCard4];
	// 		arr.push('Geen idee');
	// 		// let unique = [...new Set(Arr)];
	// 		setTotalActiveCard4(arr);
	// 		// }
	// 	}

	// 	//
	// 	if (activeCard5.length > 0) {
	// 		if (activeCard5.includes(13)) {
	// 			// Rechte
	// 			// let temp = [...activeCard5];
	// 			// if (temp.includes(13)) {
	// 			let arr = [...totalActiveCard5];
	// 			arr.push('Rechte');
	// 			// let unique = [...new Set(Arr)];
	// 			setTotalActiveCard5(arr);
	// 		}
	// 	} else if (activeCard5.includes(14)) {
	// 		// Kwart daal
	// 		// let temp = [...activeCard5];

	// 		// if (temp.includes(14)) {
	// 		let arr = [...totalActiveCard5];
	// 		arr.push('Kwart daal');
	// 		// let unique = [...new Set(Arr)];
	// 		setTotalActiveCard5(arr);
	// 		// }
	// 	} else if (activeCard5.includes(15)) {
	// 		// Dubble draal
	// 		// let temp = [...activeCard5];

	// 		// if (temp.includes(15)) {
	// 		let arr = [...totalActiveCard5];
	// 		arr.push('Dubble draal');
	// 		// let unique = [...new Set(Arr)];
	// 		setTotalActiveCard5(arr);
	// 		// }
	// 	} else {
	// 		// Overlg
	// 		// let temp = [...activeCard5];

	// 		if (activeCard5.includes(16)) {
	// 			let arr = [...totalActiveCard5];
	// 			arr.push('Overlg');
	// 			// let unique = [...new Set(Arr)];
	// 			setTotalActiveCard5(arr);
	// 		}
	// 		// }
	// 	}

	// 	//
	// 	if (activeCard6.length > 0) {
	// 		if (activeCard6.includes(17)) {
	// 			// Gesloten
	// 			// let temp = [...activeCard6];

	// 			// if (temp.includes(17)) {
	// 			let arr = [...totalActiveCard6];
	// 			arr.push('Gesloten');
	// 			// let unique = [...new Set(Arr)];
	// 			setTotalActiveCard6(arr);
	// 			// }
	// 		} else {
	// 			if (activeCard6.includes(18)) {
	// 				let arr = [...totalActiveCard6];
	// 				arr.push('Open');
	// 				setTotalActiveCard6(arr);
	// 			}
	// 		}
	// 	}
	// 	//
	// 	if (activeCard7.length > 0) {
	// 		if (activeCard7.includes(19)) {
	// 			let arr = [...totalActiveCard7];
	// 			arr.push('In Overlay');
	// 			setTotalActiveCard7(arr);
	// 		} else if (activeCard7.includes(20)) {
	// 			let arr = [...totalActiveCard7];
	// 			arr.push('Binnen 3 maanden');
	// 			setTotalActiveCard7(arr);
	// 		} else {
	// 			if (activeCard7.includes(21)) {
	// 				let arr = [...totalActiveCard7];
	// 				arr.push('Binnen 3 to 6 maanden');
	// 				setTotalActiveCard7(arr);
	// 			}
	// 		}
	// 	}
	// };

	// FormButtonHander
	const FormButtonHandler = val => {
		let temp = [...activeButton];
		let tempVal = temp.find(v => v === val);
		if (tempVal) {
			temp = temp.filter(v => v != tempVal);
		} else {
			temp.push(val);
		}
		setActiveButton(temp);
	};
	// console.log(activeButton, 'ActiveButton');

	// Active Card 1 Function Change background color
	const CardClickHandler = val => {
		let temp = [...activeCard3];

		let tempVal = temp.find(v => v === val);
		// console.log(tempVal, '=====>tempVal');
		if (tempVal) {
			// temp.push(val);
			temp = temp.filter(v => v != tempVal);
		} else {
			temp.push(val);
		}
		setActiveCard3(temp);
	};

	const fourthCardClickHandler = val => {
		let temp = [...activeCard4];
		let tempVal = temp.find(v => v === val);
		// console.log(tempVal, '=====>tempVal');
		if (tempVal) {
			// temp.push(val);
			temp = temp.filter(v => v != tempVal);
		} else {
			temp.push(val);
		}
		setActiveCard4(temp);
	};

	const FifthCardClickHandler = val => {
		let temp = [...activeCard5];
		let tempVal = temp.find(v => v === val);
		// console.log(tempVal, '=====>tempVal');
		if (tempVal) {
			// temp.push(val);
			temp = temp.filter(v => v != tempVal);
		} else {
			temp.push(val);
		}
		setActiveCard5(temp);
	};
	////
	const sixthCardClickHandler = val => {
		let temp = [...activeCard6];
		let tempVal = temp.find(v => v === val);
		// console.log(tempVal, '=====>tempVal');
		if (tempVal) {
			// temp.push(val);
			temp = temp.filter(v => v != tempVal);
		} else {
			temp.push(val);
		}
		setActiveCard6(temp);
	};

	// /  /  /////   ////          ////
	const seventhCardClickHandler = val => {
		let temp = [...activeCard7];
		let tempVal = temp.find(v => v === val);
		// console.log(tempVal, '=====>tempVal');
		if (tempVal) {
			// temp.push(val);
			temp = temp.filter(v => v != tempVal);
		} else {
			temp.push(val);
		}
		setActiveCard7(temp);
	};

	// console.log(activeCard7);

	// Check Regex
	const checkVoorNaamRegex = voornaam => {
		let validName = /^([a-zA-Z]+)$/;
		// let validName = "/^[a-z ,.'-]+$/i";
		if (voornaam != '') {
			if (validName.test(voornaam)) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	const checkAchterNaamRegex = achternaam => {
		let validName = /^([a-zA-Z]{4})/;
		if (achternaam != '') {
			if (validName.test(achternaam)) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	const checkEmailRegex = email => {
		let validName = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		if (email != '') {
			if (validName.test(email)) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	};

	const checkTelefoornNummerRegex = telefoonnummer => {
		let validName = /^([0-9])+$/;
		if (telefoonnummer != '') {
			if (validName.test(telefoonnummer)) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
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

							<h4 className='mb-4 fs--32  pl-md-0 fs--35 pl-md-0 text-light text-left mt-5 mt-md-3 fw--600'>
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
					</Col>
					<Col
						md='6'
						xs='12'
						className='align-items-end  pl-0 ml-0 hero_section_row2_Col2'
					>
						<div className='mx-4 mx-md-0 px-md-3 ml-md-4 hero_section_row2_Col2_OffertParagraph'>
							<p className='mt-2 mt-md-2'>
								<span className='text-site-orange fs--26 fw--600'>
									Bespaar 30%
								</span>{' '}
								<span className='text-light font-weight-normal fs--26 fw--600'>
									in slechts 2 minuten
								</span>
								<br />
								<span className='font-weight-bold fs--26 fw--600 text-site-primary'>
									Ontvang offertes voor traprenoatie en
								</span>{' '}
								<span className='font-weight-bold fs--26 fw--600 text-site-primary'>
									vergelijk bedrijven in jouw regio!
								</span>
							</p>
						</div>
						{active === 1 ? (
							<>
								<Card
									style={{ height: '500px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Ben je eigenaar van de woning?
										</p>
									</CardHeader>
									<CardBody color='text-light text-center'>
										<CardText>
											<Row className='justify-content-around py-4'>
												<Col
													xs='6'
													md='6'
													className='p-1'
												>
													<Button
														className={
															activeButton.includes(
																1
															)
																? 'w-100 px-5 py-3 bg-primary text-dark border border-secondary'
																: 'w-100 px-5 py-3 bg-light text-dark border border-secondary'
														}
														onClick={() => {
															FormButtonHandler(
																1
															);
															setMessage(false);
														}}
													>
														Ja{' '}
													</Button>
												</Col>
												<Col
													xs='6'
													md='6'
													className='p-1'
												>
													<Button
														className={
															activeButton.includes(
																2
															)
																? 'w-100 px-5 py-3 bg-primary text-dark border border-secondary'
																: 'w-100 px-5 py-3 bg-light text-dark border border-secondary'
														}
														onClick={() => {
															FormButtonHandler(
																2
															);
															setMessage(false);
														}}
													>
														Nee{' '}
													</Button>
												</Col>
											</Row>
										</CardText>{' '}
									</CardBody>
									<Row className='mb-0'></Row>
									<Row className='px-5 mt-3 mx-5  '>
										{message === true ? (
											<p className='text-danger'>
												Please Select Atleast One
											</p>
										) : (
											''
										)}
										{activeButton.length > 0 ? (
											<>
												<Button
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
													onClick={NextCard}
												>
													VERDER{' '}
													<span>
														<i
															class='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>{' '}
											</>
										) : (
											<>
												<Button
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
													onClick={() => {
														setMessage(true);
													}}
												>
													VERDER{' '}
													<span>
														<i
															class='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										)}
									</Row>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : active === 2 ? (
							<>
								<Card
									style={{ height: '500px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Wat is de huidige trapbekleding?
										</p>
									</CardHeader>
									<CardBody color='text-light text-center'>
										<Row className='w-100 py-md-2 mx-auto mx-md-0'>
											<Col
												sm='6'
												md='6'
												className='text-center p-1'
											>
												<div
													className={
														activeCard3.includes(3)
															? 'bg-primary  d-flex py-3 h-100 w-100 border border-secondary rounded activeCard3'
															: 'bg-light  d-flex py-3 h-100 w-100 border border-secondary rounded activeCard3'
													}
													onClick={() => {
														CardClickHandler(3);
														setMessage(false);
													}}
												>
													<div className='align-self-center pl-2'>
														<img
															src={Hout}
															alt='Hout'
															className='w-75'
														/>
													</div>
													<div className='align-self-center'>
														<p className='fw--600 fs--14'>
															Hout
														</p>
													</div>
												</div>
											</Col>
											<Col
												sm='6'
												md='6'
												className='mt-3 mt-md-0 text-center p-1'
											>
												<div
													className={
														activeCard3.includes(4)
															? 'bg-primary d-flex  h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
															: 'bg-light d-flex h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
													}
													onClick={() => {
														CardClickHandler(4);
														setMessage(false);
													}}
												>
													<div className='align-self-center pl-2'>
														<img
															src={Laminaat}
															alt='Laminaat'
															className='w-50 mh-100'
														/>
														<img
															src={hpl}
															alt='hpl'
															className='w-50 mh-100'
														/>
													</div>
													<div className='align-self-center pr-2'>
														<span className=' fw--600 fs--14'>
															Laminaat HPL/CPL
														</span>
													</div>
												</div>
											</Col>
										</Row>
										<Row className='w-100 py-md-2 mx-auto mx-md-0'>
											<Col
												sm='6'
												className='mt-3 mt-md-0 text-center p-1'
											>
												<div
													className={
														activeCard3.includes(5)
															? 'bg-primary  d-flex py-2 h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
															: 'bg-light  d-flex py-2 h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
													}
													onClick={() => {
														CardClickHandler(5);
														setMessage(false);
													}}
												>
													<div className='align-self-center pl-2'>
														<img
															src={PVC}
															alt='PVC'
															className='w-75'
														/>
													</div>
													<div className='align-self-center '>
														<p className='fw--600 fs--14 align-self-center'>
															PVC / Vinyl
														</p>
													</div>
												</div>
											</Col>
											<Col
												sm='6'
												className='mt-3 mt-md-0 text-center p-1'
											>
												<div
													className={
														activeCard3.includes(6)
															? 'bg-primary  d-flex py-2 h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
															: 'bg-light  d-flex py-2 h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
													}
													onClick={() => {
														CardClickHandler(6);
														setMessage(false);
													}}
												>
													<div className='align-self-center pl-2'>
														<img
															src={SlimImage}
															alt='SlimImage'
															className='w-75'
														/>
													</div>
													<div className='align-self-center'>
														<p className='fw--600 fs--14'>
															Tapijt
														</p>
													</div>
												</div>
											</Col>
										</Row>
										<Row className='w-100 d-flex py-2 mt-3 mx-auto mx-md-0 mt-md-0'>
											<Col
												sm='6'
												className='text-center p-1'
											>
												<div
													className={
														activeCard3.includes(7)
															? 'bg-primary  d-flex py-2 h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
															: 'bg-light  d-flex py-2 h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
													}
													onClick={() => {
														CardClickHandler(7);
														setMessage(false);
													}}
												>
													<div className='align-self-center ml-4 '>
														<p className='fw--600 fs--16 '>
															Green
														</p>
													</div>
												</div>
											</Col>
											<Col
												sm='6'
												className='mt-3 mt-md-0 text-center p-1'
											>
												<div
													className={
														activeCard3.includes(8)
															? 'bg-primary  d-flex py-2 h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
															: 'bg-light d-flex py-2 h-100 w-100 border border-secondary rounded float-right float-md-none activeCard3'
													}
													onClick={() => {
														CardClickHandler(8);
														setMessage(false);
													}}
												>
													<div className='align-self-center ml-4'>
														<p className='fw--600 fs--16'>
															Overig
														</p>
													</div>
												</div>
											</Col>
										</Row>
									</CardBody>
									<Row className='mb-0'></Row>
									<Row className='px-5 mt-3 mx-5  '>
										{message === true ? (
											<p className='text-danger'>
												Please Select Atleast One
											</p>
										) : (
											''
										)}
										{activeCard3.length > 0 ? (
											<>
												<Button
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
													onClick={NextCard}
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										) : (
											<>
												<Button
													onClick={() => {
														setMessage(true);
													}}
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										)}
									</Row>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : active === 3 ? (
							<>
								<Card
									style={{ height: '500px' }}
									className='h-xs-auto h-sm-auto px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Wat is de gewenste trapbekleding?
										</p>
									</CardHeader>
									<CardBody color='text-light text-center'>
										<Row className='w-100 py-2 mx-auto mx-md-0'>
											<Col
												sm='6'
												md='6'
												className='p-1 text-center'
											>
												<div
													className={
														activeCard4.includes(9)
															? 'bg-primary d-flex pl-2 border border-secondary w-100 h-100  rounded mx-auto mx-md-0 activeCard4'
															: 'bg-light d-flex pl-2 border border-secondary w-100 h-100  rounded mx-auto mx-md-0 activeCard4'
													}
													onClick={() => {
														fourthCardClickHandler(
															9
														);
														setMessage(false);
													}}
												>
													<div className='align-self-center'>
														<img
															src={
																FormCardLaminaat
															}
															alt='Laminaat'
															className='w-50 mh-100'
														/>
														<img
															src={FormCardhpl}
															alt='hpl'
															className='w-50 mh-100'
														/>
													</div>
													<div className='align-self-center pr-2'>
														{/* <p className='fw--600 fs--12 '> */}
														<span className='fw--600 fs--12'>
															Laminaat HPL/CPL
														</span>
													</div>
												</div>
											</Col>
											<Col
												sm='6'
												md='6'
												className='p-1 text-center'
											>
												<div
													className={
														activeCard4.includes(10)
															? 'bg-primary  d-flex py-3 border border-secondary mt-3 mt-md-0  rounded mx-auto mx-md-0 w-100 h-100 activeCard4'
															: 'bg-light  d-flex py-3 border border-secondary mt-3 mt-md-0 rounded mx-auto mx-md-0 w-100 h-100 activeCard4'
													}
													onClick={() => {
														fourthCardClickHandler(
															10
														);
														setMessage(false);
													}}
												>
													<div className='align-self-center pl-2'>
														<img
															src={FormCardHout}
															alt='Hout'
															className='w-50 mh-100'
														/>
													</div>
													{/*  ml-4 */}
													<div className='align-self-center'>
														<p className='fw--600 fs--14'>
															Hout
														</p>
													</div>
												</div>
											</Col>
										</Row>
										<Row className='w-100 py-2 mx-auto mx-md-0 mt-3 mt-md-0'>
											<Col
												sm='6'
												md='6'
												className='p-1 text-center'
											>
												<div
													className={
														activeCard4.includes(11)
															? 'bg-primary  d-flex py-2 pl-2 border border-secondary  rounded mx-auto mx-md-0 w-100 h-100 activeCard4'
															: 'bg-light  d-flex py-2 pl-2 border border-secondary  rounded mx-auto mx-md-0 w-100 h-100 activeCard4'
													}
													onClick={() => {
														fourthCardClickHandler(
															11
														);
														setMessage(false);
													}}
												>
													<div className='align-self-center'>
														<img
															src={FormCardPVC}
															alt='PVC/VINYL'
															className='w-50 mh-100'
														/>
													</div>
													<div className='align-self-center '>
														<p className='fw--600 fs--14 align-self-center'>
															PVC / Vinyl
														</p>
													</div>
												</div>
											</Col>
											<Col
												sm='6'
												md='6'
												className='p-1 text-center'
											>
												<div
													className={
														activeCard4.includes(12)
															? 'bg-primary w-100 h-100  d-flex py-2 pl-2 border border-secondary mt-3 mt-md-0  rounded mx-auto mx-md-0 activeCard4'
															: 'bg-light w-100 h-100  d-flex py-2 pl-2 border border-secondary mt-3 mt-md-0  rounded mx-auto mx-md-0 activeCard4'
													}
													onClick={() => {
														fourthCardClickHandler(
															12
														);
														setMessage(false);
													}}
												>
													<div className='align-self-center text-center'>
														<p className='fw--600 fs--14 text-center align-self-center'>
															Geen idee, adviseer
															mij
														</p>
													</div>
												</div>
											</Col>
										</Row>
									</CardBody>
									<Row className='mb-0'></Row>
									<Row className='px-5 mt-3 mx-5 '>
										{message ? (
											<p className='text-danger'>
												Please Select Atleast One
											</p>
										) : (
											''
										)}
										{activeCard4.length > 0 ? (
											<>
												<Button
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
													onClick={NextCard}
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										) : (
											<>
												<Button
													onClick={() =>
														setMessage(true)
													}
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										)}
									</Row>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : active === 4 ? (
							<>
								<Card
									style={{ height: '500px' }}
									className='h-xs-auto h-sm-auto px-3 mx-3 mt-3 mb-3 bg-site-primary  card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Wat is het model van de trap?
										</p>
									</CardHeader>
									<CardBody color='text-light text-center'>
										<Container>
											<Row className='mx-auto mx-md-0'>
												<Col
													md='6'
													className='p-1 text-center'
												>
													<div
														className={
															activeCard5.includes(
																13
															)
																? 'p-3 border bg-primary d-flex justify-content-center border border-secondary  h-100 w-100 rounded activeCard5'
																: 'p-3 border bg-light d-flex justify-content-center border border-secondary h-100 w-100 rounded activeCard5'
														}
														onClick={() => {
															FifthCardClickHandler(
																13
															);
															setMessage(false);
														}}
													>
														<div className='align-self-center'>
															<img
																src={laag2}
																alt='Rechte trap'
																className='w-100'
															/>
														</div>
														<div className='align-self-center p-2'>
															<span className='fw--600 fs--18 text-center'>
																Rechte trap
															</span>
														</div>
													</div>
												</Col>
												<Col
													md='6'
													className='p-1 text-center'
												>
													<div
														className={
															activeCard5.includes(
																14
															)
																? 'p-3 border bg-primary justify-content-center border border-secondary d-flex h-100 w-100 rounded activeCard5'
																: 'p-3 border bg-light  justify-content-center border border-secondary d-flex h-100 w-100 rounded activeCard5'
														}
														onClick={() => {
															FifthCardClickHandler(
																14
															);
															setMessage(false);
														}}
													>
														<div className='align-self-center'>
															<img
																src={laag3}
																alt='Kwart draal'
																className='w-100'
															/>
														</div>
														<div className='align-self-center p-2'>
															<span className='fw--600 fs--18 text-center'>
																Kwart draal
															</span>
														</div>
													</div>
												</Col>
												<Col
													md='6'
													lg='6'
													className='p-1 text-center'
												>
													<div
														className={
															activeCard5.includes(
																15
															)
																? 'p-3 border bg-primary d-flex justify-content-center border border-secondary  h-100 w-100 rounded activeCard5'
																: 'p-3 border bg-light d-flex justify-content-center border border-secondary h-100 w-100 rounded activeCard5'
														}
														onClick={() => {
															FifthCardClickHandler(
																15
															);
															setMessage(false);
														}}
													>
														<div className='align-self-center'>
															<img
																src={laag1}
																alt='Dubbele draal'
																className='w-100'
															/>
														</div>
														<div className='align-self-center p-2'>
															<span className='fw--600 fs--18 text-center'>
																Dubbele draal
															</span>
														</div>
													</div>
												</Col>
												<Col
													md='6'
													lg='6'
													className='p-1 text-center'
												>
													<div
														className={
															activeCard5.includes(
																16
															)
																? 'p-3 border bg-primary d-flex justify-content-center  border border-secondary h-100 w-100 rounded activeCard5'
																: 'p-3 border bg-light d-flex justify-content-center border border-secondary h-100 w-100 rounded activeCard5'
														}
														onClick={() => {
															FifthCardClickHandler(
																16
															);
															setMessage(false);
														}}
													>
														<div className='align-self-center  p-2'>
															<span className='fw--600 fs--18 text-center'>
																Overlg
															</span>
														</div>
													</div>
												</Col>
											</Row>
										</Container>
									</CardBody>
									<Row className='mb-0'></Row>
									<Row className='px-5 mt-3 mx-5 '>
										{message ? (
											<p className='text-danger'>
												Please Select Atleast One
											</p>
										) : (
											''
										)}
										{activeCard5.length > 0 ? (
											<>
												<Button
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
													onClick={NextCard}
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										) : (
											<>
												<Button
													onClick={() => {
														setMessage(true);
													}}
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										)}
									</Row>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : active === 5 ? (
							<>
								<Card
									style={{ height: '500px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Betreft het een gesloten of open
											trap?
										</p>
									</CardHeader>
									<CardBody color='text-light text-center'>
										<Row className='w-100 py-2 mx-auto mx-md-0'>
											<Col sm='6' md='6'>
												<div
													className={
														activeCard6.includes(17)
															? 'bg-primary  d-flex py-3 border border-secondary rounded activeCard6'
															: 'bg-light  d-flex py-3 border border-secondary rounded activeCard6'
													}
													onClick={() => {
														sixthCardClickHandler(
															17
														);
														setMessage(false);
													}}
												>
													<div className='align-self-center pl-2'>
														<img
															src={Stairs1}
															alt='Gesloten'
															className='w-75'
														/>
													</div>
													<div className='align-self-center m-3'>
														<span className='fw--600 fs--14'>
															Gesloten
														</span>
													</div>
												</div>
											</Col>
											<Col
												sm='6'
												md='6'
												className='mt-3 mt-md-0'
											>
												<div
													className={
														activeCard6.includes(18)
															? 'bg-primary  d-flex py-3 text-center border border-secondary rounded activeCard6'
															: 'bg-light  d-flex py-3 text-center border border-secondary rounded activeCard6'
													}
													onClick={() => {
														sixthCardClickHandler(
															18
														);
														setMessage(false);
													}}
												>
													<div className='align-self-center pl-2'>
														<img
															src={Stairs2}
															alt='Open'
															className='w-75'
														/>
													</div>
													<div className='align-self-center m-3'>
														<span className='fw--600 fs--14'>
															Open
														</span>
													</div>
												</div>
											</Col>
										</Row>
									</CardBody>
									<Row className='mb-0'></Row>
									<Row className='px-5 mt-3 mx-5'>
										{message ? (
											<p className='text-danger'>
												Please Select atleast one
											</p>
										) : (
											''
										)}
										{activeCard6.length > 0 ? (
											<>
												<Button
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
													onClick={NextCard}
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										) : (
											<>
												<Button
													onClick={() => {
														setMessage(true);
													}}
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										)}
									</Row>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : active === 6 ? (
							<>
								<Card
									style={{ height: '500px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Wat is de huidige trapbekleding?
										</p>
									</CardHeader>
									<CardBody color='text-light text-center'>
										<Row
											className={
												activeCard7.includes(19)
													? 'w-100 my-3 bg-primary rounded mx-auto mx-md-0  border border-secondary text-center activeCard7'
													: 'w-100 my-3 bg-light rounded mx-auto mx-md-0 border border-secondary text-center activeCard7'
											}
											onClick={() => {
												seventhCardClickHandler(19);
												setMessage(false);
											}}
										>
											<div
												className={
													activeCard7.includes(19)
														? 'align-self-center bg-primary  mx-auto py-2'
														: 'align-self-center bg-light mx-auto py-2'
												}
												onClick={() => {
													seventhCardClickHandler(19);
													setMessage(false);
												}}
											>
												<div className='justify-content-center'>
													<p className='fw--600 fs--14 mt-3'>
														In overleg
													</p>
												</div>
											</div>
										</Row>
										<Row
											className={
												activeCard7.includes(20)
													? 'w-100 my-3 mx-auto mx-md-0 bg-primary border border-secondary rounded activeCard7'
													: 'w-100 my-3 mx-auto mx-md-0 bg-light border border-secondary rounded activeCard7'
											}
											onClick={() => {
												seventhCardClickHandler(20);
												setMessage(false);
											}}
										>
											<div
												className={
													activeCard7.includes(20)
														? 'align-self-center bg-primary  ml-4 mx-auto py-2 activeCard7'
														: 'align-self-center bg-light  ml-4 mx-auto py-2 activeCard7'
												}
												onClick={() => {
													seventhCardClickHandler(20);
													setMessage(false);
												}}
											>
												<p className='fw--600 fs--14 mt-3'>
													Binnen 3 maanden
												</p>
											</div>
										</Row>
										<Row
											className={
												activeCard7.includes(21)
													? 'w-100 my-2 mx-auto mx-md-0 bg-primary border border-secondary rounded activeCard7'
													: 'w-100 my-2 mx-auto mx-md-0 bg-light border border-secondary rounded activeCard7'
											}
											onClick={() => {
												seventhCardClickHandler(21);
												setMessage(false);
											}}
										>
											<div
												className={
													activeCard7.includes(21)
														? 'align-self-center bg-primary  ml-4 mx-auto py-2 activeCard7'
														: 'align-self-center bg-light ml-4 mx-auto py-2 activeCard7'
												}
												onClick={() => {
													seventhCardClickHandler(21);
													setMessage(false);
												}}
											>
												<p className='fw--600 fs--14 mt-3'>
													Binnen 3 tot 6 maanden
												</p>
											</div>
										</Row>
									</CardBody>
									<br />
									{/* <Row className='mb-0 pl-3'>
										{message ? (
											<p className='text-danger'>
												Please Select atleast one
											</p>
										) : (
											''
										)}
									</Row> */}
									<Row className='px-5 mt-3 mx-5  '>
										<div className='mx-auto'>
											{message ? (
												<p className='text-danger mx-auto'>
													Please Select atleast one
												</p>
											) : (
												''
											)}
										</div>
										{activeCard7.length > 0 ? (
											<>
												<Button
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
													onClick={NextCard}
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										) : (
											<>
												<Button
													onClick={() =>
														setMessage(true)
													}
													className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
												>
													VERDER{' '}
													<span>
														<i
															className='fa fa-arrow-right'
															aria-hidden='true'
														></i>
													</span>
												</Button>
											</>
										)}
									</Row>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : active === 7 ? (
							<>
								<Card
									style={{ height: '500px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light fs-1 font-weight-normal d-flex border-bottom-1  border-light border-w-75 w-85'>
										<Col
											md='8'
											lg='8'
											sm='9'
											className='p-0'
										>
											<p className='w-100 fs--24 fw--410'>
												Jouw contactgegevens
											</p>
										</Col>
										<Col
											md='4'
											lg='4'
											sm='3'
											className='p-0'
										>
											<img
												className='float-right w-50'
												src={ThumbsUp}
												alt='Card image cap'
											/>
										</Col>
									</CardHeader>
									<Form onSubmit={NextCard}>
										<CardBody color='text-light text-center'>
											<CardText className='mb-5 pb-5'>
												<Row>
													<Col
														md='6'
														xs='6'
														className='p-1'
													>
														<Label
															for='Voornaam'
															className='text-light fs--16 fw--400'
														>
															Voornaam*
														</Label>
														<Input
															id='Voornaam'
															type='text'
															invalid={checkVoorNaamRegex(
																voornaam
															)}
															onChange={e =>
																setVoorNaam(
																	e.target
																		.value
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
													<Col
														md='6'
														xs='6'
														className='p-1'
													>
														<Label
															for='Achternaam'
															className='text-light fs--16 fw--400'
														>
															Achternaam*
														</Label>
														<Input
															id='Achternaam'
															type='text'
															invalid={checkAchterNaamRegex(
																achternaam
															)}
															onChange={e =>
																setAchternaam(
																	e.target
																		.value
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
													<Col
														md='6'
														xs='6'
														className='p-1'
													>
														<Label
															for='E-mail'
															className='text-light fs--16 fw--400'
														>
															E-mail*
														</Label>
														<Input
															id='E-mail'
															type='text'
															invalid={
																email == ''
																	? false
																	: checkEmailRegex(
																			email
																	  )
															}
															onChange={e =>
																setEmail(
																	e.target
																		.value
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
													<Col
														md='6'
														xs='6'
														className='p-1'
													>
														<Label
															for='Telefoonnummer'
															className='text-light fs--16 fw--400'
														>
															Telefoonnummer*
														</Label>
														<Input
															id='Telefoonnummer'
															type='text'
															invalid={checkTelefoornNummerRegex(
																telefoonnummer
															)}
															onChange={e =>
																setTelefoornnummer(
																	e.target
																		.value
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
											</CardText>
										</CardBody>
										<div className='d-flex justify-content-center'>
											{checkVoorNaamRegex(voornaam) ===
												false &&
											checkAchterNaamRegex(achternaam) ===
												false &&
											checkEmailRegex(email) === false &&
											checkTelefoornNummerRegex(
												telefoonnummer
											) === false ? (
												<>
													<Button
														className='btn btn-lg bg-site-orange text-light border-light rounded-0 w-50'
														type='submit'
													>
														VERDER{' '}
														<span>
															<i
																className='fa fa-arrow-right'
																aria-hidden='true'
															></i>
														</span>
													</Button>
												</>
											) : (
												<>
													{/* <div className='w-100 text-center'> */}
													<Button
														onClick={() =>
															setMessage(true)
														}
														type='button'
														className='btn btn-lg bg-site-orange text-light border-light rounded-0 w-50'
													>
														VERDER{' '}
														<span>
															<i
																className='fa fa-arrow-right'
																aria-hidden='true'
															></i>
														</span>
													</Button>
													{/* </div> */}
												</>
											)}
										</div>
									</Form>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : active === 8 ? (
							<>
								<Card
									style={{ height: '500px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light fs-1 font-weight-normal d-flex border-bottom-1  border-light border-w-75 w-85'>
										<Col
											md='9'
											lg='9'
											sm='9'
											className='p-0'
										>
											<p className='w-100 fs--24 fw--410'>
												Bedankt voor uw aanvraag
											</p>
										</Col>
										<Col
											md='3'
											lg='3'
											sm='3'
											className='p-0'
										>
											<img
												className='float-right w-50'
												src={ThumbsUp}
												alt='Card image cap'
											/>
										</Col>
									</CardHeader>
									<CardBody color='text-light text-center'>
										<CardText>
											<p className='text-light fw--400'>
												We hebben uw gegevens ontvangen.
											</p>
											<br />
											<p className='text-light fw--400'>
												We sturen u op korte termijn de
												offertes van de
												traprenoatie-specialisten in uw
												buurt toe.
											</p>
										</CardText>
									</CardBody>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : (
							<Link to='/'></Link>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Header;
