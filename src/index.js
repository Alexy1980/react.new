// подключаем jquery
var $ = require('jquery');
// подключаем constant.js
require('./constant');
require('./less');

var App = function() {
    // console.log(str);
    $('body').html('<div class="b-test"><h3 class="b-test_heading">TEXT!!! <span>Привет мир!</span></h3></div>');
};

var app = new App();
app.get = function() {};

