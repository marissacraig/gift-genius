import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      name
      username
      avatar
      email
      events {
        _id
        private
        title
        items {
          _id
          fulfilled
          image
          name
          price
          url
          wishability
        }
      }
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
  query Me {
    me {
      _id
      name
      username
      avatar
      email
    }
  }
`;


