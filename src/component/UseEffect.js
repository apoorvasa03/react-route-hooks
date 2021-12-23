import {useState, useEffect} from 'react'
import axios from 'axios'

const UseEffect = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => { 
            setData(res.data[0])
            console.log("API WAS CALLED");
        })
      },[count]);

    return (
        <div>
            <h3>  {data.email} </h3>
            <input type='button' className='btn' value='+' onClick={() => setCount(count+1)}/>
            <p>{count}</p>
        </div>
    )
}

export default UseEffect
