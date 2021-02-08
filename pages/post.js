const Post = ({ id }) => <h1> This is Post #{id}</h1>;

Post.getInitialProps = async ({ query }) => {
  return query;
};

export default Post;
