import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Howl } from 'howler';

import './main.html';

Template.soundButton.onCreated(function() {
  this._soundInstance = new Howl({
    src: 'sound/sound.mp3',
    sprite: {
      ahaha: [38130, 4720],
      cossaGarsLa: [46820, 850],
      fusil: [128669, 1697]
    },
    onloaderror: console.error.bind(console)
  });
});

Template.soundButton.events({
  'click button'(e, instance) {
    instance._soundInstance.play('ahaha');
  }
});