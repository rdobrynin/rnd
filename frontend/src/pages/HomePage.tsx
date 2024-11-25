import React, {FC, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ICurrency, ICurrencyActionTypes} from "@/types/ICurrency";
import {selectCurrencyData, selectCurrencyLoading} from "@/store/selectors/currencySelectors";
import {IRate, IRateActionTypes} from "@/types/IRate";
import {selectRateData, selectRateLoading} from "@/store/selectors/rateSelectors";

export const HomePage: FC = () => {
    const dispatch = useDispatch();
    const [from, setFrom] = useState<string>('USDT');
    const [to, setTo] = useState<string>('TON');
    const [fromSet, setFromSet] = useState<boolean>(false);
    const selectedCurrencyLoading = useSelector(selectCurrencyLoading);
    const selectedCurrencyData = useSelector(selectCurrencyData);
    const selectedRateData = useSelector(selectRateData);
    const timerIdRef = useRef(null);
    const selectedRateLoading = useSelector(selectRateLoading);
    const [isPollingEnabled, setIsPollingEnabled] = useState(true);
    useEffect(() => {
        dispatch({
            type: ICurrencyActionTypes.FETCH_REQUEST,
        });
    }, []);


    function toggle(from: string, to: string) {
        dispatch({
            type: IRateActionTypes.FETCH_REQUEST,
            payload: {
                from: from,
                to: to,
            },
        });
    }


    // default USDT and TON
    useEffect(() => {
        toggle(from, to);
    }, []);

    function convert(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setFrom(to);
        setTo(from);
        toggle(from, to);
    }

    console.log(fromSet)
    console.log(from)
    function setRate(item: ICurrency) {

        if (!fromSet) {
            setFrom(item.symbol);
            setFromSet(true);
            dispatch({
                type: IRateActionTypes.FETCH_REQUEST,
                payload: {
                    from: item.symbol,
                    to: to,
                },
            });
        } else {
            setTo(item.symbol);
            setFromSet(false);
            dispatch({
                type: IRateActionTypes.FETCH_REQUEST,
                payload: {
                    from: from,
                    to: item.symbol,
                },
            });
        }
    }

    useEffect(() => {
        const pollingCallback = () => {
            console.log('Polling...');
            toggle(from, to);
        };

        const startPolling = () => {
            console.log('start polling');
            // pollingCallback(); // To immediately start fetching data
            // Polling every 10 mins
            // @ts-ignore
            timerIdRef.current = setInterval(pollingCallback, 600000);
        };

        const stopPolling = () => {
            // @ts-ignore
            clearInterval(timerIdRef.current);
        };

        if (isPollingEnabled) {
            startPolling();
        } else {
            stopPolling();
        }

        return () => {
            stopPolling();
        };
    }, [isPollingEnabled]);

    console.log('---list of currencies---')
    console.log(selectedCurrencyData)
    console.log('---ebd list of currencies---')
    console.log('---rates---')
    console.log(selectedRateData)
    console.log('---end rates---')

    return <>
        <div className="container">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className='m-auto text-center'>
                    <h1>
                        current cryptocurrency prices for the TON/USDT and vice versa
                    </h1>
                </div>
            </div>

            {selectedRateData && (
                <>
                    <div
                        className="d-flex flex-row bd-highlight mb-3 align-content-cente align-items-center justify-content-center my-4">
                        <div style={{width: '100px'}}>{selectedRateData.from}</div>
                        <div>
                            <button className='btn btn-primary mx-4' onClick={(e) => convert(e)} disabled={selectedRateLoading}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                                </svg>
                            </button>
                        </div>
                        <div style={{width: '100px', textAlign: 'right'}}>{selectedRateData.to}</div>
                    </div>
                    <div
                        className="d-flex flex-row bd-highlight mb-3 align-content-cente align-items-center justify-content-center my-4">
                        <span style={{
                            fontSize: '37px',
                            fontWeight: 600
                        }}>{Number(selectedRateData.price).toFixed(3)}</span>
                    </div>

                </>
            )}

            {selectedCurrencyData && (
                <div>
                    <ul>
                        {selectedCurrencyData?.map((item: ICurrency) => {
                            return (
                                <li
                                    key={item.symbol}
                                    onClick={() => setRate(item)}
                                >{item.symbol} : {item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    </>;
};
