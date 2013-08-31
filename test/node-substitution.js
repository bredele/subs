var Binding = require('node-substitution');
var Store = require('store');
var domify = require('domify');
var assert = require('assert');

describe('Simple interpolation', function(){

  describe('single store attribute', function(){
    it('shoud substitude node text content with a single value', function(){
      var dom = domify('<span>{name}</span>').firstChild;
      var store = new Store({
        name : 'bredele'
      });
      var binding = new Binding(dom, store);
      assert('bredele' === dom.textContent);
    });

    it('should substitute node everytime there is a change in the model attribute', function(){
      var dom = domify('<span>{name}</span>').firstChild;
      var store = new Store({
        name : 'bredele'
      });
      var binding = new Binding(dom, store);
      assert('bredele' === dom.textContent);

      store.set('name', 'Olivier');
      assert('Olivier' === dom.textContent);
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