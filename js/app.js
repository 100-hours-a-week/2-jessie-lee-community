import Router from "./router.js";
import loginView from "../pages/login/loginView.js";
import loginScript from "../pages/login/loginScript.js";
import postsScript from "../pages/posts/postsScript.js";
import postsView from "../pages/posts/postsView.js";

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
  {
    path: /^\/posts\/?$/, // 게시글 목록 보기
    view: postsView,
    script: postsScript,
    css: "pages/posts/posts.css",
  },
];

const router = new Router(routes);
export default router;
