import React from 'react';
import style from './index.module.scss';

const StopFilter = () => {
    return (
        <div className={style.filter}>
            <h2 className={style.filter__header}>
                Количество пересадок
            </h2>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'                  
                  />
                  Все
            </label>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'                  
                  />
                  Без пересадок
            </label>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'                  
                  />
                  1 пересадка
            </label>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'                  
                  />
                  2 пересадки
            </label>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'                  
                  />
                  3 пересадки
            </label>
        </div>
    );
};

export default StopFilter;