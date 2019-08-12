<template>
    <canvas id="webgl" style="width:400px;height:400px;"></canvas>
</template>

<script>
    export default {
        data() {
            return {

            }

        },
        mounted() {
this.main();
        },
        methods: {
            main() {
                var canvas = document.getElementById('webgl');
                var gl = canvas.getWebGLContext(canvas);
                if(!gl){
                    console.log("no WebGL")
                }
                gl.clearColor(1.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT)
            }
        }
    }
</script>

<style>

</style>