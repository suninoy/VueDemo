<template>
    <canvas id="webgl" style="width:800px;height:800px;"></canvas>
</template>

<script>
    export default {

        data() {
            return {
                //顶点着色器
                VSHADER_SOURCE: "attribute vec4 a_Position;\n" +
                    "attribute vec2 a_TexCoord;\n" +
                    "varying vec2 v_TexCoord;\n" +
                    "void main() {\n " +
                    //设置坐标
                    "gl_Position =a_Position;\n " +
                    //纹理坐标
                    "v_TexCoord = a_TexCoord;\n " +
                    "}\n ",
                //片元着色器
                FSHADER_SOURCE: "precision mediump float;\n" +
                    "uniform sampler2D u_Sampler;\n" +
                    "varying vec2 v_TexCoord;\n" +
                    "void main() {\n " +
                    //设置颜色
                    "gl_FragColor = texture2D(u_Sampler,v_TexCoord);\n " +
                    "} ",
                // //顶点着色器
                // VSHADER_SOURCE: "attribute vec4 a_Position;\n" +
                //     "attribute float a_PointSize;\n" +
                //     "attribute vec4 a_Color;\n" +
                //     "varying vec4 v_Color;\n" +
                //     "void main() {\n " +
                //     //设置坐标
                //     "gl_Position =a_Position;\n " +
                //     //设置尺寸
                //     "gl_PointSize = a_PointSize;\n " +
                //     "v_Color = a_Color;\n " +
                //     "}\n ",
                // //片元着色器
                // FSHADER_SOURCE: "precision mediump float;\n" +
                //     //"uniform vec4 u_FragColor;\n" +
                //     "varying vec4 v_Color;\n" +
                //     "void main() {\n " +
                //     //设置颜色
                //     "gl_FragColor = v_Color;\n " +
                //     "} ",
                //保存每次点击的点坐标
                g_points: [],
                g_Colors: []
            }

        },
        mounted() {
            this.main();
        },
        methods: {
            main() {
                let _this = this;
                var canvas = document.getElementById('webgl');
                var gl = this.utils.getWebGLContext(canvas);
                if (!gl) {
                    console.log("no WebGL")
                    return;
                }
                if (!this.utils.initShaders(gl, this.VSHADER_SOURCE, this.FSHADER_SOURCE)) {
                    console.log("no shaders")
                    return;
                };
                //var n = _this.webglInterface.initVertexBuffers(gl);
                var n = _this.webglInterface.initMultiVertexBuffersSampler(gl);

                if (!_this.webglInterface.initTextures(gl,n)) {
                    console.log("failed to set the position of the vertices")
                    return;
                }
                var matrix = new this.Matrix4()
                //获取变量存储位置
                var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
                var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
                // var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor')
               // gl.vertexAttrib1f(a_PointSize, 10.0)
                // gl.uniform4f(u_FragColor,1.0,0.0,0.0,1.0)
               // gl.clear(gl.COLOR_BUFFER_BIT)
               // gl.drawArrays(gl.TRIANGLES, 0, n)
                // canvas.onmousedown = function (ev) {
                //    _this.webglInterface.click(ev, gl, canvas,_this.g_points,_this.g_Colors,a_PointSize, a_Position, u_FragColor)
                // }
            }
        }
    }
</script>

<style>

</style>