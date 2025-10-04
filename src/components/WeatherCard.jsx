const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <div className="weather-info">
        <p className="temperature">{weather.temperature}</p>
        <p className="description">{weather.description || "Sem descrição"}</p>
        <p>Vento: {weather.wind}</p>
        <div className="forecast">
          {weather.forecast?.map((f, index) => (
            <span key={index}>
              {f.day}: {f.temperature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
