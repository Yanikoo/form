import { defineStore } from 'pinia'

export const useFormDataStore = defineStore('formData', {
  state: () => ({
    cities: [
      { id: 1, name: 'Москва' },
      { id: 2, name: 'Санкт-Петербург' },
      { id: 3, name: 'Новосибирск' },
      { id: 4, name: 'Екатеринбург' },
      { id: 5, name: 'Казань' },
      { id: 6, name: 'Нижний Новгород' },
      { id: 7, name: 'Челябинск' },
      { id: 8, name: 'Самара' },
    ],
    workshops: [
      { id: 1, name: 'Цех 1 (Москва)', cityId: 1 },
      { id: 2, name: 'Цех 2 (Москва)', cityId: 1 },
      { id: 3, name: 'Цех 3 (Москва)', cityId: 1 },
      { id: 4, name: 'Цех 1 (Санкт-Петербург)', cityId: 2 },
      { id: 5, name: 'Цех 2 (Санкт-Петербург)', cityId: 2 },
      { id: 6, name: 'Цех 1 (Новосибирск)', cityId: 3 },
      { id: 7, name: 'Цех 2 (Новосибирск)', cityId: 3 },
      { id: 8, name: 'Цех 1 (Екатеринбург)', cityId: 4 },
      { id: 9, name: 'Цех 2 (Екатеринбург)', cityId: 4 },
      { id: 10, name: 'Цех 1 (Казань)', cityId: 5 },
      { id: 11, name: 'Цех 1 (Нижний Новгород)', cityId: 6 },
      { id: 12, name: 'Цех 1 (Челябинск)', cityId: 7 },
      { id: 13, name: 'Цех 1 (Самара)', cityId: 8 },
    ],
    employees: [
      { id: 1, name: 'Пупкин Пупа', workshopId: 1 },
      { id: 2, name: 'Петров Петр', workshopId: 1 },
      { id: 3, name: 'Сидоров Сидор', workshopId: 2 },
      { id: 4, name: 'Кузнецов Алексей', workshopId: 3 },
      { id: 5, name: 'Васильев Василий', workshopId: 4 },
      { id: 6, name: 'Семенов Семён', workshopId: 5 },
      { id: 7, name: 'Федоров Фёдор', workshopId: 6 },
      { id: 8, name: 'Михайлов Михаил', workshopId: 7 },
      { id: 9, name: 'Николаев Николай', workshopId: 8 },
      { id: 10, name: 'Алексеев Алексей', workshopId: 9 },
      { id: 11, name: 'Дмитриев Дмитрий', workshopId: 10 },
      { id: 12, name: 'Андреев Андрей', workshopId: 11 },
      { id: 13, name: 'Сергеев Сергей', workshopId: 12 },
      { id: 14, name: 'Иванов Иван', workshopId: 13 },
    ],
    brigades: [
      { id: 1, name: 'Бригада 1' },
      { id: 2, name: 'Бригада 2' },
      { id: 3, name: 'Бригада 3' },
      { id: 4, name: 'Бригада 4' },
      { id: 5, name: 'Бригада 5' },
    ],
    shifts: [
      { id: 1, name: 'Смена 1' },
      { id: 2, name: 'Смена 2' },
      { id: 3, name: 'Смена 3' },
      { id: 4, name: 'Смена 4' },
      { id: 5, name: 'Смена 5' },
    ],
  }),
  getters: {
    getWorkshopsByCityId: (state) => (cityId) => {
      return state.workshops.filter((workshop) => workshop.cityId === cityId)
    },
    getEmployeesByWorkshopId: (state) => (workshopId) => {
      return state.employees.filter((employee) => employee.workshopId === workshopId)
    },
  },
  actions: {
    saveFormData(data) {
      this.formData = data
    },
  },
})
