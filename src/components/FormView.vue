
<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <label for="name">Name:</label>
            <input type="text" id="name" v-model="newItem.name" required />
        <label for="image">Image:</label>
            <input id="image" v-model="newItem.image"></input>
        <label for="description">Description:</label>
            <input type="text" id="description" v-model="newItem.description" />
        <label>Price:</label>
            <input type="number" id="price" v-model="newItem.price">
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const newItem = ref({
    name: '',
    image: '',
    description: '',
    price: '',
    // id: null
  });
  
  // const items = ref([])
  const emitSubmit = defineEmits(['submitForm'])
  const showForm = ref(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // items.value.push(newItem.value);

    // newItem.value = {
    // name: '',
    // image: '',
    // description: '',
    // price: '',
    // id: null,
    // };

    await emitSubmit('submitForm', newItem.value)
    showForm.value = false
  };

  </script>
  

