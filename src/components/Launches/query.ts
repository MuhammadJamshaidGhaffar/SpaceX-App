import { gql } from "@apollo/client";

export const LOL = gql`
  query launches_ {
    launches {
      mission_id
      mission_name
      launch_year
      links {
        flickr_images
      }
    }
  }
`;
