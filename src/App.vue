<template>
  <div id="app">
    <AddToDo />
    <header v-if="toDoItems.length !== 0" class="header-title">
      What to do:
    </header>
    <input
      class="todo-search-field"
      @input="findToDo"
      v-model="searchText"
      type="text"
      name=""
      id=""
      placeholder="Find a todo..."
      v-if="toDoItems.length !== 0"
    />
    <p class="todo-done-text" v-if="toDoItems.length === 0">
      You haven't got any todos.
    </p>
    <p class="todo-done-text" v-if="areAllToDosDone">All todos are done!</p>
    <transition-group class="todo-items" name="todo-item" tag="ul">
      <li class="todo-item" v-for="toDoItem in findToDo()" :key="toDoItem.id">
        <span class="todo-item-icon">{{
          toDoItem.isDone ? `&#10004;` : `&#10006;`
        }}</span>
        <p
          class="todo-item-text"
          :class="[toDoItem.isDone ? 'todo-item-text-done' : '']"
        >
          {{ toDoItem.toDo }}
        </p>
        <button
          @click="onToDoDoneClick(toDoItem.id)"
          class="todo-item-btn-done"
        >
          Done
        </button>
        <button
          @click="onToDoDeleteClick(toDoItem.id)"
          class="todo-item-btn-del"
        >
          Delete
        </button>
      </li>
    </transition-group>
    <p
      class="nothing-found-text"
      v-if="findToDo().length === 0 && !areAllToDosDone"
    >
      Nothing found!
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddToDo from "./components/AddToDo";

export default {
  name: "App",
  components: {
    AddToDo,
  },
  data() {
    return {
      filteredToDoItems: [],
      searchText: ``,
    };
  },
  methods: {
    ...mapMutations(["setToDoDone", "deleteToDo"]),

    onToDoDoneClick(toDoId) {
      this.setToDoDone(toDoId);
    },

    onToDoDeleteClick(toDoId) {
      this.deleteToDo(toDoId);
    },
    findToDo() {
      return this.toDoItems.filter((toDoItem) =>
        toDoItem.toDo.toUpperCase().includes(this.searchText.toUpperCase())
      );
    },
  },

  computed: {
    ...mapGetters(["toDoItems", "areAllToDosDone"]),
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;

  width: 800px;

  margin: 0 auto;
  padding: 0;
  padding: 15px;
  border-radius: 25px;
}

.header-title {
  display: flex;
  justify-content: flex-start;

  margin: 0;
  padding: 0;

  font-family: "DotGothic16", sans-serif;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1px;
}

.todo-search-field {
  display: flex;

  margin: 0;
  margin-top: 5px;
  padding: 5px 15px;

  font-family: "DotGothic16", sans-serif;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;

  border: 2px solid rgb(56, 167, 204);
  border-radius: 25px;

  outline: none;
}

.todo-search-field:focus {
  background-color: rgb(205, 243, 255);
}

.todo-items {
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;

  margin: 0;
  margin-top: 10px;

  padding: 0;

  border-bottom: 1px solid #000;
}

.todo-item-enter-active,
.todo-item-leave-active {
  transition: all 0.5s;
}
.todo-item-enter,
.todo-item-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.todo-item-icon {
  display: flex;

  margin-right: 10px;
  padding: 0px 4px;

  font-family: "DotGothic16", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #000000;

  border-radius: 50%;
}

.todo-item-text {
  display: flex;
  flex-grow: 1;

  font-family: "DotGothic16", sans-serif;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
}

.todo-item-text-done {
  text-decoration: line-through;
}

.todo-item-btn-done {
  display: flex;

  margin-right: 15px;
  padding: 0;
  padding: 10px 25px;

  font-family: "DotGothic16", sans-serif;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #ffffff;

  border: none;

  background-color: green;

  border-radius: 25px;

  transition: all 0.3s ease;
}

.todo-item-btn-done:hover {
  background-color: rgb(57, 177, 57);

  cursor: pointer;

  transition: all 0.3s ease;
}

.todo-item-btn-del {
  display: flex;

  margin: 0;
  padding: 0;
  padding: 10px 25px;

  font-family: "DotGothic16", sans-serif;
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 1px;
  color: #ffffff;

  border: none;

  background-color: tomato;

  border-radius: 25px;
}

.todo-item-btn-del:hover {
  background-color: rgb(212, 78, 54);

  cursor: pointer;

  transition: all 0.3s ease;
}

.todo-done-text {
  font-family: "DotGothic16", sans-serif;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 1px;
  color: #000000;
}

.nothing-found-text {
  font-family: "DotGothic16", sans-serif;
  font-size: 22px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 1px;
  color: #000000;
}
</style>
