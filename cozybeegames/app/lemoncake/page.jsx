import PressKit from "@/components/PressKit";
import { FaSteam } from "react-icons/fa";

const lemonCake = {
  title: "Lemon Cake",
  bannerImage: "/assets/images/presskit/banners/LemonCake_HeaderCapsule_1280x720.png",
  coverImage: "/assets/images/presskit/covers/LemonCake_LibraryCapsule_600x900.png",
  releaseDate: [" February 18th, 2021"],
  price: "$14.99",
  platforms: [
    {
      icon: <FaSteam />,
      label: "Steam",
      link: "https://store.steampowered.com/app/1338330/Lemon_Cake/?curator_clanid=36314378",
    },
  ],
  about:
    "Restore an abandoned bakery and prepare pastries from farm to table! Grow fresh ingredients in the greenhouse, cook pastries & sweets in the kitchen and serve your baked goods to hungry customers in your own shop!",
  features: [
    "Repair your bakery with the help of a friendly ghost! While the bakery might initially be broken down, overgrown and even… haunted?! Don’t worry! You’ll be able to repair, furnish and decorate every room in the bakery.",
    "Grow fruits & take care of your animals in the greenhouse!",
    "Mix recipes & bake pastries in the kitchen!",
    "Serve coffee and sweets to your customers!",
    "Learn new recipes and select your daily menu!",
    "Manage your schedule and get ready for the lunch rush!",
    "Build an adorable cat cafe to make everyone’s day brighter!",
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
    {
      src: "/assets/images/presskit/screenshots/lemoncake/LemonCake_LibraryLogo_640x360.png",
      alt: "Lemon Cake screenshot of the library logo",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/LemonCake_Square_1000x1000.png",
      alt: "Lemon Cake screenshot of the square game logo",
    },
    {
      src: "/assets/images/presskit/screenshots/lemoncake/LemonCake_FullLogo_1920x1080.png",
      alt: "Lemon Cake screenshot of the full game logo",
    },
  ],
};

export default function LemonCakePage() {
  return <PressKit game={lemonCake} />;
}
