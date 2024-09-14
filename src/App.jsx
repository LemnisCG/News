import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { useEffect, useState } from "react";

const URL_CBS_NEWS = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
function App() {
  const [article,setArticle] = useState([]);
  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    fetch(URL_CBS_NEWS)
        .then(res => res.json())
        .then(data => setArticle(data.articles))
  } ,[])  
  return (
    <div>
      <Navbar filterText={filterText} onFilterTextChange={setFilterText}/>
      <NewsBoard article={article} filterText={filterText} />
    </div>
  )
}

export default App
