import {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='countContainer'>
           <input type='button' className='btn' value='+' onClick={() => setCount(count+1)}/>
           <p>{count}</p>
           <input type='button' className='btn' value='-' onClick={() => setCount(count-1)}/>
        </div>
    )
}

export default UseState
