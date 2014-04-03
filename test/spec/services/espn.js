'use strict';

describe('Service: espnAPI', function () {

  var espnAPI, 
      $httpBackend;

  // load the controller's module
  beforeEach(module('sportsAppApp'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    espnAPI = $injector.get('espnAPI');
  }));

  afterEach (function () {
    $httpBackend.verifyNoOutstandingExpectation ();
    $httpBackend.verifyNoOutstandingRequest ();
  });

  it('should call top headlines url', function () {
    $httpBackend.expectJSONP(/v1\/sports\/news\/headlines\/top\?apiKey=/).respond(200, 'success');
    espnAPI.topHeadlines();
    $httpBackend.flush();
  });
});
