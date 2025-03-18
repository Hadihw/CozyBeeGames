const isDev = false;

const baseURL = isDev ? "http://localhost:3000" : "";
// https://cozy-bee-games-xi.vercel.app
const games = [
  {
    id: 1,
    title: "The Ranch of Rivershine",
    description: "Saddle up and build your own horse ranch in this equestrian farming sim!",
    image: "/assets/images/gameCardHeaders/SteamLogo_Rivershine_HeaderCapsule_460x215.png",
    pressKitLink: `${baseURL}/theranchofrivershine/`,
    playNowLink: `https://store.steampowered.com/app/1559600/The_Ranch_of_Rivershine/`,
  },
  {
    id: 2,
    title: "Lemon Cake",
    description: "Restore an abandoned bakery in this time management cooking sim!",
    image: "/assets/images/gameCardHeaders/LemonCake_HeaderCapsule_460x215.png",
    pressKitLink: `${baseURL}/lemoncake/`,
    playNowLink: `https://store.steampowered.com/app/1338330/Lemon_Cake/`,
  },
  {
    id: 3,
    title: "Capybara Spa",
    description: "Build your own capybara spa in this cute point and click idle sim!",
    image: "/assets/images/gameCardHeaders/Logo_CapybaraSpa_HeaderCapsule_460x215.png",
    pressKitLink: `${baseURL}/capybaraspa/`,
    playNowLink: `https://store.steampowered.com/app/1822910/Capybara_Spa/`,
  },
  {
    id: 4,
    title: "Bunny Park",
    description: "Manage your own bunny park in this wholesome point and click idle sim!",
    image: "/assets/images/gameCardHeaders/BunnyPark_HeaderCapsule_460x215.png",
    pressKitLink: `${baseURL}/bunnypark/`,
    playNowLink: `https://store.steampowered.com/app/1208600/Bunny_Park/`,
  },
  {
    id: 5,
    title: "Alchemy Story",
    description: "Discover a world of magic, cute creatures, and adventure in this casual farming sim!",
    image: "/assets/images/gameCardHeaders/AlchemyStory_Steam_HeaderCapsule_English.png",
    pressKitLink: `${baseURL}/alchemystory/`,
    playNowLink: `https://store.steampowered.com/app/1040630/Alchemy_Story/`,
  },
];

export default games;
