<template>
  <form class="add-todo-form" @submit.prevent="addNewToDoHandler">
    <input
      class="add-todo-input"
      type="text"
      name=""
      id=""
      placeholder="Buy soda..."
      v-model="todo"
    />
    <button :disabled="todo.length === 0" class="add-todo-btn" type="submit">
      Add ToDo
    </button>
  </form>
</template>



<script>
import { mapMutations } from "vuex";

export default {
  name: "AddToDo",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    ...mapMutations(["addNewToDo"]),

    addNewToDoHandler() {
      this.addNewToDo(this.todo);
      this.todo = ``;
    },
  },
};
</script>


<style scoped>
.add-todo-form {
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 25px;
}

.add-todo-input {
  display: flex;

  width: 250px;

  margin: 0;
  padding: 10px 15px;

  font-family: "DotGothic16", sans-serif;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;

  border: 2px solid rgb(56, 167, 204);
  border-radius: 25px;

  outline: none;
}

.add-todo-input:focus {
  background-color: rgb(205, 243, 255);
}

.add-todo-btn {
  display: block;

  margin: 0;
  margin-left: 10px;
  padding: 10px;

  font-family: "DotGothic16", sans-serif;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  color: #ffffff;

  border: 2px solid rgb(56, 167, 204);
  border-radius: 25px;

  background-color: rgb(56, 167, 204);

  transition: 0.3s ease;
}

.add-todo-btn:hover {
  border: 2px solid rgb(0, 0, 0);

  color: #000000;

  cursor: pointer;

  transition: 0.3s ease;
}

.add-todo-btn:disabled {
  opacity: 0.5;
}

.add-todo-btn:disabled:hover {
  color: #ffffff;
  border: 2px solid rgb(56, 167, 204);
  cursor: default;
}
</style>
