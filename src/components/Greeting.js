import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store'; // Import your Redux store

import { fetchRandomGreeting } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector(
    (state) => state.greetings,
  );

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchRandomGreeting());
  };

  if (isLoading) {
    return (
      <>
        <div className="loading">...isLoading</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="loading">
          Something went wrong while fetching the data
        </div>
      </>
    );
  }

  return (
    <>
      <div className="greeting">{greeting.message}</div>
      <button type="button" onClick={handleClick}>
        Get new greeting
      </button>
    </>
  );
}

export default Greeting;
