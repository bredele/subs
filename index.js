var supplant = require('supplant');


/**
 * Node text substitution constructor.
 * @param {HTMLElement} node type 3
 * @param {Store} store 
 */

module.exports = function(node, store) { //may be use an adapter
  var text = node.nodeValue,
      exprs = supplant.attrs(text);
  for(var l = exprs.length; l--;) {
    store.on('change ' + exprs[l], function() {
      replace(node, text, store);
    });
  }
  replace(node, text, store);
};


function replace(node, text, obj) {
  node.nodeValue = supplant(text, obj);
}
