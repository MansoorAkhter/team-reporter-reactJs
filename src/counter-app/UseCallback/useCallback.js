// The useCallback hook is used when you have a component in which the child is rerendering again and again without need.
// Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

import React, { useState, useCallback } from "react";


var funccount = new Set();


const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrementCounter = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  console.log(funccount.size);

  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>Increase counter</button>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <button onClick={incrementNumber}>increase number</button>
    </div>
  );
};

export default UseCallback;





// import React, { useState, useCallback } from 'react'
// const funccount = new Set();


// const UseCallback = () => {


// const [count, setCount] = useState(0)
// const [number, setNumber] = useState(0)

// const incrementCounter = () => {
// 	setCount(count + 1)
// }
// const decrementCounter = () => {
// 	setCount(count - 1)
// }

// const incrementNumber = () => {
// 	setNumber(number + 1)
// }

// funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// console.log(funccount.size);

// return (
// 	<div>
// 	Count: {count}
// 	<button onClick={incrementCounter}>
// 		Increase counter
// 	</button>
// 	<button onClick={decrementCounter}>
// 		Decrease Counter
// 	</button>
// 	<button onClick={incrementNumber}>
// 		increase number
// 	</button>
// 	</div>
// )
// }


// export default UseCallback;
