const initialState = { 
    stops: {
        all: false,
        withoutStops: false,
        oneStop: false,
        twoStops: true,
        threeStops: false,
    },
}

const stopReducer  = (state = initialState, action) => {
    const SET_STOP = 'setStop';
    const newValue = { ...state.stops };
    switch (action.type) {
        case SET_STOP: 
          if (action.option === 'all') {
            Object.keys(newValue).forEach((i) => newValue[i] = action.checked);
          } else {
            Object.keys(newValue).map((i) => (i === action.option ? (newValue[i] = action.checked) : i));
            newValue.all = Object.keys(newValue).slice(1).every((i) => newValue[i] === true);
          }
          return { ...state, stops: newValue };
          default:
            return state;
    }
};

export default stopReducer;