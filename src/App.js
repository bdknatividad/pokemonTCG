import { useGetCardsQuery } from "./features/pokemonApi";
import { useState } from "react";
import "./App.css";

function App() {
  const { data, isLoading, error } = useGetCardsQuery();
  const [selectedCard, setSelectedCard] = useState(null);

  if (isLoading) return <h2 className="status">Loading...</h2>;
  if (error) return <h2 className="status">Error loading data</h2>;

  return (
    <div className="app">
      <h1>Pokémon TCG Explorer</h1>

      <div className="grid">
        {data.data.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => setSelectedCard(card)}
          >
            <img src={card.images.small} alt={card.name} />
            <h3>{card.name}</h3>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCard.images.large} alt={selectedCard.name} />
            <h2>{selectedCard.name}</h2>
            <p><strong>Types:</strong> {selectedCard.types?.join(", ")}</p>
            <p><strong>Rarity:</strong> {selectedCard.rarity}</p>
            <button onClick={() => setSelectedCard(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;