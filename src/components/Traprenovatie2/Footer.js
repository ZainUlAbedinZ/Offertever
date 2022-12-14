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

const Footer = () => {
	return (
		<>
			<div className='bg-site-primary'>
				<Container>
					{/* justify-content-end */}
					<Row className='justify-content-center'>
						<Col md='12' sm='12'>
							<div className='mx-md-5 px-md-5'>
								<div className='text-center'>
									<img
										src={HeroTextTopLogo}
										className='mt-2 text-center w-md-25'
									/>
									<p className='text-muted font-weight-normal mt-2'>
										Offertevergelijker is de
										vergelijkingswebsite voor bouw- en
										verbouwklussen van Nederland.
									</p>
									<Container className='m-0 p-0'>
										<hr
											height='14%'
											width='80%'
											color='#777'
										/>
										<Row className='text-center text-muted justify-content-center p-0'>
											<div className='mx-1'>
												Cookie Policy
											</div>
											<span className='mx-1'>|</span>
											<div className='mx-1'>
												Disclaimer
											</div>
											<span className='mx-1'>|</span>
											<div className='mx-1'>
												Privacy Statements
											</div>
											<span className='mx-1'>|</span>
											<div className='mx-1'>Contact</div>
										</Row>
									</Container>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
                <br />
                <br />
                <br />
			</div>
		</>
	);
};

export default Footer;
