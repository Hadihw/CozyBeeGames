import PressKit from "@/components/PressKit";
import { FaSteam } from "react-icons/fa";

const capybaraSpa = {
  title: "Capybara Spa",
  bannerImage: "/assets/images/presskit/banners/CapybaraSpa_HeaderCapsule_1280x720.png",
  coverImage: "/assets/images/presskit/covers/Logo_CapybaraSpa_LibraryCapsule_600x900.png",
  developer: ["Cozy Bee Games", "Montreal, Canada"],
  publisher: ["Cozy Bee Games", "Montreal, Canada"],
  releaseDate: ["March 14th, 2022"],
  price: "$7.99",
  pressContact: "press@cozybee.games",
  platforms: [
    {
      icon: <FaSteam />,
      label: "Steam",
      link: "https://store.steampowered.com/app/1822910/Capybara_Spa/?curator_clanid=36314378",
    },
  ],
  about:
    "Build your own capybara spa in this relaxing point and click simulation game! Grow fruits, craft soaps and clean towels to pamper the capybaras during their visit. Furnish the mountain with gardens, baths and decorations to design the best capybara spa!",
  features: [
    "Receive capybaras & their friends. Welcome into your spa the animals wandering around the mountain such as turtles, frogs, otters and ducks!",
    "Grow fruits & craft soaps to care for your visitors. Plant gardens and harvest snacks such as lemons, oranges, strawberries & blueberries to feed your capybaras!",
    "Restore & furnish a mountainside spa! Improve your spa's popularity to unlock new furniture such as baths, fruits gardens and flower beds.",
    "Bring in insects to help you manage the spa! Run everything smoothly with the help of butterflies, ladybugs, bees and dragonflies. They'll fly around and assist you to fulfill the capybaras' requests!",
  ],
  media: [
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Screenshot_Friends.png",
      alt: "Capybara Spa screenshot with friends",
    },
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Screenshot_Full.png",
      alt: "Capybara Spa screenshot showing the full spa layout",
    },
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Screenshot_Furniture.png",
      alt: "Capybara Spa screenshot featuring furniture items",
    },
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Screenshot_Parachute.png",
      alt: "Capybara Spa screenshot with a parachuting capybara",
    },
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Screenshot_Snack.png",
      alt: "Capybara Spa screenshot showing a snack break",
    },
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Screenshot_Start.png",
      alt: "Capybara Spa screenshot from the start of the game",
    },
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Logo_CapybaraSpa.png",
      alt: "Capybara Spa screenshot of the library and full logo",
    },
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Logo_CapybaraSpa_NoLogo_1920x1080.png",
      alt: "Capybara Spa screenshot of logo without text",
    },
    {
      src: "/assets/images/presskit/screenshots/capybaraspa/Logo_CapybaraSpa_FullZoom_1920x1080.png",
      alt: "Capybara Spa screenshot of the full logo",
    },  
  ],
};

export default function CapybaraSpaPage() {
  return <PressKit game={capybaraSpa} />;
}
