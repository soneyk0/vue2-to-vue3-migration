<template>
  <div class="container">
    <h2>My Todo List</h2>
    <div class="card">
      <div class="card-inner">
        <ul class="list-group">
          <li class="list-group-item d-flex p-3" v-for="(todo, index) in todos" :key="index">
            <div class="flex-fill">{{ capitalize(todo) }}</div>
            <div class="list-item-delete">
              <button type="button" @click="removeTodo(index)" class="btn btn-danger" title="Delete">
                X
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed} from "vue";

const store = useStore()
const todos = computed(() => store.state.todos)

const capitalize = (value) => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const removeTodo = (index) => {
  store.dispatch('removeTodo', index)
}
</script>

<style scoped>
h2{
  text-align: center;
}
</style>
