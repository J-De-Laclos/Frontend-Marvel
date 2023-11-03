import thanos from "../assets/images/thanos.gif";

const Loader04 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={thanos}
        alt="gif thor"
        style={{ width: "50%", height: "auto" }}
      />
      <p style={{ color: "whitesmoke", fontSize: "40px" }}>ça arrive...</p>
    </div>
  );
};

export default Loader04;
