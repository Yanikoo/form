<template>
  <div id="app" class="container">
    <h1 class="container__title">Форма выбора</h1>
    <Form />
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  components: {
    Form,
  },
}
</script>
<style scoped>
.container {
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
