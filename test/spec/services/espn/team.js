describe('Service: espnTeam', function () {

  var team,
      mocks,
      $httpBackend;

  // load the controller's module
  beforeEach(module('espnAPI'));
  beforeEach(module('espnAPIMocks'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mocks = $injector.get('espnTeam.defaultResponse');
    team = $injector.get('espnTeam');
  }));

  afterEach (function () {
    $httpBackend.verifyNoOutstandingExpectation ();
    $httpBackend.verifyNoOutstandingRequest ();
  });

  it("should", function(){ expect(team).toBeTruthy() });

  describe('.get()', function(){
    var spyCB,
      teamObj;
    beforeEach(function(){
      spyCB = jasmine.createSpy().andReturn(mocks);
      $httpBackend.expectJSONP(/v1\/sports\/football\/nfl\/teams\/26\?apiKey=/).respond(spyCB);
      teamObj = team.get({sportType: 'football', league: 'nfl', teamId: '26'});
    });

    it('should return a promise', function(){
      $httpBackend.flush();

      expect(Object.getOwnPropertyNames(teamObj.$promise)).
        toEqual([ 'then', 'catch', 'finally' ]);
    });
  });
});
