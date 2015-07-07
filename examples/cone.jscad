function main() {
var cone = CSG.cylinder({
  start: [0, -1, 0],
  end: [0, 9, 0],
  radiusStart: 2,
  radiusEnd: 6,
  resolution: 16        // optional
});
return cone;
}
