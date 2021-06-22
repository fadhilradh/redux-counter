import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLoggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p>Counter : {counter}</p>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(5))}>-</button>
        {isLogged && <p>Valuable info I can't see </p>}
      </header>
    </div>
  );
}

export default App;
