import React, { useState,useEffect } from 'react';
import './TableRow.scss'

const TableRow = ({size, cost}) => {

    const [count, setCount] = useState(1)
    const [overall, setOverall] = useState(Number(count) * Number(cost));
    
    useEffect(()=>{
        setOverall(Number(count) * Number(cost))
    }, [cost, count])

    function counter(operation){
        if(operation === "increment"){
            setCount(count + 1);
        }else if(operation === "decrement" && count > 1){
            setCount(count - 1);
        }
    }

    return (
        <tr>
            <td>{size}</td>
            <td>{cost}</td>
            <td>
                <div className='counter'>
                    <p onClick={() => {counter("decrement")}}>-</p>
                        {count}
                    <p onClick={() => {counter("increment")}}>+</p>
                </div>
            </td>
            <td>{overall}</td>
            <td><input type='checkbox'/></td>
        </tr>
    );
};

export default TableRow;