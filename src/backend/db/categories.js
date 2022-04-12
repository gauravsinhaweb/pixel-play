import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "multiplayer",
    image:
      "https://149606729.v2.pressablecdn.com/wp-content/uploads/2021/08/rober-gonzalez-ShXbeohihGo-unsplash-700x880.jpg",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "guns for hire",
    image:
      "https://149606729.v2.pressablecdn.com/wp-content/uploads/2021/08/bradley-dunn-pdRyFq73lJY-unsplash-700x880.jpg",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },
  {
    _id: uuid(),
    categoryName: "live action",
    image:
      "https://149606729.v2.pressablecdn.com/wp-content/uploads/2021/08/pietro-mattia-zXqizKxnbBU-unsplash-700x880.jpg",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "montana",
    image:
      "https://149606729.v2.pressablecdn.com/wp-content/uploads/2021/08/viktor-theo-1rw3l343EDM-unsplash-700x880.jpg",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
];
