'use client';
import { Button } from './ui/button';

import React from 'react'
const CounterButton = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <Button onClick={increment}>Counter: {count}</Button>
    );
};

export default CounterButton