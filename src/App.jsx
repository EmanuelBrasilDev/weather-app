import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city) return;
    try {
      setError("");

      const response = await fetch(
        `https://goweather.herokuapp.com/weather/${city}`
      );
      const data = await response.json();

      if (!data.temperature) {
        setWeather(null);
        setError("Cidade não encontrada");
      } else {
        setWeather(data);
      }
    } catch (err) {
      setWeather(null);
      setError("Erro ao buscar dados do clima.");
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="app-container">
      <h1>Clima App 🌤️</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleRefresh} className="refresh-button">
          Atualizar
        </button>
      </div>

      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
