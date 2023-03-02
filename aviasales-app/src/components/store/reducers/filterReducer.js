const initialState = {
  filter: 'fastest',
};

const filterReducer = (state = initialState, action = {}) => {
  const SET_FILTER = 'setFilter';
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export default filterReducer;
