import Router from "./core/router.js";
import ComponentManager from "./components/ComponentManager.js";
import { loadComponent } from "../utils/componentLoader.js";
import loginView from "./pages/login/loginView.js";
import loginScript from "./pages/login/loginScript.js";
import postsScript from "./pages/posts/postsScript.js";
import postsView from "./pages/posts/postsView.js";
import postDetailView from "./pages/postdetail/postDetailView.js";
import postDetailScript from "./pages/postdetail/postDetailScript.js";
import signupView from "./pages/signup/signupView.js";
import signupScript from "./pages/signup/signupScript.js";
import mypageView from "./pages/mypage/myPageView.js";
import mypageScript from "./pages/mypage/mypageScript.js";
import passwordEditView from "./pages/passwordEdit/passwordEditView.js";
import { COMPONENT_IDS } from "./components/ComponentIds.js";
import NavBar from "./components/navBar/NavBar.js";

// 컴포넌트 매니저 초기화
const componentManager = new ComponentManager();
window.componentManager = componentManager; // 전역 접근용 (선택적)

// 페이지 로드 시 NavBar 컴포넌트 초기화
document.addEventListener("DOMContentLoaded", async () => {
  const navbarContainer = document.getElementById("navbar-container");
  if (!navbarContainer) return;

  const navbar = await loadComponent(
    NavBar,
    navbarContainer,
    {},
    "/src/components/navBar/navbar.css"
  );
  componentManager.register(COMPONENT_IDS.NAVBAR, navbar);
});

const routes = [
  {
    path: /^\/$/, // Home
    view: postsView,
    script: postsScript,
    css: "/src/pages/posts/posts.css",
  },
  {
    path: /^\/login\/?$/, // Login
    view: loginView,
    script: loginScript,
    css: "/src/pages/login/login.css",
  },
  {
    path: /^\/post-detail\/(\d+)\/?$/, // 게시글 상세보기
    view: postDetailView,
    script: postDetailScript,
    css: "/src/pages/postdetail/post-detail.css",
  },
  {
    path: /^\/signup\/?$/, // 회원가입
    view: signupView,
    script: signupScript,
    css: "/src/pages/signup/signup.css",
  },
  {
    path: /^\/mypage\/?$/, // 마이 페이지
    view: mypageView,
    script: mypageScript,
    css: "/src/pages/mypage/mypage.css",
  },
  {
    path: /^\/passwordEdit\/?$/, // 비밀번호 변경
    view: passwordEditView,
    css: "/src/pages/passwordEdit/passwordEdit.css",
  },
];

const router = new Router(routes);
export default router;
