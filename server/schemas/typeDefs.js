const typeDefs = `

  type User {
    _id: ID!
    name: String!
    username: String!
    email: String!
    password: String!
    # birthday: Date (has to be custum scalar??)
    avatar: String
    events: [Event]
  }

  type Event {
    _id: ID!
    title: String!
    items: [Item]
  }

  type Item {
    _id: ID!
    name: String!
    url: String
    image: String
    price: Float
    wishability: Int
    fulfilled: Boolean
    quantity: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    me: User
    user(userId: ID!): User
    events: [Event]
    event(eventId: ID!): Event
    items: [Item]
    item(itemId: ID!): Item
  }

  type Mutation {
    addUser(
      username: String!, 
      name: String!, 
      email: String!, 
      password: String!, 
      avatar: String
    ): Auth

    login(
      email: String!, 
      password: String!
    ): Auth

    updateUser(
      name: String, 
      email: String, 
      password: String, 
      avatar: String,
    ): User
    
    deleteUser(
      userId: String!
    ): User


    addEvent(
      userId: String!
      title: String!
    ): Event

    updateEvent(
      eventId: String!,
      title: String
    ): Event

    deleteEvent(
      eventId: String!
    ): Event

    addItem(
      eventId: String!,
      name: String!,
      url: String,
      image: String,
      price: Float,
      wishability: Int,
      fulfilled: Boolean,
      quantity: Int
    ): Item

    updateItem(
      itemId: String!,
      name: String,
      url: String,
      image: String,
      price: Float,
      wishability: Int,
      fulfilled: Boolean,
      quantity: Int
    ): Item

    deleteItem(
      itemId: String!
    ): Item
  }
`;

module.exports = typeDefs;
