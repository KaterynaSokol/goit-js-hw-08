import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, { id: 19231868, width: 640 });
const throttle = require('lodash.throttle');

player.on(
  'timeupdate',
  throttle(function (data) {
    let timing = data.seconds;
    console.log(data);
    try {
      localStorage.setItem('videoplayer-current-time', timing);
    } catch (error) {
      console.log(error.name);
    }
  }, 1000)
);

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time'))
  );
}
