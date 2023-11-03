import deadpool from "../assets/images/deadpool.gif";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={deadpool}
        alt="gif deadpool"
        style={{ width: "35%", height: "auto" }}
      />
      <p style={{ color: "whitesmoke", fontSize: "40px" }}>
        Hakuna Matte-moi ça...
      </p>
    </div>
  );
};

export default Loader;
