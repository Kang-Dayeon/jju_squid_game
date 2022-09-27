import {
  Scene,
  BoxGeometry,
  MeshPhongMaterial,
} from 'three';

export const cm1 = {
  canvas: document.querySelector('#three-canvas'),
  scene: new Scene()
};

export const cm2 = {
  backgroundColor: '#3e1322',
  lightColor: '#ffc9ac',
  pillarColor: '#071d28',
  floorColor: '#111'
};

export const geo = {
  floor: new BoxGeometry(200, 1, 200),
  pillar: new BoxGeometry(5, 10, 5),
}

export const mat = {
  floor: new MeshPhongMaterial({ color: cm2.floorColor }),
  pillar: new MeshPhongMaterial({ color: cm2.pillarColor })
}