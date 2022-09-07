import { gql } from "@apollo/client";

export const QUERY_LAUNCH = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      details
      links {
        flickr_images
      }
      launch_site {
        site_name_long
      }
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;
