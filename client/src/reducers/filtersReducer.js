const initialState = {
  '1': {
    id: 1,
    name: 'blue',
    desc: 'Синий',
    step: 1,
    min: 0,
    max: 100,
    value: 0
  },
  '2': {
    id: 2,
    name: 'red',
    desc: 'Красный',
    step: 1,
    min: 0,
    max: 100,
    value: 0
  },
  '3': {
    id: 3,
    name: 'green',
    desc: 'Зеленый',
    step: 1,
    min: 0,
    max: 100,
    value: 0
  },
  '4': {
    id: 4,
    name: 'borderH',
    desc: 'Высота рамки',
    step: 1,
    min: 0,
    max: 20,
    value: 0
  },
  '5': {
    id: 5,
    name: 'borderW',
    desc: 'Ширина рамки',
    step: 1,
    min: 0,
    max: 20,
    value: 0
  },
  '6': {
    id: 6,
    name: 'emboss',
    desc: 'Тиснение',
    step: 1,
    min: 0,
    max: 10,
    value: 0
  },
  '7': {
    id: 7,
    name: 'gamma',
    desc: 'Гамма',
    step: 0.1,
    min: 0,
    max: 5,
    value: 0
  },
  '8': {
    id: 8,
    name: 'gaussian',
    desc: 'Размытие по Гауссу',
    step: 1,
    min: 0,
    max: 10,
    value: 0
  },
  '9': {
    id: 9,
    name: 'paint',
    desc: 'Эффект масляных красок',
    step: 1,
    min: 0,
    max: 10,
    value: 0
  },
  '10': {
    id: 10,
    name: 'spread',
    desc: 'Смещение пикселей',
    step: 1,
    min: 0,
    max: 20,
    value: 0
  },
  '11': {
    id: 11,
    name: 'mode',
    desc: 'Шум',
    step: 1,
    min: 0,
    max: 10,
    value: 0
  },
  '12': {
    id: 12,
    name: 'implode',
    desc: 'Деформация центра',
    step: 0.1,
    min: -5,
    max: 5,
    value: 0
  },
  '13': {
    id: 13,
    name: 'median',
    desc: 'Медианный фильтр',
    step: 1,
    min: 0,
    max: 20,
    value: 0
  },
  '14': {
    id: 14,
    name: 'sharpenRad',
    desc: 'Радиус резкости',
    step: 1,
    min: 0,
    max: 50,
    value: 0
  },
  '15': {
    id: 15,
    name: 'sharpenSig',
    desc: 'Сигма резкости',
    step: 1,
    min: 0,
    max: 50,
    value: 0
  },
  '16': {
    id: 16,
    name: 'motionRad',
    desc: 'Радиус размытия в движение',
    step: 1,
    min: 0,
    max: 50,
    value: 0
  },
  '17': {
    id: 17,
    name: 'motionSig',
    desc: 'Сигма размытия в движение',
    step: 1,
    min: 0,
    max: 40,
    value: 0
  },
  '18': {
    id: 18,
    name: 'motionAng',
    desc: 'Угол размытия в движение',
    step: 1,
    min: 0,
    max: 180,
    value: 0
  },
  '19': {
    id: 19,
    name: 'modulateBright',
    desc: 'Яркость',
    step: 1,
    min: -100,
    max: 100,
    value: 0
  },
  '20': {
    id: 20,
    name: 'modulateSat',
    desc: 'Насыщенность',
    step: 1,
    min: -100,
    max: 100,
    value: 0
  },
  '21': {
    id: 21,
    name: 'modulateHue',
    desc: 'Тон',
    step: 1,
    min: -100,
    max: 100,
    value: 0
  },
  '22': {
    id: 22,
    name: 'raiseW',
    desc: 'Ширина псевдо-3д эффекта',
    step: 1,
    min: 0,
    max: 50,
    value: 0
  },
  '23': {
    id: 23,
    name: 'raiseH',
    desc: 'Высота псевдо-3д эффекта',
    step: 1,
    min: 0,
    max: 50,
    value: 0
  },
  '24': {
    id: 24,
    name: 'shadeAz',
    desc: 'Азимут тени',
    step: 1,
    min: 0,
    max: 90,
    value: 0
  },
  '25': {
    id: 25,
    name: 'shadeEl',
    desc: 'Высота тени',
    step: 1,
    min: 0,
    max: 90,
    value: 0
  },
  '26': {
    id: 26,
    name: 'shearX',
    desc: 'Поворот по оси Х',
    step: 1,
    min: 0,
    max: 180,
    value: 0
  },
  '27': {
    id: 27,
    name: 'shearY',
    desc: 'Поворот по оси Y',
    step: 1,
    min: 0,
    max: 180,
    value: 0
  },
  '28': {
    id: 28,
    name: 'colors',
    desc: 'Количество цветов в картинке',
    step: 1,
    min: 0,
    max: 64,
    value: 0
  },
  '29': {
    id: 29,
    name: 'shaveW',
    desc: 'Обрезать по ширине',
    step: 1,
    min: 0,
    max: 40,
    value: 0
  },
  '30': {
    id: 30,
    name: 'shaveH',
    desc: 'Обрезать по высоте',
    step: 1,
    min: 0,
    max: 40,
    value: 0
  },
  '31': {
    id: 31,
    name: 'swirl',
    desc: 'Завихрение',
    step: 1,
    min: 0,
    max: 90,
    value: 0
  },
  '32': {
    id: 32,
    name: 'rotateDeg',
    desc: 'Поворот',
    step: 1,
    min: 0,
    max: 180,
    value: 0
  },
  '33': {
    id: 33,
    name: 'contrast',
    desc: 'Контраст',
    step: 1,
    min: 0,
    max: 15,
    value: 0
  },
  '34': {
    id: 34,
    name: 'blurRad',
    desc: 'Радиус блюра',
    step: 1,
    min: 0,
    max: 50,
    value: 0
  },
  '35': {
    id: 35,
    name: 'blurSig',
    desc: 'Сигма блюра',
    step: 1,
    min: 0,
    max: 40,
    value: 0
  }
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE': {
      const { filterValue, filterId } = action.payload;
      const key = Object.keys(state).find(id => {
        return +id === filterId
      });

      return {
        ...state,
        [key]: {
          ...state[key],
          value: filterValue,
        }
      }
    }

    case 'RESET' : {
       return initialState
    }

    default:
      return state;
  }
}

export default filtersReducer
