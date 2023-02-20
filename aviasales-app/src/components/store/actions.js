const URL = 'https://aviasales-test-api.kata.academy/tickets?searchId=';

const setLoadingStatus = (status) => ({
    type: 'setLoadingStatus',
    status,
});

export const setStop = (option, checked) => ({
    type: 'setStop', option, checked 
});

export const setFilter = (filter) => ({
    type: 'setFilter', filter,
});

export const getTickets = () => async (dispatch) => {
    const isLoading = true;
    const res = await fetch('https://aviasales-test-api.kata.academy/search');
    const { searchId } =  await res.json();
}

getTickets();