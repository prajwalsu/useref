import React, { useState } from 'react'
import withCounter from './WithCounter'

const ComponentTwo = ({count,increment,decrement})=>{
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default withCounter(ComponentTwo)
