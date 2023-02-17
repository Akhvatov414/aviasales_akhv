import React from 'react';
import style from './index.module.scss'; 

const SortList = () => {
    return (
        <div className={style.listEl}>
            <div className={`${style.listEl__el} ${style.active}`}>САМЫЙ ДЕШЕВЫЙ</div>
            <div className={style.listEl__el}>САМЫЙ БЫСТРЫЙ</div>
            <div className={style.listEl__el}>ОПТИМАЛЬНЫЙ</div>
        </div>
    );
};

export default SortList;