'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);


  $(function () {

    var links = $('.sidebar-links > a');

    links.on('click', function () {

      links.removeClass('selected');
      $(this).addClass('selected');

    })
  });


});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
