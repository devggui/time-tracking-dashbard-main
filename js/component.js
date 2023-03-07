$(document).ready(function() {
  let json = {
    data: [
      {
        "title": "Work",
        "url": "icon-work.svg",
        "background": "bg-[var(--primary-Light-red-work)]",
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
        "url": "icon-play.svg",
        "background": "bg-[var(--primary-Soft-blue-play)]",
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
        "url": "icon-study.svg",
        "background": "bg-[var(--primary-Light-red-study)]",
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
        "url": "icon-exercise.svg",
        "background": "bg-[var(--primary-Lime-green-exercise)]",
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
        "url": "icon-social.svg",
        "background": "bg-[var(--primary-Violet-social)]",
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
        "url": "icon-self-care.svg",
        "background": "bg-[var(--primary-Soft-orange-self-care)]",
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

  // Period Selected

  let html = '';

  $('a#btn-daily').click(function() {
    $('div#data div#component').remove(); 
    for(let i = 0; i < json.data.length; i++) {
      
          html = '<div class="'+json.data[i].background+' w-52 h-52 m-2 rounded-t-lg" id="component">';
            html += '<img src="./images/'+json.data[i].url+'" alt="" class="w-10 h-10">';
              html+= '<div class="w-52 h-44 bg-[var(--neutral-Dark-blue)] rounded-lg p-7">';
                html+= '<h2 class="flex flex-row justify-between mb-7 -mt-2 font-normal" id="title">'+json.data[i].title+'<a href="" class="font-normal text-[var(--neutral-Pale-Blue)] hover:text-white cursor-pointer">•••</a></h2>';
                html+= '<h1 class="text-5xl mb-2 font-light">'+json.data[i].timeframes.daily.current+'hrs</h1>';
                html+= '<p>Last day  - '+json.data[i].timeframes.daily.previous+'hrs</p>              ';
              html+= '</div>';
          html += '</div>';
  
      $('div#data').append(html); 
    }
  })

  $('a#btn-weekly').click(function() {
    $('div#data div#component').remove(); 
    for(let i = 0; i < json.data.length; i++) {
      
          html = '<div class="'+json.data[i].background+' w-52 h-52 m-2 rounded-t-lg" id="component">';
            html += '<img src="./images/'+json.data[i].url+'" alt="" class="w-10 h-10">';
              html+= '<div class="w-52 h-44 bg-[var(--neutral-Dark-blue)] rounded-lg p-7">';
                html+= '<h2 class="flex flex-row justify-between mb-7 -mt-2 font-normal" id="title">'+json.data[i].title+'<a href="" class="font-normal text-[var(--neutral-Pale-Blue)] hover:text-white cursor-pointer">•••</a></h2>';
                html+= '<h1 class="text-5xl mb-2 font-light">'+json.data[i].timeframes.weekly.current+'hrs</h1>';
                html+= '<p>Last week  - '+json.data[i].timeframes.weekly.previous+'hrs</p>              ';
              html+= '</div>';
          html += '</div>';
  
      $('div#data').append(html); 
    }
  })

  $('a#btn-monthly').click(function() {
    $('div#data div#component').remove(); 
    for(let i = 0; i < json.data.length; i++) {
      
          html = '<div class="'+json.data[i].background+' w-52 h-52 m-2 rounded-t-lg" id="component">';
            html += '<img src="./images/'+json.data[i].url+'" alt="" class="w-10 h-10">';
              html+= '<div class="w-52 h-44 bg-[var(--neutral-Dark-blue)] rounded-lg p-7">';
                html+= '<h2 class="flex flex-row justify-between mb-7 -mt-2 font-normal" id="title">'+json.data[i].title+'<a href="" class="font-normal text-[var(--neutral-Pale-Blue)] hover:text-white cursor-pointer">•••</a></h2>';
                html+= '<h1 class="text-5xl mb-2 font-light">'+json.data[i].timeframes.monthly.current+'hrs</h1>';
                html+= '<p>Last month  - '+json.data[i].timeframes.monthly.previous+'hrs</p>              ';
              html+= '</div>';
          html += '</div>';
  
      $('div#data').append(html); 
    }
  })
  
  // Card Component
  for(let i = 0; i < json.data.length; i++) {     
    let html = '';
        html = '<div class="'+json.data[i].background+' w-52 h-52 m-2 rounded-t-lg" id="component">';
          html += '<img src="./images/'+json.data[i].url+'" alt="" class="w-10 h-10">';
            html+= '<div class="w-52 h-44 bg-[var(--neutral-Dark-blue)] rounded-lg p-7">';
              html+= '<h2 class="flex flex-row justify-between mb-7 -mt-2 font-normal" id="title">'+json.data[i].title+'<a href="" class="font-normal text-[var(--neutral-Pale-Blue)] hover:text-white cursor-pointer">•••</a></h2>';
              html+= '<h1 class="text-5xl mb-2 font-light">'+json.data[i].timeframes.weekly.current+'hrs</h1>';
              html+= '<p>Last week  - '+json.data[i].timeframes.weekly.previous+'hrs</p>              ';
            html+= '</div>';
        html += '</div>';

    $('div#data').append(html); 
  }
})
