const { User, Event, Item } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // user resolvers
    users: async () => {
      return await User.find({}).populate({
        path: 'events',
        populate: { path: "items", model: 'Item'}
      });


    },
    me: async (parent, args, context) => {
      console.log(`Inside the me stuff: ${context.user}`);
      console.log(`Inside the me stuff: ${context.user._id}`);
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'events',
          populate: { path: "items", model: 'Item'}
        });
        console.log(`Inside the user stuff: ${user}`);

        return user;
      }
      console.log(`Broken undefined:`);

      throw AuthenticationError;
    },
    user: async (parents, { userId }) => {
      return User.findOne({ _id: userId });
    },

    // event resolvers
    events: async () => {
      return await Event.find({}).populate('items');
    },
    event: async(parent, { eventId }) => {
      return await Event.findById(eventId).populate('items');
    },

    // item resolvers
    items: async () => {
      return await Item.find({});
    },
    item: async(parent, { itemId }) => {
      return await Item.findById(itemId);
    }

  },
  Mutation: {
    // user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
   
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    deleteUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    // friends
    // sendFriendRequest: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: args.userId },
    //       {
    //         $addToSet: { friendRequests: User.findById(context.user._id)}
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw AuthenticationError;
    // },

    addEvent: async (parent, args) => {
      const newEvent = await Event.create(args);
      await User.findOneAndUpdate(
        { _id: args.userId },
        {
          $addToSet: { events: newEvent._id }
        },
        { new: true }
      );
      return newEvent;
    },

    updateEvent: async (parent, args) => {
      return await Event.findByIdAndUpdate(args.eventId, args, { new: true }).populate('items');
    },

    deleteEvent: async (parent, { eventId }) => {
      return await Event.findByIdAndDelete({ _id: eventId }).populate('items');
    },


    addItem: async (parent, args) => {
      const newItem = await Item.create(args);
      await Event.findOneAndUpdate(
        { _id: args.eventId },
        {
          $addToSet: { items: newItem._id }
        },
        { new: true }
      );
      return newItem;
    },

    updateItem: async (parent, args) => {
      return await Item.findByIdAndUpdate(args.itemId, args, { new: true });
    },

    deleteItem: async (parent, { itemId }) => {
      return await Item.findOneAndDelete({ _id: itemId });
    }
  }
};

module.exports = resolvers;
