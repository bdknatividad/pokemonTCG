function PokemonCard({ card }) {
  return (
    <div className="card">
      <img src={card.images.small} alt={card.name} />
      <h3>{card.name}</h3>
      <p>{card.types?.join(", ")}</p>
    </div>
  );
}

export default PokemonCard;