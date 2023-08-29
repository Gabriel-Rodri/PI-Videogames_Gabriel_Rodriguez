import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import s from "../style/navBar.module.css"


export default function NavBar() {
    return (
            <nav className={s.nav}>
                <div className={s.busqueda}>
                    <SearchBar />
                </div>
                
                <div className={s.title}>
                    <h1>
                    Videogames App
                    </h1>
                </div>

                <div className={s.search}>
                    <span className={s.opcion}><NavLink to={'/create'} className={s.to}> Create Videogame✏️</NavLink></span>
                </div>
            </nav>
    )
}