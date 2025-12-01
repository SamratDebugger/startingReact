import "./card.css";
export default function Card({ cardInfo }) {
  return (
    <div className="card">
      <h2>{cardInfo.title}</h2>
      <p>{cardInfo.body}</p>
    </div>
  );
}
