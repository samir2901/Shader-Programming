#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = (gl_FragCoord.xy / u_resolution.xy);
    float color = 0.0;
    
    color += sin(coord.x * 6.0 + sin(u_time + coord.y * 90.0 + cos(coord.x * 30.0 + u_time * 2.0))) * 0.5;
    color += cos(coord.x * 6.0 + cos(u_time + coord.y * 90.0 + sin(coord.x * 30.0 + u_time * 2.0))) * 0.5;

    gl_FragColor = vec4(color + sin(u_time + 10.0), color + cos(u_time - 200.0), color + sin(u_time + 30.0) , 1.0 + sin(u_time + 90.0));
}