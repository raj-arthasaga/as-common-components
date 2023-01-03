import { ReactComponent as Discord } from '../assets/discord.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Papper } from '../assets/paper.svg';
import { String } from '../components/string';
import { Images } from '../assets/Images';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

export const headerData = [
  {
    name: 'Home',
    path: '/',
    dropdown: false,
    onclick: false,
    Link: true,
  },
  {
    name: 'Get DAO Guide',
    path: '/',
    dropdown: false,
    onclick: true,
    Link: false,
    url: false,
  },
  {
    name: 'Insights',
    path: '/blog',
    dropdown: false,
    onclick: false,
    Link: false,
    url: false,
  },
  {
    name: 'List Now',
    path: '/',
    dropdown: false,
    onclick: false,
    Link: false,
    url: true,
  },
  {
    name: 'Fund Now',
    path: '/',
    dropdown: false,
    onclick: false,
    Link: false,
    url: false,
  },
];

export const socialHeader = [
  {
    icon: <Twitter className='w-[20px] fill-[#9FADAD] mr-[20px]' />,
    link: 'https://twitter.com/bitcom_exchange',
    target: '_blank',
  },
  {
    icon: <Papper className='w-[20px] fill-[#9FADAD] mr-[20px]' />,
    link: 'https://t.me/bitcom_exchange',
    target: '_blank',
  },
  {
    icon: <Discord className='w-[20px] fill-[#9FADAD] ' />,
    link: 'https://discord.gg/t2H5FF5Pb6',
    target: '_blank',
  },
];

export const exactlyData = [
  {
    name: String.DAO,
    items: String.DAO_101,
  },
  {
    name: String.HYPE_VS_REALITY,
    items: String.HYPE_VS_101,
  },
];

export const TradeDaoData = [
  {
    image: Images.SHARE_BIT,
  },
  {
    image: Images.SHARE_BIT,
  },
  {
    image: Images.SHARE_BIT,
  },
  {
    image: Images.SHARE_BIT,
  },
  {
    image: Images.SHARE_BIT,
  },
  {
    image: Images.SHARE_BIT,
  },
  {
    image: Images.SHARE_BIT,
  },
  {
    image: Images.SHARE_BIT,
  },
  {
    image: Images.SHARE_BIT,
  },
];

export const BlogData = [
  {
    title: 'Pharetra senectus placerat',
    content:
      'Fermentum nec et mauris sit aliquam lacus, aenean purus. Enim at mattis blandit tempor diam urna orci. Lectus nibh sed amet...',
    date: 'April, 22, 2022',
    Thumb: Images.BLOG_THUMB,
  },
  {
    title: 'Lorem vulputate eu fringilla eu',
    content:
      'Aenean sit dolor feugiat pellentesque elementum in scelerisque pharetra, eu. Ac tempor, pellentesque sit tellus orci...',
    date: 'May, 22, 2022',
    Thumb: Images.BLOG_THUMB,
  },
  {
    title: 'A sed phasellus tortor vulputate',
    content:
      'Dapibus arcu sed lacus facilisis et. Ut nisl in suspendisse amet id mauris leo. At adipiscing dignissim auctor id malesuada. Enim eu...',
    date: 'June, 22, 2022',
    Thumb: Images.BLOG_THUMB,
  },
  {
    title: 'Id neque enim nam arcu nisl.',
    content:
      'Sagittis, quis faucibus morbi eget venenatis, scelerisque cras. Vel orci vitae mattis morbi mauris ut mi. At eget phasellus odio urna...',
    date: 'July, 22, 2022',
    Thumb: Images.BLOG_THUMB,
  },
];

export const footerDataMain = [
  {
    footerTit: 'Products',
    footerImg: false,
    footerData: [
      {
        name: 'Spot',
        path: '/',
      },
      {
        name: 'Convert',
        path: '/',
      },
      {
        name: 'Futures',
        path: '/',
      },
      {
        name: 'Options',
        path: '/',
      },
      {
        name: 'Wallet',
        path: '/',
      },
      {
        name: 'API',
        path: '/',
      },
      {
        name: 'NFT',
        path: '/',
      },
    ],
  },
  {
    footerTit: 'Learn More    ',
    footerImg: false,
    footerData: [
      {
        name: 'Fees',
        path: '/',
      },
      {
        name: 'Help Center',
        path: '/',
      },
      {
        name: 'About Us',
        path: '/',
      },
      {
        name: 'Contact Us',
        path: '/',
      },
      {
        name: 'Partners',
        path: '/',
      },
      {
        name: 'Ambassador Program',
        path: '/',
      },
      {
        name: 'Blog',
        path: '/',
      },
      {
        name: 'Submit Request',
        path: '/',
      },
      {
        name: 'Token Listing',
        path: '/',
      },
    ],
  },
  {
    footerTit: 'Term and Conditions',
    footerImg: false,
    footerData: [
      {
        name: 'User Agreement',
        path: '/',
      },
      {
        name: 'Privacy Policy',
        path: '/',
      },
    ],
  },
  {
    footerTit: 'Social Media',
    footerImg: true,
    footerData: [
      {
        name: Images.FACEBOOK,
        path: '/',
      },
      {
        name: Images.TWITTER,
        path: '/',
      },
      {
        name: Images.LINKEDIN,
        path: '/',
      },
      {
        name: Images.TELEGRAM,
        path: '/',
      },
      {
        name: Images.MEDIUM,
        path: '/',
      },
      {
        name: Images.REDDIT,
        path: '/',
      },
      {
        name: Images.DISCORD,
        path: '/',
      },
    ],
  },
];

export const BlogShare = [
  // {
  //   Img: Images.LINK,
  //   path: '/',
  // },
  // {
  //   Img: Images.LINK_BLACK,
  //   path: '/',
  // },
  // {
  //   Img: Images.FACEBOOK_BLACK,
  //   content: (
  //     <FacebookShareButton url={url}>
  //       <img src={Images.FACEBOOK_BLACK} alt='' className='mt-0' />
  //     </FacebookShareButton>
  //   ),
  // },
  // {
  //   Img: Images.TWITTER_BLACK,
  //   path: '/',
  // },
  // {
  //   Img: Images.WHATSAPP_BLACK,
  //   path: '/',
  // },
  // {
  //   Img: Images.EMAIL_MAIL,
  //   path: '/',
  // },
  // {
  //   Img: Images.PRINT,
  //   path: '/',
  // },
];
