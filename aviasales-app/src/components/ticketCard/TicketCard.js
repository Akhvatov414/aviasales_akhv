import React from 'react';
import style from './index.module.scss'; 

const TicketCard = ({ data }) => {
    const {
        carrier,
        price,
        segments,
     } = data;
     console.log(data);
    return (
        <li>
            <div className={style.ticket}>
                <div className={style.ticket__header}>
                    <span className={style.ticket__price}>{price} Р</span>
                    <img 
                      className={style.ticket__logo}
                      src={`https://pics.avs.io/99/36/${carrier}.png`}                    
                    />
                </div>
                <div className={style.ticket__description}>
                    <div className={style.ticket__column}>
                        <span className={style.ticket__title}>
                            {segments[0].origin} - {segments[0].destination}
                        </span>
                        <span className={style.ticket__data}>
                            {segments[0].date} - {segments[0].date}
                        </span>
                    </div>
                    <div className={style.ticket__column}>
                        <span className={style.ticket__title}>
                            В пути
                        </span>
                        <span className={style.ticket__data}>
                            {segments[0].duration}
                        </span>
                    </div>  
                    <div className={style.ticket__column}>
                        <span className={style.ticket__title}>
                            {segments[0].stops.length > 0 ? `${segments[0].stops.length} ПЕРЕСАДКИ` : `БЕЗ ПЕРЕСАДОК`}
                        </span>
                        <span className={style.ticket__data}>
                            {segments[0].stops.join(', ')}
                        </span>                
                    </div> 
                </div>
                <div className={style.ticket__description}>
                    <div className={style.ticket__column}>
                        <span className={style.ticket__title}>
                            {segments[1].origin} - {segments[1].destination}
                        </span>
                        <span className={style.ticket__data}>
                            {segments[1].date} - {segments[1].date}
                        </span>
                    </div>
                    <div className={style.ticket__column}>
                        <span className={style.ticket__title}>
                            В пути
                        </span>
                        <span className={style.ticket__data}>
                            {segments[1].duration}
                        </span>
                    </div>  
                    <div className={style.ticket__column}>
                        <span className={style.ticket__title}>
                            {segments[1].stops.length > 0 ? `${segments[1].stops.length} ПЕРЕСАДКИ` : `БЕЗ ПЕРЕСАДОК`}
                        </span>
                        <span className={style.ticket__data}>
                            {segments[1].stops.join(', ')}
                        </span>                
                    </div> 
                </div>
            </div>
        </li>
    );
};

export default TicketCard;