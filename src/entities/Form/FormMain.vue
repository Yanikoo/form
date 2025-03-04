<template>
  <form @submit.prevent="saveForm">
    <div class="container">
      <h1 class="title">Форма</h1>
      <span class="title">Заполните форму</span>
      <span class="title">Все поля обязательны</span>
      <div class="form-group">
        <label class="lab">Город:</label>
        <select v-model="selectedCity" @change="updateWorkshops">
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="lab">Цех:</label>
        <select v-model="selectedWorkshop" @change="updateEmployees">
          <option v-for="workshop in filteredWorkshops" :key="workshop.id" :value="workshop.id">
            {{ workshop.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="lab">Сотрудник:</label>
        <select v-model="selectedEmployee">
          <option v-for="employee in filteredEmployees" :key="employee.id" :value="employee.id">
            {{ employee.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="lab">Бригада:</label>
        <select v-model="selectedBrigade">
          <option v-for="brigade in brigades" :key="brigade.id" :value="brigade.id">
            {{ brigade.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="lab">Смена:</label>
        <select v-model="selectedShift">
          <option v-for="shift in shifts" :key="shift.id" :value="shift.id">
            {{ shift.name }}
          </option>
        </select>
      </div>
    </div>

    <button class="btn" type="submit">Сохранить</button>
  </form>
</template>

<script setup>
import { useFormDataStore } from '@/store/formDataStore'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const formDataStore = useFormDataStore()

const router = useRouter()

const selectedCity = ref(null)
const selectedWorkshop = ref(null)
const selectedEmployee = ref(null)
const selectedBrigade = ref(null)
const selectedShift = ref(null)

const cities = computed(() => formDataStore.cities)
const brigades = computed(() => formDataStore.brigades)
const shifts = computed(() => formDataStore.shifts)

const filteredWorkshops = computed(() => {
  if (!selectedCity.value) return []
  return formDataStore.getWorkshopsByCityId(selectedCity.value)
})

const filteredEmployees = computed(() => {
  if (!selectedWorkshop.value) return []
  return formDataStore.getEmployeesByWorkshopId(selectedWorkshop.value)
})

const updateWorkshops = () => {
  selectedWorkshop.value = null
  selectedEmployee.value = null
}

const updateEmployees = () => {
  selectedEmployee.value = null
}

const saveForm = () => {
  const formData = {
    city: selectedCity.value,
    workshop: selectedWorkshop.value,
    employee: selectedEmployee.value,
    brigade: selectedBrigade.value,
    shift: selectedShift.value,
  }

  formDataStore.saveFormData(formData)
  router.push('/result')
}
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.select {
  max-width: 100%;
}
.lab {
  margin-right: 10px;
  font-size: 20px;
  color: #000;
}
.btn {
  border-radius: 12px;
  border: none;
  box-shadow: #a9eba9 0px 3px 1px 0px;
  font-size: 20px;
  color: #ffffff;
  background: green;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #75d8a2;
    color: #d4eee0;
  }
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 100%;
  padding: 20px;
  border: 1px solid #090909;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(91, 5, 5, 0.1);
}
.title {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
