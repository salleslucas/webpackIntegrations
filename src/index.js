// import fonts
import './fonts.css';
import './index.scss';

// import jQuery
import $ from 'jquery';

// import bootstrap
import 'bootstrap'

const body = $('body');
const p = $('<p></p>').text('jQuery is working!').css('color', 'red');
body.append(p);