import linkedin from "../assets/socials/linkedin.png";
import github from "../assets/socials/github.png";
import leetcode from "../assets/socials/leetcode.png";
import twitter from "../assets/socials/twitter.png"

interface SocialItem {
    id: string;
    title: string;
    iconUrl: string;
    url: string;
  }

export const socials: SocialItem[] = [
    {
      id: "1",
      title: "Linkedin",
      iconUrl: linkedin,
      url: "https://www.linkedin.com/in/sarika-ghimire/",
    },
    {
      id: "2",
      title: "Github",
      iconUrl: github,
      url: "https://github.com/Sareeka61",
    },
    {
      id: "3",
      title: "Leetcode",
      iconUrl: leetcode,
      url: "https://leetcode.com/ghimiresarika61/",
    },
    {
      id: "4",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://x.com/Sarikaghimire61",
    },
  ];