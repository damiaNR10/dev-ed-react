import React, { useState, } from 'react';
import Tweet from './Tweet';

function App() {

  const [users, setUsers] = useState([
    {name: 'John', message: 'I am John', likes: 5},
    {name: 'Ted', message: 'I am Ted', likes: 12},
    {name: 'Tommy', message: 'I am Tommy', likes: 12},
    {name: 'Michael', message: 'I am Michael', likes: 53},
  ]);
  // const [isRed, setIsRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const incrementCounter = () => {
  //   setCount(count + 1);
  //   setIsRed(true);
  // }

  return(
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
      {/* <Tweet name="DMK" message="Random tweet" likes="51" />
      <Tweet name="DmK" message="Random tweet 2" likes="523" />
      <Tweet name="dmk" message="Random tweet 3 " likes="252" />
      <Tweet name="dMk." message="Random tweet 4" likes="531" /> */}
      {/* <h1 className={`${isRed ? 'red' : ''}`}>Change my color!</h1>
      <button onClick={incrementCounter}>Increment</button>
      <h1>{count}</h1> */}
    </div>
  );
}

export default App;