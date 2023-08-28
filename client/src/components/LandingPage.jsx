import React from "react";
import { Link } from 'react-router-dom'
import s from '../style/LandingPage.module.css'


const LandingPage = () => {
    return (
        <div className={s.all}>
            <div className={s.full_inner}>
                <div className={s.content}>
                    <h1 className={s.titulo}>Videogames APP</h1>
                </div>
                <div className={s.btn}>
                    <Link to='/home' className={s.a}>
                            START
                    </Link>
                </div>
                <div className={s.info}>
                    App create by Gabriel Rodriguez
                </div>
            </div>
        </div>
    )
}

export default LandingPage