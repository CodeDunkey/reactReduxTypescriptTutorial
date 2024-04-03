import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice"
import { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/hook";

// interface InputType {
//     input?: [string?, number?],
//     para: ChangeEvent<HTMLInputElement>,
// }

export const Counter = () => {
    const [incrementAmount, setIncrementAmount] = useState<number | string>("");

    // from youtube tutorial without typescript *
    // const count2 = useSelector((state) => state.counter.count);
    // const dispatch = useDispatch();
    // *

    // from redux tutorial with hooks *
    const count = useAppSelector((state) => state.counter.count)
    const dispatch = useAppDispatch();
    // *


    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount("")
        dispatch(reset());
    }

    // window.prompt("abc")

    const setInput = (parameter: ChangeEvent<HTMLInputElement>) => {

        const inputIndexZero = parameter.target.value[0]

        if (inputIndexZero !== "-" && inputIndexZero !== undefined) {

            let convertToNumber = Number(inputIndexZero)
            
            if (isNaN(convertToNumber)) {
                alert("must be a number or -")
            }
        }

        if (isNaN(Number(parameter.target.value.slice(1)))) {
            alert("must be a number")
        }

        setIncrementAmount(parameter.target.value)
    }

    // console.log(useAppSelector((state) => state.counter.count));

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>

            </div>
            <input type="text" value={incrementAmount} onChange={setInput}></input>
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={() => dispatch(decrementByAmount(addValue))}>subtrack Amount</button>
                <button onClick={() => resetAll()}>reset</button>
            </div>
        </section>
    )
}

export default Counter;