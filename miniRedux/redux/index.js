const createStore = require("./createStore")
const combineReducers = require("./combineReducers")
const applyMiddlewares = require("./applyMiddlewares")
const bindActionCreators = require("./bindActionCreators")

module.exports = {
  createStore,
  combineReducers,
  applyMiddlewares,
  bindActionCreators
}