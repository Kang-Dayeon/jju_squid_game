import { Mesh } from 'three';
import { cm1, geo, mat } from './common';
import { Stuff } from './Stuff';

export class Pillar extends Stuff {
  constructor(info) {
    // 부모클레스 불러오기
    super(info);

    this.geometry = geo.pillar;
    this.material = mat.pillar;

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    cm1.scene.add(this.mesh);
  }
}