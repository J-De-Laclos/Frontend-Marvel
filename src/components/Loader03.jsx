import spiderman from "../assets/images/spiderman.gif";

const Loader03 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={spiderman}
        alt="gif thor"
        style={{ width: "50%", height: "auto" }}
      />
      <p style={{ color: "whitesmoke", fontSize: "40px" }}>
        Coucou les amis...
      </p>
    </div>
  );
};

export default Loader03;
