import {useState} from 'react';

const Counter = () =>{
  const [count, setCount]=useState(0);
  return(
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count+1)}>add one</button>
    </div>
  );
}

export default Counter;