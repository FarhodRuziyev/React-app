import "./style.scss";
const Button = ({ matn, radius, bg, type }) => {
  return (
    <>
      <div>
        {/* <img src="/assets/images/tesla.jpg" alt="" /> */}
        {/* <button className={radius && "btn"}>{matn}</button> */}
        <button className={`btn ${radius ? "br" : ""}`}>{matn}</button>
      </div>
    </>
  );
};

export default Button;
