import React from 'react';
import ReactDOM from 'react-dom';
import Linktree from 'linkees';
import { CHANNEL_TYPES } from 'linkees';

import img from './img/avatar.jpg'

import byzockerde from './img/byzocker-de.png';
import nextcloud from './img/nextcloud.png';
import upptime from './img/upptime.webp';
import steam from './img/steam.jpg';
import twitch from './img/twitch.jpg';

import './css/normalize.css';


const items = [ 
  // {
  //   title: '',
  //   subtitle: "",
  //   type: CHANNEL_TYPES.OTHER,
  //   link: "#",
  //   image: ',
  // },
  {
    title: 'byzocker.de',
    subtitle: 'personal website',
    type: CHANNEL_TYPES.WEBSITE,
    link: 'https://byzocker.de',
    image: byzockerde,
  },
  {
    title: 'Status',
    subtitle: "is everything up and running?",
    type: CHANNEL_TYPES.OTHER,
    link: "https://status.byzocker.de",
    image: upptime,
  },
  {
    title: 'Nextcloud',
    subtitle: 'selfhosted cloud storage solution',
    type: CHANNEL_TYPES.OTHER,
    link: "https://cloud.byzocker.de",
    image: nextcloud,
  },
  {
    title: 'Youtube',
    subtitle: "@byzockerr",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://youtube.com/@byzockerr",
  },
  {
    title: 'Twitter',
    subtitle: "@byzocker",
    type: CHANNEL_TYPES.TWITTER,
    link: 'https://twitter.com/byzocker', //your personal website or portfolio  link
  },
  {
    title: 'GitHub',
    subtitle: "@byzocker",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/byzocker",
  },
  {
    title: 'Instagram',
    subtitle: "@byzocker | only the finest cat pictures",
    type: CHANNEL_TYPES.INSTAGRAM,
    link: "https://instagram.com/byzocker",
  },
  {
    title: 'Steam',
    subtitle: "/id/byzocker",
    type: CHANNEL_TYPES.OTHER,
    link: "https://steamcommunity.com/id/byzocker",
    image: steam,
  },
  {
    title: 'Twitch',
    subtitle: "/thebyzocker",
    type: CHANNEL_TYPES.OTHER,
    link: "https://twitch.tv/thebyzocker",
    image: twitch,
  },
  
];

ReactDOM.render(
  <React.StrictMode>
    <Linktree cardItems={items} headerAvatar={img} name='ByZocker'/>
  </React.StrictMode>,
  document.getElementById('root')
);