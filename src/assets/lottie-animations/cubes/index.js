import animInit from './anim-Init.json';
import anim01 from './anim-0-1.json';
import anim02 from './anim-0-2.json';
import anim10 from './anim-1-0.json';
import anim12 from './anim-1-2.json';
import anim20 from './anim-2-0.json';
import anim21 from './anim-2-1.json';

// To add a new one, insert a new object in 'animations'
// under a new key constructed by two integers,
// the first one is the tab index we are currently sitting on
// the second one is the tab index we want to animate to
// import the json (exported through Bodymovin plugin in After Effects)
// and add it to the new object under the 'data' key, and its velocity
// under the 'speed' key, 1 beeing normal speed an 2 twice the speed, etc.

const animations = {
  '-10': {data: animInit, speed: 3.5},
  '01': {data: anim01, speed: 1},
  '02': {data: anim02, speed: 1},
  '10': {data: anim10, speed: 1},
  '12': {data: anim12, speed: 1},
  '21': {data: anim21, speed: 1},
  '20': {data: anim20, speed: 1}
};

export function getAnimationKeys() {
  return Object.keys(animations);
}

export function getAnimation(key) {
  return animations[key];
}