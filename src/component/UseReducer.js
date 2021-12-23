import {useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count+1, show: state.show};
        case 'toggleShowText': 
            return {count: state.count, show: !state.show};
        default:
            return state
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, show: true})
  
    return (
        <div >
            <p>{state.count}</p>
           <input type='button' className='btn' value='+' onClick={()=> {dispatch({type: 'increment'}); dispatch({type: 'toggleShowText'})}}/>
           {state.show ? <p> im simply a text</p> : ''} 
           
        </div>
    )
}

export default UseReducer
