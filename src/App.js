import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {

  async function search() {
    // const key = "zT18GDDyLIHam78EfDyGO3yT8Q8IkZZK";
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=25&offset=0&lang=en`;
    // const r = await fetch(url);
    // const j = await r.json();
    // setGifs(j.data);
  }

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;