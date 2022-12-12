import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const fakeApiCall = async () => {
  return axios.get<string>("/countToThree");
};

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string | undefined>(undefined);

  const onNumberThree = async () => {
    try {
      const result = await fakeApiCall();
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (count === 3) {
      onNumberThree();
    }
  }, [count]);

  const addCount = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <article className="App-article">
        {
          // No data escenario
          !data && (
            <>
              <h1>Counter</h1>
              <h2 data-testid="counter-test-id">{count}</h2>
              <br />
              <button onClick={addCount}>Increment count:</button>
            </>
          )
        }
        {
          // Data escenario
          data && <p>{data}</p>
        }
      </article>
    </div>
  );
}

export default App;
