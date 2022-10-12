import { Container,Row,Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter, Label, Input } from 'reactstrap';
import hpl from '../../assets/img/hpl.png';
import Hout from '../../assets/img/Hout.png';
import PVC from '../../assets/img/PVC.png';
import Laminaat from '../../assets/img/Laminaat.png';

const HeroSection = props => {
	return (
		<>
        {/* Flex Container */}
          <Container>
            {/* justify-content-end */}
            <div className='px-3'>
            <Row className='justify-content-center'>
                {/* Col ='9' */}
                <Col md='11' sm='12'>
		 <h4 className='text-dark text-center fw--700 pt-4'>TRAPRENOVATIE OFFERTES VERGELIJKN</h4>
         <hr height='50px' width='90px' color='#FF4500' />
        <h5 className='text-site-text text-center text-bold fs-smaller fw--700 fs-2'>Populairste materialen traprenovatie</h5>
        <p className='text-site-text text-center fw--500'>
        Voorhen werd er vaak gekozen om de trap te bekleden met tapijt of hem te schildrence. Deze opties tonens
        echtar snel gebruiksspen, waardon de trap slordig oogt. Tegenwoordig kiest men het meest voor trapbekleding van
        laminaat, HPL/CPL, PVC of hout. Dit ziet er niet allen ontzettened strack uit wanneer het wordt geplaatst; het 
        blijft deze nieuwe look ook nog vele jaren houden!
        </p>
    
        </Col>
        </Row>
        </div>
        </Container>
        <br />
       <Container>
          {/* {/className='ml-0 ml-md-5 d-block px-0 px-md-5'*  */} 
          {/* justify-content-end */}
          <div className='px-3'>
       <Row className='justify-content-center'>
        {/* COl MD='9'; */}
        <Col md='11' sm='12'>
        {/* className='p-0' */}
        <Row>
            <Col lg='6' md='6' sm='12' className='d-flex justify-content-between'>
            {/* width='36px' */}
                <div>
                    <img src={Laminaat} />
                    </div>
                <div>
                <h6 className='text-dark ml-2 ml-md-4'>LAMINAAT</h6>
                <p className='text-dark ml-2 ml-md-4'>Dit materiaal wordt vaat gebruikt voor het renoverence van de trap. Het voordeel  van laminaat is dat het goedkoper is den de onderstandee materialen. Echter gaat het wel minder lang mee en is 
                is laminaat van zichzelf verij glad.
                 </p>
                 </div>
            </Col>   
            <Col lg='6' md='6' sm='12' className='d-flex justify-content-between'>
            {/* width='36px' */}
            <div><img src={hpl}  /></div>
            <div>
            <h6 className='text-dark ml-2 ml-md-4'>HPL/CPL</h6>
                <p className='text-dark ml-2 ml-md-4'>Het meest gekozen materiaal bij traprenovatie is HPL/CPL. Dit is een vorm van laminaat die special is 
                ontwikkeld voor het renoverence van de trap. Het is slijvast, erg duurazaam en bevat enn aluminium legering.
                Deze legering zorgt ervoor dat de treden van zichzelf stroef zin en je een zeer goede grip hebt op de trap. 
                  </p>
                  </div>
            </Col>
            </Row>
            <Row className='p-0'>
            <Col lg='6' md='6' sm='12' className='d-flex justify-content-between'>
            {/* width='36px' */}
            <div><img src={Hout}  /></div>
            <div>
            <h6 className='text-dark ml-2 ml-md-4'>HOUT</h6>
                <p className='text-dark ml-2 ml-md-4'>Overzetterden van hout bieden een klassieke warme look. Ze zijn slijvast en erg sfeervol.
                Het nadeel van hout is dat dit materiaal aanzienlijk duurder is dan andere opties en daarnaast relatief veel periodiek
                onderhoud vereist.
                </p>
            </div>
            </Col>
            
            <Col lg='6' md='6' sm='12' className='d-flex justify-content-between'>
            {/* width='36px' */}
                <div><img src={PVC}  /></div>
                <div>
            <h6 className='text-dark  ml-2 ml-md-4'>PVC</h6>
                <p className='text-dark  ml-2 ml-md-4'>PVC (kunststof) heeft als grote voordeel dat het een geluiddempend effect heeft. Daarnaast is het verkrijgbaar
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
        {/* </div> */}
        </Col>
        </Row>
        </div>
       </Container> 
         <br />	  
		</>
	);
};

export default HeroSection;
