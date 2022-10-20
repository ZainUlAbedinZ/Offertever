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
import HeroTextTopLogo from '../../assets/img/hero_section_Col_6_text_logo-top.png';
import React from 'react';
import { COMMENT_KEYS } from '@babel/types';

const Footer = props => {
	return (
		<>
			<div className='bg-site-primary'>
				<Container>
					{/* justify-content-end */}
					<Row className='justify-content-center'>
						<Col md='12' sm='12'>
							{/* <div className='mx-md-5 px-md-5'> */}
							<div className='text-center'>
								<img
									src={HeroTextTopLogo}
									className='mt-2 text-center '
								/>
								<p className='text-muted font-weight-normal mt-2'>
									Offertevergelijker is de
									vergelijkingswebsite voor bouw- en
									verbouwklussen van Nederland.
								</p>
								<Container>
									<hr height='14%' width='80%' color='#777' />
									<Row className='text-center text-muted justify-content-center'>
										<div className='m-2'>Cookie Policy</div>
										<span className='m-2'>|</span>
										<div className='m-2'>Disclaimer</div>
										<span className='m-2'>|</span>
										<div className='m-2'>
											Privacy Statements
										</div>
										<span className='m-2'>|</span>
										<div className='m-2'>Contact</div>
									</Row>
								</Container>
							</div>
						</Col>
					</Row>
					{/* </div> */}
				</Container>
			</div>
		</>
	);
};

export default Footer;
