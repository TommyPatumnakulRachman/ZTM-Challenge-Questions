function convertColor(color) {
    // check if color is in HEX format
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
      let hex = color.substring(1).split('');
      if (hex.length == 3) {
        hex = [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]];
      }
      let rgb = parseInt(hex.join(''), 16);
      return 'rgb(' + (rgb >> 16) + ', ' + (rgb >> 8 & 255) + ', ' + (rgb & 255) + ')';
    }
    // check if color is in RGB format
    else if (/^(rgb|RGB)\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(color)) {
      let rgb = color.replace(/(?:rgb|RGB)\(|\s+|\)/g, '').split(',');
      let hex = '#';
      for (let i = 0; i < 3; i++) {
        hex += ('0' + parseInt(rgb[i]).toString(16)).slice(-2);
      }
      return hex;
    }
    // if color is in neither format, return null
    else {
      return null;
    }
  }
  
  // convert HEX to RGB
console.log(convertColor('#ff0000')); // output: 'rgb(255, 0, 0)'

// convert RGB to HEX
console.log(convertColor('rgb(0, 255, 0)')); // output: '#00ff00'

// convert invalid color
console.log(convertColor('invalid color')); // output: null
