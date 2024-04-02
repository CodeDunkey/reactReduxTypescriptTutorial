import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice"
import { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/hook";

export const Counter = () => {

    // const count = useSelector((state: any) => state.counter.count);
    // const dispatch = useDispatch();
    const count = useAppSelector((state) => state.counter.count)
    const dispatch = useAppDispatch();

    const [incrementAmount, setIncrementAmount] = useState<number>(0);

    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset());
    }
    
    const setInput = (x: ChangeEvent<HTMLInputElement>) => {
        
        // let lengthOfInput = x.target.value.length;
        // console.log('lengthOfInput', lengthOfInput);
        // console.log('x.target.value', x.target.value);
        // if (typeof(x.target.value) === Number){

        // }
        // let convertToNumber;

        let convertToNumber = Number(x.target.value)
        
        if (isNaN(convertToNumber)) {
            alert("must be a number")
            convertToNumber = 0
        }
        setIncrementAmount(convertToNumber)
    }
    console.log(useAppSelector((state) => state.counter.count));
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