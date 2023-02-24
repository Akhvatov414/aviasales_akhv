const initialState = {
  loadingStatus: 'finished',
};

const loadingStatusReducer = (state = initialState, action) => {
  const SET_LOADING_STATUS = 'setLoadingStatus';
  switch (action.type) {
    case SET_LOADING_STATUS:
      return { ...state, loadingStatus: action.status };
    default:
      return state;
  }
};

export default loadingStatusReducer;
