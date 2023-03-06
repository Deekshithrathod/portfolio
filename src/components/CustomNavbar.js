function CustomNavbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand " href="#home">
          Deekshith Rathod
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse ms-auto"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#home">
                Home{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#blogs">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default CustomNavbar;
