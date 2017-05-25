## React VR 中文字体处理

### 下载字体

- 将 https://github.com/liyuechun/react_vr_demo/tree/master/font-demo1/static_assets/fonts 文件夹中的字体，然后将fonts文件夹拖拽到你项目中的static_assets文件夹中。
- 将 https://github.com/liyuechun/react_vr_demo/tree/master/font-demo1/inputs 文件夹拖拽到项目根目录下。
- 将下面的代码替换掉你`vr/client.js`中的代码。

```js
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

```

### 将hello修改成“21点见”
PS:21点见 是我们研发的一小时内容直播平台。
欢迎扫码看看：

![二维码](http://ooqqekwlc.bkt.clouddn.com/ershiyi_dj.png)

### 设置单独的字体
将下面的代码替换掉`vr/client.js`文件中的代码：

```js
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
  OVRUI.loadFont(
    '../static_assets/fonts/cjk_1.fnt',
    '../static_assets/fonts/cjk_1_sdf.png'
  ).then((font) => {
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
  });
}

window.ReactVR = {
  init
};
```

### 将hello修改成“21点见”
PS:21点见 是我们研发的一小时内容直播平台。
欢迎扫码看看：

![二维码](http://ooqqekwlc.bkt.clouddn.com/ershiyi_dj.png)


