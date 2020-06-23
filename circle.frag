#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv -= 0.5;
    uv *= u_resolution.x / u_resolution.y;
    float d = length(uv);
    float radius = 0.3;
    float c = smoothstep(radius, radius-0.004, d);   
    gl_FragColor = vec4(vec3(c), 1);   
}