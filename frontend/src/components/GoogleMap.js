import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ 
  center = { lat: 1.305561670313934, lng: 103.85288109551813 }, // AZ Holidays Singapore office
  zoom = 10, // Closer zoom level
  style = { height: '400px', width: '100%' },
  mapTypeId = 'hybrid' // 'hybrid' shows satellite with labels
}) => {
  const ref = useRef();

  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      mapTypeId: window.google.maps.MapTypeId.HYBRID, // Satellite with labels
      styles: [
        {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "weight": "2.00"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#9c9c9c"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "color": "#f2f2f2"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "lightness": 45
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#7b7b7b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
            {
              "color": "#2c5aa0"
            },
            {
              "visibility": "on"
            }
          ]
        }
      ],
      // Additional options for better satellite view
      mapTypeControl: true, // Show map type control (satellite/terrain/etc)
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.TOP_RIGHT
      },
      zoomControl: true,
      streetViewControl: true,
      fullscreenControl: true
    });

    // Add a custom marker
    new window.google.maps.Marker({
      position: center,
      map: map,
      title: 'AZ Holidays Office',
      icon: {
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzMCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDBDNi43MTU3MyAwIDAgNi43MTU3MyAwIDE1QzAgMjMuMjg0MyAxNSAzOSAxNSAzOUMxNSAzOSAzMCAyMy4yODQzIDMwIDE1QzMwIDYuNzE1NzMgMjMuMjg0MyAwIDE1IDBaIiBmaWxsPSIjMmM1YWEwIi8+CjxjaXJjbGUgY3g9IjE1IiBjeT0iMTQiIHI9IjYiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
        scaledSize: new window.google.maps.Size(30, 40),
        anchor: new window.google.maps.Point(15, 40)
      },
      animation: window.google.maps.Animation.DROP
    });

    // Add an info window
    const infoWindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 8px 0; color: #2c5aa0;">AZ Holidays</h3>
          <p style="margin: 0; color: #333;">113 Dunlop Street<br>Singapore 209432</p>
          <p style="margin: 8px 0 0 0; color: #666;">📞 +65 6297 0786</p>
        </div>
      `
    });

    // Add click listener to marker to show info window
    const marker = new window.google.maps.Marker({
      position: center,
      map: map,
      title: 'AZ Holidays Office',
      icon: {
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzMCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDBDNi43MTU3MyAwIDAgNi43MTU3MyAwIDE1QzAgMjMuMjg0MyAxNSAzOSAxNSAzOUMxNSAzOSAzMCAyMy4yODQzIDMwIDE1QzMwIDYuNzE1NzMgMjMuMjg0MyAwIDE1IDBaIiBmaWxsPSIjMmM1YWEwIi8+CjxjaXJjbGUgY3g9IjE1IiBjeT0iMTQiIHI9IjYiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=',
        scaledSize: new window.google.maps.Size(30, 40),
        anchor: new window.google.maps.Point(15, 40)
      }
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    // Auto-open info window on load
    setTimeout(() => {
      infoWindow.open(map, marker);
    }, 1000);

  }, [center, zoom]);

  return <div ref={ref} style={style} />;
};

export default GoogleMap;