import { useCallback, useState } from "react"
import Child from "./Child"

const UseCallback = () => {
    const [data, setData] = useState('this is the text')
    const [toggle, setToggle] = useState(false)

    const renderComment =useCallback( () => {
        return data
    }, [data])
    return (
        <div>
            <Child renderComment={renderComment}></Child>
            <button onClick= {() => setToggle(!toggle)}>{''} toggle</button>

            {toggle ? <h3> {data} </h3> : ''}
        </div>
        
    )
}

export default UseCallback