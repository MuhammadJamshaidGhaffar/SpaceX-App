import React from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";
import { useLaunchQuery } from "../../generated/graphql";

function Launch() {
  const { id } = useParams();
  const { loading, error, data } = useLaunchQuery({
    variables: { id: removeNull(id) },
  });
  if (error)
    return (
      <div>
        <h1>Something went Wrong</h1>
        <p>{error.message}</p>
      </div>
    );
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <img
        src={removeNull(data?.launch?.links?.flickr_images)}
        alt=""
        className={styles.launch_img}
      />
      <div className={styles.description}>
        <span className={`${styles.heading} ${styles.grid_item}`}>
          Mission Name{" "}
        </span>
        <p className={`${styles.mission_name}  ${styles.grid_item}`}>
          {data?.launch?.mission_name}
        </p>
        <span className={`${styles.heading} ${styles.grid_item}`}>
          Launch Site Name
        </span>
        <p className={`${styles.launch_site_name} ${styles.grid_item}`}>
          {" "}
          {data?.launch?.launch_site?.site_name_long}
        </p>
        <span className={`${styles.heading} ${styles.grid_item}`}>
          Rocket Name{" "}
        </span>
        <p className={`${styles.rocket_name} ${styles.grid_item}`}>
          {data?.launch?.rocket?.rocket_name}
        </p>
      </div>
      <p className={`${styles.details}`}>{data?.launch?.details}</p>
    </div>
  );
}

export default Launch;

function removeNull(elm: any) {
  if (elm == null || elm == undefined) return "";
  else return elm;
}
