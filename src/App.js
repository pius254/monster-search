import "./App.css";
import Navbar from "./components/navbar.component";
import { useEffect, useState } from "react";
import CardList from "./components/card-list.component";
import FormInput from "./components/form.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    // console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <div className="App">
      <Navbar onChangeHandler={onSearchChange} />
      <CardList users={filteredUsers} />
    </div>
  );
};

export default App;
