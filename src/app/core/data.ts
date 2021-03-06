import { VideoGame } from './interfaces';

export const VIDEO_GAMES: VideoGame[] = [
  {
    id: 1,
    title: 'Valorant',
    company: 'Riot Games',
    description: "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.",
    image_url: 'valorant',
    video_url: 'https://videos.files.wordpress.com/0xrpLeEZ/valorant-elderflame-skins-trailer_hd.mp4',
    tags: ['Shooter', 'Action', 'Teams'],
    release: 'Jun 6, 2020',
    score: 4.9,
    platforms: ['windows'],
    available: true,
    offer: false,
    price: 0,
  },
  {
    id: 2,
    title: 'Watch Dogs: Legion',
    company: 'Ubisoft',
    description: "In Watch Dogs: Legion your mission is to form a resistance to save London from debacle in the near future.",
    image_url: 'wdl',
    video_url: 'https://pool-stream.gamersyde.com/securestream.php/7ZuQupUo8fvAUOVH_eweXQ/44000_540p30.mp4',
    tags: ['Action', 'Multiplayer', 'Open world'],
    release: 'Oct 29, 2020',
    score: 4.8,
    platforms: ['windows', 'ps'],
    available: true,
    offer: false,
    price: 129,
  },
  {
    id: 3,
    title: 'Grand Theft Auto V',
    company: 'Rockstar Games',
    description: "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
    image_url: 'gtav',
    video_url: 'http://87.98.202.49/securestream.php/EJpJYdpiZEboGkc-KAKhUQ/32971_540p30.mp4',
    tags: ['Action', 'Adventure'],
    release: 'Sep 17, 2013',
    score: 4.8,
    platforms: ['windows', 'ps', 'xbox'],
    available: true,
    offer: true,
    deduction: 25,
    price: 100,
  },
  {
    id: 4,
    title: 'Leage Of Legends',
    company: 'Riot Games',
    description: "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other's base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.",
    image_url: 'lol',
    video_url: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-mx/production/es-mx/static/hero-de0ba45b1d0959277d12545fbb645722.mp4',
    tags: ['Action', 'Adventure', 'Multiplayer'],
    release: 'Oct 27, 2009',
    score: 4.5,
    platforms: ['windows'],
    available: true,
    offer: false,
    price: 0,
  },
  {
    id: 5,
    title: 'Red Dead Redemption 2',
    company: 'Rockstar Games',
    description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
    image_url: 'rdr2',
    video_url: 'https://media-rockstargames-com.akamaized.net/rockstargames-newsite/gifs//953d9a2.mp4?_=1',
    tags: ['Narration', 'Action', 'Open world'],
    release: 'Nov 5, 2019',
    score: 4.5,
    platforms: ['windows', 'xbox'],
    available: true,
    offer: false,
    price: 125,
  },
]
