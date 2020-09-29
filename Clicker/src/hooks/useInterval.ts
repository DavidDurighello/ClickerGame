import { useRef, useEffect } from 'react';

const useInterval = (callback: () => void, delay: number | null | false, immediate?: boolean): void => {
    const savedCallback = useRef(() => {
        console.log('');
    });

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    });

    // Execute callback if immediate is set.
    useEffect(() => {
        if (!immediate) {
            return;
        }
        savedCallback.current();
    }, [immediate]);

    // Set up the interval.
    useEffect(() => {
        if (delay === null || delay === false) {
            return undefined;
        }
        const tick = () => savedCallback.current();
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
};

export default useInterval;
