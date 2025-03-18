import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import BoxingCard from "../components/card"
// import ProductSlider from "../components/highlight";
// import Card from 'react-bootstrap/Card';
import PrimeCard from "../components/primecard";
import Section_Offers from "../components/Section_Offers";
import AOS from "aos";
import "aos/dist/aos.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import CountdownTimer from "../components/Contdown__Timer";
import EventList from "../components/Event_list";
// import MyGallery from "../components/Mygalery";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false })
  }, [])

  return (
    <>
      <section>
        <div className="bg-st-row text-center">
          <div className="cover-filter pt-plus px-5">
            <div className="d-f">
              <h1 className="Title mb-5 fw-bold">Bem-vindo a melhor academia de boxe!</h1>
            </div>
            <Link to={"/register"}>
              <Button className="btn-lg mt-5" variant="light">
                Inscrever
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* second section */}
      <section id="offers">
        <Section_Offers></Section_Offers>
      </section>

      {/* trd section*/}
      <section>
        <PrimeCard
          url={"/homebg.jpg"}
          mediatype={"img"}
          title={"Boxe fight"}
          items={["la mfd miek llsf", "ola", "voila"]}
        >
        </PrimeCard>
        <PrimeCard
          url={"/video.webm"}
          mediatype={"video"}
          title={"Karate"}
          items={["la mfd miek llsf", "ola matreica", "voila juslti"]}
        >
        </PrimeCard>
        <PrimeCard
          url={"/homebg.jpg"}
          mediatype={"img"}
          title={"Jiu Jitsu"}
          items={["la mfd miek llsf", "ola", "voila"]}
        >
        </PrimeCard>
      </section>
      <section className="bg-default">
        <h1 className="ps-4">Eventos</h1>
        <EventList></EventList>
      </section>

    </>
  );
}
