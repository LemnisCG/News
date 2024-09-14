import NewsItem from "./NewsItem";

function NewsBoard({article,filterText}) {
  
  return (
    <div className="container">
        <h1 className="text-center my-3">Noticias actuales</h1>
        <div className="row d-flex justify-content-center">
            {article && article
                .filter(news => 
                    news.title && news.title.toLowerCase().includes(
                        filterText.toLowerCase()
                    )
                )
                .map((news,index) => (
                    <NewsItem 
                        key={index}
                        author={news.author}
                        title={news.title}
                        description={news.description}
                        url={news.url}
                        image={news.urlToImage}
                        publishedAt={news.publishedAt}
                        name="Enlace" />
                ))
            }
        </div>
    </div>
  )
}
export default NewsBoard