import React from 'react';
import style from './index.module.scss';
import * as actions from '../store/actions';
import { connect } from 'react-redux';

function StopFilter({ stops, setStop })  {
    const changeHandler = (event) => {
        setStop(event.target.name, event.target.checked);
    }
    return (
        <div className={style.filter}>
            <h2 className={style.filter__header}>
                Количество пересадок
            </h2>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'
                  name='all'
                  checked={stops.all}
                  onChange={changeHandler}                  
                  />
                  Все
            </label>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'
                  name='withoutStops'
                  checked={stops.withoutStops}
                  onChange={changeHandler}                   
                  />
                  Без пересадок
            </label>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'
                  name='oneStop'
                  checked={stops.oneStop}
                  onChange={changeHandler}                  
                  />
                  1 пересадка
            </label>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'
                  name='twoStops'
                  checked={stops.twoStops}
                  onChange={changeHandler}                  
                  />
                  2 пересадки
            </label>
            <label className={style.filter__option}>
                <input 
                  className={style.filter__checkbox} 
                  type='checkbox'
                  name='threeStops'
                  checked={stops.threeStops}
                  onChange={changeHandler}                  
                  />
                  3 пересадки
            </label>
        </div>
    );
};

const mapStateToProps = (state) => ({
    stops: state.stop.stops,
});

export default connect(mapStateToProps, actions)(StopFilter);