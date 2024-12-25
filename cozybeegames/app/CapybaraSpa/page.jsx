import PressKit from "@/components/PressKit";
import { FaDiscord, FaFacebook, FaTwitter, FaInstagram, FaSteam } from "react-icons/fa";

const capybaraSpa = {
  title: "Capybara Spa",
  tagline: "Build and manage your own capybara spa",
  bannerImage: "/assets/images/CapybaraSpa_HeaderCapsule_1280x720.png",
  coverImage: "/assets/images/Logo_CapybaraSpa_LibraryCapsule_600x900.png",
  developer: ["Cozy Bee Games", "Montreal, Canada"],
  publisher: ["Cozy Bee Games", "Montreal, Canada"],
  releaseDate: ["Available Now"],
  price: "$14.99",
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
    "Capybara Spa is a charming point-and-click simulation game. Build and decorate your spa, grow fruits, craft soaps, and pamper capybaras during their relaxing visit.",
  features: [
    "Build and decorate your capybara spa",
    "Grow fruits and craft unique spa items",
    "Pamper capybaras with baths and snacks",
    "Create a peaceful and inviting environment",
    "Enjoy a relaxing and cute gameplay experience",
  ],
  media: [
    {
      src: "/assets/images/screenshots/capybaraspa/Screenshot_Friends.png",
      alt: "Capybara Spa screenshot with friends",
    },
    {
      src: "/assets/images/screenshots/capybaraspa/Screenshot_Full.png",
      alt: "Capybara Spa screenshot showing the full spa layout",
    },
    {
      src: "/assets/images/screenshots/capybaraspa/Screenshot_Furniture.png",
      alt: "Capybara Spa screenshot featuring furniture items",
    },
    {
      src: "/assets/images/screenshots/capybaraspa/Screenshot_Parachute.png",
      alt: "Capybara Spa screenshot with a parachuting capybara",
    },
    {
      src: "/assets/images/screenshots/capybaraspa/Screenshot_Snack.png",
      alt: "Capybara Spa screenshot showing a snack break",
    },
    {
      src: "/assets/images/screenshots/capybaraspa/Screenshot_Start.png",
      alt: "Capybara Spa screenshot from the start of the game",
    },
  ],
};

export default function CapybaraSpaPage() {
  return <PressKit game={capybaraSpa} />;
}
