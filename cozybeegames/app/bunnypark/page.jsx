import PressKit from "@/components/PressKit";
import { FaDiscord, FaFacebook, FaTwitter, FaInstagram, FaSteam } from "react-icons/fa";

const bunnyPark = {
  title: "Bunny Park",
  tagline: "Manage and decorate your own bunny park",
  bannerImage: "/assets/images/BunnyPark_HeaderCapsule_1280x720.png",
  coverImage: "/assets/images/BunnyPark_LibraryCapsule_600x900.png",
  developer: ["Cozy Bee Games", "Montreal, Canada"],
  publisher: ["Cozy Bee Games", "Montreal, Canada"],
  releaseDate: ["Available Now"],
  price: "$9.99",
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
    "Bunny Park is a wholesome park management game. Create a cozy space for bunnies, feed them, and collect all the adorable bunnies while designing a beautiful park.",
  features: [
    "Build and decorate a park for bunnies",
    "Feed and care for adorable bunny visitors",
    "Collect unique bunnies and earn rewards",
    "Design a cozy and relaxing environment",
    "Perfect for fans of casual and wholesome games",
  ],
  media: [
    {
      src: "/assets/images/screenshots/bunnypark/BunnyPark_Screenshot_DecoMove.png",
      alt: "Bunny Park screenshot showing decoration movement",
    },
    {
      src: "/assets/images/screenshots/bunnypark/BunnyPark_Screenshot_DecoShop.png",
      alt: "Bunny Park screenshot showing the decoration shop",
    },
    {
      src: "/assets/images/screenshots/bunnypark/BunnyPark_Screenshot_Garden.png",
      alt: "Bunny Park screenshot of a garden area",
    },
    {
      src: "/assets/images/screenshots/bunnypark/BunnyPark_Screenshot_Late.png",
      alt: "Bunny Park screenshot from later in the game",
    },
    {
      src: "/assets/images/screenshots/bunnypark/BunnyPark_Screenshot_Pet.png",
      alt: "Bunny Park screenshot featuring a pet interaction",
    },
    {
      src: "/assets/images/screenshots/bunnypark/BunnyPark_Screenshot_Start.png",
      alt: "Bunny Park screenshot from the start of the game",
    },
    {
      src: "/assets/images/screenshots/bunnypark/BunnyPark_Screenshot_Swing.png",
      alt: "Bunny Park screenshot featuring a swing",
    },
  ],
};

export default function BunnyParkPage() {
  return <PressKit game={bunnyPark} />;
}
