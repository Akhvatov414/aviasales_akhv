import StopFilter from '../stopFilter/StopFilter';
import TicketList from "../ticketList/TicketList";
import LogoIcon from "../assets/images/Logo.png";
import style from './index.module.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

function App({ getTickets }) {
  useEffect(() => {
    getTickets();
  }, [getTickets])
  return (
    <div className="app">
      <main className={style.wrapper}>
        <div className={style.header}>
          <img src={LogoIcon} alt="logo" className="logo"/>
        </div>
        <div className={style.content}>
          <StopFilter />
          <TicketList />
        </div>
      </main>
    </div>
  );
}

export default connect(null, actions)(App);
