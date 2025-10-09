import {useState, useEffect} from 'react';

const Counter = () =>{
  const [count, setCount]=useState(0);

  useEffect(() => {
    const testFunction = () =>{
      console.log("Component mounted "+count);
    }
    testFunction();
  }, [count]);

  return(
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count+1)}>add one</button>
    </div>
  );
}

export default Counter;