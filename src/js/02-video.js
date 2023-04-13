import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, { id: 19231868, width: 640 });

player.on(
  'timeupdate',
  throttle(function (data) {
    let time = data.seconds;
    console.log(data);
    try {
      localStorage.setItem('videoplayer-time', timing);
    } catch (error) {
      console.log(error.name);
    }
  }, 1000)
);

if (localStorage.getItem('videoplayer-time')) {
  player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-time')));
}
