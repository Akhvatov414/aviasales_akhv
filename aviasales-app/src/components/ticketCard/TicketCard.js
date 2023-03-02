import { addMinutes, format } from 'date-fns';
import PropTypes from 'prop-types';

import style from './index.module.scss';

function TicketCard({ data }) {
  const { carrier, price, segments } = data;

  const getDepTime = (time) => format(new Date(`${time}`), 'hh:mm');

  const getArrTime = (time, duration) => format(addMinutes(new Date(`${time}`), duration), 'hh:mm');

  const getDurationTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60 < 10 ? `0${time % 60}` : `${time % 60}`;
    return `${hours}ч ${minutes}м`;
  };

  return (
    <li>
      <div className={style.ticket}>
        <div className={style.ticket__header}>
          <span className={style.ticket__price}>{price} Р</span>
          <img
            className={style.ticket__logo}
            src={`https://pics.avs.io/99/36/${carrier}.png`}
            alt={`Logo ${carrier}`}
          />
        </div>
        <div className={style.ticket__description}>
          <div className={style.ticket__column}>
            <span className={style.ticket__title}>
              {segments[0].origin} - {segments[0].destination}
            </span>
            <span className={style.ticket__data}>
              {getDepTime(segments[0].date)} - {getArrTime(segments[0].date, segments[0].duration)}
            </span>
          </div>
          <div className={style.ticket__column}>
            <span className={style.ticket__title}>В пути</span>
            <span className={style.ticket__data}>{getDurationTime(segments[0].duration)}</span>
          </div>
          <div className={style.ticket__column}>
            <span className={style.ticket__title}>
              {segments[0].stops.length > 0 ? `${segments[0].stops.length} ПЕРЕСАДКИ` : 'БЕЗ ПЕРЕСАДОК'}
            </span>
            <span className={style.ticket__data}>{segments[0].stops.join(', ')}</span>
          </div>
        </div>
        <div className={style.ticket__description}>
          <div className={style.ticket__column}>
            <span className={style.ticket__title}>
              {segments[1].origin} - {segments[1].destination}
            </span>
            <span className={style.ticket__data}>
              {getDepTime(segments[1].date)} - {getArrTime(segments[1].date, segments[1].duration)}
            </span>
          </div>
          <div className={style.ticket__column}>
            <span className={style.ticket__title}>В пути</span>
            <span className={style.ticket__data}>{getDurationTime(segments[1].duration)}</span>
          </div>
          <div className={style.ticket__column}>
            <span className={style.ticket__title}>
              {segments[1].stops.length > 0 ? `${segments[1].stops.length} ПЕРЕСАДКИ` : 'БЕЗ ПЕРЕСАДОК'}
            </span>
            <span className={style.ticket__data}>{segments[1].stops.join(', ')}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

TicketCard.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    segments: PropTypes.shape({
      origin: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      stops: PropTypes.shape({
        0: PropTypes.string.isRequired,
        1: PropTypes.string.isRequired,
      }),
    }).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default TicketCard;
