import Card from "../components/Card";
import { posts } from "../data";

const Home = () => {
  return (
    <div className="Home">
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Home;
