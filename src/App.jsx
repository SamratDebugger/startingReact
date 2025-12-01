import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  // set useState
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setCardData(data));
  }, []);
  return (
    <>
      <Header />
      <section className="cards">
        {cardData?.map((cardInfo) => (
          <Card cardInfo={cardInfo} key={cardInfo.id} />
        ))}
      </section>
    </>
  );
}

export default App;
