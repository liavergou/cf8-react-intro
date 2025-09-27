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
                {/*Για να βαλω τα κουμπια σε κολώνα*/}
                <div className="flex flex-col items-center justify-center">

                <h1 className="text-2xl mb-4">
                    {title} is <strong className={
                    count > previousCount ? "text-green-400" : "text-red-400"}>{count}</strong>
                    {/*//αν Είναι μεγαλύτερο απο το previousCount τότε πράσινο, αλλιώς κόκκινο*/}
                </h1>


                <div className="space-x-4">

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
                        className="bg-cf-dark-gray disabled:bg-cf-gray text-white py-2 px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                        onClick={resetCount}
                        disabled={count === minValue}
                    >
                        Reset
                    </button>


                </div>

                    <div className="h-12 mt-4">
                        {count === maxValue &&
                            <p className="text-2xl p-2 text-red-700">Φτάσατε στο μέγιστο όριο!</p>
                        }
                    </div>


                </div>

            </>
        )
    }

export default CounterWithProps;