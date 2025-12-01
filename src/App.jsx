import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  // set useState
  const [cardData, setCardData] = useState(null);
  return (
    <>
      <Header />
      <section className="cards">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} />
        ))}
      </section>
    </>
  );
}

export default App;
