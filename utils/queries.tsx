const breakpoints = {
    mobile_s: 320,
    mobile_m: 375,
    mobile_l: 425,

    tablet: 768,

    laptop: 1024,
    laptop_l: 1440,

    desktop: 1900,
    desktop_l: 2560,
}

export const queries = {
    mobile_l: `@media (min-width: ${breakpoints.mobile_l / 16}rem)`,
    tablet: `@media (min-width: ${breakpoints.tablet / 16}rem)`,
    laptop: `@media (min-width: ${breakpoints.laptop / 16}rem)`,
    desktop: `@media (min-width: ${breakpoints.desktop / 16}rem)`,
}