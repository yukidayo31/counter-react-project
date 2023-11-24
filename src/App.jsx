import { useState } from "react";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   );
// }

// function App() {
//   const [state, setState] = useState({
//     counter: 0,
//     drinks: ["Mineral Water"],
//   });
//   const counter = state.counter;
//   const drinks = state.drinks;

//   const AddCounter = () => {
//     setState({ counter: state.counter + 1 });
//   };
//   const SubsCounter = () => {
//     setState({ counter: state.counter - 1 });
//   };

//   return (
//     <>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={AddCounter}>+</button>
//         <button onClick={SubsCounter}>-</button>
//         <h2>Count is {counter}</h2>

//         {/* <span>{counter}</span> */}
//       </div>
//     </>
//   );
// }
function App() {
  const [count, setCount] = useState(0);
  const [foods, setFoods] = useState(["Add Drinks"]);

  const AddCounter = () => {
    setCount(count + 1);
  };
  const SubsCounter = () => {
    setCount(count - 1);
  };
  const AddDrinks = () => {
    setFoods(["Mineral Water"]);
  };

  function reset() {
    setCount(0);
    setFoods(["Add Drinks"]);
  }
  return (
    <>
      <h1>Simple Number Counter</h1>
      <div className="card">
        <button onClick={SubsCounter}>-</button>
        <span> Count is {count} </span>
        <button onClick={AddCounter}>+</button>
        <h2>{foods}</h2>
        <button onClick={AddDrinks}>Add Drinks</button>
        <h2></h2>
        <button onClick={reset}>Reset</button>
        {/* <span>{counter}</span> */}
      </div>
    </>
  );
}

export default App;
