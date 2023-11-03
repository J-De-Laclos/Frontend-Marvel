import thor from "../assets/images/thor.gif";

const Loader02 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ color: "whitesmoke", fontSize: "40px" }}>
        Transmission des données...
      </p>
      <img src={thor} alt="gif thor" style={{ width: "35%", height: "auto" }} />
    </div>
  );
};

export default Loader02;
