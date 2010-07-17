(function() {
  // modified base64 for url
  // http://en.wikipedia.org/wiki/Base64
  var ALPHABET_ =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  var WRAP_FAVOR_MAX = 1;
  var WRAP_FAVOR_MIN = 0;
  
  function wrap_(minValue, maxValue, value, favor) {
    if (typeof(favor) == 'undefined')
      favor = WRAP_FAVOR_MAX;
    
    // Don't wrap minValue as maxValue.
    if (value === minValue)
      return minValue;

    // Normalize to min = 0.
    value -= minValue;

    value = value % (maxValue - minValue);
    if (value < 0)
      value += (maxValue - minValue);

    // Reverse normalization.
    value += minValue;

    // When ambiguous (min or max), favor either max or min.
    return (value === minValue)
        ? ((favor == WRAP_FAVOR_MAX) ? maxValue : minValue)
        : value;
  }


  function constrain_(minValue, maxValue, value) {
    return Math.max(minValue, Math.min(maxValue, value));
  }
  
  // Encode a signed number in the encode format.
  function encodeSignedNumber_(num) {
    var sgn_num = num << 1;

    if (num < 0) {
      sgn_num = ~(sgn_num);
    }

    var encodeString = "";

    while (sgn_num >= 0x20) {
      encodeString += ALPHABET_.charAt(0x20 | (sgn_num & 0x1f));
      sgn_num >>= 5;
    }

    encodeString += ALPHABET_.charAt(sgn_num);
    return encodeString;
  }
  
  function encodeArray_(a) {
    var s = '';
    for (var i = 0; i < a.length; i++) {
      s += encodeSignedNumber_(a[i]);
    }

    return s;
  }
  
  function decodeArray_(encoded) {
    var len = encoded.length;
    var index = 0;
    var array = [];

    while (index < len) {
      var b;
      var shift = 0;
      var result = 0;
      do {
        b = ALPHABET_.indexOf(encoded.charAt(index++));
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);

      array.push(((result & 1) ? ~(result >> 1) : (result >> 1)));
    }

    return array;
  }
  
  var ENC_OVERFLOW_ = 1073741824;
  
  window.encodeCamera = function(cam) {
    var alt = Math.floor(cam.altitude * 1e1);
    return encodeArray_([
      Math.floor(constrain_(-90, 90, cam.lat) * 1e5),
      Math.floor(wrap_(-180, 180, cam.lng) * 1e5),
      Math.floor(alt / ENC_OVERFLOW_),
      (alt >= 0) ? alt % ENC_OVERFLOW_ :
                   (ENC_OVERFLOW_ - Math.abs(alt) % ENC_OVERFLOW_),
      Math.floor(wrap_(0, 360, cam.heading, WRAP_FAVOR_MIN) * 1e1),
      Math.floor(wrap_(0, 180, cam.tilt, WRAP_FAVOR_MIN) * 1e1),
      Math.floor(wrap_(-180, 180, cam.roll) * 1e1)
    ]);
  };

  window.decodeCamera = function(s) {
    var arr = decodeArray_(s);
    return {
      lat: constrain_(-90, 90, arr[0] * 1e-5),
      lng: wrap_(-180, 180, arr[1] * 1e-5),
      altitude: (ENC_OVERFLOW_ * arr[2] + arr[3]) * 1e-1,
      heading: wrap_(0, 360, arr[4] * 1e-1),
      tilt: wrap_(0, 180, arr[5] * 1e-1),
      roll: wrap_(-180, 180, arr[6] * 1e-1)
    };
  };
  
  window.serializeView = function(pluginInstance) {
    var camera = pluginInstance.getView().copyAsCamera(
        pluginInstance.ALTITUDE_ABSOLUTE);
    return '0' + encodeCamera({
      lat: camera.getLatitude(),
      lng: camera.getLongitude(),
      altitude: camera.getAltitude(),
      heading: camera.getHeading(),
      tilt: camera.getTilt(),
      roll: camera.getRoll() });
  };

  window.deserializeView = function(pluginInstance, s) {
    if (s.charAt(0) != '0') // 'magic number'
      throw new Error('Invalid serialized view string.');

    var cameraProps = decodeCamera(s.substr(1));
    var camera = pluginInstance.createCamera('');
    
    // TODO: isFinite checks
    camera.set(cameraProps.lat, cameraProps.lng, cameraProps.altitude,
        pluginInstance.ALTITUDE_ABSOLUTE, cameraProps.heading,
        cameraProps.tilt, cameraProps.roll);
    pluginInstance.getView().setAbstractView(camera);
  };
}());