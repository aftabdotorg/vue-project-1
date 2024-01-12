// stores/apiStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactStore = defineStore('api', () => {
  const data = ref(null)
  const loading = ref(false)

  const fetchData = async () => {
    try {
      loading.value = true
      const response = await fetch('https://dummyjson.com/users')
      const result = await response.json()
      data.value = result
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      loading.value = false
    }
  }

  const fetchDataById = async (id) => {
    try {
      loading.value = true
      const response = await fetch(`https://dummyjson.com/users/${id}`)
      const result = await response.json()
      data.value = result
      return result
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      loading.value = false
    }
  }

  return { data, loading, fetchData, fetchDataById }
})
