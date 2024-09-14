
const NewsItem = ({ author, title, description, url, image, publishedAt, name }) => {
  return (
    <div className="card m-3 col-md-6 col-12" style={{maxWidth: 400}} >
      <picture>
          <source type="image/svg+xml" />
          <img src={image} className="img-fluid" alt={title} />
      </picture>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <div className="d-flex flex-column text-center m-2">

          <small className="mb-1">{author}</small>
          <small>
            <b>{publishedAt}</b>
          </small>
        </div>
        <p className="card-text">{description}</p>
        <form>
          <a href={url} className="btn btn-primary">{name}</a>
        </form>
      </div>
    </div>
  )
}

export default NewsItem