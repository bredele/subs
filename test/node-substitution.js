var Binding = require('node-substitution');
var Store = require('store');
var domify = require('domify');
var assert = require('assert');

describe('interpolation magic', function(){
  it('shoud substitude node text content', function(){
    var dom = domify('<span>{name}</span>').firstChild;
    var store = new Store({
      name : 'bredele'
    });
    var binding = new Binding(dom, store);
    assert('bredele' === dom.textContent);
  });
});