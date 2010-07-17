var PAGEPATH = document.location.href.replace(/#.*/, '')
                                     .replace(/\/[^\/]*$/, '/');

var SEARCH_PLACEHOLDER = 'Fly to a location';

var ge;
var helpOverlay;

var zeroClip; // For clipboard.

function init() {
  initSearchBox();
  initEarth();
  initZeroClipboard();
}

function initEarth() {
  var startTime = new Date().getTime();
  google.earth.setLoadingImageUrl('js/earth-loading.png');
  google.earth.createInstance('earth', function(pluginInstance) {
    var loadTime = new Date().getTime() - startTime;
    
    // Handle creation success.
    ge = pluginInstance;
    ge.getWindow().setVisibility(true);
    ge.getNavigationControl().setVisibility(ge.VISIBILITY_SHOW);
    ge.getOptions().setOverviewMapVisibility(true);
    
    ge.getLayerRoot().enableLayerById(ge.LAYER_BORDERS, true);
    ge.getLayerRoot().enableLayerById(ge.LAYER_ROADS, true);
    ge.getLayerRoot().enableLayerById(ge.LAYER_BUILDINGS, true);
    ge.getLayerRoot().enableLayerById(ge.LAYER_BUILDINGS_LOW_RESOLUTION, true);
    
    makeRoundedCorners();
    
    initListeners();
    
    if (!initStartLocation()) {
      showHelpOverlay();
    }
    
    if (pageTracker) {
      pageTracker._trackEvent('GEPlugin', 'Create success');
      pageTracker._trackEvent('GEPlugin', 'Load time', null, loadTime);
    }
  }, function(error) {
    if (pageTracker) {
      pageTracker._trackEvent('GEPlugin', 'Create fail', error);
    }
    
    // Handle errors. If the plugin isn't installed, poll until the plugin
    // is installed, then retry.
    if (!google.earth.isInstalled() &&
        (error == 'ERR_CREATE_PLUGIN' ||
         error == 'ERR_NOT_INSTALLED' /* Currently never called. */)) {
      var pollFn;
      pollFn = function() {
        navigator.plugins.refresh(false);
        if (google.earth.isInstalled()) {
          document.getElementById('earth').innerHTML = '';
          initEarth();
          if (pageTracker) {
            pageTracker._trackEvent('GEPlugin', 'Install success');
          }
        } else {
          window.setTimeout(pollFn, 2000);
        }
      };

      pollFn();
    }
  });
}

function initZeroClipboard() {
  ZeroClipboard.setMoviePath('js/ZeroClipboard.swf');
  zeroClip = new ZeroClipboard.Client('copyurl-link');
  zeroClip.setHandCursor(true);
}

function updateZeroClipboard(text) {
  zeroClip.reposition();
  zeroClip.setText(text);
}

function earthBatch(fn) {
  google.earth.fetchKml(ge, '', fn);
}

function addDomListener(element, eventName, listener) {
  if (element.addEventListener)
    element.addEventListener(eventName, listener, false);
  else if (element.attachEvent)
    element.attachEvent('on' + eventName, listener);
}

function makeRoundedCorners() {
  earthBatch(function() {
    var makeCorner_ = function(x, y, rot) {
      var screenOverlay = ge.createScreenOverlay('');
      
      var icon = ge.createIcon('');
      icon.setHref(PAGEPATH + 'js/earth-corner.png');
      screenOverlay.setIcon(icon);

      screenOverlay.getOverlayXY().set(
          x, ge.UNITS_FRACTION, y, ge.UNITS_FRACTION);
      screenOverlay.getScreenXY().set(
          x, ge.UNITS_FRACTION, y, ge.UNITS_FRACTION);
      screenOverlay.getSize().set(15, ge.UNITS_PIXELS, 15, ge.UNITS_PIXELS);
      screenOverlay.setRotation(rot);
      
      ge.getFeatures().appendChild(screenOverlay);
    };
  
    makeCorner_(0, 1, 0); // TL
    makeCorner_(0, 0, 90); // BL
    makeCorner_(1, 0, 180); // BR
    makeCorner_(1, 1, 270); // TR
  });
}

function initListeners() {
  var copyurlHideTimeout = null;
  
  google.earth.addEventListener(ge.getView(), 'viewchange', function() {
    if (!copyurlHideTimeout) {
      copyurlHideTimeout = window.setTimeout(function() {
        document.getElementById('copyurl-container')
            .style.visibility = 'hidden';
      }, 1000);
    }
  });
  
  google.earth.addEventListener(ge.getView(), 'viewchangeend', function() {
    if (copyurlHideTimeout) {
      window.clearTimeout(copyurlHideTimeout);
      copyurlHideTimeout = null;
    }
    
    var serializedView = serializeView(ge);
    var earthUrl = PAGEPATH + '#' + serializedView;
    
    document.getElementById('copyurl-container').style.visibility = 'visible';
    document.getElementById('copyurl').innerHTML = earthUrl;
    document.getElementById('tweet-link').href = tweetUrl(earthUrl);
    document.location.hash = '#' + serializedView;
    
    updateZeroClipboard(earthUrl);
  });
}

function initStartLocation() {
  var hash = document.location.hash.replace(/^#/, '');
  if (hash) {
    var oldFlyToSpeed = ge.getOptions().getFlyToSpeed();
    ge.getOptions().setFlyToSpeed(ge.SPEED_TELEPORT);
    deserializeView(ge, hash);
    ge.getOptions().setFlyToSpeed(oldFlyToSpeed);
    return true;
  } else {
    if (google.loader.ClientLocation &&
        google.loader.ClientLocation.latitude &&
        google.loader.ClientLocation.longitude) {
      var lookAt = ge.createLookAt('');
      lookAt.set(google.loader.ClientLocation.latitude,
                 google.loader.ClientLocation.longitude,
                 0, ge.ALTITUDE_RELATIVE_TO_GROUND,
                 0, 0, 1000000);
      ge.getView().setAbstractView(lookAt);
    }
  }
  
  return false;
}

function initSearchBox() {
  var searchBox = document.getElementById('search-box');
  searchBox.setAttribute('placeholder', SEARCH_PLACEHOLDER);
  
  if (searchBox.value == '' || searchBox.value == SEARCH_PLACEHOLDER) {
    searchBox.value = SEARCH_PLACEHOLDER;
    searchBox.className = 'placeholder';
  }
  
  addDomListener(searchBox, 'focus', function() {
    if (searchBox.value == '' || searchBox.value == SEARCH_PLACEHOLDER) {
      searchBox.value = '';
      searchBox.className = '';
    }
  });
  
  addDomListener(searchBox, 'blur', function() {
    if (searchBox.value == '' || searchBox.value == SEARCH_PLACEHOLDER) {
      searchBox.value = SEARCH_PLACEHOLDER;
      searchBox.className = 'placeholder';
    }
  });
  
  addDomListener(searchBox, 'change', function() {
    document.getElementById('search-error').style.display = 'none';
  });
  
  addDomListener(searchBox, 'keypress', function() {
    document.getElementById('search-error').style.display = 'none';
  });
}

function performSearch() {
  var searchBox = document.getElementById('search-box');
  var searchQuery = searchBox.value.replace(/(^\s+)|(\s+$)/g, '');
  
  if (searchQuery == '' ||
      searchQuery == SEARCH_PLACEHOLDER)
    return;
  
  document.getElementById('search-loading').style.display = 'block';
  var geocoder = new google.maps.ClientGeocoder();
  geocoder.getLocations(searchQuery, function(response) {
    document.getElementById('search-loading').style.display = 'none';
    if (response.Status.code != 200 || !response.Placemark) {
      document.getElementById('search-error').innerHTML = 'No results found.';
      document.getElementById('search-error').style.display = 'block';
    } else {
      searchBox.value = response.Placemark[0].address;
      //alert(response.Placemark[0].Point.coordinates);
      var earthNode = document.getElementById('earth');
      var aspectRatio = earthNode.offsetWidth / earthNode.offsetHeight;
      
      var lookAt = computeBBoxView(ge, {
        north: response.Placemark[0].ExtendedData.LatLonBox.north,
        south: response.Placemark[0].ExtendedData.LatLonBox.south,
        east: response.Placemark[0].ExtendedData.LatLonBox.east,
        west: response.Placemark[0].ExtendedData.LatLonBox.west
      }, aspectRatio);
      
      ge.getView().setAbstractView(lookAt);
    }
  });
}

function showHelpOverlay() {
  if (!ge)
    return;
  
  if (helpOverlay) {
    helpOverlay.setVisibility(true);
  } else {
    var continueImage = ge.createIcon('');
    continueImage.setHref('js/earth-continue.png');
    
    var helpOverlay = ge.createScreenOverlay('');
    helpOverlay.setIcon(continueImage);
    helpOverlay.getOverlayXY().set(0.5, ge.UNITS_FRACTION,
                                   0.5, ge.UNITS_FRACTION);
    helpOverlay.getScreenXY().set(0.5, ge.UNITS_FRACTION,
                                  0.5, ge.UNITS_FRACTION);
    helpOverlay.getSize().set(-1, ge.UNITS_FRACTION, -1, ge.UNITS_FRACTION);
    ge.getFeatures().appendChild(helpOverlay);

    var closeHelpFn = function() {
      ge.getFeatures().removeChild(helpOverlay);
    };

    google.earth.addEventListener(ge.getWindow(), 'mousedown', closeHelpFn);
  }
}

function tweetUrl(earthUrl) {
  return 'http://twitter.com/home?status=' +
      encodeURIComponent(earthUrl + ' #earthurl');
}
