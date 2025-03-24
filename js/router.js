export default class Router {
  routes;
  appElement;

  constructor(routes) {
    this.routes = routes;
    this.appElement = document.getElementById("app");

    window.addEventListener("load", () => this.handleLocation());

    window.addEventListener("popstate", () => this.handleLocation());

    document.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        this.navigate(e.target.href);
      }
    });
  }

  navigate(url) {
    window.history.pushState(null, "", url);
    this.handleLocation();
  }

  async handleLocation() {
    const path = window.location.pathname;

    const route = this.routes.find((route) => path.match(route.path)) || {
      view: () => this.renderNotFound(),
    };

    await this.loadView(route);
  }

  async loadCSS(cssPath) {
    if (!document.querySelector(`link[href="${cssPath}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssPath;
      document.head.appendChild(link);
    }
  }

  async loadView(route) {
    this.appElement.innerHTML = "";

    if (route.css) {
      await this.loadCSS(route.css);
    }

    try {
      const view = await route.view();
      this.appElement.innerHTML = view;

      if (route.script) {
        await route.script();
      }
    } catch (error) {
      console.error("Error loading view: ", error);
      // TODO : 오류시 보여줄 페이지 추가
      this.appElement.innerHTML = `<p>Error loading content</p>`;
    }
  }

  renderNotFound() {
    return `<div class="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/" data-link>Go Home</a>
    </div>`;
  }
}
