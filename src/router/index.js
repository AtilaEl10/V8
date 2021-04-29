import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
const SobreMi = () => import ("../views/SobreMi.vue")
const Contacto = () => import ("../views/Contacto.vue")
const Post = () => import ("../views/Post.vue")
import NotFound from "../views/NotFound.vue"
// Desafio parte 2
import Admin from "../views/Admin.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Inicio,
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/"
  },
  {
    path: "/inicio",
    name: "Inicio",
    redirect: "/"
  },
  {
    path: "/portada",
    name: "Portada",
    redirect: "/"
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: SobreMi,
    alias: ["/acerca", "/about"]
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
    alias: ["/contactame", "/contact"]
  },
  {
    path: "/post/1",
    name: "UltimoPost",
    component: Post,
  },
  // Desafio parte 2
  {
    path: "/admin/:id",
    name: "Admin",
    component: Admin,
    props: true,
  },
  {
    path: "/*",
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
