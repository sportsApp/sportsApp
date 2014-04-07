describe('Service: espnSports', function () {

  var sports,
      mocks,
      cache,
      $httpBackend;

  // load the controller's module
  beforeEach(module('espnAPI'));
  beforeEach(module('espnAPIMocks'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    cache = $injector.get('espnCache');
    sports = $injector.get('espnSports');
    mocks = $injector.get('epnSports.defaultResponse');
  }));

  afterEach (function () {
    $httpBackend.verifyNoOutstandingExpectation ();
    $httpBackend.verifyNoOutstandingRequest ();
  });

  it("should", function(){ expect(sports).toBeTruthy() });

  describe('.get()', function(){
    var spyCB,
      sportsObj;
    beforeEach(function(){
      spyCB = jasmine.createSpy().andReturn(mocks);
      $httpBackend.expectJSONP(/v1\/sports\?apiKey=/).respond(spyCB);
      sportsObj = sports.get();
    });

    it('should return a promise', function(){
      $httpBackend.flush();

      expect(Object.getOwnPropertyNames(sportsObj.$promise)).
        toEqual([ 'then', 'catch', 'finally' ]);
    });

    it('should cache', function(){
      $httpBackend.flush();
      return;
      var before = cache.info().size;

      expect(cache.info().size - before).toEqual(1);
    });
  });
});
