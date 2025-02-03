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
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  height: 100vh;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(90deg, #b9deed, #efefef);

  &__title {
    font-size: 36px;
    margin-bottom: 20px;
  }
}
</style>
