import { clipPolygonByHalfPlane } from '../../domain/geometry.js';

export function buildFeasiblePolygon(constraints, maxX = 100, maxY = 100) {
    let polygon = [{ x: 0, y: 0 }, { x: maxX, y: 0 }, { x: maxX, y: maxY }, { x: 0, y: maxY }];
    for (const constraint of constraints) {
        if (constraint.op !== '<=') continue;
        polygon = clipPolygonByHalfPlane(polygon, constraint.coeffs[0] || 0, constraint.coeffs[1] || 0, constraint.rhs || 0);
    }
    return polygon;
}
