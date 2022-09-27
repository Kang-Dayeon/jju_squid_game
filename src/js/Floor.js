import { Mesh } from 'three';
import { cm1, geo, mat } from './common';
import { Stuff } from './Stuff';

export class Floor extends Stuff {
  constructor(info) {
    // 부모클레스 불러오기
    super(info);

    this.geometry = geo.floor;
    this.material = mat.floor;

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.receiveShadow = true;

    cm1.scene.add(this.mesh);
  }
}