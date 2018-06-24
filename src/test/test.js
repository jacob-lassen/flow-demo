// @flow
const graph = require('../graph');
import type {point} from '../graph'; 
const R = require('rambda');
const fs = require('fs');

const pointOptions = {
    xCeiling: 800,
    yCeiling: 800,
};

const dataPoints = buildArray(randomDataPoint(pointOptions), 100);
fs.writeFileSync('./test.svg', graph(dataPoints, {height: 800, width: 800}), 'utf8');

function buildArray <T> (buildFn: (?number) => T, length: number): Array<T> {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(buildFn(i));
    }
    return array;
};

function randomDataPoint({xCeiling, yCeiling}: {xCeiling: number, yCeiling: number}) {
    return (): point => {
        return {
            x: Math.floor(Math.random() * xCeiling), 
            y: Math.floor(Math.random() * yCeiling),
        }
    }
};