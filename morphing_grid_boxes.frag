#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy * 1.0 - u_resolution;
    vec3 color = vec3(0.0);    
    color += sin(coord.y / 10.0) - cos(u_time);
    color += sin(coord.x / 10.0) - cos(u_time);
    gl_FragColor = vec4(color, 1.0);     
}