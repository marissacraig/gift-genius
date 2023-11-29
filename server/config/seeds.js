const db = require('./connection');
const { User, Event, Item } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Event', 'events');
  await cleanDB('Item', 'items');
  await cleanDB('User', 'users');

  const user0 = await User.create({
    name: 'Pamela Test',
    username: 'test',
    email: 'pamela@testmail.com',
    password: 'password123',
    birthday: '12/3/1998',
    avatar: 'teddy-bear.jpg'
  });

  const user1 = await User.create({
    name: 'Rudolph',
    username: 'rudolphdareindeer',
    email: 'eholt@testmail.com',
    password: 'password12345',
    birthday: '5/4/1989',
    avatar: 'wooden-spoons.jpg'
  });

  console.log('users seeded');

  const items = await Item.insertMany([
    {
      name: 'Tin of Cookies',
      image: 'cookie-tin.jpg',
      price: 2.99,
      wishability: 1,
      fulfilled: false,
      url: 'cookies.org'
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      price: 1.99,
      wishability: 1,
      fulfilled: true
    },
    {
      name: 'Toilet Paper',
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      wishability: 1,
      fulfilled: false
    },
    {
      name: 'Handmade Soap',
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'soap.jpg',
      price: 3.99,
      wishability: 2,
      fulfilled: true
    },
    {
      name: 'Set of Wooden Spoons',
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      wishability: 3,
      fulfilled: true
    },
    {
      name: 'Camera',
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      wishability: 3,
      fulfilled: false
    },
    {
      name: 'Tablet',
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      wishability: 3,
      fulfilled: true
    },
    {
      name: 'Tales at Bedtime',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      wishability: 2,
      fulfilled: true
    },
    {
      name: 'Spinning Top',
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      wishability: 2,
      fulfilled: true
    },
    {
      name: 'Set of Plastic Horses',
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      wishability: 1,
      fulfilled: false
    },
    {
      name: 'Teddy Bear',
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      wishability: 2,
      fulfilled: true
    },
    {
      name: 'Alphabet Blocks',
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      wishability: 1,
      fulfilled: true
    }
  ]);

  console.log('items seeded');
  console.log(`items[0]._id = ${items[0]._id}`)
  
  const events = await Event.insertMany([
    {
      title: 'Christmas 2023',
      items: [ 
        items[0]._id, 
        items[1]._id,
        items[5]._id,
        items[7]._id,
        items[9]._id,
        items[11]._id,
      ]
    },
    { 
      title: 'bday',
      items: [
        items[2]._id,
        items[3]._id,
        items[4]._id,
        items[6]._id,
        items[8]._id,
        items[10]._id
      ]
    }
  ]);


  User.updateOne(user0, {
    events: [
      events[0]._id
    ]
  });

  User.updateOne(user1, {
    events: [
      events[1]._id
    ]
  });
 
  console.log('events seeded');

  process.exit();
});
