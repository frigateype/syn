/*syn@0.4.0#syn*/
var syn = require('./synthetic.js');
require('./mouse.support.js');
require('./browsers.js');
require('./key.support.js');
require('./drag.js');
window.syn = syn;
module.exports = syn;