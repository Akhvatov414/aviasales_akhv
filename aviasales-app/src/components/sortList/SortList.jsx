import { connect } from 'react-redux';

import * as actions from '../store/actions';

import style from './index.module.scss';

function SortList({ filter, setFilter }) {
  const cheapest = filter === 'cheapest' ? 'active' : null;
  const fastest = filter === 'fastest' ? 'active' : null;
  const optimal = filter === 'optimal' ? 'active' : null;

  return (
    <div className={style.listEl}>
      <button type="button" className={`${style.listEl__el} ${style[cheapest]}`} onClick={() => setFilter('cheapest')}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button type="button" className={`${style.listEl__el} ${style[fastest]}`} onClick={() => setFilter('fastest')}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button type="button" className={`${style.listEl__el} ${style[optimal]}`} onClick={() => setFilter('optimal')}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter.filter,
});

export default connect(mapStateToProps, actions)(SortList);
