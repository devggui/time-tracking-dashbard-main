var json = {
  data: [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
};

for(let i=0; i < json.data.length; i++) {
  let html;
  let option = "daily";

  html += "<h2>"+json.data[i].title+"</h2>";
  switch(option) {
    case option = json.data.timeframes.daily:
      html += "<h1>"+json.data[i].timeframes.daily.current+"</h1>";
      html += "<p>"+json.data[i].timeframes.daily.previous+"</p>";
      break;

    case json.data.timeframes.weekly:
      html += "<h1>"+json.data[i].timeframes.weekly.current+"</h1>";
      html += "<p>"+json.data[i].timeframes.weekly.previous+"</p>";
      break;

    case json.data.timeframes.monthly:
      html += "<h1>"+json.data[i].timeframes.monthly.current+"</h1>";
      html += "<p>"+json.data[i].timeframes.monthly.previous+"</p>";
      break;
    
    default:
      console.log(`Sorry, we are out of ${option}`);
  }
  $('#data').append(html);  
}