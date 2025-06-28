import { useState } from "react";

import Component from "./component/week_1/functionComponent";
import Component1 from "./component/week_1/classComponent";
import Props from "./component/week_1/props";
import List from "./component/week_1/list";
import ListExersise from "./component/week_1/ListExersise";
import Images from "./component/week_1/insertImages";
import img from "./assets/images/1.jpg";
import Click from "./component/week_1/EventHandler/click";
import Copy from "./component/week_1/EventHandler/oncopy";
import Change from "./component/week_1/EventHandler/onchange";
import Exersise1 from "./component/week_1/EventHandler/exersise1";
import State from "./component/week_1/Hooks/useState";
import Add from "./component/week_1/Hooks/add_delete";
import ComponentOne from "./component/week_1/Hooks/Exeresise.jsx/ComponentOne";
import RandomNumberGenerator from "./component/week_1/Hooks/Exeresise.jsx/randomNumberGenerator";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      {/* <Component />
      <Component1 /> */}
      {/* <Props name="dereje" id="1" age="21" /> */}
      {/* <List /> */}
      {/* <ListExersise /> */}
      {/* <Images /> */}
      {/* <Click /> */}
      {/* <Copy /> */}
      {/* <Change /> */}
      {/* <Exersise1 /> */}
      {/* <State />
      <State />
      <State /> */}
      {/* <Add /> */}
      {/* <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} /> */}
      <RandomNumberGenerator />
    </>
  );
}

export default App;
