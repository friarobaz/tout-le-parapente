import { LineBasicMaterial, Vector3, BufferGeometry, Line } from "three"

export const line = (a, b, color = "blue") => {
  const material = new LineBasicMaterial({ color })
  const points = []
  points.push(new Vector3(a.x, a.y, a.z))
  points.push(new Vector3(b.x, b.y, b.z))
  const geometry = new BufferGeometry().setFromPoints(points)
  return new Line(geometry, material)
}
