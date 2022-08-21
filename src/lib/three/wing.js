import {
  Group,
  TorusGeometry,
  BoxGeometry,
  Mesh,
  MeshPhongMaterial,
  DoubleSide,
  CapsuleGeometry,
} from "three"

export const wing = () => {
  const wing = new Group()

  wing.add(halfWing())
  //wing.add(halfWing().scale.z = -1)

  wing.rotation.y = Math.PI / 2
  return wing
}

const halfWing = () => {
  const halfWing = new Group()

  for (let i = 0; i < 3; i += 0.05) {
    tube(
      5 - (i * i) / 10,
      i,
      1 - (i * i) / 10,
      0.4 - (i * i) / 40,
      0.15 - i / 30,
      255 - (Math.floor((i * 240) / 5) + 15)
    )
  }

  //allongement
  halfWing.scale.x = 1
  //voute
  halfWing.scale.z = 1.5

  return halfWing
}

const tube = (x, z, y, length, radius, color) => {
  const tube = new Group()
  const geometry = new TorusGeometry(x, radius, 100, 50, length)
  const material = new MeshPhongMaterial({
    color: `rgb(${color},${color},${color})`,
    side: DoubleSide,
  })
  const torus = new Mesh(geometry, material)
  torus.rotation.z = 1.3
  torus.position.set(0, y, z)
  tube.add(torus)
  const geometry2 = new CapsuleGeometry(0.2 - z / 25, 0.2 - z / 25, 5, 20)
  const capsule = new Mesh(geometry2, material)
  capsule.position.set(5.6 - x * 1.25, 3.95 + y * 2, z)
  capsule.scale.y = 0.5
  tube.add(capsule)
  return tube
}

/* 
if (flip) halfWing.scale.z = -halfWing.scale.z

*/
