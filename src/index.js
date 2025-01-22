import $ from 'jquery';

const body = $('body');
const p = $('<p></p>').text('jQuery is working!').css('color', 'red');
body.append(p);