<template>
    <div id="canvas-frame" style="height:800px;width:100%"></div>
</template>

<script>
    export default {

        data() {
            return {
                scene: null,
                renderer: null,
                camera: null,
                count:0,
            }
        },
        mounted() {
            this.initThree();
            this.initCamera();
            this.initScene();
            this.initLight();
            this.initObject();
           // this.render();
            this.animation();
        },
        destroyed() {

        },
        methods: {

            initThree() {
                var width = document.getElementById('canvas-frame').clientWidth;
                var height = document.getElementById('canvas-frame').clientHeight;
                this.renderer = new this.three.WebGLRenderer({
                    antialias: true
                });
                this.renderer.setSize(width, height);
                document.getElementById('canvas-frame').appendChild(this.renderer.domElement);
                this.renderer.setClearColor(0xFFFFFF, 1.0);
                //                 stats = new Stats();
                // stats.domElement.style.position = 'absolute';
                // stats.domElement.style.left = '0px';
                // stats.domElement.style.top = '0px';
            },


            initCamera() {

                var width = document.getElementById('canvas-frame').clientWidth;
                var height = document.getElementById('canvas-frame').clientHeight;
                this.camera = new this.three.PerspectiveCamera(45, width / height, 1, 10000);
                this.camera.position.x = 0;
                this.camera.position.y = 1000;
                this.camera.position.z = 0;
                this.camera.up.x = 0;
                this.camera.up.y = 0;
                this.camera.up.z = 1;
                this.camera.lookAt({
                    x: 0,
                    y: 0,
                    z: 0
                });
            },


            initScene() {
                this.scene = new this.three.Scene();
            },


            initLight() {
                var light;
                light = new this.three.DirectionalLight(0xFF0000, 1.0, 0);
                light.position.set(100, 100, 200);
                this.scene.add(light);
            },


            initObject() {
                // var cube;
                // //定义几何体
                // var geometry = new this.three.Geometry();
                // // B begin
                // geometry.vertices.push(new this.three.Vector3(-500, 0, 0));
                // geometry.vertices.push(new this.three.Vector3(500, 0, 0));
                // for (var i = 0; i <= 20; i++) {

                //     var line = new this.three.Line(geometry, new this.three.LineBasicMaterial({
                //         color: 0x000000,
                //         opacity: 0.2
                //     }));
                //     line.position.z = (i * 50) - 500;
                //     this.scene.add(line);

                //     var line = new this.three.Line(geometry, new this.three.LineBasicMaterial({
                //         color: 0x000000,
                //         opacity: 0.2
                //     }));
                //     line.position.x = (i * 50) - 500;
                //     line.rotation.y = 90 * Math.PI / 180;
                //     this.scene.add(line);
                var geometry = new this.three.CylinderGeometry(100, 150, 400);
                var material = new this.three.MeshLambertMaterial({
                    color: 0xFFFF00
                });
                var mesh = new this.three.Mesh(geometry, material);
                //mesh.position = new this.three.Vector3(0, 0, 0);
                this.scene.add(mesh);

            },
            animation() {

                  // mesh.position.x-=1;

                this.camera.position.x = this.camera.position.x + 1;
                this.renderer.render(this.scene, this.camera);
                requestAnimationFrame(this.animation);
               // stats.update()
            },
            // render() {
            //     this.renderer.clear();
            //     this.renderer.render(this.scene, this.camera);
            //     requestAnimationFrame(this.render);
            // },



        }
    }
</script>
<style>
    canvas {
        width: 100%;
        height: 100%
    }
</style>