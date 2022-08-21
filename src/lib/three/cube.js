import { BoxGeometry, MeshPhongMaterial, Mesh } from "three"

export const cube = (
  { x = 0, y = 0, z = 0 } = {},
  { width = 1, height = 1, length = 1 } = {},
  color = "red",
  castShadow = false,
  receiveShadow = true
) => {
  const geometry = new BoxGeometry(width, height, length)
  const material = new MeshPhongMaterial({ color })
  const cube = new Mesh(geometry, material)
  cube.castShadow = castShadow
  cube.receiveShadow = receiveShadow
  cube.position.set(x, y, z)
  return cube
}
