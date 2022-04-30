import { Link } from "react-router-dom";

const Card = ({ title, desc, img, id }) => {
  return (
    <div className="Card">
      <Link className="link" to={`/post/${id}`}>
        <span className="title">{title}</span>
        <img src={img} alt="img" className="img" />
        <p className="desc">{desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
