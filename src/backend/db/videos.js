import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    url: "https://www.youtube.com/watch?v=VWj8ZxCxrYk",
    title: "15 MIN BEGINNER CARDIO Workout (At Home No Equipment)",
    description:
      "Do this 15 minute beginner, full body, cardio workout #WithMe at home! This is a non-stop cardio routine with basic, low impact exercises for beginners. No equipment needed. Just yourself!",
    authorImageUrl:
      "https://yt3.ggpht.com/qIZlFAxnyGZ6NI0Vlk7l1hiYU6OcrmthrU0y9xvh6goHl5EO4sdsPxUzhBvuXuSonxqYYdqVKTU=s88-c-k-c0x00ffffff-no-rj",
    channelName: "MadFit",
    categoryName: "Cardio",
  },
  {
    _id: uuid(),
    title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];
