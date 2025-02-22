import { useEffect, useState } from "react";
import axios from "axios";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/backend/api/events.php").then((res) => {
      setEvents(res.data);
    });
  }, []);

  return (
    <div>
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Próximos Eventos 🏆</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id} className="border p-4 mb-4">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p>{event.description}</p>
              <p className="text-gray-500">{event.date} - {event.location}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
