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
import React from 'react';
import Laminaat from '../../assets/img/Form_Laminaat.png';
import hpl from '../../assets/img/Form_HPL_CPL.png';
import Hout from '../../assets/img/Form_Hout.png';
import PVC from '../../assets/img/Form_PVC.png';
import SlimImage from '../../assets/img/Form_SlimImage.png';

const FormCard = props => {
	return (
		<>
			<Card className='px-3 mx-3 mt-3 mb-3 bg-site-primary'>
				<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
					<p className='w-100 fs--18 fw--400'>
						Wat is de huidige trapbekleding?
					</p>
				</CardHeader>
				<CardBody color='text-light'>
					<Row className='w-100 py-2 '>
						<Col sm='6' md='6'>
							<div className='bg-light  d-flex py-3 rounded'>
								<div className='align-self-center pl-2'>
									<img
										src={Hout}
										alt='Hout'
										className='w-75'
									/>
								</div>
								<div className='align-self-center ml-4'>
									<p className='fw--600 fs--14'>Hout</p>
								</div>
							</div>
						</Col>
						<Col sm='6' md='6'>
							<div className='bg-light d-flex rounded'>
								<div className='align-self-center pl-2'>
									<img
										src={Laminaat}
										alt='Laminaat'
										className='w-50'
									/>
									{/* </div> */}
									{/* <div className='mx-3 align-self-center'> */}
									<img src={hpl} alt='hpl' className='w-50' />
								</div>
								<div className='align-self-center ml-4 pr-2'>
									<p className='fw--600 fs--14 '>Laminaat</p>
									<p className='fw--600 fs--14 '>HPL/CPL</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row className='w-100 py-2'>
						<Col sm='6'>
							<div className='bg-light  d-flex py-2 rounded'>
								<div className='align-self-center pl-2'>
									<img src={PVC} alt='PVC' className='w-75' />
								</div>
								<div className='align-self-center '>
									<p className='fw--600 fs--14 align-self-center'>
										PVC / Vinyl
									</p>
								</div>
							</div>
						</Col>
						<Col sm='6'>
							<div className='bg-light  d-flex py-2 rounded'>
								<div className='align-self-center pl-2'>
									<img
										src={SlimImage}
										alt='SlimImage'
										className='w-75'
									/>
								</div>
								<div className='align-self-center'>
									<p className='fw--600 fs--14'>Tapijt</p>
								</div>
							</div>
						</Col>
					</Row>
					<Row className='w-100 d-flex py-2'>
						<Col sm='6'>
							<div className='bg-light  d-flex py-2 rounded'>
								<div className='align-self-center ml-4'>
									<p className='fw--600 fs--16'>Green</p>
								</div>
							</div>
						</Col>
						<Col sm='6'>
							<div className='bg-light  d-flex py-2 rounded'>
								<div className='align-self-center ml-4'>
									<p className='fw--600 fs--16'>Overig</p>
								</div>
							</div>
						</Col>
					</Row>

					<Row className='px-3 pt-5 mx-3 '>
						<Button className='btn btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0 w-100'>
							VERDER{' '}
							<span>
								<i
									class='fa fa-arrow-right'
									aria-hidden='true'
								></i>
							</span>
						</Button>
					</Row>
				</CardBody>
				<CardFooter className='text-light text-center'>
					Meer den <strong>109.000</strong> mension gingen je voor
				</CardFooter>
			</Card>
		</>
	);
};

export default FormCard;
