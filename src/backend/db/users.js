import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Aryan More",
    userName: "aryanmore2110",
    image: 'https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-6/335638560_599518231735734_1878037630595375975_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X0eL2Ut51dsAX96fXxI&_nc_ht=scontent.famd5-2.fna&oh=00_AfB6f9GLbXtIq8-FLKttlwdEDbguLAVm0HRDSObdVrwdfw&oe=648FFD65',
    password: "aryanmore",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // {
  //   _id: uuid(),
  //   fullName: "Rupesh Soni",
  //   userName: "rupsoni1710",
  //   image: 'https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-1/350681164_3103761429769728_4189018180040657944_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zSRdkvfDS0AAX-jGuze&_nc_ht=scontent.famd5-3.fna&oh=00_AfC9SOl6HxsUK7KC1YSFKOKMdFjawtAQeP-VrT_1fsZj8Q&oe=648F30C1',
  //   password: "rupeshsoni",
  //   bookmarks: [],
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   fullName: "Yash Mali",
  //   userName: "yashmali1204",
  //   image: 'https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-1/286390165_1647467638971912_4797441917714999667_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SK_dHuZkgNAAX-NTnc1&_nc_oc=AQma2WVEprtjsMNNjRDp66ULw5tIYdAXOQHms-LmntK_Vot3U5_GveCdOrGHBqVHUNE&_nc_ht=scontent.famd5-2.fna&oh=00_AfDiuqiAnnF5DwDuD0IIzD_xdgHpqzR95rdR1Ay9AFj8vQ&oe=64902242',
  //   password: "yashmali",
  //   bookmarks: [],
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   fullName: "Tirth Baraiya",
  //   userName: "tirthbaraiya2009",
  //   image: 'https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-6/352573352_1519649135105568_3861437413623232939_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hqk6dln4C4EAX_irTkV&_nc_ht=scontent.famd5-2.fna&oh=00_AfBKo7ry2CgkuR18jhaVo2ECTPPZ80Z9PVddgfCGleH44g&oe=648FE19A',
  //   password: "tirthbaraiya",
  //   bookmarks: [],
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   fullName: "Viren Patel",
  //   userName: "virenpatel1906",
  //   image: 'https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-1/293820356_3224368154446332_4033355715756441259_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_ohc=IlOas29w0WgAX_800md&_nc_ht=scontent.famd5-3.fna&oh=00_AfDopKQyLFxwTBwV-oY5nlxxZYQccgwYAdPuUwrRQRi2-g&oe=64905582',
  //   password: "virenpatel",
  //   bookmarks: [],
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   fullName: "Vishal Chetnani",
  //   userName: "vishalchetnani0411",
  //   image: 'https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-6/242871763_1854243358117975_4762510285532834133_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C4lhgfXR8jEAX9-x8iz&_nc_ht=scontent.famd5-3.fna&oh=00_AfD70TWW_2yv5AFFkuKXtved9yORdGtzpDMV2eb2KXVdfw&oe=648F4C15',
  //   password: "vishalchetnani",
  //   bookmarks: [],
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
];
