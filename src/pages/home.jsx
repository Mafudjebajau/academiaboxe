import { useEffect } from "react";
import { Link } from "react-router-dom";
import BoxingCard from "../components/card"
import ProductSlider from "../components/highlight";
// import Card from 'react-bootstrap/Card';
import PrimeCard from "../components/primecard";
import AOS from "aos";
import "aos/dist/aos.css"
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false, offset: 100 })
  }, [])
  return (

    <div className="coverbanner w-100">
      <div className="home">
        <section>
          <h1 className="Title">Bem-vindo à Academia de Boxe!</h1>
          <p className="text-lg mt-4 col-12 col-md-8 col-lg-6">
            Treine como um campeão. Junte-se a nós agora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, perspiciatis incidunt! Esse ratione cupiditate, nam nostrum deserunt maiores quas incidunt eveniet aperiam? Incidunt quia iusto laboriosam ut explicabo tenetur nam?
          </p>
        </section>
      </div>

      <section className="features p-5 bg-dark  shadow-lg">
        <div data-aos="slide-left">
          <h2 className="text-center mb-4">O que oferecemos?</h2>
        </div>
        <div className="row p-2 justify-content-center gap-5" data-aos="slide-right">
          <PrimeCard />
        </div>
      </section>
      <section className="carousel p-5 shadow-lg ">
        <h2 className="text-center mb-4 text-light">Galeria</h2>
        <ProductSlider />
      </section>

      <section className="cta-section text-center py-5  bg-dark shadow-lg">
        <h2 >Mais de..</h2>
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <h2>
              {isVisible ? <CountUp start={0} end={10000} duration={5} /> : "0"}
            </h2>
          )}
        </ReactVisibilitySensor>
        <Link to="/contato" className="btn btn-primary">Agende sua Aula Experimental</Link>
      </section>
      <section className="features p-5 bg-black gap-5 shadow-lg  ">
        <div data-aos="slide-left">
          <h2 className="text-center mb-4">Nossos pacotes</h2>
        </div>
        <div className="row p-2 justify-content-center gap-5" data-aos="slide-right">
          <BoxingCard

          />
          <BoxingCard
          />
          <BoxingCard
          />
        </div>
      </section>
    </div>
  );
}
