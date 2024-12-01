function calculateDistance(point1, point2) {
    return Math.sqrt(
      Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
    );
  }
  
  function predictClass(classA, classB, k, newPoint) {
    const allPoints = [
      ...classA.map((point) => ({ ...point, label: 'A' })),
      ...classB.map((point) => ({ ...point, label: 'B' })),
    ];
  
    const distances = allPoints.map((point) => ({
      label: point.label,
      distance: calculateDistance(point, newPoint),
    }));
  
    distances.sort((a, b) => a.distance - b.distance);
  
    const nearestNeighbors = distances.slice(0, k);
  
    const counts = nearestNeighbors.reduce(
      (acc, neighbor) => {
        acc[neighbor.label] = (acc[neighbor.label] || 0) + 1;
        return acc;
      },
      { A: 0, B: 0 }
    );
  
    return counts.A > counts.B ? 'A' : 'B';
  }
  
  module.exports = { predictClass };
  