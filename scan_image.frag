#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_tex0;

void main(){
    vec2 coord = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);
    vec4 image = texture2D(u_tex0,coord);  
    float size = 60.0;
    float speed = 20.0;
    float flip = -1.0; //if left then flip == -1
    image.a = sin(floor(coord.x * size)-u_time*flip*speed);          
    gl_FragColor = image;
}