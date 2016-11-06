import '/imports/ui/header.js';
import '/imports/ui/layout.html';

import './ui/pages/home.js';
import './ui/pages/about.html';

FlowRouter.route('/', {
  name: 'home',
  action: function(params) {
      BlazeLayout.render("layout", {main: "home"});
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action: function(params) {
      BlazeLayout.render("layout", {main: "about"});
  }
});