import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $name: String!
    $email: String!
    $password: String!
    $avatar: String
  ) {
    addUser(
      username: $username
      name: $name
      email: $email
      password: $password
      avatar: $avatar
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
mutation deleteUser(
  $userId: String!
) {
  deleteUser(
    userId: $userId
  ) {
    _id
  }
}
`;

export const ADD_EVENT = gql`
  mutation addEvent(
    $userId: String!
    $title: String!    
  ) {
    addEvent(
      userId: $userId
      title: $title
    ) {
      _id
      title
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $eventId: String!
    $name: String!
    $url: String,
    $price: Float,
    $wishability: Int,
    $fulfilled: Boolean,
    $quantity: Int
  ) {
    addItem(
      eventId: $eventId
      name: $name
      url: $url
      price: $price
      wishability: $wishability
      fulfilled: $fulfilled
      quantity: $quantity
    ) {
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
`;

export const UPDATE_ITEM = gql`
  mutation updateItem(
    $itemId: String!,
    $name: String,
    $url: String,
    $price: Float,
    $fulfilled: Boolean,
    $quantity: Int
  ) {
    updateItem(
      itemId: $itemId
      name: $name
      url: $url
      price: $price
      fulfilled: $fulfilled
      quantity: $quantity
    ) {
      _id
      name
      url
      price
      fulfilled
      quantity
    }
  }
`;