import { useState } from "react";
import Hobbies from "./components/Hobbies";
import SongList from "./components/SongList";
import songs from "./data/songs.json";
import "./index.css";
import perfilSrc from "./assets/capybara.jpg"; 


export default function App() {
const [filtro, setFiltro] = useState(0); // filtrar por valoración mínima


return (
<main className="app">
{/* Titulares */}
<h1>DJ Capy</h1>
<h2>Rex</h2>


{/* Imagen */}
<img className="avatar" src={perfilSrc} alt="Capybara T-Rex" />


{/* Enlace */}
<p>
Mi nuevo single: {" "}
<a href="https://youtu.be/wbHHkg9MLNg?si=TYHHrpTizMOKH_DJ" target="_blank" rel="noreferrer">
Capybara
</a>
</p>


{/* Aficiones */}
<section>
<h3>Mis aficiones</h3>
<Hobbies
items={[
"Cantar",
"Danzar",
"Hacer amigos",
"Dormir",
]}
/>
</section>


{/* Lista de canciones */}
<section>
<h3>Mis canciones favoritas</h3>
<SongList songs={songs} />
</section>


<footer>
<small>
React Lab · {new Date().getFullYear()} · Hecho por Pamela Palacios
</small>
</footer>
</main>
);
}