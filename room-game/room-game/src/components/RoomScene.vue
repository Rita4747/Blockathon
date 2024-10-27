<template>
    <div class="room-container" @click="nextImage">
      <div class="room-background" :style="{ backgroundImage: `url(${images[currentImage]})` }"></div>
      <p>Welcome to the Room!</p>
    </div>
  </template>
  
  <script>
  import roomImage1 from '@/assets/Room1.jpg';
  import roomImage2 from '@/assets/Room2.jpg';
  export default {
    name: "RoomScene",
    data() {
      return {
        images: [roomImage1, roomImage2], // Array of images
        currentImage: 0, // Index to track the current image
      };
    },
    methods: {
      nextImage() {
        // Cycle to the next image in the array
        this.currentImage = (this.currentImage + 1) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .room-container {
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .room-background {
    position: absolute;
    width: 1300px;
    height: 700px;
    background-image: url('@/assets/Room1.jpg');
    background-size: cover;
    z-index: 0;
  }
  </style>