import useFetchPosts from "../../hooks/useFetchPosts";
import { Loading } from "../../components";
import "./Posts.css";

const Posts = () => {
  const [posts, isLoading, error] = useFetchPosts();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="post__main">
      {posts?.map((p) => (
        <div>
          <PostCard data={p} />
        </div>
      ))}
    </div>
  );
};

const PostCard = ({ data }) => {
  return (
    <div className="cardPost__main">
      <p>{data.title}</p>
      <Bottom body={data.body} />
    </div>
  );
};

const Bottom = (props) => {
  return <p className="black">{props.body}</p>;
};

export default Posts;
