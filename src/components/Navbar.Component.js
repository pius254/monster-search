function Navbar() {
  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a class="navbar-brand" href="#">
            <img
              src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            ></img>
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 text-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" class="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
