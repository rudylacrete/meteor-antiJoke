import { Template } from 'meteor/templating';
import { Howl } from 'howler';

import sprites from '/imports/sprites.js';

import './home.html';

Template.home.helpers({
  sprites() {return sprites}
});

let playingId = null;
const player = new Howl({
  src: 'sound/sound.mp3',
  sprite: {
    ahahah: [38130, 4720],
    cossaGarsLa: [46820, 850],
    fusil: [128669, 1697]
  },
  onloaderror: console.error.bind(console)
});

Template.soundButton.events({
  'click .js-play'(e) {
    e.preventDefault();
    const spriteName = this.name;
    if(playingId) player.stop(playingId);
    playingId = player.play(spriteName);
  }
});