import SearchBar from "../SearchBar/SearchBar";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) =>{
    return (
        <div>
            <Link to="/home">
            <button>HOME</button>
            </Link>
            <Link to="/abaut">
            <button>Abaut</button>
            </Link>
            <Link to="/favorites">
            <button>favorites</button>
            </Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;
