import React, { Component } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { compact } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const PEOPLE_QUERY = gql`
  query getAllPeople {
    allPeople {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

function People() {
  const { loading, error, data } = useQuery(PEOPLE_QUERY);
  //   console.log("hapa");
  //   console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allPeople.map(({ name, gender }) => (
    <div key={name} class="card">
      <div class="card-body">
        <h4 class="card-title">{name}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{gender}</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button type="button" class="btn btn-outline-info">
          Details
        </button>
      </div>
    </div>
  ));
}
export default People;

// {
//   <div
//     key={name}
//     class="card border-info mb-3"
//     style={{ maxWidth: 20 + "rem" }}
//   >
//     <div class="card-header"> .</div>
//     <div class="card-body">
//       <h4 class="card-title">{name}</h4>
//       {/* <p class="card-text">Gender: {gender} </p> */}
//       <button type="button my-2 my-sm-0" class="btn btn-outline-info">
//         Details
//       </button>
//     </div>
//   </div>;

/* <div className="card card-body mb-3" key={name}>
<div className="row">
  <div className="col-md-9">
    <h5>{name}</h5>
    <p>Gender: {gender}</p>
  </div>
  <div className="col-md-3">
    <button type="button" class="btn btn-outline-info">
      Details
    </button>
  </div>
</div>
</div> */
