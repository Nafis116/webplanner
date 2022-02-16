const initialState = {
  infotask: [],
  tasks: [
    {
      id: 0,
      nameTask: 'Реализация подакцизных СУГ',
      inCharge: 'Гилязов Марат',
      deadline: '2021-12-31 00:00:00',
      stage1: 'Проведение СМР',
      result: 0
    },
    {
      id: 1,
      nameTask: 'Реализация СГС',
      inCharge: 'Зиангиов Нафис',
      deadline: '2022-05-31 00:00:00',
      stage1: 'Вывод показании в АСОДУ завода',
      result: 0
    },
    {
      id: 2,
      nameTask: 'Реализация промывок колес С-201',
      inCharge: 'Зиангиов Нафис',
      deadline: '2022-05-31 00:00:00',
      stage1: 'Проведение СМР',
      result: 0
    },
    {
      id: 3,
      nameTask: 'Реализация САУиР',
      inCharge: 'Аглямов Рамиль',
      deadline: '2022-05-31 00:00:00',
      stage1: 'Проведение СМР, ПНР',
      result: 1
    }
  ]  
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO-LIST':
      const listTasks = [...state.tasks];
      const task = state.tasks.find(item =>
                    item.nameTask === action.payload.nameTask);
      if(task) {
        return state;
      } else {
        let newId = listTasks.length-1;
        action.payload.id = +newId+1;
        listTasks.push(action.payload);
      }
    
      return{
        ...state,
        tasks: listTasks
      };

      case 'DELETE_TASK-FROM_LIST':
        const newListArr = state.tasks.filter(( item ) => item.id !== action.payload.id)
        return{
          ...state,
          tasks: newListArr
        };

      case 'GET_ID':
        const newArrTask = state.tasks.filter(( item ) => item.id === action.payload.id)
        // console.log(newArrTask);
        // console.log(state.infotask);

        return{
          ...state,
          infotask: newArrTask
        };

      default:
      return state;
  }
}