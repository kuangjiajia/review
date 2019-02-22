import Component from './component'
import createElement from './createElement'
import {
  forEach,
  map,
  count
} from './children';

const R = {
  Children: {
    map,
    forEach,
    count
  },
  Component,
  createElement,
  createContext
}

export default R