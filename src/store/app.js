const state = {
  toDos: [
    { id: 1, toDo: "Buy bread", isDone: false },
    { id: 2, toDo: "Wash car", isDone: true },
    { id: 3, toDo: "Clean flat", isDone: true },
    { id: 4, toDo: "Learn Vue", isDone: false },
    { id: 5, toDo: "Find out, what Vuex is.", isDone: false },
  ],
};

const actions = {
  setToDoDone({ commit }, toDoId) {
    commit("setToDoDone", toDoId);
  },

  deleteToDo({ commit }, toDoId) {
    commit("deleteToDo", toDoId);
  },

  addNewToDo({ commit }, newToDoData) {
    commit("addNewToDo", newToDoData);
  },
};

const mutations = {
  setToDoDone(state, toDoId) {
    state.toDos = state.toDos.map((toDo) => {
      if (toDo.id === toDoId) {
        return {
          ...toDo,
          isDone: !toDo.isDone,
        };
      }
      return toDo;
    });
  },

  deleteToDo(state, toDoId) {
    state.toDos = state.toDos.filter((toDo) => toDo.id !== toDoId);
  },

  addNewToDo(state, newToDoData) {
    const newToDoBody = {
      id: Date.now(),
      toDo: newToDoData,
      isDone: false,
    };

    state.toDos = [newToDoBody, ...state.toDos];
  },
};

const getters = {
  toDoItems: (state) => state.toDos,
  areAllToDosDone: (state) => state.toDos.every((toDo) => toDo.isDone),
};

export default {
  state,
  actions,
  mutations,
  getters,
};
