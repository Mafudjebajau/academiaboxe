import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="coverbanner">
      <div className="home">
        <section>
          <h1 className="Title">Bem-vindo à Academia de Boxe!</h1>
          <p className="text-lg mt-4 w-50 col-12 col-md-8 col-lg-6">
            Treine como um campeão. Junte-se a nós agora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, perspiciatis incidunt! Esse ratione cupiditate, nam nostrum deserunt maiores quas incidunt eveniet aperiam? Incidunt quia iusto laboriosam ut explicabo tenetur nam?
          </p>
        </section>
      </div>

      <section className="features p-5">
        <h2 className="text-center mb-4">O que oferecemos?</h2>
        <div className="row p-2 justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 feature-item mb-4">
            <h3>🥊 Aulas para Todos os Níveis</h3>
            <p>Desde iniciantes até competidores profissionais.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 feature-item mb-4">
            <h3>🔥 Treinos Intensivos</h3>
            <p>Melhore sua resistência, força e técnica com nossos treinadores experientes.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 feature-item mb-4">
            <h3>💪 Aprimoramento Físico e Mental</h3>
            <p>Desenvolva disciplina, foco e autocontrole enquanto aprende a arte do boxe.</p>
          </div>
          {/* <div className="col-12 col-md-6 col-lg-3 feature-item mb-4">
            <h3>👊 Treinamento Personalizado</h3>
            <p>Planos de treino adaptados para suas necessidades.</p>
          </div> */}
        </div>
      </section>

      <section className="cta-section text-center py-5">
        <h2>Venha Fazer uma Aula Experimental!</h2>
        <p>Não importa se você nunca calçou uma luva antes ou se já tem experiência no ringue, nossa academia está de portas abertas para você.</p>
        <Link to="/contato" className="btn btn-primary">Agende sua Aula Experimental</Link>
      </section>
    </div>
  );
}
