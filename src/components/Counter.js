import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // react-redux가 제공하는 useSelector hook은, useSelector hook이 사용된 컴포넌트의 subscription을
  // 자동으로 관리하여, 가장 최신(latest)의 state를 반환해주고, unmount시 자동으로 subscription을 clear한다.
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
