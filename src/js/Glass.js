import { Mesh } from 'three';
import { cm1, geo, mat } from './common';
import { Stuff } from './Stuff';

export class Glass extends Stuff {
  constructor(info) {
    // 부모클레스 불러오기
    super(info);

    this.type = info.type;

    this.geometry = geo.glass;

    switch(this.type){
        case 'normal':
            this.material = mat.glass1;
            break;
        case 'strong':
            this.material = mat.glass2;
            break;
    }

    

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.name = this.name;
    cm1.scene.add(this.mesh);
  }
}