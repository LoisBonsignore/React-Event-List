//controlled inputs with UseRef
import { useRef } from "react";
import "./NewEventForm.css";

export default function NewEventForm({ addEvent }) {
  /* const [title, setTitle] = useState("");
  const [date, setDate] = useState(""); */
  const title = useRef();
  const date = useRef();

  const resetForm = () => {
    title.current.value = "";
    date.current.value = "";
  };

  const handleSubmit = (e) => {
    // empeche le rafraichissement de la page
    e.preventDefault();
    console.log(title, date);

    const event = {
      title: title.current.value,
      date: date.current.value,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          //onChange={(e) => setTitle(e.target.value)}
          /*  controlled input : assigner une value pour l'appairer avec le state. L'input se clear avec la fonction resetForm */
          //value={title}
          ref={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          //onChange={(e) => setDate(e.target.value)}
          //value={date}
          ref={date}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
