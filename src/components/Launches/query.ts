import { gql } from "@apollo/client";

export const LOL = gql`
  query launches_ {
    launches {
      id
      mission_name
      links {
        flickr_images
      }
      launch_year
    }
  }
`;
