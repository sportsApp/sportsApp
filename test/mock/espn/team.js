(function(window, angular){
  angular.module('espnAPIMocks').
  value('espnTeamData', {
    "defaultResponse": {
      "sports": [
      {
        "name": "football",
        "id": 20,
        "uid": "s:20",
        "leagues": [
        {
          "name": "National Football League",
          "abbreviation": "nfl",
          "id": 28,
          "uid": "s:20~l:28",
          "groupId": 9,
          "shortName": "NFL",
          "teams": [
          {
            "id": 26,
            "uid": "s:20~l:28~t:26",
            "location": "Seattle",
            "name": "Seahawks",
            "nickname": "Seattle",
            "abbreviation": "SEA",
            "color": "224970",
            "links": {
              "api": {
                "teams": {
                  "href": "http://api.espn.com/v1/sports/football/nfl/teams/26"
                },
                "news": {
                  "href": "http://api.espn.com/v1/sports/football/nfl/teams/26/news"
                },
                "notes": {
                  "href": "http://api.espn.com/v1/sports/football/nfl/teams/26/news/notes"
                }
              },
              "web": {
                "teams": {
                  "href": "http://espn.go.com/nfl/team/_/name/sea/seattle-seahawks?ex_cid=espnapi_public"
                }
              },
              "mobile": {
                "teams": {
                  "href": "http://m.espn.go.com/nfl/clubhouse?teamId=26&ex_cid=espnapi_public"
                }
              }
            }
          }
          ]
        }
        ]
      }
      ],
      "resultsOffset": 0,
      "resultsLimit": 50,
      "resultsCount": 1,
      "timestamp": "2014-04-11T14:44:02Z",
      "status": "success"
    }
  });
})(window, window.angular);
