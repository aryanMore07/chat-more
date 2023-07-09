import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import aryan from '../../images/myProfilePicture.jpeg';

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

const twitter_quotes = [
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only way to do great work is to love what you do.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Believe you can and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "In the middle of every difficulty lies opportunity.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Be yourself; everyone else is already taken.",
  "Success is not in what you have, but who you are.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Life is short, and it's up to you to make it sweet.",
  "Dream big and dare to fail.",
  "Don't be afraid to give up the good to go for the great.",
  "The best revenge is massive success.",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
  "You are never too old to set another goal or to dream a new dream.",
  "The harder I work, the luckier I get.",
  "Don't count the days, make the days count.",
  "The secret of getting ahead is getting started.",
  "Success is not just about making money. It's about making a difference.",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "In the end, we only regret the chances we didn't take. - Lewis Carroll",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Dream big and dare to fail. - Norman Vaughan",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
]

const randomNum = Math.floor(Math.random() * twitter_quotes.length);

export const posts = [
  {
    _id: uuid(),
    firstName: "Michael",
    lastName: "Brown",
    content: twitter_quotes[randomNum],
    likes: {
      likeCount: 3,
      likedBy: [],
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
    username: "michaelbrown",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    content: "Life is too short to be anything but happy. #SmileEveryday",
    image: '',
    likes: {
      likeCount: 1,
      likedBy: [],
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
    username: "johndoe",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    content: "Success is not final, failure is not fatal: It's the courage to continue that counts. 🌟 #KeepGoingSuccess is not final, failure is not fatal: It's the courage to continue that counts. 🌟 #KeepGoing",
    image: '',
    likes: {
      likeCount: 1,
      likedBy: [],
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
    username: "johndoe",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    content: "Life is like a camera: Focus on the good times, develop from the negatives, and if things don't work out, take another shot. 📸 #KeepShooting",
    image: '',
    likes: {
      likeCount: 4,
      likedBy: [],
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
    username: "johndoe",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Smith",
    content:
      "Never underestimate the power of a kind word. #BeKind",
    image: '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "janesmith",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Michael",
    lastName: "Brown",
    content: twitter_quotes[randomNum],
    image: '',
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "michaelbrown",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Smith",
    content:
      "Surround yourself with those who bring out the best in you. #PositiveVibes",
    image: '',
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "janesmith",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Alice",
    lastName: "Johnson",
    content: twitter_quotes[randomNum],
    image: '',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "alicejohnson",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Emily",
    lastName: "Wilson",
    content: twitter_quotes[randomNum],
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "emilywilson",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "David",
    lastName: "Taylor",
    content: twitter_quotes[randomNum],
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "davidtaylor",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Smith",
    content: twitter_quotes[randomNum],
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "janesmith",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Alice",
    lastName: "Johnson",
    content: twitter_quotes[randomNum],
    image: '',
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "alicejohnson",
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
  {
    _id: 'aryanPost',
    firstName: 'Aryan',
    lastName: 'More',
    content: twitter_quotes[randomNum],
    image: aryan,
    likes: {
      likeCount: 4,
      likedBy: [],
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
    createdAt: "2023-04-10T12:31:25Z",
    updatedAt: formatDate(),
  },
];
