import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from '../Features/Counter/CounterSlice'


const Shop = () => {

  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='conatiner text-center mt-4 p-4 border'>
      <h1>Shopping Store</h1>
      <h3>Buy Addidas Shoes Rs. 50 = {count}</h3>
      <div className='mt-4'>
        <button className='btn btn-primary mx-4' onClick={handleDecrementClick}>-</button>
        Add to cart
        <button className='btn btn-primary mx-4' onClick={handleIncrementClick}>+</button>
      </div><br />
      <button className='btn btn-primary mx-4' onClick={handleResetClick}>Reset</button>
      <br /><br />
      <input
        type="number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)} />
      <br />
      <br />
      <button className='btn btn-primary mx-4' onClick={handleAmountClick}>Add amount</button>
    </div>
  )
}

export default Shop
