#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    vec2 translate = vec2(-0.5);
    coord += translate;

    color.r += abs(0.1 + length(coord) - 0.6 * abs(sin(u_time/12.0 * 0.9)));
    color.g += abs(0.1 + length(coord) - 0.6 * abs(sin(u_time/4.0 * 0.6)));
    color.b += abs(0.1 + length(coord) - 0.6 * abs(sin(u_time/9.0 * 0.3)));

    gl_FragColor = vec4(0.01/color, 1.0);
}