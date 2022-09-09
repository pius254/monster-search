import Card from "./card.component";

const CardList = ({ users }) => (
  <div className="row row-cols-1 row-cols-md-4 g-4">
    {users.map((user) => {
      return <Card user={user} key={user.id} />;
    })}
  </div>
);

export default CardList;
