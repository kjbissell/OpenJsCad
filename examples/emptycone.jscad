 function main(params) {
 var cone = CSG.cylinder (
    params.length,
    params.c1,
    params.c2,
    params.i1,
    params.i2
  )};

function getParameterDefinitions() {
  return [
    { name: 'length', caption: 'Arm Length:', type: 'float', default: 10 },
    { name: 'c1', caption: 'Circumference #1:', type: 'float', default: 2 },
    { name: 'c2', caption: 'Circumference #2:', type: 'float', default: 4 },
    { name: 'i1', caption: 'Inside Circumference #1 (empty):', type: 'float', default: 3.5 },
    { name: 'i2', caption: 'Inside Circumference #2 (empty):', type: 'float', default: 1 },
    
  ];
}
{

({start: [0,0,0], end: [0,length,0], radiusStart:4, radiusEnd:2, resolution: 16});
var inside = CSG.cylinder({start: [0,0,0], end: [0,9,0], radiusStart:3.5,radiusEnd:1, resolution: 16});
cone = cone.subtract(inside);
return cone;
}

