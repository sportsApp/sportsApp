describe('Service: espnSports', function () {

  var sports,
      mocks,
      cache,
      $httpBackend;

  // load the controller's module
  beforeEach(module('espnAPI','espnAPIMocks'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    cache = $injector.get('espnCache');
    sports = $injector.get('espnSports');
    mocks = $injector.get('espnSportData').defaultResponse;
  }));

  afterEach (function () {
    $httpBackend.verifyNoOutstandingExpectation ();
    $httpBackend.verifyNoOutstandingRequest ();
  });

  it("should", function(){ expect(sports).toBeTruthy() });

  describe('.get()', function(){
    var spyCB,
      sportsObj,
      sportName = 'football';

    beforeEach(function(){
      spyCB = jasmine.createSpy().andReturn(mocks);
      $httpBackend.expectJSONP(new RegExp('v1/sports/'+sportName+'?apiKey=')).respond(spyCB);
      sportsObj = sports.get({sport: sportName});
    });
  });
});
