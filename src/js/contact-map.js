function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    //disable zoom on hover scroll
    scrollwheel:  false,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(19.7483716, -99.1991933), // New York

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        "featureType": "landscape",
        "stylers": [
          {
            "hue": "#F1FF00"
          },
          {
            "saturation": -27.4
          },
          {
            "lightness": 9.4
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.highway",
        "stylers": [
          {
            "hue": "#0099FF"
          },
          {
            "saturation": -20
          },
          {
            "lightness": 36.4
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "stylers": [
          {
            "hue": "#00FF4F"
          },
          {
            "saturation": 0
          },
          {
            "lightness": 0
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "hue": "#FFB300"
          },
          {
            "saturation": -38
          },
          {
            "lightness": 11.2
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "water",
        "stylers": [
          {
            "hue": "#00B6FF"
          },
          {
            "saturation": 4.2
          },
          {
            "lightness": -63.4
          },
          {
            "gamma": 1
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "hue": "#9FFF00"
          },
          {
            "saturation": 0
          },
          {
            "lightness": 0
          },
          {
            "gamma": 1
          }
        ]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('contact-map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(19.7483716, -99.1991933),
    map: map,
    title: 'Snazzy!'
  });
}

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);