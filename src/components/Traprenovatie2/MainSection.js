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
import hpl from '../../assets/img/hpl.png';
import Hout from '../../assets/img/Hout.png';
import PVC from '../../assets/img/PVC.png';
import Laminaat from '../../assets/img/Laminaat.png';
import Arrow from '../../assets/img/ArrowSign.png';

const MainSection = props => {
	return (
		<>
			{/* Flex Container */}
			<Container>
				<div className='px-3'>
					<Row className='justify-content-center pt-5'>
						{/* Col; */}
						<Col md='4' sm='4'>
							<div className='align-self-center text-right'>
								<h4 className='text-dark text-right fw--700 mt-2'>
									KOSTEN
								</h4>
								<h4 className='text-dark text-right fw--700 py-0'>
									TRAPRENOVATIE
								</h4>
								{/* hr */}
								<span className='float-right m-0 p-0'>
									<hr
										style={{
											height: '4px',
											width: '80px',
											background: '#FF4500',
										}}
										className='border  border-site-orange'
									/>
								</span>
							</div>
						</Col>
						<Col md='8' sm='8'>
							<p className='fs--16 fw--600 text-justify'>
								Helaas is het niet mogelijk om een exact
								kostenplaatje te geven van traprenovatie. Dit
								komt doordat er veel bepalende factoren zijn.
								Denk hierbij aan het type trap, de gewenste
								trapbekleding, de hoeveelheid treden en de
								arbeidskosten.
							</p>
							<p className='fs--16 fw--600 text-justify'>
								Om je een indicatie te geven van de kosten, vind
								je hieronder een tabel met daarin de gemiddelde
								kosten voor een open trap inclusief btw en
								plaatsing.
							</p>
						</Col>
					</Row>
				</div>
			</Container>
			<br />
			<Container>
				<div className='px-3'>
					<Row className='justify-content-center'>
						{/* COl ; */}
						<Col md='9' sm='9' className=''>
							{/* Table */}
							<table class='table  table-borderless bg-site-table-color'>
								{/* className='border-bottom border-dark' */}
								<thead>
									<tr>
										<th scope='col'></th>
										<th
											scope='col'
											className='fs--18 fw--600 border-bottom border-dark'
										>
											Gemiddelde kosten traprenovatie
										</th>
										<th
											scope='col'
											className='fs--18 fw--600 border-bottom border-dark'
										>
											Prijs per trede*
										</th>
										<th
											scope='col'
											className='fs--18 fw--600 border-bottom border-dark'
										>
											Prijs per trap*
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope='row'>
											<img
												src={Laminaat}
												className='w-50'
											/>
										</th>
										<td>Laminaat</td>
										<td>€ 160</td>
										<td>vanaf € 2.500</td>
									</tr>
									<tr>
										<th scope='row'>
											<img src={hpl} className='w-50' />
										</th>
										<td>HPL/CPL</td>
										<td>€ 160</td>
										<td>vanaf € 2.500</td>
									</tr>
									<tr>
										{/* PVC */}
										<th scope='row'>
											<img src={PVC} className='w-50' />
										</th>
										<td>PVC(kunststof)</td>
										<td>€ 160</td>
										<td>vanaf € 2.500</td>
									</tr>
									<tr>
										<th scope='row'>
											<img src={Hout} className='w-50' />
										</th>
										<td>Hout</td>
										<td>€ 160</td>
										<td>vanaf € 2.500</td>
									</tr>
								</tbody>
							</table>
						</Col>
						<Col md='3' sm='3'>
							<div className='pt-5 mt-5'>
								<p className='text-justify'>
									* Een trap heeft meestal 13 treden.
									Bovengenoemde prijzen gelden slechts als een
									indicatie. Om prijzen op maat te ontvangen
									van betrouwbare specialisten, raden wij je
									aan om een vrijblijvende offerteaanvraag
									doen.
								</p>
							</div>
						</Col>
					</Row>
					<p className='fs--16 fw--600 text-center pt-5 px-3'>
						Traprenovatie is maatwerk. Hierdoor verschillen de
						kosten per specialist aanzienlijk. Vergelijk daarom
						altijd meerdere offertes. Een offerteaanvraag via
						Offertevergelijker is gratis, vrijblijvend en helpt je
						bij het vinden van de beste deal voor jouw trap!
					</p>
					<div className='text-center'>
						<Button className='btn d-inline btn-lg bg-site-orange text-light fs--20 fw--400 border-light rounded-0'>
							GRATIS OFFERTES VERGELIJKN{' '}
							<span>
								<i
									class='fa fa-arrow-right'
									aria-hidden='true'
								></i>
							</span>
						</Button>
					</div>
				</div>
			</Container>
			<br />
		</>
	);
};

export default MainSection;
