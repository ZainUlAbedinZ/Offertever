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

const MainNavbar = props => {
	return (
		<>
			<Container>
				{/* justify-content-center */}
				<Row className='justify-content-center w-100 flex-wrap align-items-center'>
					{/* md='9 */}
					<Col
						md='12'
						sm='12'
						className='d-md-flex align-self-center d-col'
					>
						<Col
							md='3'
							sm='8'
							className='py-2 align-self-center py-md-3  d-flex'
						>
							<div className='align-self-center'>
								<img
									src={Checkbox}
									color='light'
									className='text-light'
									height='50px'
									width='50px'
								/>
							</div>
							<div className='ml-3'>
								<p className='fw--600 '>
									GRATIS en <br /> VERGELIJKN <br />
									vergelijken{' '}
								</p>
							</div>
						</Col>
						<Col
							md='3'
							sm='8'
							className='py-2 align-self-center py-md-3 d-flex '
						>
							<div className='align-self-center'>
								<img
									src={Checkbox}
									color='light'
									className='text-light'
									height='50px'
									width='50px'
								/>
							</div>
							<div className='ml-3'>
								<p className='fw--600'>
									BESPAAR 30% <br />
									in{' '}
									<span className='fs-6'>
										slecht 2 minuten
									</span>
								</p>
							</div>
						</Col>
						<Col
							md='3'
							sm='8'
							className='py-2 align-self-center py-md-3  d-flex '
						>
							<div className='align-self-center'>
								<img
									src={Checkbox}
									color='light'
									className='text-light'
									width='50px'
									height='50px'
								/>
							</div>
							<div className='ml-3'>
								<p className='fw--600'>
									{' '}
									<span className='fw--600'>
										TRAPRENOVATIE{' '}
									</span>{' '}
									<br />
									<span className='fw--600'>
										al vanaf $ 2.500{' '}
									</span>{' '}
								</p>
							</div>
						</Col>
						<Col
							md='3'
							sm='8'
							className='py-2 align-self-center py-md-3  d-flex'
						>
							<div className='align-self-center'>
								<img
									src={Checkbox}
									color='light'
									className='text-light'
									width='50px'
									height='50px'
								/>
							</div>
							<div className='ml-3 align-items-end'>
								<p className='fw--600'>
									Binnen <br /> 1WERKDAG <br /> geplaatst
								</p>
							</div>
						</Col>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default MainNavbar;
