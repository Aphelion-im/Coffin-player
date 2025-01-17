const songs = [
  {
    id: 1,
    displayName: 'Coffin Dance (Official)',
    artist: 'Dancing Pallbearers',
    filename: 'Coffin Dance (Official Music Video HD).mp3',
  },
  {
    id: 2,
    displayName: 'Coffin Dance on PIANO',
    artist: 'Peter Buka',
    filename: 'Coffin Dance on PIANO.mp3',
  },
  {
    id: 3,
    displayName: 'Coffin Dance by A. Alshaiba',
    artist: 'Ahmed Alshaiba',
    filename: 'Coffin Dance - Oud cover by Ahmed Alshaib.mp3',
  },
  {
    id: 4,
    displayName: 'Coffin Dance version 2',
    artist: '3dwinc Covers',
    filename: '3dwinc Covers - Astronomia.mp3',
  },
  {
    id: 5,
    displayName: 'Coffin Dance version 3',
    artist: '32 Stitches & Hoober',
    filename: '32stitches & Hoober - Astronomia.mp3',
  },
  {
    id: 6,
    displayName: 'Coffin Dance (Piano Version)',
    artist: 'Fonzi M',
    filename: 'Astronomia - Coffin Dance (Piano Version).mp3',
  },
  {
    id: 7,
    displayName: 'Astronomia (feat. Tish)',
    artist: 'Marco Marzi (Ft. Tish)',
    filename: 'Astronomia (feat. Tish).mp3',
  },
  {
    id: 8,
    displayName: 'Manuel Costa Remix',
    artist: 'Oscat',
    filename: 'Astronomia (Manuel Costa Remix).mp3',
  },
  {
    id: 9,
    displayName: 'Astronomia (Remix)',
    artist: 'SPARK',
    filename: 'Astronomia (Remix).mp3',
  },
  {
    id: 10,
    displayName: 'Santti, Dan K Remix',
    artist: 'Tony Igy',
    filename: 'Astronomia (Santti, Dan K Remix).mp3',
  },
  {
    id: 11,
    displayName: 'Astronomia 2K17',
    artist: 'Vavo',
    filename: 'Astronomia 2K17.mp3',
  },
  {
    id: 12,
    displayName: 'Coffin Dance version 4',
    artist: 'Helion',
    filename: 'Helion - Astronomia.mp3',
  },
  {
    id: 13,
    displayName: 'Festa VIP (Festival Remix)',
    artist: 'Marcelo Gaúcho',
    filename: 'Marcelo Gaúcho - Festa VIP (Festival Remix).mp3',
  },
  {
    id: 14,
    displayName: 'Festa VIP',
    artist: 'Marcelo Gaúcho',
    filename: 'Marcelo Gaúcho - Festa VIP.mp3',
  },
  {
    id: 15,
    displayName: 'Coffin Dance version 5',
    artist: 'Tony Igy',
    filename: 'Tony Igy - Astronomia.mp3',
  },
  {
    id: 16,
    displayName: 'Coffin Dance version 6',
    artist: 'Tony Igy',
    filename: 'Vicetone & Tony Igy - Astronomia.mp3',
  },
  {
    id: 17,
    displayName: 'Coffin Dance Japanese version',
    artist: 'Tony Igy',
    filename: 'Coffin Dance - Traditional Japanese Version.mp3',
  },
  {
    id: 18,
    displayName: 'Coffin Dance Chinese version',
    artist: 'OctoEast',
    filename: 'Coffin Dance - Chinese Version by OctoEast.mp3',
  },
  {
    id: 19,
    displayName: 'Astronomia - Zac Waters Remix',
    artist: '1000 Diamantes BR',
    filename: '1000 Diamantes BR - Astronomia (Zac Waters Remix).mp3',
  },
  {
    id: 20,
    displayName: 'Astronomia - Alan Walker Style',
    artist: 'Hernandz Music',
    filename: 'Alan Walker Style  - Astronomia.mp3',
  },
  {
    id: 21,
    displayName: 'Astronomia - Chiky Dee Jay',
    artist: 'Chiky Dee Jay',
    filename: 'Astronomia - Chiky Dee Jay.mp3',
  },
  {
    id: 22,
    displayName: 'Little V Mills - Epic Metal Cover',
    artist: 'Little V Mills',
    filename: 'Astronomia - Epic Metal Cover - Little V.mp3',
  },
  {
    id: 23,
    displayName: 'Medieval Style - Tavern Version',
    artist: 'Cornelius Link',
    filename: 'Astronomia - Medieval Style - Bardcore- Tavern Version.mp3',
  },
  {
    id: 24,
    displayName: 'Astronomia - Never Go Home',
    artist: 'Tony Igy',
    filename: 'Astronomia (Never Go Home).mp3',
  },
  {
    id: 25,
    displayName: 'Astronomia (WhyAsk! Remix)',
    artist: 'WhyAsk!',
    filename: 'Astronomia (WhyAsk! Remix).mp3',
  },
  {
    id: 26,
    displayName: 'Astronomia Remix By Jiaye',
    artist: 'Jiaye',
    filename: 'Astronomia Remix By Jiaye.mp3',
  },
  {
    id: 27,
    displayName: 'CARS - Astronomia Remix',
    artist: 'Brave Music',
    filename: 'CARS - Astronomia Remix.mp3',
  },
  {
    id: 28,
    displayName: "Synthwave Retro 80's Remix",
    artist: 'Astrophysics',
    filename: "Coffin Dance Synthwave retro 80's remix.mp3",
  },
  {
    id: 29,
    displayName: 'Cole Rolland - Guitar Cover',
    artist: 'Cole Rolland',
    filename: 'Cole Rolland - Guitar Cover.mp3',
  },
  {
    id: 30,
    displayName: 'Cotneus - Astronomia',
    artist: 'Cotneus',
    filename: 'Cotneus - Astronomia.mp3',
  },
  {
    id: 31,
    displayName: 'Astronomia - Lorglez Remix',
    artist: 'Daniel González',
    filename: 'Daniel González - Astronomia (Lorglez Remix).mp3',
  },
  {
    id: 32,
    displayName: 'DJ Nam - Astronomia Remix',
    artist: 'DJ Nam',
    filename: 'DJ Nam - Astronomia Remix.mp3',
  },
  {
    id: 33,
    displayName: 'Folk-Metal Cover',
    artist: 'Alina Gingertail',
    filename: 'Folk-Metal Cover by Alina Gingertail.mp3',
  },
  {
    id: 34,
    displayName: 'Jiaye Bootleg Remix',
    artist: 'Lady Leader',
    filename: 'Lady Leader - Jiaye Bootleg remix.mp3',
  },
  {
    id: 35,
    displayName: 'Maxriven - Astronomia',
    artist: 'Maxriven',
    filename: 'Maxriven- Astronomia (Original Max).mp3',
  },
  {
    id: 36,
    displayName: 'Nightcore - Astronomia',
    artist: 'Nightcore',
    filename: 'Nightcore - Astronomia.mp3',
  },
  {
    id: 37,
    displayName: 'Piano Cover by Pianella Piano',
    artist: 'Pianella Piano',
    filename: 'Piano Cover by Pianella Piano.mp3',
  },
  {
    id: 38,
    displayName: 'Poco-Poco Music - Remix',
    artist: 'Poco-Poco Music',
    filename: 'Poco-Poco Music - Astronomia Remix.mp3',
  },
  {
    id: 39,
    displayName: 'ReLike Vibes - Astronomia',
    artist: 'ReLike Vibes',
    filename: 'ReLike Vibes - Coffin Dance - Astronomia.mp3',
  },
  {
    id: 40,
    displayName: 'Teen Titans Go - Coffin Dance',
    artist: 'SH Media',
    filename: 'Teen Titans Go - Coffin Dance Astronomia.mp3',
  },
  {
    id: 41,
    displayName: 'Eurobeat Remix',
    artist: 'Turbo',
    filename: 'Turbo - Eurobeat Remix.mp3',
  },
  {
    id: 42,
    displayName: 'Epic Orchestral Cover',
    artist: 'Ryoni',
    filename: 'Coffin Dance - Astronomia - Epic Orchestral Cover.mp3',
  },
  {
    id: 43,
    displayName: 'Sad Orchestral Version',
    artist: 'Arpit Gari',
    filename: 'Astronomia - Coffin Dance - Sad orchestral version.mp3',
  },
  {
    id: 44,
    displayName: '8-bit Game Boy Chiptune Remix',
    artist: 'Pegmode',
    filename:
      '[GB] Astronomia Coffin Dance (8-bit Game Boy Chiptune Remix).mp3',
  },
  {
    id: 45,
    displayName: 'Dj Dziekan Live Remix',
    artist: 'Dj Dziekan',
    filename:
      'Astronomia - Dj Dziekan Live Remix (Vicetone & Tony Igy).mp3',
  },

  {
    id: 46,
    displayName: 'S L O W E D + R E V E R P',
    artist: 'Unknown',
    filename: 'Astronomia ( S L O W E D + R E V E R P ).mp3',
  },
  {
    id: 47,
    displayName: 'Coffin Dance Meme Mix',
    artist: 'Unknown',
    filename: 'Astronomia (Coffin Dance Meme Mix).mp3',
  },
  {
    id: 48,
    displayName: 'Dirrty Love Remix',
    artist: 'Unknown',
    filename: 'Astronomia (Dirrty Love Remix) ♪.mp3',
  },
  {
    id: 49,
    displayName: 'Honorable Coffin Dance Version',
    artist: 'Unknown',
    filename: 'Astronomia (Honorable Coffin Dance Version).mp3',
  },
  {
    id: 50,
    displayName: 'RetroVision 2022 Remix',
    artist: 'Unknown',
    filename: 'Astronomia (RetroVision 2022 Remix).mp3',
  },
  {
    id: 51,
    displayName: 'Astronomia (Sensations)',
    artist: 'Unknown',
    filename: 'Astronomia (Sensations).mp3',
  },
  {
    id: 52,
    displayName: 'Hardrum House Dance',
    artist: 'Unknown',
    filename: 'Astronomia Hardrum House Dance.mp3',
  },
  {
    id: 53,
    displayName: 'Astronomia techno chicken',
    artist: 'Unknown',
    filename: 'Astronomia techno chicken.mp3',
  },
  {
    id: 54,
    displayName: 'Piano sad and emotional',
    artist: '',
    filename: "Coffin Dance but it's actually sad and emotional.mp3",
  },
  {
    id: 55,
    displayName: 'Dxen Astronomia (Remix)',
    artist: 'Dxen',
    filename: 'Dxen - Astronomia (Remix).mp3',
  },
  {
    id: 56,
    displayName: 'Helion x MOHA Astronomia',
    artist: 'Helion x MOHA',
    filename: 'Helion x MOHA - Astronomia.mp3',
  },
  {
    id: 57,
    displayName: 'Hotel Transylvania 3 Remix',
    artist: 'Unknown',
    filename: 'Hotel Transylvania 3 - Astronomia (Remix).mp3',
  },
  {
    id: 58,
    displayName: 'Kean Dysso Astronomia',
    artist: 'Kean Dysso',
    filename: 'Kean Dysso - Astronomia.mp3',
  },
  {
    id: 59,
    displayName: 'Koji Kobura Astronomia',
    artist: 'Koji Kobura',
    filename: 'Koji Kobura - Astronomia (Cover).mp3',
  },
  {
    id: 60,
    displayName: 'Lanné Astronomia',
    artist: 'Lanné',
    filename: 'Lanné - Astronomia.mp3',
  },
  {
    id: 61,
    displayName: '32Stitches & Hoober version 2',
    artist: 'Nightcore',
    filename: 'Nightcore - 32Stitches & Hoober v2.mp3',
  },
  {
    id: 62,
    displayName: 'PedroDJDaddy EDM Remix',
    artist: 'PedroDJDaddy',
    filename: 'PedroDJDaddy EDM Remix.mp3',
  },
  {
    id: 63,
    displayName: 'PedroDJDaddy Trap Remix',
    artist: 'PedroDJDaddy',
    filename: 'PedroDJDaddy Trap Remix.mp3',
  },
  {
    id: 64,
    displayName: 'Raie - Astronomia',
    artist: 'Raie',
    filename: 'Raie - Astronomia.mp3',
  },
  {
    id: 65,
    displayName: 'ANGEMI Extended Remix',
    artist: 'Unknown',
    filename: 'Tony Igy - Astronomia (ANGEMI Extended Remix).mp3',
  },
  {
    id: 66,
    displayName: 'DyxxiZ Remix',
    artist: 'Unknown',
    filename: 'Tony Igy - Astronomia (DyxxiZ Remix).mp3',
  },
  {
    id: 67,
    displayName: 'Kelvy Lobo Bootleg',
    artist: 'Unknown',
    filename:
      'Vicentone & Tony Igy - Astronomia (From Space & Kelvy Lobo Bootleg).mp3',
  },
  {
    id: 68,
    displayName: 'Hardstyle Remix',
    artist: 'Unknown',
    filename:
      'Vicetone & Tony Iggy - Astronomia - Hardstyle Remix.mp3',
  },
  {
    id: 69,
    displayName: 'Frenchcore Remix Uptempo Edit',
    artist: 'Unknown',
    filename:
      'Vicetone & Tony Igy  - Astronomia (Rayvolt Coffin Dance Frenchcore Remix Uptempo Edit).mp3',
  },
  {
    id: 70,
    displayName: 'Edmmer Rave Remix',
    artist: 'Unknown',
    filename:
      'Vicetone & Tony Igy - Astronomia (Edmmer Rave Remix).mp3',
  },
  {
    id: 71,
    displayName: 'Happy Hardcore Remix',
    artist: 'Unknown',
    filename:
      'Vicetone & Tony Igy - Astronomia (Happy Hardcore Remix).mp3',
  },
  {
    id: 72,
    displayName: 'HelliuS Big Room Remake',
    artist: 'Unknown',
    filename:
      'Vicetone & Tony Igy - Astronomia (HelliuS Big Room Remake).mp3',
  },
  {
    id: 73,
    displayName: 'Quantum Noisy Remix',
    artist: 'Unknown',
    filename:
      'Vicetone & Tony Igy- Astronomia (Quantum Noisy Remix).mp3',
  },
  {
    id: 74,
    displayName: 'HUTS Cover',
    artist: 'Unknown',
    filename: 'Vicetone, Tony Igy - Astronomia (HUTS Cover).mp3',
  },
  {
    id: 75,
    displayName: 'Windows 7 Sounds',
    artist: 'Unknown',
    filename:
      'Windows 7 Coffin Dance (Astronomia Covered Using Windows 7 Sounds).mp3',
  },
  {
    id: 76,
    displayName: 'Chutney version Baithak Gana',
    artist: 'SRMUSIC',
    filename:
      'Coffin Dance Chutney version Baithak Gana by SRMUSIC.mp3',
  },
  {
    id: 77,
    displayName: 'In Arabaic (EeZ Remix)',
    artist: 'Unknown',
    filename:
      'Coffin Dance meme in Arabic (EeZ Remix).mp3',
  },
  {
    id: 78,
    displayName: 'Instrumental Guzheng Cover',
    artist: 'Unknown',
    filename:
      'Coffin Dance - Instrumental Guzheng Cover.mp3',
  },
];
