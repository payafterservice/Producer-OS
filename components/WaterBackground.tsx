
import React, { useEffect, useRef } from 'react';

const WaterBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vertexSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        float ratio = resolution.x / resolution.y;
        
        // Center of the screen
        vec2 center = vec2(0.5, 0.5);
        vec2 p = uv - center;
        p.x *= ratio;

        float dist = length(p);
        float t = time * 1.6;
        
        // Circular ripple equation
        float ripple1 = sin(dist * 18.0 - t);
        float ripple2 = sin(dist * 7.0 - t * 0.45 + 1.5);
        float ripple3 = sin(dist * 28.0 - t * 1.3 + 3.0);
        
        // Combine ripples and dampen
        float z = (ripple1 * 0.5 + ripple2 * 0.3 + ripple3 * 0.2);
        z *= exp(-dist * 1.1); 

        z = z * 0.5 + 0.5;
        
        // Vibrant Logo Blue palette
        // Dark Base: #000814
        // Logo Azure: #438AFE
        // Silver: #BCC6CC
        vec3 deepBlue = vec3(0.0, 0.03, 0.08);      // Deep dark base
        vec3 azureLogo = vec3(0.26, 0.54, 0.99);    // Vibrant Logo Blue (#438AFE)
        vec3 lightSilver = vec3(0.74, 0.78, 0.82);  // Metallic Silver highlight

        // Base color transition
        vec3 color = mix(deepBlue, azureLogo, smoothstep(0.0, 1.0, z));
        
        // Add metallic silver highlights on crests
        float crest = pow(z, 14.0);
        color = mix(color, lightSilver, crest * 0.6);

        // Center glow
        float glow = exp(-dist * 4.0) * 0.4;
        color += glow * azureLogo;

        // Subtle vignette
        float vignette = smoothstep(1.8, 0.3, dist);
        color *= vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
      }
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'time');
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    const render = (time: number) => {
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen"
      style={{ filter: 'blur(10px)' }}
    />
  );
};

export default WaterBackground;
