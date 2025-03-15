import PressKit from "@/components/PressKit";
import { FaSteam } from "react-icons/fa";

const alchemyStory = {
  title: "Alchemy Story",
  bannerImage: "/assets/images/presskit/banners/AlchemyStory_HeaderCapsule_1280x720.png",
  coverImage: "/assets/images/presskit/covers/AlchemyStory_600x900.jpg",
  releaseDate: ["April 15th, 2020"],
  price: "$19.99",
  platforms: [
    {
      icon: <FaSteam />,
      label: "Steam",
      link: "https://store.steampowered.com",
    },
  ],
  about:
    "Discover a world of magic, cute creatures and adventure in Alchemy Story, a casual farming simulation game! Grow your garden, brew potions, care for your pets and meet new friends!",
  features: [
    "Play as an apprentice alchemist and follow the story of a village struck by dark magic. The villagers have turned into animals and the Professor needs your help to lift the Witch's spell!",
    "Care for your cute animals! Build up your farm and keep cows, sheeps, chickens and bunnies.",
    "Join a cozy village life. Befriend your new neighbors, fulfill deliveries and discover the villagers' unique stories!",
    "Brew potions and use them to alter the world around you. Learn new recipes and discover magical ingredients to master alchemy!",
    "Fish along lakes and rivers! Try your luck and catch a variety of fish.",
    "Grow a garden and keep beehives!",
    "Delve into the mine. Upgrade your tools and collect ores and gems as you explore the mine!",
    "Cultivate flowers with the help of a friendly gopher. Plant a variety of crops to attract insects and keep your bees well fed!",
  ],
  media: [
    {
      src: "/assets/images/presskit/screenshots/alchemystory/AlchemyStory_Screenshot_01.png",
      alt: "Alchemy Story screenshot #1",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/AlchemyStory_Screenshot_02.png",
      alt: "Alchemy Story screenshot #2",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/AlchemyStory_Screenshot_03.png",
      alt: "Alchemy Story screenshot #3",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/AlchemyStory_Screenshot_04.png",
      alt: "Alchemy Story screenshot #4",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/Garden.png",
      alt: "A garden scene from Alchemy Story",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/Gopher.png",
      alt: "A gopher character in Alchemy Story",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/Mailbox.png",
      alt: "A mailbox in Alchemy Story",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/Owl.png",
      alt: "An owl in Alchemy Story",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/Pond.png",
      alt: "A pond in Alchemy Story",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/AlchemyStory_Logo_1920x1080.png",
      alt: "Alchemy Story logo",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/AlchemyStory_Square.png",
      alt: "Alchemy Story square logo",
    },
    {
      src: "/assets/images/presskit/screenshots/alchemystory/AlchemyStory_Title.png",
      alt: "Alchemy Story title",
    },
  ],
};

export default function AlchemyStoryPage() {
  return <PressKit game={alchemyStory} />;
}
