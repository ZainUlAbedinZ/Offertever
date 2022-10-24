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
import laag1 from '../../assets/img/laag1.png';
import laag2 from '../../assets/img/laag2.png';
import laag3 from '../../assets/img/laag3.png';

import SlimImage from '../../assets/img/Form_SlimImage.png';

const FormCard5 = props => {
	return (
		<>
			<Card className='px-3 mx-3 mt-3 mb-3 bg-site-primary'>
				<CardHeader className='text-light font-weight-normal border-bottom-1  border-light border-w-75 w-85'>
					<p className='w-100 fs--18 fw--400'>
						Wat is het model van de trap?
					</p>
				</CardHeader>
				<CardBody color='text-light'>
					<Container>
						<Row>
							<Col md='6' className='p-1'>
								<div className='p-3 border bg-light d-flex rounded'>
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
								<div className='p-3 border bg-light d-flex rounded'>
									<div className='align-self-center'>
										<img
											src={laag3}
											alt='Kwart draal'
											className='w-75'
										/>
									</div>
									<div className='align-self-center ml-5'>
										<p className='fw--600 fs--14 text-center'>
											Kwart draal
										</p>
									</div>
								</div>
							</Col>
							<Col md='6' lg='6' className='p-1'>
								<div className='p-3 border bg-light d-flex rounded'>
									<div className='align-self-center'>
										<img
											src={laag1}
											alt='Dubbele draal'
											className='w-75'
										/>
									</div>
									<div className='align-self-center'>
										<p className='fw--600 fs--14 text-left'>
											Dubbele draal
										</p>
									</div>
								</div>
							</Col>
							<Col md='6' lg='6' className='p-1'>
								<div className='p-3 border bg-light d-flex rounded'>
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
				<CardFooter className='text-light text-center'>
					Meer den <strong>109.000</strong> mension gingen je voor
				</CardFooter>
			</Card>
		</>
	);
};

// </div>

// <Row className='w-100'>
{
	/* <Col sm='6' md='6'>
<div className='bg-light py-2 d-flex rounded'>
	<div className='align-self-center'>
		<img
			src={laag1}
			alt='Laag1'
			className='w-100'
		/>
	</div>
	<div className='align-self-center ml-4'>
		<p className='fw--600 fs--14 text-center'>
			Rechte trap
		</p>
	</div>
</div>
</Col> */
}
{
	/* <Col sm='6' md='6'>
<div className='bg-light  d-flex flex-wrap  rounded'>
	<div className='align-self-center'>
		<img
			src={laag2}
			alt='Kwart draal'
			className='w-100'
		/>
	</div>
	<div className='align-self-center ml-4'>
		<p className='fw--600 fs--14 text-center'>
			Kwart draal
		</p>
	</div>
</div>
</Col>
</Row> */
}
{
	/* <Row className='w-100 '>
<Col sm='6' md='6'>
<div className='bg-light  d-flex pl-2 mt-1   rounded'>
	<div className='align-self-center'>
		<img
			src={laag3}
			alt='Dubbele draal'
			className='w-75'
		/>
	</div>
	<div className='align-self-center '>
		<p className='fw--600 fs--14 align-self-center'>
			Dubbele draal
		</p>
	</div>
</div>
</Col>
<Col sm='6' md='6'>
<div className='bg-light  d-flex pl-2 mt-1 py-2  rounded'>
	<div className='align-self-center '>
		<p className='fw--600 fs--14 align-self-center'>
			Overlg
		</p>
	</div>
</div>
</Col>
</Row> */
}
export default FormCard5;
