import "./App.css";
import { useState } from "react";

// A simple counter
// The app should be able to increment and decrement the counter

function SimpleCounter() {
	let [counter, setCounter] = useState(0);

	let handleIncrement = () => {
		setCounter((counter += 1));
	};


  let handleDecrement = () => {
   if(counter > 0){
    setCounter(counter -= 1)
   }
  }


  let handleReset = () => {
   setCounter(0)
   }

   let handleUpdate = (num) => {
    setCounter(num )
  
  }

	return (
		<div className="App">
			<h2>
				Counter: <span>{counter}</span>
			</h2>
      <input onChange={(event) =>  handleUpdate(event.target.value)} placeholder="Enter a number" />
			<div className="btn-container">
				<button onClick={handleIncrement} className="increment">
					Increment
				</button>
				<button onClick={handleDecrement} className="decrement">Decrement</button>

       {
        counter > 0 ?  <button onClick={handleReset} className="reset">Reset</button> : null
       }
			</div>
		</div>
	);
}

export default SimpleCounter;
