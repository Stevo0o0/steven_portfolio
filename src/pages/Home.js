import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hi, I'm Steven 👋</h1>
      <p>Aspiring DevOps Engineer & Software Engineering Student</p>

      <p>
        I build scalable applications and automate systems using cloud technologies.
      </p>

      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
}

export default Home;
