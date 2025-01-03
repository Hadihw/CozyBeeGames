import PressKit from "@/components/PressKit";
import { FaDiscord, FaFacebook, FaTwitter, FaInstagram, FaSteam } from "react-icons/fa";

const lemonCake = {
  title: "Lemon Cake",
  tagline: "Restore an abandoned bakery in a cozy simulation game",
  bannerImage: "/assets/images/presskit/banners/LemonCake_HeaderCapsule_1280x720.png",
  coverImage: "/assets/images/presskit/covers/LemonCake_LibraryCapsule_600x900.png",
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
    "Lemon Cake is a cozy simulation game where you restore an abandoned bakery. Grow fresh ingredients, cook pastries, and serve your customers in this delightful farm-to-table adventure.",
  features: [
    "Restore and customize your bakery",
    "Grow fresh ingredients in the greenhouse",
    "Cook pastries and sweets in the kitchen",
    "Serve your baked goods to hungry customers",
    "Create a cozy and inviting shop",
  ],
  media: [
    {
      src: "/assets/images/presskit/screenshots/lemoncake/Character.png",
      alt: "Lemon Cake screenshot featuring the player character",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/Chickens.png",
      alt: "Lemon Cake screenshot with chickens in the bakery’s yard",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/Mixing.png",
      alt: "Lemon Cake screenshot showing the mixing process",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/Night.png",
      alt: "Lemon Cake screenshot at night",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/PetCat.png",
      alt: "Lemon Cake screenshot showing the bakery’s pet cat",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/RecipeBook.png",
      alt: "Lemon Cake screenshot of the recipe book interface",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/serving.png",
      alt: "Lemon Cake screenshot of serving pastries",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/SkillTree.png",
      alt: "Lemon Cake screenshot of the skill tree",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/Sweeping.png",
      alt: "Lemon Cake screenshot showing the sweeping mechanic",
    },
  ],
};

export default function LemonCakePage() {
  return <PressKit game={lemonCake} />;
}
