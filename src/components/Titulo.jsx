const Titulo = ({ title }) => {
  return (
    <section>
      <h1
        className="text-center pt-5 fs-1 text-white"
        style={{ fontWeight: "bold" }}
      >
        {title}
      </h1>
    </section>
  );
};

export default Titulo;
