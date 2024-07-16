import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Formulario = ({ register, handleSubmit, onSubmit, errors }) => {
  return (
    <div className="d-flex justify-content-center py-5">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 form-box"
        style={{ borderRadius: "10px" }}
      >
        <Row className="mb-3 ">
          <Form.Group className="user-box" controlId="validationCustom01">
            <Form.Control
              className="ps-2"
              {...register("city", { required: true })}
              type="text"
            />
            <Form.Label className="ms-3 h6">Nombre de la Ciudad</Form.Label>
            {errors.city?.type === "required" && (
              <p className="text-danger peso-bold">
                Por favor ingresa un nombre de ciudad valida.
              </p>
            )}
          </Form.Group>

          <Form.Group className="my-2 user-box" controlId="validationCustom02">
            <Form.Control
              type="text"
              {...register("country", { required: true })}
            />
            <Form.Label className=" ms-3  h6">Nombre del país</Form.Label>
            {errors.country?.type === "required" && (
              <p className="text-danger peso-bold">
                Por favor ingresa un nombre de País valido.
              </p>
            )}
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-center py-4">
          <button type="submit" className="button button--pen">
            <div className="button__wrapper">
              <span className="button__text">Clima</span>
            </div>
            <div className="characterBox">
              <div className="character wakeup">
                <div className="character__face"></div>
                <div className="charactor__face2"></div>
              </div>
              <div className="character wakeup">
                <div className="character__face"></div>
                <div className="charactor__face2"></div>
              </div>
              <div className="character">
                <div className="character__face"></div>
                <div className="charactor__face2"></div>
              </div>
            </div>
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
