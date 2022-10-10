import { Link } from 'react-router-dom';
// import Traprenovatie from './Traprenovatie';
import { Container,Row,Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Label, Input } from 'reactstrap';

import HeroMainSection from '../components/Traprenovatie/heroMainSection';
import Testimonial from '../components/Traprenovatie/testimonial';
import Footer from '../components/Traprenovatie/footer';
import HeroSection from '../components/Traprenovatie/heroSectionTopBar';
import MainNavbar from '../components/Traprenovatie/heroSectionTopBar';
import HeroSectionTopContainer from '../components/Traprenovatie/heroSectionTopContainer';



const Traprenovatie = props => {
	return (
		<>
			{/* Container */}
			<Container className='hero_section' fluid>
				<HeroSectionTopContainer  />
		      </Container>
		{/* Flex  */}
		      <Container className='bg-site-Mainbar-color' fluid>
		           <MainNavbar  />
		      </Container>
		  {/* Section Main */}
	        	  <div className='bg-site-main-color'> 
				  <HeroMainSection  />
				  </div>
		  {/* Testimonial */}
		         <Container className='bg-white' fluid>
		         <Testimonial />
	         </Container>
			 {/* Footer */}
		             <Footer />
		  <br />
		</>
	);
};

export default Traprenovatie;
