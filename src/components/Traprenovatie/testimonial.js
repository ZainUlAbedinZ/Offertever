import { Container,Row,Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Label, Input } from 'reactstrap';
// import RatingStar from '../../assets/img/Rating.png';
import RatingStar1 from '../../assets/img/StarRating1.png';
import RatingStar2 from '../../assets/img/StarRating2.png';

const Testimonial = props => {
	return (
		<>
		
		 {/* Testimonial */}
         <Container className='bg-white'>
            <h5 className='text-center py-3'>Meer dan <strong className='text-primary'>109.00</strong> tevredence klanten</h5>
             <Row>
                <Col lg='6'>
                <div className='text-center h-3'>
                <img src={RatingStar1}  className='fs-1 text-center'/>
                </div>
                <h5 className='text-center'>Opp een fantastic en correcte snelle manier geholpen!!</h5>
                <p className='text-muted py-3'>Had eerlijk gezegd neit verwacht dat minjn gevraagde opdracht zo snel tot een
                oplossing zou komen. Zeer tevrenden over de dienst van Offertevergelijker.nl
                </p>
                </Col>
                <Col lg='6'>
                  <div className='text-center h-3'>
                <img src={RatingStar2}  className='fs-1 text-center'/>
                </div>
               <h5 className='text-center'> Simpel, snap en goed </h5>
               <p className='text-muted py-3'>Eenvoudige onze wensen doorgegen. IK ben goed op de hoogte gehouden m.b.t de status van mijn aanvraag.
               Snel benaderd door bedrijven en snel afsparken kunnen maken.
               </p>
                </Col>
             </Row>
         </Container>
		  
		</>
	);
};

export default Testimonial;