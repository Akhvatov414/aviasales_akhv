import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StopFilter from '../stopFilter/StopFilter';
import TicketList from '../ticketList/TicketList';
import LogoIcon from '../assets/images/Logo.png';
import * as actions from '../store/actions';

import style from './index.module.scss';

function App({ getTickets }) {
  useEffect(() => {
    getTickets();
  }, [getTickets]);
  return (
    <div className={style.app}>
      <main className={style.wrapper}>
        <div className={style.header}>
          <img src={LogoIcon} alt="logo" className="logo" />
        </div>
        <div className={style.content}>
          <StopFilter />
          <TicketList />
        </div>
      </main>
    </div>
  );
}

App.propTypes = {
  getTickets: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
