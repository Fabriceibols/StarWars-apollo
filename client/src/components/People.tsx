import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Link } from "react-router-dom";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :()</p>;

  return data.allPeople.map(({ name }:{ name: any, gender: any }) => (
    <div key={name} className="card" style={{ maxWidth: 30 + "rem" }}>
      <div className="card-body">
        <h4 className="card-title" style={{ textAlignLast: "left" }}>
          {name}
          {/* {console.log(data)} */}
        </h4>
        <p className="card-text"></p>
        <Link to={`/person/${name}`} className="btn btn-outline-info">
          Details
        </Link>
      </div>
    </div>
  ));
  
}
export default People;
