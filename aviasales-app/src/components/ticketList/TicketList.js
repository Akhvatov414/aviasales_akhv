import React from 'react';
import SortList from '../sortList/SortList';
import TicketCard from '../ticketCard/TicketCard';
import style from './index.module.scss'; 

const tickets = [
    {
        id:1,
        price: 13400,
        from: 'MOW',
        to: 'HKT',
        forwardTimeStart: '10:45',
        forwardTimeEnd: '08:00',
        forwardDuration: '21ч 15м',
        forwardStops: ['HKG', 'JNB'],
        backwardTimeStart: '13:45',
        backwardTimeEnd: '09:00',
        backwardDuration: '13ч 15м',
        backwardStops: ['HKG'],
    },
    {
        id:2,
        price: 13400,
        from: 'MOW',
        to: 'HKT',
        forwardTimeStart: '10:45',
        forwardTimeEnd: '08:00',
        forwardDuration: '21ч 15м',
        forwardStops: ['HKG', 'JNB'],
        backwardTimeStart: '13:45',
        backwardTimeEnd: '09:00',
        backwardDuration: '13ч 15м',
        backwardStops: ['HKG'],
    },
    {
        id:3,
        price: 13400,
        from: 'MOW',
        to: 'HKT',
        forwardTimeStart: '10:45',
        forwardTimeEnd: '08:00',
        forwardDuration: '21ч 15м',
        forwardStops: ['HKG', 'JNB'],
        backwardTimeStart: '13:45',
        backwardTimeEnd: '09:00',
        backwardDuration: '13ч 15м',
        backwardStops: ['HKG'],
    },
    {
        id:4,
        price: 13400,
        from: 'MOW',
        to: 'HKT',
        forwardTimeStart: '10:45',
        forwardTimeEnd: '08:00',
        forwardDuration: '21ч 15м',
        forwardStops: ['HKG', 'JNB'],
        backwardTimeStart: '13:45',
        backwardTimeEnd: '09:00',
        backwardDuration: '13ч 15м',
        backwardStops: ['HKG'],
    },
    {
        id:5,
        price: 13400,
        from: 'MOW',
        to: 'HKT',
        forwardTimeStart: '10:45',
        forwardTimeEnd: '08:00',
        forwardDuration: '21ч 15м',
        forwardStops: ['HKG', 'JNB'],
        backwardTimeStart: '13:45',
        backwardTimeEnd: '09:00',
        backwardDuration: '13ч 15м',
        backwardStops: ['HKG'],
    }        
]

const TicketList = () => {
    const renderTickets = tickets.map((ticket) => {
        return (
            <TicketCard key={ticket.id} data={ticket} />
        )
    })
    return (
        <div className={style.list}>
            <SortList />
            <ul>
                {renderTickets}
            </ul>
        </div>
    );
};

export default TicketList;