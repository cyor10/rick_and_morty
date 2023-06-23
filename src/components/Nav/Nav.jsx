import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
    return (
        <div className={styles.nav}>
            <Link to={`/home`}>
                <button>Home</button>
            </Link>
            <Link to={`/about`}>
                <button>About</button>
            </Link>
            <SearchBar onSearch={onSearch} />
        </div>
    )
};