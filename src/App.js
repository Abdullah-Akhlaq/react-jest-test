
import { Children } from "react";
import "./App.css";
import Counter from "./components/counter";
import MyComponent from "./components/mycomponent";

const App = () => {
  return <div>
    <Counter/>
    <MyComponent/>
  </div>;
};

export default App;
