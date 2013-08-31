var Binding = require('node-substitution');
var Store = require('store');
var domify = require('domify');
var assert = require('assert');

describe('Simple interpolation', function(){

  describe('single store attribute', function(){
    var store = null,
        dom = null,
        binding = null;

    beforeEach(function(){
      dom = domify('<span>{name}</span>').firstChild;
      store = new Store({
        name : 'bredele'
      });
      binding = new Binding(dom, store);
    });

    it('shoud substitude node text content with a single value', function(){
      assert('bredele' === dom.textContent);
    });

    it('should substitute node everytime there is a change in the model attribute', function(){
      assert('bredele' === dom.textContent);
      store.set('name', 'Olivier');
      assert('Olivier' === dom.textContent);
      store.set('name', 'Nicolas');
      assert('Nicolas' === dom.textContent);
    });

  });

  describe('multiple store attributes', function(){
    it('should substitude node text with multiple values', function(){
      var dom = domify('<span>{name} love {company}{company}</span>').firstChild;
      var store = new Store({
        name : 'bredele',
        company : 'PetroFeed'
      });
      var binding = new Binding(dom, store);
      assert('bredele love PetroFeed' === dom.textContent);
    });
  });


});