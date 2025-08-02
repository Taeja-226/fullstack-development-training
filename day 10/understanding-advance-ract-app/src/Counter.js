import { useState } from "react";
function Counter(){
    // /here count is a simple variable whisch does not provide memory
    // let count = 0;
    //  count is a state which provide memoru and function setCount to update count state
    // let [myState,setMystate] = useState(default)
    let [count, setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Click me !</button><br/><br/>
            <button onClick={() => setCount(count-1)}>Click me !</button>
        </div>
    )
};
export {Counter}