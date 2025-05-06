function checkResolution(width, height) {
  // Return "landscape" if width is greater than height
  // Return "portrait" if height is greater than or equal to width

  if (width > height ) {
    return "landscape";
  } else if (height < width) {
    return "portrait";
  }
}

module.exports = checkResolution;
