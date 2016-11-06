import { Template } from 'meteor/templating';

import './header.html';

Template.header.onRendered(function() {
  this.$('.button-collapse').sideNav({
    closeOnClick: true // Closes side-nav on <a> clicks
  });
});