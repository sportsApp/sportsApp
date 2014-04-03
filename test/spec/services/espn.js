'use strict';

describe('Service: espnAPI', function () {

  var espnAPI, 
      $httpBackend;

  // load the controller's module
  beforeEach(module('sportsApp'));

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

  it('should return a promise', function(){
    $httpBackend.whenJSONP(/v1\/sports\/news\/headlines\/top\?apiKey=/).respond(200, 'success');
    var headlinePromise = espnAPI.topHeadlines();
    expect(Object.getOwnPropertyNames(headlinePromise)).toEqual(['then', 'catch', 'finally', 'success', 'error']);
    $httpBackend.flush();
  });
});
