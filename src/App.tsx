import { FC, useEffect, useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import './style.css';

export const App: FC = () => {
  const [numberOfClick, setNumberOfClick] = useState(0);

  const debouncedValue = useDebounce<number>(numberOfClick, 1000);

  const handleOnlcick = () => {
    setNumberOfClick((nb) => nb + 1);
  };

  useEffect(() => {
    // code to excute after the debaunce
    // in this example were just testing with a console log
    console.log('send', numberOfClick);
  }, [debouncedValue]);

  return (
    <div className="container">
      <span>Number of clicks: {debouncedValue}</span>
      <button onClick={handleOnlcick}>Increase number</button>
    </div>
  );
};
