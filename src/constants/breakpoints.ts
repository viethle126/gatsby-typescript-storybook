const devices = {
  mobile: 320,
  mobileLarge: 412,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  widescreen: 2560,
}

export default {
  mobileOnly: `(max-width: ${devices.tablet - 1}px)`,
  mobileLarge: `(min-width: ${devices.mobileLarge}px)`,
  desktop: `(min-width: ${devices.tablet}px)`,
}
