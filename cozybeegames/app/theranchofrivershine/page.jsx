import PressKit from "@/components/PressKit";
import { FaDiscord, FaFacebook, FaTwitter, FaInstagram, FaSteam } from "react-icons/fa";

const ranchOfRivershine = {
  title: "The Ranch of Rivershine",
  tagline: "A cozy farming and ranch simulation game",
  bannerImage: "/assets/images/presskit/banners/SteamLogo_Rivershine_Text_1280x720.png",
  coverImage: "/assets/images/presskit/covers/Rivershine_LibraryCapsule_600x900.png",
  developer: ["Cozy Bee Games", "Montreal, Canada"],
  publisher: ["Cozy Bee Games", "Montreal, Canada"],
  releaseDate: ["Coming Soon"],
  price: "TBA",
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
    "The Ranch of Rivershine is a heartwarming farming and ranch simulation game set in the picturesque Rivershine Valley...",
  features: [
    "Expansive ranch management with diverse crops and lovable animals",
    "Deep crafting system for creating artisanal goods and ranch improvements",
    "Engaging storyline with colorful characters and hidden mysteries",
    "Seasonal events and festivals that bring the community together",
    "Customizable character and ranch designs to express your unique style",
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
  ],
};

export default function RanchOfRivershinePage() {
  return <PressKit game={ranchOfRivershine} />;
}
