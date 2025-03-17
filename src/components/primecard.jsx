import Card from 'react-bootstrap/Card';
// import AOS from "aos";
// import "aos/dist/aos.css"
// import { useEffect } from "react";

function PrimeCard() {

    // useEffect(()=>{
    //     AOS.init({duration: 1500, once: false})
    //   },[])
    return (
        <>
            {[
                'Primary',
                'Success',
                'Danger',
                'Warning',  
            ].map((variant) => (
                <Card
                // data-aos="fade-up"
                    bg={'dark'}
                    key={variant}
                    border={variant.toLowerCase()}
                    style={{ width: '18rem' }}
                    className="mb-2 card__hovered"
                >
                   <Card.Header className='text-light' >🥊 Aulas para Todos os Níveis</Card.Header>
                    <Card.Body>
                        <Card.Title>{variant} Card Title </Card.Title>
                        <Card.Text className="text-light">
                            Desde iniciantes até competidores profissionais..
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>

    );
}

export default PrimeCard;

{/* <Card key={vari} border={vari.toLowerCase()} bg='dark' className='text-light' style={{ width: '18rem' }}>
<Card.Header className='text-light' >🥊 Aulas para Todos os Níveis</Card.Header>
<Card.Body className='text-light' >
  <Card.Text className="text-light">
    Desde iniciantes até competidores profissionais..
  </Card.Text>
</Card.Body>
</Card> */}