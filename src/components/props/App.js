import React from "react";
import data from "../../apiData";
import "./App.css";

const Profile = (props) => {
  const { src, title } = props;
  return (
    <article>
      <img src={src} alt="ima" className="img-fluid" />
      <h5 className="m-2 center red">{title}</h5>
    </article>
  );
};

function App() {
  return (
    <section className="container">
      <div className="row mt-5 mb-5">
      <h1 className="center">Components First Project</h1>
        {data.map((item) => (
          <div className="col-lg-3">
            <Profile key={item.id} src={item.url} title={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
