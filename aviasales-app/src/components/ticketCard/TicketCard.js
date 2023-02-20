import React from 'react';
import style from './index.module.scss'; 

const TicketCard = ({ data }) => {
    const {
        price,
        from,
        to,
        forwardTimeStart,
        forwardTimeEnd,
        forwardDuration,
        forwardStops,
        backwardTimeStart,
        backwardTimeEnd,
        backwardDuration,
        backwardStops
     } = data;
    return (
        <li>
            <div className={style.ticket}>
                <div className={style.ticket__header}>
                    <span className={style.ticket__price}>{price} Р</span>
                    <span className='ticket__logo'>LOGO</span>
                </div>
                <div className={style.ticket__description}>
                <div className={style.ticket__column}>
                    <span className={style.ticket__title}>
                        {from} - {to}
                    </span>
                    <span className={style.ticket__data}>
                        {forwardTimeStart} - {forwardTimeEnd}
                    </span>
                </div>
                <div className={style.ticket__column}>
                    <span className={style.ticket__title}>
                        В пути
                    </span>
                    <span className={style.ticket__data}>
                        {forwardDuration}
                    </span>
                </div>  
                <div className={style.ticket__column}>
                    <span className={style.ticket__title}>
                        Пересадки
                    </span>
                    <span className={style.ticket__data}>
                        {forwardStops[0]}, {forwardStops[1]}
                    </span>                
                </div> 
                </div>
                <div className={style.ticket__description}>
                <div className={style.ticket__column}>
                    <span className={style.ticket__title}>
                        {from} - {to}
                    </span>
                    <span className={style.ticket__data}>
                        {backwardTimeStart} - {backwardTimeEnd}
                    </span>
                </div>
                <div className={style.ticket__column}>
                    <span className={style.ticket__title}>
                        В пути
                    </span>
                    <span className={style.ticket__data}>
                        {backwardDuration}
                    </span>
                </div>  
                <div className={style.ticket__column}>
                    <span className={style.ticket__title}>
                        Пересадки
                    </span>
                    <span className={style.ticket__data}>
                        {backwardStops[0]}
                    </span>                
                </div> 
                </div>
            </div>
        </li>
    );
};

export default TicketCard;