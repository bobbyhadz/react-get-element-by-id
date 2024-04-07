import './App.css';

import {useRef, useEffect} from 'react';

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    console.log(element);
    console.log(element.id);
  }, []);

  return (
    <div>
      <h2 ref={ref} id="box">
        bobbyhadz.com
      </h2>
    </div>
  );
}
