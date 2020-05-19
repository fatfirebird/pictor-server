const initialState = {
  '1': { id: 1, name: 'negative', desc: 'Негатив', value: false },
  '2': { id: 2, name: 'monochrome', desc: 'Монохром', value: false },
  '3': { id: 3, name: 'gaussian', desc: 'Гаусс', value: false },
  '4': { id: 4, name: 'multiplicative', desc: 'Мультипликатив', value: false },
  '5': { id: 5, name: 'impulse', desc: 'Импульс', value: false },
  '6': { id: 6, name: 'laplacian', desc: 'Лаплас', value: false },
  '7': { id: 7, name: 'poisson', desc: 'Пуассон', value: false },
}


const presetsReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'PRESET_VALUE': {
      const key = Object
        .keys(state)
        .find(id => +id === action.payload);

      return {
        ...initialState,
        [key]: {
          ...state[key],
          value: true
        }
      }
    }

    case 'RESET_PRESETS': {
      return initialState
    }

    default:
      return state
  }
}

export default presetsReducer
