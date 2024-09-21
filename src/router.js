import { createRouter, createWebHistory } from "vue-router";
import FilmeSelecionado from "./components/FilmeSelecionado.vue";
import FilmesComponente from "@/components/FilmesComponente.vue"; // Importando o FilmeComponente

const routes = [
  {
    path: "/",
    name: "home",
    component: FilmesComponente, // Define FilmesComponente como a página inicial
  },
  {
    path: "/descricao_filme/:id", // Rota que aceita um parâmetro
    name: "descricaoFilme", // Nome da rota
    component: FilmeSelecionado, // Componente que será exibido
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
