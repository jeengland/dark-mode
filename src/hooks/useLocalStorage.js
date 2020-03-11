import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [value, storeValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = (value) => {
        storeValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [value, setValue];
}