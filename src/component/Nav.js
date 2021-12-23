import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <Link to='/usestate'><li>useState</li></Link>
                <Link to='/usereducer'><li>useReducer</li></Link>
                <Link to='/useeffect'><li>useEffect</li></Link>
                <Link to='/useref'><li>useRef</li></Link>
                <Link to='/uselayouteffect'><li>useLayoutEffect</li></Link>
                <Link to='/useimperative'><li>useImperative</li></Link>
                <Link to='/usecontext'><li>useContext</li></Link>
                <Link to='/usememo'><li>useMemo</li></Link>
                
            </ul>
        </nav>
    )
}

export default Nav
