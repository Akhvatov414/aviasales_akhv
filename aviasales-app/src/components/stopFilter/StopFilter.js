import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../store/actions';

import style from './index.module.scss';

function StopFilter({ stops, setStop }) {
  const changeHandler = (event) => {
    setStop(event.target.name, event.target.checked);
  };
  return (
    <div className={style.filter}>
      <h2 className={style.filter__header}>Количество пересадок</h2>
      <input
        className={style.filter__checkbox}
        type="checkbox"
        name="all"
        checked={stops.all}
        onChange={changeHandler}
        id="all"
      />
      <label className={style.filter__option} htmlFor="all">
        Все
      </label>
      <input
        className={style.filter__checkbox}
        type="checkbox"
        name="withoutStops"
        checked={stops.withoutStops}
        onChange={changeHandler}
        id="without"
      />
      <label className={style.filter__option} htmlFor="without">
        Без пересадок
      </label>
      <input
        className={style.filter__checkbox}
        type="checkbox"
        name="oneStop"
        checked={stops.oneStop}
        onChange={changeHandler}
        id="one"
      />
      <label className={style.filter__option} htmlFor="one">
        1 пересадка
      </label>
      <input
        className={style.filter__checkbox}
        type="checkbox"
        name="twoStops"
        checked={stops.twoStops}
        onChange={changeHandler}
        id="two"
      />
      <label className={style.filter__option} htmlFor="two">
        2 пересадки
      </label>
      <input
        className={style.filter__checkbox}
        type="checkbox"
        name="threeStops"
        checked={stops.threeStops}
        onChange={changeHandler}
        id="three"
      />
      <label className={style.filter__option} htmlFor="three">
        3 пересадки
      </label>
    </div>
  );
}

const mapStateToProps = (state) => ({
  stops: state.stop.stops,
});

StopFilter.propTypes = {
  stops: PropTypes.object.isRequired,
  setStop: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(StopFilter);
