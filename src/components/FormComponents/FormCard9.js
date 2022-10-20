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

const FormCard9 = props => {
	return (
		<>
			<Card className='px-3 mx-3 mt-3 mb-3 bg-site-primary'>
				<CardHeader className='text-light fs-1 font-weight-normal d-flex border-bottom-1  border-light border-w-75 w-85'>
					<Col md='8' lg='8' sm='9' className='p-0'>
						<p className='w-100 fs--24 fw--410'>
							Bedankt voor uw aanvraag
						</p>
					</Col>
					<Col md='4' lg='4' sm='3' className='p-0'>
						<img
							className='float-right w-25'
							src={ThumbsUp}
							alt='Card image cap'
						/>
					</Col>
				</CardHeader>
				<CardBody color='text-light'>
					<CardText>
						<p className='text-light'>
							We hebben uw gegevens ontvangen.
						</p>
						<br />
						<p className='text-light'>
							We sturen u op korte termijn de offertes van de
							traprenoatie-specialisten in uw buurt toe.
						</p>
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

export default FormCard9;
