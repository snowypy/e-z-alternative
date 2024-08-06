import {
  Twitter,
  Github,
  Telegram,
  Spotify,
  Discord,
} from "react-bootstrap-icons";

const data: Data = {
  title: "snowy",
  theme: "default",
  animation: {
    nameRandomizer: false,
  },
  name: "snowy",
  description: "Developer, Engineer & Manager",
  links: [
    {
      name: "Twitter",
      url: "https://x.com/snowyisacooldev",
      icon: Twitter,
    },
    {
      name: "GitHub",
      url: "https://github.com/snowypy",
      icon: Github,
    },
    {
      name: "Telegram",
      url: "https://t.me/snowyjs",
      icon: Telegram,
    },
    {
      name: "Stats.fm",
      url: "https://stats.fm/snowyh1",
      icon: Spotify,
    },
    {
      name: "Discord",
      url: "https://discord.com/users/721017166652244018",
      icon: Discord,
    },
  ],
};

export default data;
