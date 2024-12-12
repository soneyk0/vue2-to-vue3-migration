<template>
  <div id="app">
    <h1>To-Do App</h1>
    <hr />
    <AddTodo />
    <hr />
    <TodoList />
  </div>
</template>

<script setup>
import AddTodo from "../src/components/AddTodo.vue";
import TodoList from "../src/components/TodoList.vue";
</script>

<style scoped>
h1{
  text-align: center;
}
</style>