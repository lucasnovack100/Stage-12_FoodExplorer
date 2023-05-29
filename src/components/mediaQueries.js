export const breakPoints = {
  sm: 425,
  md: 768,
  lg: 1024,
}

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakPoints[key]}px) {${style}}`;
}