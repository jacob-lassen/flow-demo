// @flow
const R = require('rambda');
export type point = {
    x: number,
    y: number,
}

type options = {
    width: ?number,
    height: ?number
}

const defaults = {
    height: 100,
    width: 100,
}

module.exports = function (dataPoints: Array<point>, options: ?options) {
    const settings = R.merge(defaults, options ? options : {});
    return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="${settings.height}" width="${settings.width}">
        ${dataPoints.reduce((acc, point) => `${acc}<circle cx="${point.x}" cy="${point.y}" r="2" fill="blue"/>`, '')}
    </svg>
    `
};