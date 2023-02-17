import StopFilter from '../stopFilter/StopFilter';
import TicketList from "../ticketList/TicketList";
import LogoIcon from "../assets/images/Logo.png";
import style from './index.module.scss';

function App() {
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

export default App;
