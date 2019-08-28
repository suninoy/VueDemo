<template>
    <canvas id="webgl" width="400" height="400" style="width:400px;height:400px;"></canvas>
</template>

<script>

    export default {

        data() {
            return {
                //顶点着色器
                VSHADER_SOURCE: "attribute vec4 a_Position;\n" +
                    "attribute vec4 a_Color;\n" +
                    "uniform mat4 u_ViewMatrix;\n" +
                    "uniform mat4 u_ProjMatrix;\n" +
                    "varying vec4 v_Color;\n" +
                    "void main() {\n " +
                    //设置坐标
                    "gl_Position =u_ProjMatrix*u_ViewMatrix*a_Position;\n " +
                    "v_Color = a_Color;\n " +
                    "}\n ",
                //片元着色器
                FSHADER_SOURCE: "precision mediump float;\n" +
                    "varying vec4 v_Color;\n" +
                    "void main() {\n " +
                    //设置颜色
                    "gl_FragColor =v_Color;\n " +
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
                g_Colors: [],
                g_eyeX:0.0,
                g_eyeY:0.0,
                g_eyeZ:5.0,
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
                var n = _this.webglInterface.initVertexBuffers3D(gl);

                if (n < 0) {
                    console.log("failed to set the position of the vertices")
                    return;
                }

                //获取变量存储位置
                var u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix')
                var u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix')
                var viewMatrix = new this.Matrix4();
                var projMatrix = new this.Matrix4()
                // projMatrix.setOrtho(-1.0,1.0,-1.0,1.0,0.0,2.0);
                projMatrix.setPerspective(30,canvas.width/canvas.height,1,100);              
                gl.uniformMatrix4fv(u_ProjMatrix, false, projMatrix.elements)
                //创建视图矩阵
               // viewMatrix.lookAt(0.20, 0.25, 0.25, 0, 0, 0, 0, 1, 0)
                document.onkeydown = function (ev) {
                
                    _this.keydown(ev, gl, n, u_ViewMatrix, viewMatrix)
                }
                this.draw(gl, n, u_ViewMatrix, viewMatrix)
                //视图矩阵传给uniform
                // gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements)
                // gl.clear(gl.COLOR_BUFFER_BIT)
                // gl.drawArrays(gl.TRIANGLES, 0, n)
                // var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor')
                // gl.vertexAttrib1f(a_PointSize, 10.0)
                // gl.uniform4f(u_FragColor,1.0,0.0,0.0,1.0)
                // gl.clear(gl.COLOR_BUFFER_BIT)
                // 
                // canvas.onmousedown = function (ev) {
                //    _this.webglInterface.click(ev, gl, canvas,_this.g_points,_this.g_Colors,a_PointSize, a_Position, u_FragColor)
                // }
            },
            keydown(ev, gl, n, u_ViewMatrix, viewMatrix) {
                if (ev.keyCode == 37) {
                    this.g_eyeX += 0.01;
                } else if (ev.keyCode == 39) {
                    this.g_eyeX -= 0.01;
                } else if (ev.keyCode == 38) {
                    this.g_eyeY += 0.01;
                } else if (ev.keyCode == 40) {
                    this.g_eyeY -= 0.01;
                } else {
                    return;
                }
                this.draw(gl, n, u_ViewMatrix, viewMatrix)
            },
            draw(gl, n, u_ViewMatrix, viewMatrix) {
                viewMatrix.lookAt(this.g_eyeX, this.g_eyeY, this.g_eyeZ, 0, 0, 0, 0, 1, 0)
                gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements)
                gl.enable(gl.DEPTH_TEST)
                gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)
                gl.drawArrays(gl.TRIANGLES, 0, n)
            }
        }
    }
</script>

<style>

</style>