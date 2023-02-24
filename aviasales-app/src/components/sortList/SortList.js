import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import style from './index.module.scss';

const SortList = ({ filter, setFilter }) => {
  const cheapest = filter === 'cheapest' ? 'active' : null;
  const fastest = filter === 'fastest' ? 'active' : null;
  const optimal = filter === 'optimal' ? 'active' : null;

  return (
    <div className={style.listEl}>
      <div className={`${style.listEl__el} ${style[cheapest]}`} onClick={() => setFilter('cheapest')}>
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div className={`${style.listEl__el} ${style[fastest]}`} onClick={() => setFilter('fastest')}>
        САМЫЙ БЫСТРЫЙ
      </div>
      <div className={`${style.listEl__el} ${style[optimal]}`} onClick={() => setFilter('optimal')}>
        ОПТИМАЛЬНЫЙ
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter.filter,
});

export default connect(mapStateToProps, actions)(SortList);
