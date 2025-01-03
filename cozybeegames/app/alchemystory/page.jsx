import PressKit from "@/components/PressKit";
import { FaDiscord, FaFacebook, FaTwitter, FaInstagram, FaSteam } from "react-icons/fa";

const alchemyStory = {
  title: "Alchemy Story",
  tagline: "Discover magic, adventure, and adorable creatures",
  bannerImage: "/assets/images/AlchemyStory_HeaderCapsule_1280x720.png",
  coverImage: "/assets/images/AlchemyStory_600x900.jpg",
  developer: ["Cozy Bee Games", "Montreal, Canada"],
  publisher: ["Cozy Bee Games", "Montreal, Canada"],
  releaseDate: ["Available Now"],
  price: "$19.99",
  pressContact: "press@cozybee.games",
  platforms: [
    { icon: <FaSteam />, label: "Steam" },
  ],
  socialMedia: [
    { icon: <FaTwitter />, label: "Twitter" },
    { icon: <FaDiscord />, label: "Discord" },
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaInstagram />, label: "Instagram" },
  ],
  about:
    "Alchemy Story is a magical farming simulation game. Grow your garden, brew potions, care for pets, and explore a charming world filled with magic and adventure.",
  features: [
    "Grow magical plants and brew potions",
    "Care for adorable pets and farm animals",
    "Meet unique characters and build friendships",
    "Explore a charming and whimsical world",
    "Relax with cozy gameplay and magical vibes",
  ],
  media: [
    {
      src: "/assets/images/screenshots/alchemystory/AlchemyStory_Screenshot_01.png",
      alt: "Alchemy Story screenshot #1",
    },
    {
      src: "/assets/images/screenshots/alchemystory/AlchemyStory_Screenshot_02.png",
      alt: "Alchemy Story screenshot #2",
    },
    {
      src: "/assets/images/screenshots/alchemystory/AlchemyStory_Screenshot_03.png",
      alt: "Alchemy Story screenshot #3",
    },
    {
      src: "/assets/images/screenshots/alchemystory/AlchemyStory_Screenshot_04.png",
      alt: "Alchemy Story screenshot #4",
    },
    {
      src: "/assets/images/screenshots/alchemystory/Garden.png",
      alt: "A garden scene from Alchemy Story",
    },
    {
      src: "/assets/images/screenshots/alchemystory/Gopher.png",
      alt: "A gopher character in Alchemy Story",
    },
    {
      src: "/assets/images/screenshots/alchemystory/Mailbox.png",
      alt: "A mailbox in Alchemy Story",
    },
    {
      src: "/assets/images/screenshots/alchemystory/Owl.png",
      alt: "An owl in Alchemy Story",
    },
    {
      src: "/assets/images/screenshots/alchemystory/Pond.png",
      alt: "A pond in Alchemy Story",
    },
  ],
};

export default function AlchemyStoryPage() {
  return <PressKit game={alchemyStory} />;
}
