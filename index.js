var supplant = require('supplant');


/**
 * Expose 'Subs'
 */

module.exports = Substitution;


/**
 * Node text substitution constructor.
 * @param {HTMLElement} node  type 3
 * @param {Store} store 
 */

function Substitution(node, store) { //may be use an adapter
  this.node = node;
  this.store = store;
  //cache text template
  this.text = node.nodeValue;

  this.exprs = supplant.attrs(this.text);
  for(var l = this.exprs.length; l--;) {
    var expr = this.exprs[l];
    var _this = this;
    store.on('change ' + expr, function(){
      _this.apply();
    });
  }
  this.apply();
}


/**
 * Replace text content with store values.
 * @api public
 */

Substitution.prototype.apply = function() {
  this.node.nodeValue = supplant(this.text, this.store);
};