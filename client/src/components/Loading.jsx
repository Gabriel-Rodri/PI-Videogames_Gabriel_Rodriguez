import React from 'react'
import loading from '../imagenes/loading_mario.gif'
import s from '../style/Loading.module.css'

export default function PaginaDeCarga() {
    return (
          <div className={s.box_loading}>
            <img src={loading} alt="loader" />
          </div>
    )}