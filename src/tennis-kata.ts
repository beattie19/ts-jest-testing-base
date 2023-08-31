export const getResult = (points: [number, number][]) => {
    if (points.length === 0) {
        return 'love - love';
    }
    return `${transformTennisScore(points[0][0])} - ${transformTennisScore(points[0][1])}`;
}

const transformTennisScore = (numPoints: number) => {
   switch (numPoints) {
    case 0:
        return 'love';
        
    case 1:
      return '15';
    case 2:
        return '30';
    
    case 3:
        return '40';

   }
}
