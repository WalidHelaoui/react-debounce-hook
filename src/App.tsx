import { FC, useEffect, useState } from 'react';
import { useDebounce } from './hooks';
import './style.css';

export const App: FC = () => {
  const [nbClick, setNbClick] = useState(0);

  const debouncedValue = useDebounce<number>(nbClick, 1000);

  const handleOnlcick = () => {
    setNbClick((nb) => nb + 1);
  };

  useEffect(() => {
    console.log('send', nbClick);
  }, [debouncedValue]);

  return (
    <div>
      <span>Number of clicks: {nbClick}</span>
      <br />
      <br />
      <button onClick={handleOnlcick}>Increase number</button>
    </div>
  );
};
