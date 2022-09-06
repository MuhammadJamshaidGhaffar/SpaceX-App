import React from "react";
import { useLaunches_Query } from "../../generated/graphql";

function Launches() {
  const { data, loading, error } = useLaunches_Query();
  if (error)
    return (
      <div>
        <h1>Failed to load data from Server</h1>
        <p>{error.message}</p>
      </div>
    );
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {" "}
      {data?.launches
        ? data.launches.map((elm, index) => (
            <div key={index}>
              <p>{elm?.mission_name}</p>
              <p>{elm?.launch_year}</p>
              <p>{elm?.links?.flickr_images}</p>
              <p>{elm?.mission_id}</p>
            </div>
          ))
        : undefined}
    </div>
  );
}

export default Launches;
