import PressKit from "@/components/PressKit";
import { FaSteam } from "react-icons/fa";

const ranchOfRivershine = {
  title: "The Ranch of Rivershine",
  bannerImage: "/assets/images/presskit/banners/SteamLogo_Rivershine_Text_1280x720.png",
  coverImage: "/assets/images/presskit/covers/SteamLogo_Rivershine_LibraryCapsule_600x900.png",
  // developer, publisher, pressContact REMOVED - now universal in PressKit.jsx
  releaseDate: ["May 12th, 2023"],
  price: "$29.99",
  platforms: [
    {
      icon: <FaSteam />,
      label: "Steam",
      link: "https://store.steampowered.com/app/1559600/The_Ranch_of_Rivershine/?curator_clanid=36314378"
    },
  ],
  about:
    "Saddle up and build your own horse ranch! Raise foals, care for your horses and train them as you explore the western wilderness! Participate in cross country competitions and become your town's champion. Befriend the villagers who'll help you on your adventure at the Ranch of Rivershine!",
  features: [
    "Build your own horse ranch! Settle into a new town and learn the ropes of running your own ranch. Repair your stable and add new stalls, expand your pasture or build new obstacle courses for your arena!",
    "Train your horses and compete in cross country. Saddle up and improve your horse's skills in multiple disciplines such as speed, endurance and flexibility!",
    "Grow your herd and raise your own foals. Build a herd of up to a dozen horses by breeding them or trading them at the auction house!",
    "Explore the western wilderness on horseback! Bond with your horse and enjoy nature... You might even encounter wild horses during your ride!",
    "Befriend the townsfolk of your frontier town. Meet the lively villagers who'll help you along your journey in Rivershine!",
    "Cultivate crops and fruits on your ranch. Plant a variety of grains and hay in your fields, or expand your ranch with an orchard and grow fruit trees!",
  ],
  media: [
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_ArenaJump.png",
      alt: "Screenshot of an arena jumping scene",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_Breeding.png",
      alt: "Screenshot of the horse breeding interface",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_CrossCountry.png",
      alt: "Screenshot of a cross-country race",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_FoalBrush.png",
      alt: "Screenshot of grooming a foal",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_HorseWalk.png",
      alt: "Screenshot of walking a horse",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_NPCShop.png",
      alt: "Screenshot of an NPC shop interface",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_NPCTalk.png",
      alt: "Screenshot of talking to an NPC",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_StallEquipment.png",
      alt: "Screenshot of stall equipment",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamScreenshot_StallMuck.png",
      alt: "Screenshot of mucking a stall",
    },
    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamLogo_Rivershine_Text_1920x1080.png",
      alt: "Screenshot of the game logo",
    },

    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamLogo_Rivershine_SquareLogo_1800x1800.png",
      alt: "Screenshot of the square game logo",
    },

    {
      src: "/assets/images/presskit/screenshots/rivershine/SteamLogo_Rivershine_Full_1920x1080.png",
      alt: "Screenshot of the game logo",
    },

      
  ],
};

export default function RanchOfRivershinePage() {
  return <PressKit game={ranchOfRivershine} />;
}
