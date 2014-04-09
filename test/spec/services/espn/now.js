describe('Service: espnNow', function(){
  var espnNow,
      $httpBackend,
      result;

  beforeEach(module('espnAPI'));
  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    espnNow = $injector.get('espnNow');
    result = null;
  }));

  afterEach (function () {
    $httpBackend.verifyNoOutstandingExpectation ();
    $httpBackend.verifyNoOutstandingRequest ();
  });

  describe(".get()", function(){
    beforeEach(function(){
      $httpBackend.expectJSONP(/v1\/now/).respond({});
      result = espnNow.get();
    });

    it('should call now url', function(){
      $httpBackend.flush();
    });
  });

  describe('.top()', function(){
    beforeEach(function(){
      $httpBackend.expectJSONP(/v1\/now\/top/).respond({});
      result = espnNow.top();
    });

    it('should call top url', function(){
      $httpBackend.flush();
    });
  });

  describe('.popular()', function(){
    beforeEach(function(){
      $httpBackend.expectJSONP(/v1\/now\/popular/).respond({});
      result = espnNow.popular();
    });

    it('should call the popular url', function(){
      $httpBackend.flush();
    });
  });
});