import React from "react";
import { Link } from "react-router-dom";

interface IProps {
    setLocale: (lang: string) => void;
}

export const NavBar: React.SFC<IProps> = (props) => {
    const setLocale = (lang: string) => {
        localStorage.setItem("lang", lang);
        props.setLocale(lang);
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">TodoList</Link>
                </li>
            </ul>
            <button onClick={() => setLocale("ko")}>KO</button>
            <button onClick={() => setLocale("en")}>EN</button>
        </nav>
    );
};

export default NavBar;
