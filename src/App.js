import "./App.css";
import Navbar from "./components/navbar.component";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUser(data);
  };
  return (
    <div className="App">
      <Navbar />
      {user.map((user) => (
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
