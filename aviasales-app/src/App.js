import StopFilter from './components/stopFilter/StopFilter';
import TicketList from "./components/ticketList/TicketList";
import LogoIcon from "./components/assets/images/Logo.png";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <main>
          <div className="logo-wrapper">
            <img src={LogoIcon} alt="logo" className="logo"/>
          </div>
          <div className="content=wrapper">
            <StopFilter />
            <TicketList />
          </div>
        </main>
      </div>  
    </div>
  );
}

export default App;
