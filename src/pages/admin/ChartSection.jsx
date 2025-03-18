import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement);

  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
    datasets: [{
      label: "Novos Alunos",
      data: ['13','23','54','23','41'],
      backgroundColor: "rgba(14, 20, 93, 0.9)"
    }]
  }; 

const ChartSection = () => {
  return (
    <Card className="p-4 mb-4" data-aos="fade-left">
      <h4>📊 Crescimento de Alunos</h4>
      <Bar data={data} />
    </Card>
  );
};

export default ChartSection;
