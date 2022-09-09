const Card = ({ user }) => {
  const { name, id } = user;
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
