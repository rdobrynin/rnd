import { ICurrency } from './store/types/ICurrency.tsx';
import { RatePair } from './components/RatePair.tsx';
import { useEffect, useState } from 'react';
import { useAppSelector } from './store/hooks.tsx';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store/store.ts';
import { getCurrency } from './features/CurrencySlice';
import { getRate } from './features/RateSlice.tsx';
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useAppSelector((state) => state.currency);
  const rates = useAppSelector((state) => state.rates);
  const [fromSet, setFromSet] = useState<boolean>(false);

  useEffect(() => {
    if (data.items.length === 0) {
      dispatch(getCurrency());
    }
  }, []);

  function setRate(item: ICurrency) {
    dispatch(
      getRate({
        from: !fromSet ? item.symbol : rates.from,
        to: !fromSet ? rates.to : item.symbol,
      })
    );
    setFromSet(!fromSet);
  }

  return (
    <div className="md:h-screen flex items-center justify-center">
      <div
        className="wrapper flex flex-col md:flex-row items:left md:items-center justify-center round"
        style={{
          overflow: 'hidden',
          background: 'white',
        }}
      >
        <div className="first-section flex-initial w-50 px-40">
          {data.loading ? (
            <p>Loading</p>
          ) : (
            data.items.length && (
              <div>
                <ul className="list-disc">
                  {data.items.map((item: ICurrency) => {
                    return (
                      <li key={item.symbol} onClick={() => setRate(item)}>
                        {item.symbol} : {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )
          )}
        </div>
        <div
          className="second-section flex-initial md:w-50 md:h-screen flex items-top justify-center round-left mt-3 md:mt-0 pt-3"
          style={{
            backgroundColor: '#123040',
          }}
        >
          <div className="section-result flex flex-col text-left">
            <div className="mb-3">
              <h3 className="text-white mb-3">RatePair</h3>
              <p style={{ color: 'var(--state-500-color)' }}>
                Results are shown below based on the https://api.fastforex.io/
                <br />
                with api key: (600989d7d2-d44928bba7-snub6o)
              </p>
            </div>
            <RatePair />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
