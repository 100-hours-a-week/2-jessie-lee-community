import Router from "./router.js";
import loginView from "../pages/login/loginView.js";
import loginScript from "../pages/login/loginScript.js";

const routes = [
  {
    path: /^\/$/, // Home
    view: () => `<section class="wrap">
                   <a href="/login" data-link>로그인</a>
                   <a href="/posts" data-link>게시판</a>
                   <a href="/mypage" data-link>마이페이지</a>
                 </section>`,
  },
  {
    path: /^\/login\/?$/, // Login
    view: loginView,
    script: loginScript,
    css: "pages/login/login.css",
  },
];

const router = new Router(routes);
export default router;
