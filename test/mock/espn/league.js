(function(window, angular){
  angular.module('espnAPIMocks').
  value('espnLeagueData', {
    "defaultResponse": {
      "sports": [{
        "name": "football",
        "id": 20,
        "uid": "s:20",
        "links": {
          "api": {
            "leagues": {
              "href": "http://api.espn.com/v1/sports/football/nfl"
            },
            "news": {
              "href": "http://api.espn.com/v1/sports/football/nfl/news"
            },
            "notes": {
              "href": "http://api.espn.com/v1/sports/football/nfl/news/notes"
            },
            "headlines": {
              "href": "http://api.espn.com/v1/sports/football/nfl/news/headlines"
            },
            "events": {
              "href": "http://api.espn.com/v1/sports/football/nfl/events"
            },
            "teams": {
              "href": "http://api.espn.com/v1/sports/football/nfl/teams"
            },
            "athletes": {
              "href": "http://api.espn.com/v1/sports/football/nfl/athletes"
            },
            "standings": {
              "href": "http://api.espn.com/v1/sports/football/nfl/standings"
            }
          }
        },
        "leagues": [{
          "name": "National Football League",
          "abbreviation": "nfl",
          "id": 28,
          "uid": "s:20~l:28",
          "groupId": 9,
          "shortName": "NFL",
          "season": {
            "year": 2013,
            "type": 4,
            "description": "offseason",
            "startDate": "2014-02-05T08:00:00Z",
            "endDate": "2014-07-30T06:59:59Z"
          },
          "week": {
            "number": 5,
            "startDate": "2014-01-27T08:00:00Z",
            "endDate": "2014-02-05T07:59:00Z",
            "text": "Super Bowl"
          },
          "groups": [{
            "name": "National Football Conference",
            "abbreviation": "nfc",
            "groupId": 7,
            "shortName": "NFC",
            "season": {
              "year": "2014",
              "type": 2,
              "description": "regular",
              "startDate": "2014-01-01T00:00:00Z",
              "endDate": "2014-12-31T23:59:59Z"
            },
            "week": {},
            "groups": [{
              "name": "NFC East",
              "abbreviation": "nfce",
              "groupId": 1,
              "shortName": "NFCE",
              "season": {
                "year": "2014",
                "type": 2,
                "description": "regular",
                "startDate": "2014-01-01T00:00:00Z",
                "endDate": "2014-12-31T23:59:59Z"
              },
              "week": {}
            }, {
              "name": "NFC West",
              "abbreviation": "nfcw",
              "groupId": 3,
              "shortName": "NFCW",
              "season": {
                "year": "2014",
                "type": 2,
                "description": "regular",
                "startDate": "2014-01-01T00:00:00Z",
                "endDate": "2014-12-31T23:59:59Z"
              },
              "week": {}
            }, {
              "name": "NFC North",
              "abbreviation": "nfcn",
              "groupId": 10,
              "shortName": "NFCN",
              "season": {
                "year": "2014",
                "type": 2,
                "description": "regular",
                "startDate": "2014-01-01T00:00:00Z",
                "endDate": "2014-12-31T23:59:59Z"
              },
              "week": {}
            }, {
              "name": "NFC South",
              "abbreviation": "nfcs",
              "groupId": 11,
              "shortName": "NFCS",
              "season": {
                "year": "2014",
                "type": 2,
                "description": "regular",
                "startDate": "2014-01-01T00:00:00Z",
                "endDate": "2014-12-31T23:59:59Z"
              },
              "week": {}
            }]
          }, {
            "name": "American Football Conference",
            "abbreviation": "afc",
            "groupId": 8,
            "shortName": "AFC",
            "season": {
              "year": "2014",
              "type": 2,
              "description": "regular",
              "startDate": "2014-01-01T00:00:00Z",
              "endDate": "2014-12-31T23:59:59Z"
            },
            "week": {},
            "groups": [{
              "name": "AFC East",
              "abbreviation": "afce",
              "groupId": 4,
              "shortName": "AFCE",
              "season": {
                "year": "2014",
                "type": 2,
                "description": "regular",
                "startDate": "2014-01-01T00:00:00Z",
                "endDate": "2014-12-31T23:59:59Z"
              },
              "week": {}
            }, {
              "name": "AFC West",
              "abbreviation": "afcw",
              "groupId": 6,
              "shortName": "AFCW",
              "season": {
                "year": "2014",
                "type": 2,
                "description": "regular",
                "startDate": "2014-01-01T00:00:00Z",
                "endDate": "2014-12-31T23:59:59Z"
              },
              "week": {}
            }, {
              "name": "AFC North",
              "abbreviation": "afcn",
              "groupId": 12,
              "shortName": "AFCN",
              "season": {
                "year": "2014",
                "type": 2,
                "description": "regular",
                "startDate": "2014-01-01T00:00:00Z",
                "endDate": "2014-12-31T23:59:59Z"
              },
              "week": {}
            }, {
              "name": "AFC South",
              "abbreviation": "afcs",
              "groupId": 13,
              "shortName": "AFCS",
              "season": {
                "year": "2014",
                "type": 2,
                "description": "regular",
                "startDate": "2014-01-01T00:00:00Z",
                "endDate": "2014-12-31T23:59:59Z"
              },
              "week": {}
            }]
          }]
        }]
      }],
      "timestamp": "2014-04-15T23:57:21Z",
      "status": "success"
    }
  });
})(window, window.angular);