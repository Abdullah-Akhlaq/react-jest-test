

import "./App.css";
import Counter from "./components/counter";
import AntDesignForm from "./components/form";
import MyComponent from "./components/mycomponent";


const App = () => {
  return <div>
    <Counter/>
    <MyComponent/>
    {/* <CRUDTable/> */}
    <AntDesignForm/>
  </div>;
};

export default App;
