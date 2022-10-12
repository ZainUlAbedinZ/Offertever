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

import HeroMainSection from '../components/Traprenovatie/heroSection_MainSection';
import Testimonial from '../components/Traprenovatie/heroSection_testimonial';
import Footer from '../components/Footer/heroSection_footer';
import HeroSection from '../components/Traprenovatie/heroSection_horizontalBar';
import MainNavbar from '../components/Traprenovatie/heroSection_horizontalBar';
import HeroSectionTopContainer from '../components/Header/heroSection_Header';

const Traprenovatie = props => {
	return (
		<>
			{/* Container */}
			<Container className='hero_section' fluid>
				<HeroSectionTopContainer />
			</Container>
			{/* Flex  */}
			<Container className='bg-site-Mainbar-color' fluid>
				<MainNavbar />
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
