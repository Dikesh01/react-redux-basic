import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase,decrease, reset } from "../redux/actions/counterActions";


const Display = () =>{
    let dispatch = useDispatch();
    let count = useSelector(store => store)


    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>dispatch(increase())}>Increase</button>
            <button onClick={()=>dispatch(decrease())}>Decrease</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Display;