var interpolation = require('interpolation');

/**
 * Expose 'node substitution'
 */

module.exports = Substitution;


/**
 * Node substitution constructor.
 * @param {HTMLElement} node  type 3
 * @param {Store} store 
 */

function Substitution(node, store) { //may be use an adapter
  this.node = node;
  this.text = node.textContent;
  this.apply();
}


/**
 * Replace text content with store values.
 * @api public
 */

Substitution.prototype.apply = function() {
  
};