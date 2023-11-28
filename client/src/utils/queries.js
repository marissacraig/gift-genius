import { gql } from '@apollo/client';

export const  QUERY_USERS = gql`
query allUsers {
  users {
    _id
    name
    username
    avatar
  }
}
`;

export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      username
      avatar
      lists
      savedLists
      # birthday
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      username
      email
      avatar
      lists
      savedLists
    }
  }
`;
