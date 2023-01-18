const net = require("net");
const { connect } = require('./client'); // works as varaible name match keys - see connection module (W2D3)
const { setupInput } = require('./input.js');



console.log("Connecting ...");
setupInput(connect());