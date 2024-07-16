import { Slide } from "@mui/material";

const CardClima = ({ datos }) => {
  return (
    <div className="container">
      <div>
        <article className="bg-shadow py-4">
          <h1 className="city text-center ">
            {datos.name}, {datos.sys.country}
          </h1>
          <div className="group d-flex justify-content-center  ">
            <img
              src={`http://openweathermap.org/img/wn/${datos.weather[0].icon}.png`}
              alt=""
            />
            <h1 className=" temp ">{datos.weather[0].description}</h1>
          </div>
        </article>
        <article className="py-4">
          <Slide direction="right" timeout={800} in={true}>
            <div className="box_container">
              <div className="box">
                <p>Temperatura</p>
                <h1 className="">{datos.main.temp} °C</h1>
              </div>

              <div className="box">
                <p>Humedad</p>
                <h1>{datos.main.humidity}%</h1>
              </div>

              <div className="box">
                <p>Viento</p>
                <h1>{datos.wind.speed}km/h</h1>
              </div>

              <div className="box">
                <p>Sensación térm</p>
                <h1>{datos.main.feels_like}°C</h1>
              </div>
            </div>
          </Slide>
        </article>
      </div>
    </div>
  );
};

export default CardClima;
