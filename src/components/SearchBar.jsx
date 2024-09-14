
function SearchBar({filterText, onFilterTextChange}) {

  return (
    <form className="d-flex" role="search">
        <input 
            className="form-control me-2" 
            value={filterText} 
            onChange={(e) => onFilterTextChange(e.target.value)} 
            type="search" 
            placeholder="Search" 
            aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}

export default SearchBar