import { v4 as uuidv4 } from 'uuid';

const URL = 'https://aviasales-test-api.kata.academy/tickets?searchId=';

const setLoadingStatus = (status) => ({
  type: 'setLoadingStatus',
  status,
});

export const setStop = (option, checked) => ({
  type: 'setStop',
  option,
  checked,
});

export const setFilter = (filter) => ({
  type: 'setFilter',
  filter,
});

const getTicketList = async (searchUrl, dispatch, hopes) => {
  try {
    const req = await fetch(`${searchUrl}`);
    const res = await req.json();
    dispatch(setLoadingStatus('loading'));
    return res;
  } catch (e) {
    if (hopes === 0) {
      dispatch(setLoadingStatus('Error'));
      return false;
    }

    const reconnect = await getTicketList(searchUrl, dispatch, hopes - 1);
    return reconnect;
  }
};

export const getTickets = () => async (dispatch) => {
  let isLoading = true;
  const getID = await fetch('https://aviasales-test-api.kata.academy/search');
  const { searchId } = await getID.json();
  const searchURL = `${URL}${searchId}`;
  while (isLoading) {
    // eslint-disable-next-line no-await-in-loop
    const { tickets: ticketList, stop } = await getTicketList(searchURL, dispatch, 5);
    isLoading = !stop;
    if (isLoading) {
      const tickets = ticketList.map((item) => ({ ...item, id: uuidv4() }));
      dispatch({ type: 'setTickets', tickets });
    }
    if (!isLoading) {
      dispatch(setLoadingStatus('finished'));
    }
  }
};
