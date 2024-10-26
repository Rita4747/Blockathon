<template>
    <div class="room-container">
      <div class="room-background"></div>
      <p>Welcome to the Room!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "RoomScene",
  };
  </script>
  
  <style scoped>
  .room-container {
    width: 100vw;
    height: 100vh;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .room-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/Room.jpg');
    background-size: cover;
    z-index: -1;
  }
  </style>
  