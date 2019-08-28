import img from "./assets/images/4.jpg"
export default {

    click(e, gl, canvas, g_points, g_Colors, a_PointSize, a_Position, u_FragColor) {
        let x = e.clientX;
        let y = e.clientY;
        let rect = e.target.getBoundingClientRect();
        x = ((x - rect.left) - canvas.width / 2) / (canvas.width / 2)
        y = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);
        g_points.push([x, y]);
        if (x >= 0.0 && y >= 0.0) {
            g_Colors.push([1.0, 0.0, 0.0, 1.0]) //第一象限
        } else if (x < 0.0 && y < 0.0) {
            g_Colors.push([0.0, 1.0, 0.0, 1.0]) //第三象限
        } else {
            g_Colors.push([1.0, 1.0, 1.0, 1.0])
        }
        gl.clear(gl.COLOR_BUFFER_BIT)
        let length = g_points.length;
        for (let i = 0; i < length; i++) {
            let xy = g_points[i];
            let rgba = g_Colors[i];
            gl.vertexAttrib4f(a_Position, xy[0], xy[1], 0.0, 1.0)
            gl.vertexAttrib1f(a_PointSize, 10.0)
            gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3])
            gl.drawArrays(gl.POINTS, 0, 1)
        }
    },
    initVertexBuffers(gl) {
        var vertices = new Float32Array([-0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, -0.5]);
        var n = 4;
        //创建缓冲区对象
        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            return -1;
        }
        //绑定缓冲区
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
        //缓冲区写入数据
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
        //激活attribute变量
        gl.enableVertexAttribArray(a_Position);
        return n;
    },
    initMultiVertexBuffers(gl) {
        var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
        var n = 3;
        var sizes = new Float32Array([10.0, 20.0, 30.0])
        //创建缓冲区对象
        var vertexBuffer = gl.createBuffer();
        var sizeBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            return -1;
        }
        //绑定缓冲区
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
        //缓冲区写入数据
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
        var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
        //激活attribute变量
        gl.enableVertexAttribArray(a_Position);

        //绑定缓冲区
        gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer)
        //缓冲区写入数据
        gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW)
        var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, 0, 0)
        //激活attribute变量
        gl.enableVertexAttribArray(a_PointSize);

        return n;
    },
    initMultiVertexBuffers2(gl) {
        var verticesColors = new Float32Array([0.0, 0.5, 1.0, 0.0, 0.0, 10.0,
            -0.5, -0.5, 0.0, 1.0, 1.0, 20.0,
            0.5, -0.5, 0.0, 0.0, 1.0, 30.0
        ]);
        var n = 3;
        var sizes = new Float32Array([10.0, 20.0, 30.0])
        //创建缓冲区对象
        var vertexColorBuffer = gl.createBuffer();
        // var vertexBuffer = gl.createBuffer();
        // var sizeBuffer = gl.createBuffer();
        // if (!vertexBuffer) {
        //     return -1;
        // }
        //绑定缓冲区
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer)
        //缓冲区写入数据
        gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW)
        var FSIZE = verticesColors.BYTES_PER_ELEMENT;
        var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 6, 0)
        //激活attribute变量
        gl.enableVertexAttribArray(a_Position);
        var a_Color = gl.getAttribLocation(gl.program, 'a_Color')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_Color, 1, gl.FLOAT, false, FSIZE * 6, FSIZE * 2)
        //激活attribute变量
        gl.enableVertexAttribArray(a_Color);
        var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_PointSize, 1, gl.FLOAT, false, FSIZE * 6, FSIZE * 5)
        //激活attribute变量
        gl.enableVertexAttribArray(a_PointSize);
        return n;
    },
    //纹理填充
    initMultiVertexBuffersSampler(gl) {
        var verticesTexCoords = new Float32Array([-0.5, 0.5, 0.0, 1.0,
            -0.5, -0.5, 0.0, 0.0,
            0.5, 0.5, 1.0, 1.0,
            0.5, -0.5, 1.0, 0.0
        ]);
        var n = 4;
        //创建缓冲区对象
        var vertexTexCoordBuffer = gl.createBuffer();
        //绑定缓冲区
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer)
        //缓冲区写入数据
        gl.bufferData(gl.ARRAY_BUFFER, verticesTexCoords, gl.STATIC_DRAW)
        var FSIZE = verticesTexCoords.BYTES_PER_ELEMENT;
        var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0)
        //激活attribute变量
        gl.enableVertexAttribArray(a_Position);

        var a_TexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_TexCoord, 1, gl.FLOAT, false, FSIZE * 4, FSIZE * 2)
        //激活attribute变量
        gl.enableVertexAttribArray(a_TexCoord);

        return n;
    },
    initTextures(gl, n) {
        var texture = gl.createTexture(); //创建纹理对象
        var u_Sampler = gl.getUniformLocation(gl.program, 'u_Sampler');
        var image = new Image();
        var loadTexture = function (gl, n, texture, u_Sampler, image) {
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1) //纹理图Y轴翻转
            gl.activeTexture(gl.TEXTURE0) //激活0号纹理单元
            gl.bindTexture(gl.TEXTURE_2D, texture) //向target绑定纹理对象
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR) //配置纹理参数
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image) //从片元着色器中获取纹理像素颜色
            gl.uniform1i(u_Sampler, 0); //纹理单元传给片元着色器
            gl.clear(gl.COLOR_BUFFER_BIT)
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, n)

        }
        image.onload = function () {

            loadTexture(gl, n, texture, u_Sampler, image);

        };
        image.src = img;
        return true;


    },
    initVertexBuffers3D(gl) {
        // var verticesColors = new Float32Array([
        //     0.5, 0.5, -0.4, 0.4, 1.0, 0.4,
        //     -0.5, -0.5, -0.4, 0.4, 1.0, 0.4,
        //     0.5, -0.5, -0.4, 1.0, 0.4, 0.4,
        //     0.5, 0.4, -0.2, 1.0, 0.4, 0.4,
        //     -0.5, 0.4, -0.2, 1.0, 1.0, 0.4,
        //     0.0, -0.6, -0.2, 1.0, 1.0, 0.4,
        //     0.0, 0.5, 0.0, 0.4, 0.4, 1.0,
        //     -0.5, -0.5, 0.0, 0.4, 0.4, 1.0,
        //     0.5, -0.5, 0.0, 1.0, 0.4, 0.4
        // ]);
        // var n=9;
        var verticesColors = new Float32Array([
            0.75, 1.0, -4.0, 0.4, 1.0, 0.4,
            0.25, -1.0, -4.0, 0.4, 1.0, 0.4,
            1.25, -1.0, -4.0, 1.0, 0.4, 0.4,

            0.75, 1.0, -2.0, 1.0, 1.0, 0.4,
            0.25, -1.0, -2.0, 1.0, 1.0, 0.4,
            1.25, -1.0, -2.0, 1.0, 0.4, 0.4,

            0.75, 1.0, 0.0, 0.4, 0.4, 1.0,
            0.25, -1.0, 0.0, 0.4, 0.4, 1.0,
            1.25, -1.0, 0.0, 1.0, 0.4, 0.4,
 

            -0.75, 1.0, -4.0, 0.4, 1.0, 0.4,
            -1.25, -1.0, -4.0, 1.0, 0.4, 0.4,
            -0.25, -1.0, -4.0, 0.4, 1.0, 0.4,
    

            -0.75, 1.0, -2.0, 1.0, 1.0, 0.4,
            -1.25, -1.0, -2.0, 1.0, 1.0, 0.4,
            -0.25, -1.0, -2.0, 1.0, 0.4, 0.4,
 

            -0.75, 1.0, 0.0,0.4, 0.4, 1.0,
            -1.25, -1.0, 0.0, 0.4, 0.4, 1.0,
            -0.25, -1.0, 0.0, 1.0, 0.4, 0.4,
      

            // 0.5, 0.4, -0.2, 1.0, 0.4, 0.4,
            // -0.5, 0.4, -0.2, 1.0, 1.0, 0.4,
            // 0.0, -0.6, -0.2, 1.0, 1.0, 0.4,
            // 0.0, 0.5, 0.0, 0.4, 0.4, 1.0,
            // -0.5, -0.5, 0.0, 0.4, 0.4, 1.0,
            // 0.5, -0.5, 0.0, 1.0, 0.4, 0.4
        ]);
        var n = 18;
        var vertexColorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,vertexColorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,verticesColors,gl.STATIC_DRAW);
        var FSIZE = verticesColors.BYTES_PER_ELEMENT;
        var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0)
        //激活attribute变量
        gl.enableVertexAttribArray(a_Position);
        var a_Color = gl.getAttribLocation(gl.program, 'a_Color')
        //分配缓冲区对象给a_Position（缓冲区对象的引用或指针）
        gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3)
        //激活attribute变量
        gl.enableVertexAttribArray(a_Color);
        return n;
    }


}