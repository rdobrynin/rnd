import React, { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store.ts';
import { getRate } from '../features/RateSlice.tsx';

export const RatePair: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useAppSelector((state) => state.rates);
  const [fromSet, setFromSet] = useState<boolean>(false);

  useEffect(() => {
    if (!data.price) {
      dispatch(getRate({ from: 'TON', to: 'USD' }));
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        getRate({
          from: data.from,
          to: data.to,
        })
      );
    }, 30000);

    console.log('polling');

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [dispatch]);

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(
      getRate({
        from: !fromSet ? data.to : data.from,
        to: !fromSet ? data.from : data.to,
      })
    );
    setFromSet(!fromSet);
  }
  return (
    <div>
      {data.price ? (
        <div className="relative mt-8 flex items-center gap-x-4 bg-white p-3 rounded">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => toggle(e)}
            disabled={data.loading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </button>
          <div className="text-sm/6">
            <p className="text-gray-600">{data.from}</p>
            <p className="text-gray-600">{data.to}</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold">{data.price}</div>
        </div>
      ) : (
        <p className="text-white">Fetching</p>
      )}
    </div>
  );
};
