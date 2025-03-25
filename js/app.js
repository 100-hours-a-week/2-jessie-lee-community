import Router from "./router.js";
import loginView from "../pages/login/loginView.js";
import loginScript from "../pages/login/loginScript.js";
import postsScript from "../pages/posts/postsScript.js";
import postsView from "../pages/posts/postsView.js";
import postDetailView from "../pages/postdetail/postDetailView.js";
import postDetailScript from "../pages/postdetail/postDetailScript.js";
import signupView from "../pages/signup/signupView.js";
import signupScript from "../pages/signup/signupScript.js";
import mypageView from "../pages/mypage/myPageView.js";
import mypageScript from "../pages/mypage/mypageScript.js";
import passwordEditView from "../pages/passwordEdit/passwordEditView.js";

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
  {
    path: /^\/post-detail\/(\d+)\/?$/, // 게시글 상세보기
    view: postDetailView,
    script: postDetailScript,
    css: "pages/postdetail/post-detail.css",
  },
  {
    path: /^\/signup\/?$/, // 회원가입
    view: signupView,
    script: signupScript,
    css: "pages/signup/signup.css",
  },
  {
    path: /^\/mypage\/?$/, // 마이 페이지
    view: mypageView,
    script: mypageScript,
    css: "pages/mypage/mypage.css",
  },
  {
    path: /^\/passwordEdit\/?$/, // 비밀번호 변경
    view: passwordEditView,
    css: "pages/passwordEdit/passwordEdit.css",
  },
];

const router = new Router(routes);
export default router;
