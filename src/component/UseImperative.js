import {useState, useRef} from 'react'
import Button from './Button'

const UseImperative = () => {
    const buttonRef = useRef(null)
    return (
        <div>
            <button onClick={() => buttonRef.current.alterToggle()}> buttom from parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}

export default UseImperative