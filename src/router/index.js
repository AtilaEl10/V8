import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import SobreMi from "../views/SobreMi.vue"
import Contacto from "../views/Contacto.vue"
import Post from "../views/Post.vue"
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: SobreMi,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
  {
    path: "/post/1",
    name: "UltimoPost",
    component: Post,
  },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
