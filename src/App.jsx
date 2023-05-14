import { useReducer } from "react";
// import { useState } from "react";

const firstReducer = (state, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, count: state.count + 1 };
    case "minus":
      return { ...state, count: state.count - 1 };
    case "updateKey":
      return { ...state, key: action.payload };
    default:
      throw new Error();
  }
};

const ACTION = {
  PLUS: "plus",
  MINUS: "minus",
  UPDATE_KEY: "updateKey",
};
function App() {
  const [state, dispatch] = useReducer(firstReducer, { count: 0, key: "" });
  // const [key, setKey] = useState("");
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: ACTION.UPDATE_KEY, payload: e.target.value })
        }
      />
      <h1>Your key is: {state.key} </h1>
      <button
        onClick={() => {
          dispatch({ type: "minus" });
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
