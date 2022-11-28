import { useEffect } from 'react';

import {
  getCurrencies,
} from '../apis';

function App() {

  useEffect(() => {
    (async () => {
      const  total  = await getCurrencies(
        "eth"
      );
      console.log({ total });
    })();
  }, []);

  return (
    <div className='p-10 flex flex-col items-center'>
      <h1 className='text-3xl font-bold'>Cryptolist</h1>
    </div>
  );
}

export default App;
