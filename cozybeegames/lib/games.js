const isDev = false;

const baseURL = isDev ? "http://localhost:3000" : "";
// https://cozy-bee-games-xi.vercel.app
const games = [
  {
    id: 1,
    title: "The Ranch of Rivershine",
    description: "Saddle up and build your own horse ranch! Raise foals, care for your horses, and train them as you explore the western wilderness! Participate in cross country competitions and become your town's champion. Befriend the villagers who'll help you on your adventure at the Ranch of Rivershine!",
    image: "/assets/images/gameCardHeaders/SteamLogo_Rivershine_HeaderCapsule_460x215.png",
    pressKitLink: `${baseURL}/theranchofrivershine/`,
    playNowLink: `https://store.steampowered.com/app/1559600/The_Ranch_of_Rivershine/`,
  },
  {
    id: 2,
    title: "Lemon Cake",
    description: "Restore an abandoned bakery and prepare pastries from farm to table! Grow fresh ingredients in the greenhouse, cook pastries & sweets in the kitchen, and serve your baked goods to hungry customers in your own shop!",
    image: "/assets/images/gameCardHeaders/LemonCake_HeaderCapsule_460x215.png",
    pressKitLink: `${baseURL}/lemoncake/`,
    playNowLink: `https://store.steampowered.com/app/1338330/Lemon_Cake/`,
  },
  {
    id: 3,
    title: "Capybara Spa",
    description: "Build your own capybara spa in this cute point and click simulation game! Grow fruits, craft soaps, and clean towels to pamper the capybaras during their visit. Furnish the mountain with gardens, baths, and decorations to design the best capybara spa!",
    image: "/assets/images/gameCardHeaders/Logo_CapybaraSpa_HeaderCapsule_460x215.png",
    pressKitLink: `${baseURL}/capybaraspa/`,
    playNowLink: `https://store.steampowered.com/app/1822910/Capybara_Spa/`,
  },
  {
    id: 4,
    title: "Bunny Park",
    description: "Manage your own bunny park! Give snacks and toys to your bunnies. Improve and decorate your park to increase its popularity and collect all the bunnies!",
    image: "/assets/images/gameCardHeaders/BunnyPark_HeaderCapsule_460x215.png",
    pressKitLink: `${baseURL}/bunnypark/`,
    playNowLink: `https://store.steampowered.com/app/1208600/Bunny_Park/`,
  },
  {
    id: 5,
    title: "Alchemy Story",
    description: "Discover a world of magic, cute creatures, and adventure in Alchemy Story, a casual farming simulation game! Grow your garden, brew potions, care for your pets, and meet new friends!",
    image: "/assets/images/gameCardHeaders/AlchemyStory_Steam_HeaderCapsule_English.png",
    pressKitLink: `${baseURL}/alchemystory/`,
    playNowLink: `https://store.steampowered.com/app/1040630/Alchemy_Story/`,
  },
];

export default games;
