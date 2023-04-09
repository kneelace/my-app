import classes from './Header.module.css';

import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const logoutDispatch = useDispatch();

    const logoutHandler = () => {
        logoutDispatch({ type: 'authToggle' })

    }

    return (
        <>
            <header className={classes.header}>
                <h1>Redux Auth</h1>
                {isAuthenticated &&
                    <nav>
                        <ul>
                            <li>
                                <a href='/'>My Products</a>
                            </li>
                            <li>
                                <a href='/'>My Sales</a>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                        </ul>
                    </nav>}
            </header>

        </>
    )
}

export default Header;