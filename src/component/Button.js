import {useState, forwardRef, useImperativeHandle} from 'react'

const Button = forwardRef(({}, ref) => {
    const [toggle, setToggle] = useState(false);
    
    useImperativeHandle( ref, () => ({
        alterToggle() {
            setToggle(!toggle);
          },
    }))



    return (
        <div>
            <button>button from child</button>
            { toggle ? <h3> im child </h3> : ''}
        </div>
    )
})

export default Button
