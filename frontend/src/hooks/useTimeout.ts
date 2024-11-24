import { Dispatch, useCallback, useEffect, useRef, useState } from 'react';

import { Subscription, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

interface IUseCountdownProps {
  interval: number;
  delay?: number;
  start?: number;
  callback?: () => void;
}

export const useCountdown = ({
  interval,
  delay = 0,
  start = 10,
  callback,
}: IUseCountdownProps): { countdownTime: number; resetCountdown: Dispatch<void> } => {
  const [countdownTime, setCountdownTime] = useState(start);
  const timerRef = useRef<Subscription>();

  const startTimer = useCallback(() => {
    // eslint-disable-next-line functional/immutable-data
    timerRef.current = timer(delay, interval)
      .pipe(
        map((i) => start - i),
        take(start + 1),
      )
      .subscribe(setCountdownTime, undefined, callback);
  }, [callback, delay, interval, start]);

  const resetCountdown = useCallback(() => {
    timerRef.current && timerRef.current.unsubscribe();
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    startTimer();
    return () => {
      timerRef.current && timerRef.current.unsubscribe();
    };
  }, [startTimer]);

  return { countdownTime, resetCountdown };
};
