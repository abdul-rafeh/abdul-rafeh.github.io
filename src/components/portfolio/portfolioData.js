import Image1 from "../../assets/img/portfolio/ebhar.png";
import Image2 from "../../assets/img/portfolio/gotlr.png";
import Image3 from "../../assets/img/portfolio/kruzee.png";
import Image4 from "../../assets/img/portfolio/liible.png";
import Image5 from "../../assets/img/portfolio/md.png";
import Image6 from "../../assets/img/portfolio/multipass.png";
import Image7 from "../../assets/img/portfolio/talal.png";
import Image8 from "../../assets/img/portfolio/vital.png";
import Image9 from "../../assets/img/portfolio/keeper.png";
import Image10 from "../../assets/img/portfolio/block.png";
import Image11 from "../../assets/img/portfolio/peer.png";
import Image12 from "../../assets/img/portfolio/fantasy.png";
import Image13 from "../../assets/img/portfolio/blob.png";

const PortfolioData = [
  {
    id: 1,
    type: "Ebhar",
    image: Image1,
    tag: ["mobile"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Mobile App",
        client: "Ebhar",
        language: "React Native",
        preview: "https://ebhar.com/",
        link: "https://ebhar.com/",
      },
    ],
  },
  {
    id: 2,
    type: "Gotlr",
    image: Image2,
    tag: ["mobile"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Mobile App",
        client: "Gotlr",
        language: "React Native, Socket.io, MangoPay, Maps, Chat",
        preview: "https://gotlr.com/",
        link: "https://gotlr.com/",
      },
    ],
  },
  {
    id: 3,
    type: "Kruzee",
    image: Image3,
    tag: ["mobile"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Mobile App",
        client: "Kruzee",
        language: "React Native, React Native Calendars",
        preview: "https://kruzee.com/",
        link: "https://kruzee.com/",
      },
    ],
  },
  {
    id: 4,
    type: "Liible",
    image: Image4,
    tag: ["mobile"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Mobile App",
        client: "Liible",
        language: "React Native, Socket.io, Stripe, ",
        preview: "https://liible.com/",
        link: "https://liible.com/",
      },
    ],
  },
  {
    id: 5,
    type: "MD Foods",
    image: Image5,
    tag: ["mobile"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Mobile App",
        client: "MD Foods",
        language: "React Native, Woocommerce",
        preview: "https://mdfoods.com/",
        link: "https://mdfoods.com/",
      },
    ],
  },
  {
    id: 6,
    type: "MultiPass",
    image: Image6,
    tag: ["mobile"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Mobile App",
        client: "MultiPass",
        language: "React Native, Stripe, Stripe Connect",
        preview: "https://multipass.com",
        link: "https://multipass.com",
      },
    ],
  },
  {
    id: 7,
    type: "Talal",
    image: Image7,
    tag: ["mobile"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Mobile App",
        client: "Talal",
        language: "React Native, Fatoora",
        preview: "www.facebook.com",
        link: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    id: 8,
    type: "Vital Vet",
    image: Image8,
    tag: ["mobile"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Mobile App",
        client: "Vital Vet",
        language: "React Native, Shopify",
        preview: "https://vitalvet.org/",
        link: "https://vitalvet.org/",
      },
    ],
  },
  {
    id: 9,
    type: "Keeper",
    image: Image9,
    tag: ["Web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Keeper",
        language:
          "Next.js, Tailwind CSS, Web3.js, Wagmi, WalletConnect, Solana, Bitcoin",
        preview: "https://keeperfi.io/",
        link: "https://keeperfi.io/",
      },
    ],
  },

  {
    id: 10,
    type: "Blockrock",
    image: Image10,
    tag: ["Web"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Blockrock",
        language: "Next.js, Tailwind CSS, Web3.js, Wagmi, WalletConnect",
        preview: "https://blockrock.app/",
        link: "https://blockrock.app/",
      },
    ],
  },
  {
    id: 11,
    type: "Pear",
    image: Image11,
    tag: ["Web"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Pear",
        language: "Next.js, Tailwind CSS, Web3.js, Wagmi, WalletConnect",
        preview: "https://www.pear.garden/",
        link: "https://www.pear.garden/",
      },
    ],
  },
  {
    id: 12,
    type: "Fantasy",
    image: Image12,
    tag: ["Web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Fantasy",
        language: "Next.js, Tailwind CSS, Web3.js, Wagmi, WalletConnect",
        preview: "https://theduh.com/",
        link: "https://theduh.com/",
      },
    ],
  },
  {
    id: 13,
    type: "Blob",
    image: Image13,
    tag: ["Web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Blob",
        language: "Next.js, Tailwind CSS, Web3.js, Wagmi, WalletConnect",
        preview: "https://blobdao.fi/",
        link: "https://blobdao.fi/",
      },
    ],
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(PortfolioData);

export default PortfolioData;
