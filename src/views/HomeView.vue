<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import FormView from '../components/FormView.vue'
import { ref, onMounted } from 'vue'


const url = import.meta.env.VUE_APP_API_BASE_URL

// "https://backend-capstone-zzrr.onrender.com/menu/"


const items = ref([])
const showForm = ref(false)
const name = ref('')
const image = ref('')
const description = ref('')
const price = ref('')

const getItems = async () => {
  try {
    const response = await fetch(`${url}menu/`)
    const data = await response.json()
    items.value = data
  } catch(error) {
    console.log("Unable to Locate Item", error)
  }
}

const createItem = async () => {
  if (!hasValidInput()) return

  const newItem = {
    name: name.value,
    image: image.value,
    description: description.value,
    price: price.value,
  }

  try {
    const response = await fetch(`${url}menu/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newItem)
    })

    if(!response.ok) {
      throw new Error(`Error ${response.status}`)
    }

    const createdItem = await response.json()
    items.value.push(createdItem)
      console.log("created", createdItem)

    name.value = ''
    image.value = ''
    description.value = ''
    price.value = ''
  } catch (error) {
      console.log("Create Error")
  }
}

const editItem = async (item) => {
  try {
    const response = await fetch(`${url}menu/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })

    if (response.ok) {
      console.log("Item Updated")
    } else {
      console.error('Edit Error', await response.text())
    }
  } catch (error) {
    console.error('Editing Error', error)
  }
}

const deleteItem = async (itemId) => {
  try {
    const response = await fetch(`${url}menu/${itemId}`, { method: 'DELETE' })

    if (response.ok) {
      items.value = items.value.filter((item) => item.id !== itemId)
    } else {
      console.error('Delete Error', await response.text())
    }
  } catch (error) {
    console.log('Delete Failed', error)
  }
}

const toggleForm = () => {
  showForm.value = !showForm.value
}

const handleAddItem = async (newItemData) => {
  addItem(newItemData)
  showForm.value = false
}

onMounted(getItems)
</script>



<template>
  <main>
    <div>
      <h1>This is the home page</h1>
      <img src="https://houseofnasheats.com/wp-content/uploads/2023/07/How-to-Make-Homemade-Pasta-Square-2.jpg" width="100%">
    </div>
    <TheWelcome />
    
    <div>
      <h1>Menu Form</h1>
      <button @click="toggleForm">Add a Menu Item</button>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h3>{{ item.name }}</h3>
          <img :src="item.image" alt="Menu Item Image" width="400px">
          <h5>{{ item.description }}</h5>
          <h5>${{ item.price }}</h5>
        </li>
      </ul>
      <button>Edit Menu Item</button>
      <button>Delete Menu Item</button>
      <FormView v-if="showForm" :addItem="addItem" :handleAddItem="handleAddItem"/>
    </div>
  </main>
</template>
