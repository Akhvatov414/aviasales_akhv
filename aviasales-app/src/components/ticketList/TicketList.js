import React, { useState } from 'react';
import { connect } from 'react-redux';
import SortList from '../sortList/SortList';
import TicketCard from '../ticketCard/TicketCard';
import style from './index.module.scss';

const TicketList = ({ tickets }) => {
    const [showTicketCounter, setShowTicketCounter] = useState(5)
    const renderTickets = tickets
      .slice(0, showTicketCounter)
      .map((ticket) => {
        return (
            <TicketCard key={ticket.id} data={ticket} />
        )
    });
    // const createList = (items) => {
    //     let arr = [];
    //     arr = items.filter(item => item.price < 50000)
    //     console.log(arr);
    // };
    return (
        <div className={style.list}>
            <SortList />
            {<ul>
                {renderTickets} 
            </ul>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    tickets: state.tickets.tickets,
})

export default connect(mapStateToProps)(TicketList);