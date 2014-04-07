'use strict';

describe('module: espnAPI', function () {
  // load the controller's module
  beforeEach(module('espnAPI'));

  describe('Service: espnCache', function(){
    var espnCache;

    beforeEach(inject(function($injector) {
      espnCache = $injector.get('espnCache');
    }));

    beforeEach(function(){
      espnCache.put('key', 'value');
      espnCache.put('another key', 'another value');
    });

    it('should be an espn-cache', function(){
      expect(espnCache.info().id).toEqual('espn-cache');
    });

    it('shoud have remove', function(){
      espnCache.remove('another key');
      expect(espnCache.get('another key')).toBeUndefined();
    });

    it('removeAll() should empty cache', function(){
      espnCache.removeAll();
      expect(espnCache.info().size).toEqual(0);
    });
  });

  describe('Service: espnBase', function(){
    var  value = '123',
      response = null,
          base = null;

    beforeEach(inject(function($injector) {
      base = $injector.get('espnBase');
    }));

    describe('.cache()', function(){
      var cache;
      beforeEach(function(){
        cache = base.cache();
      })
      it('shuold be an espn-cahce', function(){
        expect(cache.info().id).toBe('espn-cache');
      });
    });

    describe('.url()', function(){
      beforeEach(function(){
        response = base.url();
      });

      it('should be a URL', function () {
        expect(function(){ new URL(response); }).not.toThrow();
      });

      it('should not change orginal', function(){
        response = 'not-the-same';
        expect(response).not.toBe(base.url());
      });
    });

    describe('.options()', function(){
      beforeEach(function(){
        response = base.options();
      });

      it('should be an object', function(){
        expect(typeof response).toBe('object');
      });

      it('should be a copy', function(){
        expect(response.version).not.toBe(base.options());
      });

      it('shouldn\'t change allow orginal values to change', function(){
        response.version = '111';
        response.apiKey = '222';
        response.method = 'GET';
        expect(base.options()).not.toEqual({version: '111', apiKey: '222', method: 'GET' });
      });

      it('should have apiKey', function(){
        expect(response.apiKey).toBeDefined();
      });

      it('should have JSONP method', function(){
        expect(response.method).toBe('JSONP');
      });

      it('should have version', function(){
        expect(response.version).toBeTruthy();
      });
    });

    describe('.setVersion()', function(){
      beforeEach(function(){
        response = base.setVersion(value);
      });

      it('should return base', function(){
        expect(response).toEqual(base);
      });

      it('should set value in options', function(){
        expect(base.options().version).toBe(value);
      });
    });

    describe('.setAPIKey()', function(){
      beforeEach(function(){
        response = base.setAPIKey(value);
      });

      it('should return base', function(){
        expect(response).toEqual(base);
      });

      it('should set value in options', function(){
        expect(base.options().apiKey).toBe(value);
      });
    });
  });

  it('should call categories url', function () {
    $httpBackend.expectJSONP(/v1\/sports\?apiKey=/).respond(200, 'success');
    espnAPI.categories();
    $httpBackend.flush();
  });

  it('should return a promise', function(){
    $httpBackend.expectJSONP(/v1\/sports\?apiKey=/).respond(200, 'success');
    var categoriesPromise = espnAPI.categories();
    expect(Object.getOwnPropertyNames(categoriesPromise)).toEqual(['then', 'catch', 'finally', 'success', 'error']);
    $httpBackend.flush();
=======

    it('should be an espn-cache', function(){
      expect(espnCache.info().id).toEqual('espn-cache');
    });

    it('shoud have remove', function(){
      espnCache.remove('another key');
      expect(espnCache.get('another key')).toBeUndefined();
    });

    it('removeAll() should empty cache', function(){
      espnCache.removeAll();
      expect(espnCache.info().size).toEqual(0);
    });
  });

  describe('Service: espnBase', function(){
    var  value = '123',
      response = null,
          base = null;

    beforeEach(inject(function($injector) {
      base = $injector.get('espnBase');
    }));

    describe('.cache()', function(){
      var cache;
      beforeEach(function(){
        cache = base.cache();
      })
      it('shuold be an espn-cahce', function(){
        expect(cache.info().id).toBe('espn-cache');
      });
    });

    describe('.url()', function(){
      beforeEach(function(){
        response = base.url();
      });

      it('should be a URL', function () {
        expect(function(){ new URL(response); }).not.toThrow();
      });

      it('should not change orginal', function(){
        response = 'not-the-same';
        expect(response).not.toBe(base.url());
      });
    });

    describe('.options()', function(){
      beforeEach(function(){
        response = base.options();
      });

      it('should be an object', function(){
        expect(typeof response).toBe('object');
      });

      it('should be a copy', function(){
        expect(response.version).not.toBe(base.options());
      });

      it('shouldn\'t change allow orginal values to change', function(){
        response.version = '111';
        response.apiKey = '222';
        response.method = 'GET';
        expect(base.options()).not.toEqual({version: '111', apiKey: '222', method: 'GET' });
      });

      it('should have apiKey', function(){
        expect(response.apiKey).toBeDefined();
      });

      it('should have JSONP method', function(){
        expect(response.method).toBe('JSONP');
      });

      it('should have version', function(){
        expect(response.version).toBeTruthy();
      });
    });

    describe('.setVersion()', function(){
      beforeEach(function(){
        response = base.setVersion(value);
      });

      it('should return base', function(){
        expect(response).toEqual(base);
      });

      it('should set value in options', function(){
        expect(base.options().version).toBe(value);
      });
    });

    describe('.setAPIKey()', function(){
      beforeEach(function(){
        response = base.setAPIKey(value);
      });

      it('should return base', function(){
        expect(response).toEqual(base);
      });

      it('should set value in options', function(){
        expect(base.options().apiKey).toBe(value);
      });
    });
>>>>>>> Refactored espn calls to use resources and be independant.
  });
});

