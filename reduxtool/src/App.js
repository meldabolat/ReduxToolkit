import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './Redux/features/counter/counterSlice';
import { useEffect } from 'react';
import { getCountry } from './Redux/features/country/countrySlice';

function App() {
  const dispatch = useDispatch();
  
  // state.counter yerine sadece state.counter
  const counter = useSelector((state) => state.counter);
  const country = useSelector((state) => state.country);

  console.log(country);

  useEffect(()=>{
    dispatch(getCountry())
  },[])

  return (
    <div className="App">
      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>+</span>
    </div>
  );
}

export default App;
