<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three'
    import {line} from '$lib/three/line'
    import {cube} from '$lib/three/cube'
    import {wing} from '$lib/three/wing'
    import {OrbitControls} from '$lib/three/OrbitControls'
    import { sideView, topView, backView } from '$lib/three/orthoCam';
  let canvas, renderer, scene, camera, controls, light, ready
  let inputs = {
    assiette: {value:6, min:5, max:7, step:0.01},
  }

  onMount(() => {
      init()
      //animate()
    })

  const init = ()=>{

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
    //renderer.shadowMap.enabled = true;
    //renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setSize( window.innerWidth/1, window.innerHeight/1 );
    
    // Scene
    scene = new THREE.Scene();

    // Light
    //Create a DirectionalLight and turn on shadows for the light
    light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 5, 2, 8 ); //default; light shining from top
    light.castShadow = true; // default false
    scene.add( light );
    const ambiant = new THREE.AmbientLight( 0x808080 ); // soft white light
    scene.add( ambiant );

    // Camera
  /*   camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    controls = new OrbitControls( camera, renderer.domElement );
    camera.position.set( 0, 2, 8 ); */
    camera = backView(canvas)
    scene.add( camera );

    // Coordinates
    scene.add(line({}, {x:1000}, 'red'))
    scene.add(line({}, {y:1000}, 'green'))
    scene.add(line({}, {z:1000}, 'blue'))
    
    drawBackground({grid:true, fog:false, color:0xa0a0a0})
    scene.add(cube())
    scene.add(wing())
    //scene.add(line({x:-100,y:5.9,z:0}, {x:100,y:5.9,z:0}, 'red'))
 
    renderer.render( scene, camera )
    ready = true
  }


  const drawBackground = ({grid = true,  fog= true, color=0xa0a0a0} = {})=>{
    scene.background = new THREE.Color( color );
    if (fog) {
      scene.fog = new THREE.Fog( color, 70, 100 );
    }

    // Grid
    if (grid) {
      const gridElement = new THREE.GridHelper( 500, 100, 0x000000, 0x000000 );
      gridElement.position.y = 0;
      gridElement.material.opacity = 0.2;
      gridElement.material.transparent = true;
      scene.add( gridElement );
    }
  }







  
  function animate() {
    //requestAnimationFrame( animate );

    wing.rotation.z = inputs.assiette.value
    //controls.update();

    renderer.render( scene, camera );
  };

  
</script>

<div class="controls">
  {#each Object.keys(inputs) as key}
    {key} : {inputs[key].value}<br>
    <input type="range" bind:value={inputs[key].value} min={inputs[key].min} max={inputs[key].max} step={inputs[key].step}><br>
  {/each}
</div>
<canvas bind:this={canvas}></canvas>

<style>
  canvas{
    background-color: red;
  }
  .controls{
    position: absolute;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.4);
  }
</style>