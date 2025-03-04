<template>
  <div class="result-container">
    <h1 class="title">Результат</h1>
    <span>Выводим результат подгружаем из Pinia</span>
    <div v-if="formData">
      <p><strong>Город:</strong> {{ cityName }}</p>
      <p><strong>Цех:</strong> {{ workshopName }}</p>
      <p><strong>Сотрудник:</strong> {{ employeeName }}</p>
      <p><strong>Бригада:</strong> {{ brigadeName }}</p>
      <p><strong>Смена:</strong> {{ shiftName }}</p>
    </div>
    <div v-else>
      <p>Данные не найдены.</p>
    </div>
    <router-link to="/" class="btn">Назад</router-link>
  </div>
</template>

<script setup>
import { useFormDataStore } from '@/store/formDataStore'
import { computed } from 'vue'

const formDataStore = useFormDataStore()

const formData = computed(() => formDataStore.formData)

const cityName = computed(() => {
  return formDataStore.cities.find((city) => city.id === formData.value.city)?.name || 'Не указано'
})

const workshopName = computed(() => {
  return (
    formDataStore.workshops.find((workshop) => workshop.id === formData.value.workshop)?.name ||
    'Не указано'
  )
})

const employeeName = computed(() => {
  return (
    formDataStore.employees.find((employee) => employee.id === formData.value.employee)?.name ||
    'Не указано'
  )
})

const brigadeName = computed(() => {
  return (
    formDataStore.brigades.find((brigade) => brigade.id === formData.value.brigade)?.name ||
    'Не указано'
  )
})

const shiftName = computed(() => {
  return (
    formDataStore.shifts.find((shift) => shift.id === formData.value.shift)?.name || 'Не указано'
  )
})
</script>

<style scoped>
.result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: blanchedalmond;
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
  color: black;
}

p {
  font-size: 18px;
  margin: 10px 0;
}

.btn {
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
}
</style>
