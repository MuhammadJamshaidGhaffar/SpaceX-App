import React from "react";
import { useLaunches_Query } from "../../generated/graphql";
import styles from "./style.module.css";

function Launches() {
  const { data, loading, error } = useLaunches_Query();
  if (error)
    return (
      <div className={styles.div}>
        <h1>Failed to load data from Server</h1>
        <p className={styles.error_message}>{error.message}</p>
      </div>
    );
  else if (loading) return <h1 className={styles.div}>Loading...</h1>;
  else if (!data) return <div>Data is not loaded or feteched</div>;

  return (
    <div>
      <div>
        <img
          src="https://logos-world.net/imageup/SpaceX/SpaceX-Logo-PNG2.png"
          alt=""
          className={`${styles.spacex_logo}`}
        />
      </div>
      <div className={styles.launches_div}>
        {data?.launches
          ? data.launches.map((launch, index) => (
              <div key={index} className={styles.launch_div}>
                <img
                  src={removeNull(launch?.links?.flickr_images)}
                  onClick={() => {
                    window.open(`launch/${launch?.id}`, "_blank");
                  }}
                  alt=""
                />
                <p>{launch?.mission_name}</p>
                <p>{launch?.launch_year}</p>
              </div>
            ))
          : undefined}
      </div>
    </div>
  );
}

export default Launches;

function removeNull(elm: any) {
  if (elm === null || elm === undefined) return "";
  else return elm;
}
