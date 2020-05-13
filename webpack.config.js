// module.exports = {
//     entry: './index.js',
//     output: {
//         filename: './bundle.js'
//     }
// } 

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist');
const SRC_DIR = path.join(__dirname, 'src');

const config = {
    entry: SRC_DIR+'/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
}

module.exports = config;