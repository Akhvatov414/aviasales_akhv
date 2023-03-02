import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Alerts from '../alerts/Alerts';
import Loader from '../loader/Loader';
import SortList from '../sortList/SortList';
import TicketCard from '../ticketCard/TicketCard';

import style from './index.module.scss';

function TicketList({ tickets, stop, filter, loadingStatus }) {
  const [showTicketCounter, setShowTicketCounter] = useState(5);

  useEffect(() => {
    setShowTicketCounter(5);
  }, [stop, filter]);

  const getAvg = (num) => {
    const sum = num.reduce((acc, number) => acc + number, 0);
    const { length } = num;
    return sum / length;
  };

  const getList = (ticketList) => {
    let renderTickets = [];
    let prices = [];
    if (stop.withoutStops === true) {
      renderTickets = ticketList.reduce((acc, item) => {
        if (item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0) {
          acc.push(item);
        }
        return acc;
      }, renderTickets);
    }

    if (stop.oneStop === true) {
      renderTickets = ticketList.reduce((acc, item) => {
        if (item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1) {
          acc.push(item);
        }
        return acc;
      }, renderTickets);
    }

    if (stop.twoStops === true) {
      renderTickets = ticketList.reduce((acc, item) => {
        if (item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2) {
          acc.push(item);
        }
        return acc;
      }, renderTickets);
    }

    if (stop.threeStops === true) {
      renderTickets = ticketList.reduce((acc, item) => {
        if (item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3) {
          acc.push(item);
        }
        return acc;
      }, renderTickets);
    }

    if (filter === 'cheapest') renderTickets.sort((a, b) => a.price - b.price);
    if (filter === 'fastest')
      renderTickets.sort((a, b) => {
        const aDuration = a.segments[0].duration + a.segments[1].duration;
        const bDuration = b.segments[0].duration + b.segments[1].duration;

        return aDuration - bDuration;
      });

    prices = renderTickets.map((item) => item.price);
    const avgPrice = getAvg(prices);
    if (filter === 'optimal')
      renderTickets.sort((a, b) => {
        const aDuration = a.segments[0].duration + a.segments[1].duration;
        const bDuration = b.segments[0].duration + b.segments[1].duration;

        return aDuration - bDuration && a.price - b.price < avgPrice;
      });

    return renderTickets.slice(0, showTicketCounter).map((ticket) => <TicketCard key={ticket.id} data={ticket} />);
  };

  const btn = (
    <button type="button" className={style.button} onClick={() => setShowTicketCounter((prev) => prev + 5)}>
      Показать еще 5 билетов!
    </button>
  );

  const setList = getList(tickets);

  const getMoreTicketsBtn = setList.length > 0 ? btn : null;

  return (
    <div className={style.list}>
      <SortList />
      <Loader isLoading={loadingStatus} />
      <Alerts errorLoading={loadingStatus} ticketList={setList.length} />
      <ul>{setList}</ul>
      {getMoreTicketsBtn}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
  stop: state.stop.stops,
  filter: state.filter.filter,
  loadingStatus: state.loadingStatus.loadingStatus,
});

TicketList.propTypes = {
  filter: PropTypes.string.isRequired,
  loadingStatus: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TicketList);
