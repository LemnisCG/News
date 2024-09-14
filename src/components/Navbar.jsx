import SearchBar from "./SearchBar"

function Navbar({filterText, onFilterTextChange}) {

  return (
    <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a href="" className=""><span className="badge me-2 mt-2 text-bg-secondary fs-3">NewsNew</span></a>
                <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item ms-2">
                    <a href="#" className="nav-link active" aria-current="page">Home</a>
                  </li>
                </ul>
                <SearchBar 
                  filterText={filterText} onFilterTextChange={onFilterTextChange}/>
              </div>
              <div>
              </div>
          </div>
        </nav>        
      </header>
  )
}

export default Navbar
