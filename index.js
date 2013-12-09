var supplant = require('supplant');


/**
 * Node text substitution constructor.
 * @param {HTMLElement} node type 3
 * @param {Store} store 
 */

module.exports = function(node, store) {
  var text = node.nodeValue,
      exprs = supplant.attrs(text),
      handle = function() {
        node.nodeValue = supplant(text, store);
      };

  for(var l = exprs.length; l--;) {
    //when destroy binding, we should do off store
    store.on('change ' + exprs[l], handle);
  }
  handle();
};
