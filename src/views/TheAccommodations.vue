<template>
  <div class="item-page-view">
    <h1>This is an Item Page {{$route.params.itemId}} {{name}}</h1>
    <input v-model="name"/>
    <input v-model="name"/>
  </div>
</template>

<script>

export default {
  data(){
    return {
      name: "Fred"
    }
  }
}

</script>

<style lang="scss">
.item-page-view{
  h1{
    border: 1px solid red;
  }
}
</style>

<style lang="scss" scoped>
  h1 {
    border: 1px solid green;
  }
</style>
