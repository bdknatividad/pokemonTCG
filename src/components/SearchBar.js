function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      className="search"
      placeholder="Search Pokémon..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
