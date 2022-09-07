import React, { useRef } from 'react'

const UserefComponent = () => {

    const inputElement=useRef()
    console.log(inputElement);

    const focusInput=()=>{
        inputElement.current.focus();
    }
    return (
        <div>
            <input type="text"/>

            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default UserefComponent;

{/* to get focus for ur button use useref */}
{/* and to interact with real dom */}
{/* virtual dom use difs algorithm */}
{/* useref return an object */}
