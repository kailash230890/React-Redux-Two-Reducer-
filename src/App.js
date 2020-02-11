import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HoolsCakeContainer from "./components/HoolsCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HoolsCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
