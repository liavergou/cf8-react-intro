import {useState} from "react";


interface CounterProps {
    title: string;
    minValue: number;
    maxValue: number;
    step: number;
}

const CounterWithProps = ({
    title = "Count", minValue = 0,maxValue = 100, step = 1,

}: CounterProps) => {
    const [count, setCount] = useState(minValue);
    const [previousCount, setPreviousCount] = useState(minValue);

    const increaseCount = () => {
        if (count < maxValue) {
            setPreviousCount(count);
            setCount(count + step);
        }
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
                    count > previousCount ? "text-green-400" : "text-red-400"}>{count}</strong>
                </h1>

                {count === maxValue && <p className="text-center text-4xl p-2 text-red-700">Φτάσατε στο μέγιστο όριο!</p>}
                <div className="text-center space-x-4">

                    <button
                        className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4"
                        onClick={increaseCount}
                        disabled={count === maxValue}
                    >
                        Increase (+{step})
                    </button>

                    <button
                        className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4"
                        onClick={decreaseCount}
                        disabled={count <= minValue}
                    >
                        Decrease (-{step})
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