import { useState } from "react";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Games />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <img src="img/index.jpg" alt="Game Nation" />
      </nav>
    </div>
  );
}

function Header() {
  return (
    <div>
      <header>
        <img src="img/header.png" alt="Game On" />
      </header>
    </div>
  );
}

function Games() {
  return (
    <main>
      <h1>Games</h1>
      <Game
        photoName="img/call of duty.png"
        info="Representa situaciones de combate y guerra desde perspectivas históricas o contemporáneas."
        name="Call Of Duty"
      />
      <Game
        photoName="img/fortnite.jpg"
        info="Se centra principalmente en la supervivencia en un mundo postapocalíptico."
        name="Fortnite"
      />
      <Game
        photoName="img/league.jpg"
        info="Gira en torno a la competencia estratégica entre dos equipos de jugadores."
        name="League Of Legends"
      />
      <Game
        photoName="img/minecraft.png"
        info="Se desarrolla en un vasto mundo tridimensional compuesto por bosques, montañas, desiertos, océanos, cuevas."
        name="Minecraft"
      />
    </main>
  );
}

function Game({ name, info, photoName }) {
  const [color, setColor] = useState("black");

  function changeColor() {
    const newColor = color === "black" ? "blue" : "black";
    setColor(newColor);
  }

  return (
    <div className="cards" style={{ backgroundColor: color }}>
      <img src={photoName} alt={name} />
      <div>
        <p>{info}</p>
        <button onClick={() => changeColor()}>Comprar</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <span>© 2024 Game Nation</span>
      </footer>
    </div>
  );
}
