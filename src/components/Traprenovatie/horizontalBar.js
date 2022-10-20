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
// import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';
import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';
import React from 'react';
import { COMMENT_KEYS } from '@babel/types';
import Checkbox from '../../assets/img/CheckBox.png';

const HorizontalBar = props => {
	return (
		<>
			<Container>
				{/* justify-content-center */}
				<Row className='px-3 justify-content-center w-100 flex-wrap align-items-center'>
					{/* md='9 */}
					{/* <Col
						md='12'
						sm='12'
						className='d-md-flex align-self-center d-col'
					> */}
					<Col
						lg='3'
						md='6'
						sm='12'
						className='py-2 align-self-center py-md-3  d-flex'
					>
						<div className='align-self-center'>
							<img
								src={Checkbox}
								color='light'
								className='text-light'
								height='45px'
								width='45px'
							/>
						</div>
						<div className='ml-3 align-items-end'>
							<p className='fw--600 fs--14 align-self-end mb-0'>
								<span className='fw--700'>GRATIS en </span>{' '}
								<br />
								<span className='fw--700'>
									{' '}
									VERGELIJKN{' '}
								</span>{' '}
								<br />
								<span className='fw--700'>vergelijken</span>
							</p>
						</div>
					</Col>
					<Col
						lg='3'
						md='6'
						sm='12'
						className='py-2 align-self-center py-md-3 d-flex '
					>
						<div className='align-self-center'>
							<img
								src={Checkbox}
								color='light'
								className='text-light'
								height='45px'
								width='45px'
							/>
						</div>
						<div className='ml-3 align-items-end'>
							<p className='fw--700 fs--14 align-self-end mb-0'>
								BESPAAR 30% <br />
								in{' '}
								<span className='fs-6'>slecht 2 minuten</span>
							</p>
						</div>
					</Col>
					<Col
						lg='3'
						md='6'
						sm='12'
						className='py-2 align-self-center py-md-3  d-flex '
					>
						<div className='align-self-center'>
							<img
								src={Checkbox}
								color='light'
								className='text-light'
								width='45px'
								height='45px'
							/>
						</div>
						<div className='ml-3 align-items-end'>
							<p className='fw--700 fs--14 align-self-end mb-0'>
								{' '}
								<span className='fw--700 fs--14'>
									TRAPRENOVATIE{' '}
								</span>{' '}
								<br />
								<span className='fw--700 fs--14'>
									al vanaf $ 2.500{' '}
								</span>{' '}
							</p>
						</div>
					</Col>
					<Col
						lg='3'
						md='6'
						sm='12'
						className='py-2 align-self-center py-md-3  d-flex'
					>
						<div className='align-self-center'>
							<img
								src={Checkbox}
								color='light'
								className='text-light'
								width='45px'
								height='45px'
							/>
						</div>
						<div className='ml-3 align-items-end'>
							<p className='fw--700 fs--14 align-self-end mb-0'>
								<span className='fw--700'>Binnen </span> <br />
								<span className='fw--700'> 1WERKDAG</span>{' '}
								<br />
								<span className='fw--700'>geplaatst</span>
							</p>
						</div>
					</Col>
					{/* </Col> */}
				</Row>
			</Container>
		</>
	);
};

export default HorizontalBar;
