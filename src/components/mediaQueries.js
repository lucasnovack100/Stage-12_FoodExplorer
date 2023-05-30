export const breakPoints = {
  sm: 425,
  md: 770,
  lg: 1025,
}

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakPoints[key]}px) {${style}}`;
}