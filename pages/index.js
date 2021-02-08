// import React, { Component } from "react";

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static async getInitialProps() {
//     console.log("Fetching data");
//   }
//   render() {
//     return (
//       <div>
//         <h1>Index Page</h1>
//       </div>
//     );
//   }
// }

import axios from "axios";

const Index = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};
export default Index;
