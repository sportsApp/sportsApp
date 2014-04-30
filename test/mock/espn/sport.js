(function(window, angular){
  angular.module('espnAPIMocks').
  value('espnSportData', {
    "defaultResponse": {
      "sports": [{
        "name": "football",
        "id": 20,
        "uid": "s:20",
        "links": {
          "api": {
            "sports": {
              "href": "http://api.espn.com/v1/sports/football"
            },
            "news": {
              "href": "http://api.espn.com/v1/sports/football/news"
            },
            "notes": {
              "href": "http://api.espn.com/v1/sports/football/news/notes"
            },
            "headlines": {
              "href": "http://api.espn.com/v1/sports/football/news/headlines"
            },
            "events": {
              "href": "http://api.espn.com/v1/sports/football/events"
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
          }
        }, {
          "name": "NCAA Football",
          "abbreviation": "college-football",
          "id": 23,
          "uid": "s:20~l:23",
          "groupId": 99,
          "shortName": "NCAA Football",
          "season": {
            "year": 2013,
            "type": 4,
            "description": "offseason",
            "startDate": "2014-01-14T08:00:00Z",
            "endDate": "2014-07-01T06:59:59Z"
          },
          "week": {
            "number": 1,
            "startDate": "2014-01-14T08:00:00Z",
            "endDate": "2014-07-31T06:59:59Z",
            "text": "All-Star"
          }
        }]
      }],
      "timestamp": "2014-04-15T23:36:16Z",
      "status": "success"
    }
  });
})(window, window.angular);