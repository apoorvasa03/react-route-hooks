import {useRef, useState} from 'react'

const UseRef = () => {
    const [name, setName] = useState('Apoorva')
    let inputRef = useRef(null);

    const onclick = () => {
        inputRef.current.focus()
    }
    const onChange = () => {
        setName(inputRef.current.value)
    }

    return (
        <div>
            <p>{name}</p>
            <div>
                <input type='text' ref={inputRef} onChange={onChange} value={name}></input>
                <button onClick={onclick}> Change Name</button>
            </div>
            <p className='notes'> * The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.  </p>
        </div>
    )
}

export default UseRef
