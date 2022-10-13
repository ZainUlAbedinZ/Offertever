import { Link } from 'react-router-dom';
// import Traprenovatie from './Traprenovatie';
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

import HeroMainSection from '../components/Traprenovatie/MainSection';
import Testimonial from '../components/Traprenovatie/Testimonial';
import Footer from '../components/Footer/Footer';
import HorizontalBar from '../components/Traprenovatie/HorizontalBar';
import HeroSectionTopContainer from '../components/Header/Header';

const Traprenovatie = props => {
	return (
		<>
			{/* Container */}
			<Container className='hero_section' fluid>
				<HeroSectionTopContainer />
			</Container>
			{/* Flex  */}
			<Container className='bg-site-horizontalBar-color' fluid>
				<HorizontalBar />
			</Container>
			{/* Section Main */}
			<div className='bg-site-main-color'>
				<HeroMainSection />
			</div>
			{/* Testimonial */}
			<Container className='bg-white' fluid>
				<Testimonial />
			</Container>
			{/* Footer */}
			<Footer />
		</>
	);
};

export default Traprenovatie;
