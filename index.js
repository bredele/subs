var interpolation = require('interpolation');

//TODO: add in interpolation component
//test if expr have unique keys
function attrs(text){
  var exprs = [];
  text.replace(/\{([^}]+)\}/g, function(_, expr){
    var value = expr.trim();
    if(!~exprs.indexOf(value)) exprs.push(value);
  });
  return exprs;
}

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
  this.store = store;
  //cache text template
  this.text = node.data;

  this.exprs = attrs(this.text);
  for(var l = this.exprs.length; l--;){ //TODO: do own each package with a fast loop
    var expr = this.exprs[l];
    if(store.has(expr)){ //NOTE: may be not necessary
      var _this = this;
      store.on('change ' + expr, function(){ //TODO: have emitter with scope
        _this.apply();
      });
    }
  }
  this.apply();
}


/**
 * Replace text content with store values.
 * @api public
 */

Substitution.prototype.apply = function() {
  var node = this.node;
  node.data = interpolation(this.text, this.store);
};