import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { MeshStandardMaterial, Object3D, Mesh, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  
  @Input() 
  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);
  }

  #color = '';

  freidoraMaterial: MeshStandardMaterial | undefined;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {}

  freidora$ = this.gltfLoaderService.load('assets/freidora.glb');

  freidoraLoaded(object: Object3D) {
    this.freidoraMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
    this.applyColorToMaterial(this.#color);
  }
  

  ngOnInit() {
    
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    const orbitControls = controls.controls;
    orbitControls.enableZoom = true;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 4;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 5;
    camera.position.setY(2);
  }

  applyColorToMaterial(color: string) {
    if (this.freidoraMaterial) {
      this.freidoraMaterial.color.setHex(parseInt(color.substring(1), 16));
    }
  }

}