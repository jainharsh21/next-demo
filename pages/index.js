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

const Index = () => <h1>Index Page</h1>;
Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  console.log(data[0]);
};
export default Index;
