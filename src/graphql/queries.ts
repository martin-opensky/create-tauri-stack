import { gql } from '@apollo/client';

export const GET_TIME = gql`
  query GetTime {
    currentTime
  }
`;

export const GREET_MUTATION = gql`
  mutation Greet($name: String!) {
    greet(name: $name)
  }
`;
