import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";
import dark from './icons/dark.svg';
import light from './icons/light.svg';

function Nav1() {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeStyle = {
        backgroundColor: theme === 'dark' ? '#121212' : 'white',
        color: theme === 'dark' ? 'white' : 'black'
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className="nav" style={themeStyle}>
            <NavLink className="nav-link" to="/">Active</NavLink>
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contacts</NavLink>
            <NavLink className="nav-link" to="/products">Products</NavLink>
            <NavLink className="nav-link cart-link" to="/cart" title="View Cart" aria-label="View Cart">🛒</NavLink>

            <button
                onClick={toggleTheme}
                style={{
                    background: "pink",
                    border: "none",
                    marginLeft: "auto",
                    cursor: "pointer"
                }}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                <img
                    src={theme === 'dark' ? light : dark}
                    alt="Toggle theme"
                    height="28"
                    style={{ verticalAlign: 'middle' }}
                />
            </button>
        </nav>
    );
}

export default Nav1;