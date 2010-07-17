var EARTH_RADIUS = 6378137;

function earthDistance(p1, p2) {
  var a = Math.sin(p1.lat * Math.PI / 180) * Math.sin(p2.lat * Math.PI / 180);
  var b = Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) *
      Math.cos((p2.lon - p2.lon) * Math.PI / 180);
  return EARTH_RADIUS * Math.acos(a + b);
}

function computeBBoxView(pluginInstance, bbox, aspectRatio) {
  var DEGREES = Math.PI / 180;
  
  var coords = [
      [bbox.north, bbox.east],
      [bbox.north, bbox.west],
      [bbox.south, bbox.west],
      [bbox.south, bbox.east]];

  // find center
  var center = {
    lat: (bbox.north + bbox.south) / 2,
    lon: (bbox.east + bbox.west) / 2
  };
  
  var lngSpan = earthDistance({ lat: center.lat, lon: bbox.east },
                              { lat: center.lat, lon: bbox.west });
  var latSpan = earthDistance({ lat: bbox.north, lon: center.lon },
                              { lat: bbox.south, lon: center.lon });
  
  if (!aspectRatio)
    aspectRatio = 1.0;

  var PAD_FACTOR = 1.5; // add 50% to the computed range for padding
  var beta;
  
  var aspectUse = Math.max(aspectRatio, Math.min(1.0, lngSpan / latSpan));
  var alpha = (45.0 / (aspectUse + 0.4) - 2.0) * DEGREES; // computed experimentally;
  
  // create LookAt using distance formula
  if (lngSpan > latSpan) {
    // polygon is wide
    beta = Math.min(90 * DEGREES, alpha + lngSpan / 2 / EARTH_RADIUS);
  } else {
    // polygon is taller
    beta = Math.min(90 * DEGREES, alpha + latSpan / 2 / EARTH_RADIUS);
  }

  range = PAD_FACTOR * EARTH_RADIUS * (Math.sin(beta) *
    Math.sqrt(1 / Math.pow(Math.tan(alpha),2) + 1) - 1);
  
  var la = pluginInstance.createLookAt('');
  la.set(center.lat, center.lon, 0,
         pluginInstance.ALTITUDE_RELATIVE_TO_GROUND, 0, 0, range);
  return la;
}