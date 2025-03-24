import Router from "./router.js";

const routes = [
  {
    path: /^\/$/, // Home
    view: () => `<section class="wrap">
                   <a href="/login" data-link>로그인</a>
                   <a href="/posts" data-link>게시판</a>
                   <a href="/mypage" data-link>마이페이지</a>
                 </section>`,
  },
];

const router = new Router(routes);
export default router;
