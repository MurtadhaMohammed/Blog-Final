import Header from "../components/header";
import Footer from "../components/footer";
import BlogItem from "../components/blogItem";
import { useState, useEffect } from "react";

const Home = (props) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {

    console.log(props)
    setData(props.blog.articles)
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="home-cover">
          <img src="./assets/home-cover.png" alt="" />
          <div className="overlay">
            <div className="container">
              <h1>Simple Blog.</h1>
              <p>A blog created by FikraCamps</p>
            </div>
          </div>
        </section>
        <section className="container blog-list">
          {
            data.map(article => <BlogItem key={article.id} article={article}/>)
          }
        </section>
      </main>
      <Footer />
    </>
  );
};


export async function getStaticProps() {
  const res = await fetch('https://mashriq.herokuapp.com/dash/v1/articles')
  const blog = await res.json()

  return {
    props: {
      blog,
    },
  }
}

export default Home;
