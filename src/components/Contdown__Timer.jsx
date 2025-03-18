import Countdown from "react-countdown";
import { Card } from "react-bootstrap";

const eventDate = new Date("2025-03-20T00:00:00"); // Ajuste a data do evento

const CountdownTimer = () => {
  return (
    <Card className="text-center p-3 mb-4 bg-dark shadow-lg shadow-light text-light">
      <h4 className="default-title">Faltam para o Campeonato:</h4>
      <Countdown
        date={eventDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <h2 className="text-danger fw-bold display-5">
            {days}d {hours}h {minutes}m {seconds}s
          </h2>
        )}
      />
    </Card>
  );
};

export default CountdownTimer;
