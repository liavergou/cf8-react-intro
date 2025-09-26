import {useState} from "react";


interface CounterProps {
    title?: string;
    minValue: number;
    step: number;
}

const CounterWithProps = ({
    title = "Count", minValue = 0, step = 1,

}: CounterProps) => {
    const [count, setCount] = useState(minValue);
    const [previousCount, setPreviousCount] = useState(minValue);

    const increaseCount = () => {
        setPreviousCount(count);
        setCount(count + step);
    }

    const decreaseCount = () => {
        if (count > minValue) {
            setPreviousCount(count);
            setCount(count - step);
        }
    }

    const resetCount = () => {
        setCount(minValue);
    }

    return (
        <>
            <h1 className="text-center text-2xl my-12">
                {title} is <strong className={
                count > previousCount ?"text-green-400" : "text-red-400"}>{count}</strong>
            </h1>
            <div className="text-center space-x-4">

                <button
                    className="bg-cf-dark-gray text-white py-2 px-4"
                    onClick={increaseCount}
                >
                    Increase (+{1})
                </button>

                <button
                    className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4"
                    onClick={decreaseCount}
                    disabled={count <= minValue}
                >
                    Decrease (-{1})
                </button>

                <button
                    className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4"
                    onClick={resetCount}
                    disabled={count === minValue}
                >
                    Reset
                </button>

            </div>
        </>
    )
}

export default CounterWithProps;