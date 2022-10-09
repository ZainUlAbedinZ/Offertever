import { Container,Row,Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Label, Input } from 'reactstrap';
import hpl from '../../assets/img/hpl.png';
import Hout from '../../assets/img/Hout.png';
import PVC from '../../assets/img/PVC.png';
import Laminaat from '../../assets/img/Laminaat.png';

const HeroSection = props => {
	return (
		<>
        {/* Flex Container */}
          <Container className='hero_section_main_content'>
		<h3 className='text-dark text-center pt-1'>TRAPRENOVATIE OFFERTES VERGELIJKN</h3>
        <hr height='50px' width='90px' color='#FF4500'/>
        <h5 className='text-site-text text-center text-bold  fs-2'>Populairste materialen traprenovatie</h5>
        <p className='text-site-text text-center'>
        Voorhen werd er vaak gekozen om de trap te bekleden met tapijt of hem te schildrence. Deze opties tonens
        echtar snel gebruiksspen, waardon de trap slordig oogt. Tegenwoordig kiest men het meest voor trapbekleding van
        laminaat, HPL/CPL, PVC of hout. Dit ziet er niet allen ontzettened strack uit wanneer het wordt geplaatst; het 
        blijft deze nieuwe look ook nog vele jaren houden!
        </p>
        </Container>
        <br />
       <Container>  
        <Row>
            <Col lg='6' md='6' className='d-flex justify-content-between'>
                <div><img src={Laminaat} /></div>
                <div>
                <h4 className='text-dark ml-4'>LAMINAAT</h4>
                <p className='text-dark ml-4'>Dit materiaal wordt vaat gebruikt voor het renoverence van de trap. Het voordeel  van laminaat is dat het goedkoper is den de onderstandee materialen. Echter gaat het wel minder lang mee en is 
                is laminaat van zichzelf verij glad.
                 </p>
                 </div>
            </Col> 
            <Col lg='6' md='6' className='d-flex justify-content-between'>
            <div><img src={hpl} /></div>
            <div>
            <h4 className='text-dark ml-4'>HPL/CPL</h4>
                <p className='text-dark ml-4'>Het meest gekozen materiaal bij traprenovatie is HPL/CPL. Dit is een vorm van laminaat die special is 
                ontwikkeld voor het renoverence van de trap. Het is slijvast, erg duurazaam en bevat enn aluminium legering.
                Deze legering zorgt ervoor dat de treden van zichzelf stroef zin en je een zeer goede grip hebt op de trap. 
                  </p>
                  </div>
            </Col>
            </Row>
            <Row>
            <Col lg='6' md='6' className='d-flex justify-content-between'>
            <div><img src={Hout} /></div>
            <div>
            <h4 className='text-dark ml-4'>HOUT</h4>
                <p className='text-dark ml-4'>Overzetterden van hout bieden een klassieke warme look. Ze zijn slijvast en erg sfeervol.
                Het nadeel van hout is dat dit materiaal aanzienlijk duurder is dan andere opties en daarnaast relatief veel periodiek
                onderhoud vereist.
                </p>
            </div>
            </Col>
            <Col lg='6' md='6' className='d-flex justify-content-between'>
                <div><img src={PVC} /></div>
                <div>
            <h4 className='text-dark ml-4'>PVC</h4>
                <p className='text-dark ml-4'>PVC (kunststof) heeft als grote voordeel dat het een geluiddempend effect heeft. Daarnaast is het verkrijgbaar
                in vele printen en bestand tegend vochet.</p>
                </div>
            </Col>
        </Row>
        <br />
        <div className='text-center mx-auto'>
        <Button className='mx-auto bg-site-orange text-light'>
           GRATIS OFFERTES VERGELIJKN -{'>'}
        </Button>
        </div>
       </Container> 
         <br />	  
		</>
	);
};

export default HeroSection;
