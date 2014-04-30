describe('Service: espnTeam', function () {

  var team,
      mockHTTPResponse,
      $httpBackend;

  // load the controller's module
  beforeEach(module('espnAPI'));
  beforeEach(module('espnAPIMocks'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    mockHTTPResponse = $injector.get('espnTeamData').defaultResponse;
    team = $injector.get('espnTeam');
  }));

  afterEach (function () {
    $httpBackend.verifyNoOutstandingExpectation ();
    $httpBackend.verifyNoOutstandingRequest ();
  });

  it("should", function(){ expect(team).toBeTruthy() });

  describe('.get()', function(){
    var spyCB,
      response,
      league = 'nfl',
      sport = 'football',
      teamId = 26;

    beforeEach(function(){
      spyCB = jasmine.createSpy().andReturn(mockHTTPResponse);

      $httpBackend.expectJSONP(new RegExp('v1/sports/' + sport + '/' + league + '/teams/' + teamId))
        .respond(mockHTTPResponse);

      team.get({sportType: sport, league: league, teamId: teamId }, function(data){
        response = data;
      });
    });

    it("should have a correct url", function(){
      $httpBackend.flush();
    });

    it("should have a response",function(){
      $httpBackend.flush();
      expect(response).not.toBeNull();
    });

    it("should be a transformed response",function(){
      $httpBackend.flush();
      expect(response).not.toEqual(mockHTTPResponse);
    });

    it("should have returned a team with id", function(){
      $httpBackend.flush();
      expect(response.id).toBe(teamId);
    });
  });
});
