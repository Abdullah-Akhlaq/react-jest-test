import { useRoutes } from "react-router";
import "./App.css";
import Header from "./components/header/header";
import { routes } from "./routes";

const App = () => {
  const pages=useRoutes(routes)
  return (
    <div>
  {pages}
    </div>
  );
};

export default App;
