import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { consultarApi, setDataForm } from "../slices/climaSlice";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Spinner } from "react-bootstrap";
import cartel from "../assets/cartel.png";
import Formulario from "../components/Formulario";
import CardClima from "../components/CardClima";
import Titulo from "../components/Titulo";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { dataClima, dataForm, mostrarSpinner, error } = useSelector(
    (state) => state.clima
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    dispatch(consultarApi(dataForm));
  }, [dataForm, dispatch]);

  const onSubmit = (data) => {
    if (!errors.city && !errors.country) {
      dispatch(setDataForm(data));
      Swal.fire({
        icon: "success",
        title: "Datos Enviado. Espere su consulta por favor.",
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "No se pudo enviar los datos.",
      });
    }
  };

  const getBgClass = () => {
    if (dataClima.main && dataClima.main.temp) {
      const temp = dataClima.main.temp;
      if (temp > 25) {
        return "bg-sunny";
      } else if (temp > 15) {
        return "bg-cloudy";
      } else {
        return "bg-rainy";
      }
    }
    return "bg-sunny"; // Fallback por si no hay datos de temperatura
  };

  return (
    <section className={` ${getBgClass()}`}>
      <section>
        <Titulo title="ClimApp" />
      </section>
      <div className="d-flex justify-content-center py-5">
        <Formulario
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
      </div>
      <section>
        {error ? (
          <img className="cartel" src={cartel} alt="" />
        ) : dataClima.length === 0 ? (
          ""
        ) : mostrarSpinner ? (
          <div className="my-5 text-center">
            <Spinner className="fs-1" animation="border" variant="light" />
          </div>
        ) : (
          <div className="container">
            <CardClima datos={dataClima} />
          </div>
        )}
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
};

export default HomeScreen;
