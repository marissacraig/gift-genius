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
    private: Boolean
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
    addUser(username: String!, name: String!, email: String!, password: String!, avatar: String): Auth
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String, avatar: String): User
    # addList(title: String!, userId: ID!, private: Boolean, items: [Item]): List
  }
`;

module.exports = typeDefs;
