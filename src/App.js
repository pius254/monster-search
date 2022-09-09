import "./App.css";
import Navbar from "./components/navbar.component";
import { useEffect, useState } from "react";
import CardList from "./components/card-list.component";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    // console.log(data);
    setUsers(data);
  };
  return (
    <div className="App">
      <Navbar />
      <CardList users={users} />
    </div>
  );
}

export default App;
