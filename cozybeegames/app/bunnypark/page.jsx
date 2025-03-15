import PressKit from "@/components/PressKit";
import { FaSteam } from "react-icons/fa";

const bunnyPark = {
  title: "Bunny Park",
  bannerImage: "/assets/images/presskit/banners/BunnyPark_HeaderCapsule_1280x720.png",
  coverImage: "/assets/images/presskit/covers/BunnyPark_LibraryCapsule_600x900.png",
  
  releaseDate: ["January 14th, 2020"],
  price: "$4.99",
  platforms: [
    {
      icon: <FaSteam />,
      label: "Steam",
      link: "https://store.steampowered.com/app/1208600/Bunny_Park/?curator_clanid=36314378"
    },
  ],
  about:
    "Manage your own bunny park! Give snacks and toys to your bunnies. Improve and decorate your park to increase its popularity and collect all the bunnies!",
  features: [
    "Build and decorate your own nature park. Choose from a range of different decorations and toys to create a charming park!",
    "Care for your bunnies with snacks and pets. Be sure to pet your bunnies to keep them happy... But don't wake them up!",
    "Create a popular, cozy and cute park. Expand your park and increase its rating to attract new bunnies!",
    "Complete your bunny collection. Bring all the bunnies home, each with their own pattern and personality!",
  ],
  media: [
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_Screenshot_DecoMove.png",
      alt: "Bunny Park screenshot showing decoration movement",
    },
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_Screenshot_DecoShop.png",
      alt: "Bunny Park screenshot showing the decoration shop",
    },
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_Screenshot_Garden.png",
      alt: "Bunny Park screenshot of a garden area",
    },
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_Screenshot_Late.png",
      alt: "Bunny Park screenshot from later in the game",
    },
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_Screenshot_Pet.png",
      alt: "Bunny Park screenshot featuring a pet interaction",
    },
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_Screenshot_Start.png",
      alt: "Bunny Park screenshot from the start of the game",
    },
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_Screenshot_Swing.png",
      alt: "Bunny Park screenshot featuring a swing",
    },
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_FullLogo_1920x1080.png",
      alt: "Bunny Park screenshot featuring the full logo",
    },
    {
      src: "/assets/images/presskit/screenshots/bunnypark/BunnyPark_LibraryLogo_640x360.png",
      alt: "Bunny Park screenshot featuring the library logo",
    },
    
  ],
};

export default function BunnyParkPage() {
  return <PressKit game={bunnyPark} />;
}
