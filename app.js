/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggle_show() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown__button')) {

    var dropdowns = document.getElementsByClassName("dropdown__content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

////////////
/// maps ///
////////////

var markers = [];
var map;


function drop() {
    clearMarkers();
    for (var i = 0; i < neighborhoods.length; i++) {
      addMarkerWithTimeout(neighborhoods[i], i * 200);
    }
  }

  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }

/////////
// app //
/////////

var ptrs = {
    title : "Casas de entretenimento",
    points : [
        {
            name : "Chácara da Cristina",
            location : {
                lat: -31.32399481, 
                lng: -54.12874043
            }
        },
        {
            name : "Leandro Beer",
            location : {
                lat: -31.30328737, 
                lng: -54.12083423
            }
        },
        {
            name : "Whiskeria do Arco",
            location : {
                lat: -31.35283609, 
                lng: -54.10931887
            }
        },
        {
            name : "Bar do Amassado",
            location : {
                lat: -31.33141349, 
                lng: -54.10291810
            }
        },
        {
            name : "Sta. Tecla Rosa",
            location : {
                lat: -31.30139809, 
                lng: -54.08052782
            }
        },
    ]
};

function dropPoints() {
    clearMarkers();
    for (var i = 0; i < ptrs.points.length; i++) {
        addMarkerWithTimeout(ptrs.points[i].location, i * 200);
    }
}