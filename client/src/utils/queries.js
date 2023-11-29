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
  query User($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      username
      avatar
      events {
        _id
        title
      }
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
      events {
        _id
        title
      }
    }
  }
`;

export const QUERY_EVENTS = gql`
  query Events {
    events {
      _id
      title
    }
  }
`;

export const QUERY_EVENT = gql`
  query Event($eventId: ID!) {
    event(eventId: $eventId) {
      _id
      title
      items {
        _id
        name
        url
        image
        price
        wishability
        fulfilled
        quantity
      }
    }
  }
`;