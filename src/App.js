import "./App.css";
import UserDetails from "./UserDetails";

const App = () => {
  const user = {
    id: 1,
    firstName: "ghassan",
  };
  return (
    <div className="App">
      <UserDetails user={user} />
    </div>
  );
};

export default App;
