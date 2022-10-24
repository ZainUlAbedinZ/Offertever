import { Link } from 'react-router-dom';
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

// import { validEmail, validPassword } from './regex.js';

// import PromotionLogo from '../../assets/img/PromotionLogo';

const Header = props => {
	const [active, setActive] = useState(1);
	const [activeButton, setActiveButton] = useState([]);
	const [activeCards, setActiveCards] = useState([]);
	const [activeCard4, setActiveCard4] = useState([]);
	const [activeCard5, setActiveCard5] = useState([]);
	const [activeCard6, setActiveCard6] = useState([]);
	const [activeCard7, setActiveCard7] = useState([]);
	const [voornaam, setVoorNaam] = useState();
	const [achternaam, setAchternaam] = useState();
	const [email, setEmail] = useState();
	const [telefoonnummer, setTelefoornnummer] = useState();

	const NextCard = () => {
		setActive(active + 1);
		// console.log(active, 'active');
	};

	// FormButtonHander
	const FormButtonHandler = val => {
		let temp = [...activeButton];

		let tempVal = temp.find(v => v === val);
		// console.log(tempVal, '=====>tempVal');
		if (tempVal) {
			// temp.push(val);
			temp = temp.filter(v => v != tempVal);
		} else {
			temp.push(val);
		}
		setActiveButton(temp);
	};
	// console.log(activeButton, 'ActiveButton');

	// Active Card 1 Function Change background color
	const CardClickHandler = val => {
		let temp = [...activeCards];

		let tempVal = temp.find(v => v === val);
		// console.log(tempVal, '=====>tempVal');
		if (tempVal) {
			// temp.push(val);
			temp = temp.filter(v => v != tempVal);
		} else {
			temp.push(val);
		}
		setActiveCards(temp);
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
	const checkVoorNaamRegex = val => {
		let validName = /^([a-zA-Z]{4})/;
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

	const checkAchterNaamRegex = val => {
		let validName = /^([a-zA-Z]{4})$/;
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

	const checkEmailRegex = val => {
		let validName = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
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

	const checkTelefoornNummerRegex = val => {
		let validName = /^([0-9]{8})$/;
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
							{/* <div> */}
							<h4 className='mb-4 fs--32  pl-md-0 fs--35 pl-md-0 text-light text-left mt-5 mt-md-3 fw--600'>
								Gratis en Vrijblijvend <br />
								<span className='w-100'>
									offertes aanvragen bij een <br />
								</span>
								netwerk van Speicallisten ?
							</h4>
							{/* </div> */}
						</div>
						{/* </div> */}
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
						{/* </div> */}
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
									style={{ height: '450px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Ben je eigenaar van de woning?
										</p>
									</CardHeader>
									<CardBody color='text-light'>
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
																? 'w-100 px-5 py-3 bg-primary text-dark'
																: 'w-100 px-5 py-3 bg-light text-dark'
														}
														onClick={() =>
															FormButtonHandler(1)
														}
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
																? 'w-100 px-5 py-3 bg-primary text-dark'
																: 'w-100 px-5 py-3 bg-light text-dark'
														}
														onClick={() =>
															FormButtonHandler(2)
														}
													>
														Nee{' '}
													</Button>
												</Col>
											</Row>
										</CardText>
									</CardBody>
									<Row className='px-3 pt-5 mx-3 '>
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
												<Button className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'>
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
									style={{ height: '450px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Wat is de huidige trapbekleding?
										</p>
									</CardHeader>
									<CardBody color='text-light'>
										<Row className='w-100 py-2 '>
											<Col sm='6' md='6'>
												<div
													className={
														activeCards.includes(1)
															? 'bg-primary  d-flex py-3 h-100 w-100 rounded'
															: 'bg-light  d-flex py-3 h-100 w-100 rounded'
													}
													onClick={() =>
														CardClickHandler(1)
													}
												>
													<div className='align-self-center pl-2'>
														<img
															src={Hout}
															alt='Hout'
															className='w-75'
														/>
													</div>
													<div className='align-self-center ml-4'>
														<p className='fw--600 fs--14'>
															Hout
														</p>
													</div>
												</div>
											</Col>
											<Col sm='6' md='6'>
												<div
													className={
														activeCards.includes(2)
															? 'bg-primary d-flex h-100 w-100 rounded'
															: 'bg-light d-flex h-100 w-100 rounded'
													}
													onClick={() =>
														CardClickHandler(2)
													}
												>
													<div className='align-self-center pl-2'>
														<img
															src={Laminaat}
															alt='Laminaat'
															className='w-50'
														/>
														{/* </div> */}
														{/* <div className='mx-3 align-self-center'> */}
														<img
															src={hpl}
															alt='hpl'
															className='w-50'
														/>
													</div>
													<div className='align-self-center ml-4 pr-2'>
														<p className='fw--600 fs--14 '>
															Laminaat
														</p>
														<p className='fw--600 fs--14 '>
															HPL/CPL
														</p>
													</div>
												</div>
											</Col>
										</Row>
										<Row className='w-100 py-2'>
											<Col sm='6'>
												<div
													className={
														activeCards.includes(3)
															? 'bg-primary  d-flex py-2 h-100 w-100 rounded'
															: 'bg-light  d-flex py-2 h-100 w-100 rounded'
													}
													onClick={() =>
														CardClickHandler(3)
													}
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
											<Col sm='6'>
												<div
													className={
														activeCards.includes(4)
															? 'bg-primary  d-flex py-2 h-100 w-100 rounded'
															: 'bg-light  d-flex py-2 h-100 w-100 rounded'
													}
													onClick={() =>
														CardClickHandler(4)
													}
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
										<Row className='w-100 d-flex py-2'>
											<Col sm='6'>
												<div
													className={
														activeCards.includes(5)
															? 'bg-primary  d-flex py-2 h-100 w-100 rounded'
															: 'bg-light  d-flex py-2 h-100 w-100 rounded'
													}
													onClick={() =>
														CardClickHandler(5)
													}
												>
													<div className='align-self-center ml-4'>
														<p className='fw--600 fs--16'>
															Green
														</p>
													</div>
												</div>
											</Col>
											<Col sm='6'>
												<div
													className={
														activeCards.includes(6)
															? 'bg-primary  d-flex py-2 h-100 w-100 rounded'
															: 'bg-light d-flex py-2 h-100 w-100 rounded'
													}
													onClick={() =>
														CardClickHandler(6)
													}
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
									<Row className='px-3 pt-5 mx-3 '>
										{activeCards.length > 0 ? (
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
												<Button className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'>
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
									style={{ height: '450px' }}
									className='h-xs-auto h-sm-auto px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Wat is de gewenste trapbekleding?
										</p>
									</CardHeader>
									<CardBody color='text-light'>
										<Row className='w-100 py-2'>
											<Col sm='6' md='6' className='p-1'>
												<div
													className={
														activeCard4.includes(1)
															? 'bg-primary d-flex pl-2  rounded'
															: 'bg-light d-flex pl-2  rounded'
													}
													onClick={() =>
														fourthCardClickHandler(
															1
														)
													}
												>
													<div className='align-self-center'>
														<img
															src={
																FormCardLaminaat
															}
															alt='Laminaat'
															className='w-50'
														/>
														<img
															src={FormCardhpl}
															alt='hpl'
															className='w-50'
														/>
													</div>
													<div className=''>
														<p className='fw--600 fs--12 '>
															Laminaat
														</p>
														<p className='fw--600 fs--12 '>
															HPL/CPL
														</p>
													</div>
												</div>
											</Col>
											<Col sm='6' md='6' className='p-1'>
												<div
													className={
														activeCard4.includes(2)
															? 'bg-primary  d-flex py-3  rounded'
															: 'bg-light  d-flex py-3  rounded'
													}
													onClick={() =>
														fourthCardClickHandler(
															2
														)
													}
												>
													<div className='align-self-center pl-2'>
														<img
															src={FormCardHout}
															alt='Hout'
															className='w-50'
														/>
													</div>
													<div className='align-self-center ml-4'>
														<p className='fw--600 fs--14'>
															Hout
														</p>
													</div>
												</div>
											</Col>
										</Row>
										<Row className='w-100 py-2'>
											<Col sm='6' md='6' className='p-1'>
												<div
													className={
														activeCard4.includes(3)
															? 'bg-primary  d-flex py-2 pl-2  rounded'
															: 'bg-light  d-flex py-2 pl-2  rounded'
													}
													onClick={() =>
														fourthCardClickHandler(
															3
														)
													}
												>
													<div className='align-self-center'>
														<img
															src={FormCardPVC}
															alt='PVC'
															className='w-50'
														/>
													</div>
													<div className='align-self-center '>
														<p className='fw--600 fs--14 align-self-center'>
															PVC / Vinyl
														</p>
													</div>
												</div>
											</Col>
											<Col sm='6' md='6' className='p-1'>
												<div
													className={
														activeCard4.includes(4)
															? 'bg-primary  d-flex py-2 pl-2  rounded'
															: 'bg-light  d-flex py-2 pl-2  rounded'
													}
													onClick={() =>
														fourthCardClickHandler(
															4
														)
													}
												>
													<div className='align-self-center'>
														<p className='fw--600 fs--14 align-self-center'>
															Geen idee, adviseer
															mij
														</p>
													</div>
												</div>
											</Col>
										</Row>
									</CardBody>
									<Row className='px-3 pt-5 mx-3 '>
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
												<Button className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'>
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
									style={{ height: '450px' }}
									className='h-xs-auto h-sm-auto px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Wat is het model van de trap?
										</p>
									</CardHeader>
									<CardBody color='text-light'>
										<Container>
											<Row>
												<Col md='6' className='p-1'>
													<div
														className={
															activeCard5.includes(
																1
															)
																? 'p-3 border bg-primary d-flex  h-100 w-100 rounded'
																: 'p-3 border bg-light d-flex  h-100 w-100 rounded'
														}
														onClick={() =>
															FifthCardClickHandler(
																1
															)
														}
													>
														<div className='align-self-center'>
															<img
																src={laag2}
																alt='Rechte trap'
																className='w-75'
															/>
														</div>
														<div className='align-self-center ml-5'>
															<p className='fw--600 fs--14 text-center'>
																Rechte trap
															</p>
														</div>
													</div>
												</Col>
												<Col md='6' className='p-1'>
													<div
														className={
															activeCard5.includes(
																2
															)
																? 'p-3 border bg-primary d-flex h-100 w-100 rounded'
																: 'p-3 border bg-light d-flex h-100 w-100 rounded'
														}
														onClick={() =>
															FifthCardClickHandler(
																2
															)
														}
													>
														<div className='align-self-center'>
															<img
																src={laag3}
																alt='Kwart draal'
																className='w-75'
															/>
														</div>
														<div className='align-self-center'>
															<p className='fw--600 fs--14 text-center'>
																Kwart draal
															</p>
														</div>
													</div>
												</Col>
												<Col
													md='6'
													lg='6'
													className='p-1'
												>
													<div
														className={
															activeCard5.includes(
																3
															)
																? 'p-3 border bg-primary d-flex  h-100 w-100 rounded'
																: 'p-3 border bg-light d-flex  h-100 w-100 rounded'
														}
														onClick={() =>
															FifthCardClickHandler(
																3
															)
														}
													>
														<div className='align-self-center'>
															<img
																src={laag1}
																alt='Dubbele draal'
																className='w-75'
															/>
														</div>
														<div className='align-self-center ml-5'>
															<p className='fw--600 fs--14 text-center'>
																Dubbele draal
															</p>
														</div>
													</div>
												</Col>
												<Col
													md='6'
													lg='6'
													className='p-1'
												>
													<div
														className={
															activeCard5.includes(
																4
															)
																? 'p-3 border bg-primary d-flex  h-100 w-100 rounded'
																: 'p-3 border bg-light d-flex  h-100 w-100 rounded'
														}
														onClick={() =>
															FifthCardClickHandler(
																4
															)
														}
													>
														<div className='align-self-center ml-5'>
															<p className='fw--600 fs--24 text-center'>
																Overlg
															</p>
														</div>
													</div>
												</Col>
											</Row>
										</Container>
									</CardBody>
									<Row className='px-3 pt-5 mx-3'>
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
												<Button className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'>
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
									style={{ height: '450px' }}
									className='h-xs-auto h-sm-auto px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Betreft het een gesloten of open
											trap?
										</p>
									</CardHeader>
									<CardBody color='text-light'>
										<Row className='w-100 py-2 '>
											<Col sm='6' md='6'>
												<div
													className={
														activeCard6.includes(1)
															? 'bg-primary  d-flex py-3 rounded'
															: 'bg-light  d-flex py-3 rounded'
													}
													onClick={() =>
														sixthCardClickHandler(1)
													}
												>
													<div className='align-self-center pl-2'>
														<img
															src={Stairs1}
															alt='Gesloten'
															className='w-75'
														/>
													</div>
													<div className='align-self-center ml-4'>
														<p className='fw--600 fs--14'>
															Gesloten
														</p>
													</div>
												</div>
											</Col>
											<Col sm='6' md='6'>
												<div
													className={
														activeCard6.includes(2)
															? 'bg-primary  d-flex py-3 rounded'
															: 'bg-light  d-flex py-3 rounded'
													}
													onClick={() =>
														sixthCardClickHandler(2)
													}
												>
													<div className='align-self-center pl-2'>
														<img
															src={Stairs2}
															alt='Open'
															className='w-75'
														/>
													</div>
													<div className='align-self-center ml-4 pr-2'>
														<p className='fw--600 fs--14'>
															Open
														</p>
													</div>
												</div>
											</Col>
										</Row>
									</CardBody>
									<Row className='px-3 pt-5 mx-3 '>
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
												<Button className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'>
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
									style={{ height: '450px' }}
									className='px-3 mx-3 mt-3 mb-3 bg-site-primary card'
								>
									<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
										<p className='w-100 fs--18 fw--400'>
											Wat is de huidige trapbekleding?
										</p>
									</CardHeader>
									<CardBody color='text-light'>
										<Row
											className={
												activeCard7.includes(1)
													? 'w-100 my-3 bg-primary rounded text-center'
													: 'w-100 my-3 bg-light rounded text-center'
											}
										>
											<div
												className={
													activeCard7.includes(1)
														? 'align-self-center bg-primary  mx-auto py-2'
														: 'align-self-center bg-light mx-auto py-2'
												}
												onClick={() =>
													seventhCardClickHandler(1)
												}
											>
												<p className='fw--600 fs--14 align-self-center'>
													In overleg
												</p>
											</div>
										</Row>
										<Row
											className={
												activeCard7.includes(2)
													? 'w-100 my-3 bg-primary rounded'
													: 'w-100 my-3 bg-light rounded'
											}
										>
											<div
												className={
													activeCard7.includes(2)
														? 'align-self-center bg-primary ml-4 mx-auto py-2'
														: 'align-self-center bg-light ml-4 mx-auto py-2'
												}
												onClick={() =>
													seventhCardClickHandler(2)
												}
											>
												<p className='fw--600 fs--14 '>
													Binnen 3 maanden
												</p>
											</div>
										</Row>
										<Row
											className={
												activeCard7.includes(3)
													? 'w-100 my-2 bg-primary rounded'
													: 'w-100 my-2 bg-light rounded'
											}
											onClick={() =>
												seventhCardClickHandler(3)
											}
										>
											<div
												className={
													activeCard7.includes(3)
														? 'align-self-center bg-primary  ml-4 mx-auto py-2'
														: 'align-self-center bg-light  ml-4 mx-auto py-2'
												}
												onClick={() =>
													seventhCardClickHandler(3)
												}
											>
												<p className='fw--600 fs--14'>
													Binnen 3 tot 6 maanden
												</p>
											</div>
										</Row>
									</CardBody>
									<Row className='px-3 pt-5 mx-3 '>
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
												<Button className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'>
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
									style={{ height: '450px' }}
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
										<CardBody color='text-light'>
											<CardText>
												<Row>
													<Col
														md='6'
														xs='6'
														className='p-1'
													>
														<Label className='text-light fs--16 fw--400'>
															Voornaam*
														</Label>
														<Input
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
														<Label className='text-light fs--16 fw--400'>
															Achternaam*
														</Label>
														<Input
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
														<Label className='text-light fs--16 fw--400'>
															E-mail*
														</Label>
														<Input
															type='text'
															invalid={checkEmailRegex(
																email
															)}
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
														<Label className='text-light fs--16 fw--400'>
															Telefoonnummer*
														</Label>
														<Input
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
										<Row className='px-3 pt-5 mx-3'>
											{checkVoorNaamRegex == false &&
											checkAchterNaamRegex == false &&
											checkEmailRegex == false &&
											checkTelefoornNummerRegex ==
												false &&
											activeCards.length > 0 ? (
												<>
													<Button
														className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'
														type='submit'
														// onClick={NextCard}
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
													<Button className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'>
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
									</Form>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						) : (
							<>
								<Card
									style={{ height: '450px' }}
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
									<CardBody color='text-light'>
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
										{/* <Row className='px-3 pt-5 mx-3 '>
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
											</Button>
										</Row> */}
									</CardBody>
									<CardFooter className='text-light text-center'>
										Meer den <strong>109.000</strong>{' '}
										mension gingen je voor
									</CardFooter>
								</Card>
							</>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Header;
