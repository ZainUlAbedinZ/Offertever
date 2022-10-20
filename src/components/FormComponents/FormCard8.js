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
import ThumbsUp from '../../assets/img/ThumbCard.png';

const FormCard8 = props => {
	return (
		<>
			<Card className='px-3 mx-3 mt-3 mb-3 bg-site-primary'>
				<CardHeader className='text-light fs-1 font-weight-normal d-flex border-bottom-1  border-light border-w-75 w-85'>
					<Col md='8' lg='8' sm='9' className='p-0'>
						<p className='w-100 fs--24 fw--410'>
							Jouw contactgegevens
						</p>
					</Col>
					<Col md='4' lg='4' sm='3' className='p-0'>
						<img
							className='float-right w-50'
							src={ThumbsUp}
							alt='Card image cap'
						/>
					</Col>
				</CardHeader>
				<CardBody color='text-light'>
					<CardText>
						<Row>
							<Col md='6' xs='6' className='p-1'>
								<Label className='text-light fs--16 fw--400'>
									Voornaam*
								</Label>
								<Input type='text' />
							</Col>
							<Col md='6' xs='6' className='p-1'>
								<Label className='text-light fs--16 fw--400'>
									Achternaam*
								</Label>
								<Input type='text' />
							</Col>
						</Row>
						<Row>
							<Col md='6' xs='6' className='p-1'>
								<Label className='text-light fs--16 fw--400'>
									E-mail*
								</Label>
								<Input type='text' />
							</Col>
							<Col md='6' xs='6' className='p-1'>
								<Label className='text-light fs--16 fw--400'>
									Telefoonnummer*
								</Label>
								<Input type='text' />
							</Col>
						</Row>
					</CardText>
					<div className='text-center'>
						<Button className='btn d-inline btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0'>
							GRATIS OFFERTES VERGELIJKN{' '}
							<span>
								<i
									class='fa fa-arrow-right'
									aria-hidden='true'
								></i>
							</span>
						</Button>
					</div>
				</CardBody>
				<CardFooter className='text-light text-center'>
					Meer den <strong>109.000</strong> mension gingen je voor
				</CardFooter>
			</Card>
		</>
	);
};

export default FormCard8;
