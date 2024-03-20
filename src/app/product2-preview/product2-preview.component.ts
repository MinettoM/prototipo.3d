import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { MeshStandardMaterial, Object3D, Mesh, PerspectiveCamera, Vector3 } from 'three';

@Component({
  selector: 'app-product2-preview',
  templateUrl: './product2-preview.component.html',
  styleUrls: ['./product2-preview.component.scss']
})
export class Product2PreviewComponent implements OnInit {
  
  @Input() 
  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);
  }

  #color = '';

  cupMaterial: MeshStandardMaterial | undefined;
  cerverusMaterial: MeshStandardMaterial | undefined;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  hospital$ = this.gltfLoaderService.load('assets/kidman_room.glb');

  hospitalLoaded(object: Object3D) {
    this.cerverusMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
  }

  ngOnInit() {
    
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = true;
    orbitControls.autoRotate = false;
    orbitControls.autoRotateSpeed = 5;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 1;

    // Establecer la posición y mirar hacia un punto específico
    const position = new Vector3(1, 3, -2); // Coordenadas (x, y, z)

    camera.position.copy(position);
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
    }
  }

}
