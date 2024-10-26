import { createRouter, createWebHistory } from "vue-router";
import MainScene from "../components/MainScene.vue";
import RoomScene from "../components/RoomScene.vue";

const routes = [
  { path: "/", name: "MainScene", component: MainScene },
  { path: "/room", name: "RoomScene", component: RoomScene },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
