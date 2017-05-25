// Auto-generated content. This file contains the boilerplate to set up your
// React app. If you want to modify your application, start in "index.vr.js"
// Auto-generated content.
import {VRInstance} from 'react-vr-web';

import * as THREE from 'three';
import * as OVRUI from 'ovrui';

import ThreeDOFRayCaster from '../inputs/3dof/ThreeDOFRayCaster';

var fallbackFonts = {
  '../static_assets/fonts/cjk_0.fnt': '../static_assets/fonts/cjk_0_sdf.png',
  '../static_assets/fonts/cjk_1.fnt': '../static_assets/fonts/cjk_1_sdf.png',
  '../static_assets/fonts/cjk_2.fnt': '../static_assets/fonts/cjk_2_sdf.png'
};

var font = OVRUI.loadFont();
var count = 0;

function init(bundle, parent, options) {

  const scene = new THREE.Scene();

  function addFallback(fallbackFont) {
    OVRUI.addFontFallback(font, fallbackFont);
    count--;
    if (count === 0) {
      const vr = new VRInstance(bundle, 'react_demo', parent, {
        raycasters: [new ThreeDOFRayCaster(scene), new OVRUI.MouseRayCaster()],
        font: font,
        cursorVisibility: 'auto',
        scene: scene,
        ...options
      });
      vr.render = function () {
        // Any custom behavior you want to perform on each frame goes here
      };
      // Begin the animation loop
      vr.start();
      return vr;
    }
  }

  for (var key in fallbackFonts) {
    count++;
    OVRUI.loadFont(key,fallbackFonts[key]).then((fallbackFont) => {
      addFallback(fallbackFont);
    });
  }

}

window.ReactVR = {
  init
};
