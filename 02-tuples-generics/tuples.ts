type ThreeDCoordinate = [x: number, y: number, z: number]

function addThreeDCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
) {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
}

console.log( addThreeDCoordinate([20, 100, 3], [34, 88, 4]) )