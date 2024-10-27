<template>
    <div class="container">
      <div class="player" ref="player"></div>
      <div class="zone" id="zone1" data-room="Room 1"></div>
      <div class="zone" id="zone2" data-room="Room 2"></div>
      <div class="zone" id="zone3" data-room="Room 3"></div>
      <div class="zone" id="zone4" data-room="Room 4"></div>
      <div class="zone" id="zone5" data-room="Room 5"></div>
      <div class="zone" id="zone6" data-room="Room 6"></div>
      <div class="zone" id="zone7" data-room="Living Room"></div>
      <div class="zone" id="zone8" data-room="Corridor"></div>
    </div>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  
  export default {
    name: "MainScene",
    setup() {
      const router = useRouter();
  
      // Function to navigate to RoomScene when a room is entered
      const goToRoomScene = () => {
        router.push({ name: "RoomScene" });
      };
  
      return { goToRoomScene };
    },
    mounted() {
      window.addEventListener("keydown", this.handleMovement);
    },
    beforeUnmount() {
      window.removeEventListener("keydown", this.handleMovement);
    },
    methods: {
      handleMovement(event) {
        const player = this.$refs.player;
        const step = 5;
  
        const top = parseInt(player.style.top) || 95;
        const left = parseInt(player.style.left) || 40;
  
        switch (event.key) {
          case "ArrowUp":
            player.style.top = (top - step) + "px";
            break;
          case "ArrowDown":
            player.style.top = (top + step) + "px";
            break;
          case "ArrowLeft":
            player.style.left = (left - step) + "px";
            break;
          case "ArrowRight":
            player.style.left = (left + step) + "px";
            break;
        }
  
        // Check if the player has entered a zone
        this.checkZoneCollision(player);
      },
      checkZoneCollision(player) {
        const playerRect = player.getBoundingClientRect();
  
        // Loop through each zone to check if player is within any zone
        const zones = document.querySelectorAll(".zone");
        zones.forEach((zone) => {
          const zoneRect = zone.getBoundingClientRect();
  
          // Check if player overlaps with the zone (collision detection)
          if (
            playerRect.left < zoneRect.right &&
            playerRect.right > zoneRect.left &&
            playerRect.top < zoneRect.bottom &&
            playerRect.bottom > zoneRect.top
          ) {
            // Call method to navigate to RoomScene when entering a room
            this.goToRoomScene();
          }
        });
      }
    }
  };
  </script>
  
  <style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body, html {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
  }
  
  .container {
    position: relative;
    width: 1110px;
    height: 714px;
    background-image: url('@/assets/full-map.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .player {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: yellow;
    border-radius: 50%;
    top: 95%;
    left: 25%;
    /* transform: translate(-50%, -50%); */
    z-index: 10;
  }
  
  .zone {
    position: absolute;
    width: 100px;
    height: 100px;
    opacity: 0;
    pointer-events: none;
  }
  
  #zone1 { top: 50px; left: 100px; }
  #zone2 { top: 50px; right: 100px; }
  #zone3 { bottom: 50px; left: 100px; }
  #zone4 { bottom: 50px; right: 100px; }
  #zone5 { top: 200px; left: 0; }
  #zone6 { top: 200px; right: 0; }
  #zone7 { top: 200px; left: 300px; width: 200px; height: 200px; }
  #zone8 { top: 200px; left: 250px; width: 300px; height: 50px; }
  </style>
  