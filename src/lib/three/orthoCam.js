import { OrthographicCamera } from "three"

export const orthoCam = (canvas, zoom = 20, near = -1000, far = 1000) => {
  if (!canvas) alert("Pas de canvas dans orthoCam")
  const aspectRatio = canvas.width / canvas.height
  const left = (-aspectRatio * zoom) / 2
  const right = (aspectRatio * zoom) / 2
  const top = zoom / 2
  const bottom = -zoom / 2
  const camera = new OrthographicCamera(left, right, top, bottom, near, far)
  return camera
}

export const sideView = (canvas, zoom = 20) => {
  const camera = orthoCam(canvas, zoom)
  camera.rotation.y = (1 * Math.PI) / 2
  return camera
}
export const topView = (canvas, zoom = 20) => {
  const camera = orthoCam(canvas)
  camera.rotation.x = (3 * Math.PI) / 2
  camera.rotation.z = (2 * Math.PI) / 2
  return camera
}
export const backView = (canvas, zoom = 20) => {
  const camera = orthoCam(canvas)
  camera.rotation.y = (2 * Math.PI) / 2
  return camera
}
