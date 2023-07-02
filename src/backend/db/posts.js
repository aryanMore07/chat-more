import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import aryan from '../../images/myProfilePicture.jpeg';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    firstName: 'Ajey',
    lastName: 'Nagar',
    content: "39 million on carryminati, thank you for everything one more million for 40 🙏🙏",
    image: 'https://instagram.famd5-3.fna.fbcdn.net/v/t51.2885-19/328767831_858583758702129_6462425942584032575_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd5-3.fna.fbcdn.net&_nc_cat=1&_nc_ohc=N7Ewmtf-4z8AX_rk-O4&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB1EK6799mQcCkjc_EUhW5j0G58S3-rXyaaEG-6XCiImw&oe=64A008A6&_nc_sid=8b3546',
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Rupesh',
          lastName: '',
        },
        {
          _id: uuid(),
          firstName: 'Yash',
          lastName: 'Mali',
          username: 'yashmali',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Tirth',
          lastName: 'baraiya',
          username: 'tirthbaraiya',
          image: '',
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),

        username: "janedoe",
        text: "I agree!! Feels like we should go for outing. What say?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "carryminati",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),

    firstName: 'Tanay',
    lastName: 'Pratap',
    content:
      "Selling is just a one-time transaction, but serving builds long-term loyalty.When you focus on solving your user's problems and making their lives easier, marketing becomes a breeze.It's not about grabbing their attention anymore, it's about building a relationship and providing real value.Shift your mindset and make marketing a way to serve, not just sell.",
    image: 'https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-1/306950862_176772704866072_7798595530643970390_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=c6021c&_nc_ohc=BRrOl6baQaIAX_9dfJx&_nc_ht=scontent.famd5-3.fna&oh=00_AfBwtjuymgZTaT66Uu1NhCk0KZKesBQY_STnIA6vgmi0zg&oe=64A189C2',
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Rupesh',
          lastName: 'Soni',
          username: 'rupsoni',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Viren',
          lastName: 'patel',
          username: 'virptl',
          image: '',
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "aryanmore2110",
        text: "Nice read",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "tanaypratap",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),

    firstName: 'Tirth',
    lastName: 'Baraiya',
    content:
      "Vacation with family.",
    image: 'https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-6/352573352_1519649135105568_3861437413623232939_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hqk6dln4C4EAX_irTkV&_nc_ht=scontent.famd5-2.fna&oh=00_AfBKo7ry2CgkuR18jhaVo2ECTPPZ80Z9PVddgfCGleH44g&oe=648FE19A',
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Rupesh',
          lastName: 'Soni',
          username: 'rupsoni',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Yash',
          lastName: 'Mali',
          username: 'yashmali',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Viren',
          lastName: 'patel',
          username: '',
        },
      ],
      dislikedBy: [],
    },
    username: "tirthbaraiya",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),

    firstName: 'Yash',
    lastName: 'Mali',
    content:
      "Out for vacation.",
    likes: {
      likeCount: 0,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Rupesh',
          lastName: 'Soni',
          username: 'rupsoni',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Tirth',
          lastName: 'baraiya',
          username: 'tirthbaraiya',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Viren',
          lastName: 'patel',
          username: 'virptl',
          image: '',
        },
      ],
      dislikedBy: [],
    },
    username: "yashmali",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),

    firstName: 'Rupesh',
    lastName: 'Soni',
    content:
      "Living the life at my best bro.",
    image: 'https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-1/350681164_3103761429769728_4189018180040657944_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zSRdkvfDS0AAX-jGuze&_nc_ht=scontent.famd5-3.fna&oh=00_AfC9SOl6HxsUK7KC1YSFKOKMdFjawtAQeP-VrT_1fsZj8Q&oe=648F30C1',
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Rupesh Soni',
          lastName: 'Rupesh Soni',
          username: 'rupsoni',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Yash Mali',
          lastName: 'Yash Mali',
          username: 'yashmali',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Tirth baraiya',
          lastName: 'Tirth baraiya',
          username: 'tirthbaraiya',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Viren patel',
          lastName: 'Viren patel',
          username: 'virptl',
          image: '',
        },
      ],
      dislikedBy: [],
    },
    username: "rupeshsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'aryanPost',
    firstName: 'Aryan',
    lastName: 'More',
    content:
      "Just a software engineer betting his entire career on a framework made by Facebook.",
    image: 'https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-6/335638560_599518231735734_1878037630595375975_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X0eL2Ut51dsAX96fXxI&_nc_ht=scontent.famd5-2.fna&oh=00_AfB6f9GLbXtIq8-FLKttlwdEDbguLAVm0HRDSObdVrwdfw&oe=648FFD65',
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: 'Rupesh',
          lastName: 'Soni',
          username: 'rupsoni',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Yash',
          lastName: 'Mali',
          username: 'yashmali',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Tirth',
          lastName: 'baraiya',
          username: 'tirthbaraiya',
          image: '',
        },
        {
          _id: uuid(),
          firstName: 'Viren',
          lastName: 'patel',
          username: 'virptl',
          image: '',
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        image: aryan,
        username: "aryanmore2110",
        text: "Nice read",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "aryanmore2110",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
