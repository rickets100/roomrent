<template>
  <div class="main-container">
    <div></div>
    <div class="media-square-container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="media-caption"></div>
    </div>
    <div class="media-square-container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="media-caption">THIS IS A CAPTION</div>
    </div>
    <div class="media-square-container">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="media-caption"></div>
    </div>
    <div></div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.main-container{
  display: grid;
  grid-template-columns: [leftpad] 10px [column1] 33% [column2] 33% [column3] 33% [rightpad] 10px;

  .media-square-container{
    display: grid;
    grid-template-columns: [leftbuffer] 20px [content] auto [rightbuffer] 20px;
    grid-template-rows: auto 10%;
    height: 300px;
    width: 300px;
    background-image: url(../assets/images-sleep/rentbedroom1.jpg);
    background-position: center;
    background-size: cover;
    .media-caption{
      background-color: rgba(255, 255, 255, 0.5);
      text-align: center;
      font-weight: bold;
    }
  }
  h1{
  }
}
</style>
