export const outboundRE = /^[a-z]+:/i

export function isExternal(url) {
  return outboundRE.test(url)
}
