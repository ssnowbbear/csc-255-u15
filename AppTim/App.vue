<script lang="ts">
export default {
    name: "Todo",
    data: function () {
        return {
            todos: [],
            todoText:'',
        }
    }
}
</script>

<template>
    <div>
    <ul>
        <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>
    <form v-on:submit.prevent="addTodo">
        <input v-model="todoText" placeholder="What to do?">
        <button type="submit">Add Todo</button>
    </form>
    </div>
</template>

<style scoped></style> ALSO NOT FINISHED!!!!!