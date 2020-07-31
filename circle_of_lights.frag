#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float color = 0.0;    
    int number = 30;
    vec2 translate = vec2(-0.5,-0.5);
    coord += translate;
    for(int i = 0; i < number; i++){
        float radius =  0.3;
        float rad = radians(360.0/float(number)) * float(i);
        color += 0.2 * abs(sin(u_time)) * 0.01 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));        
    }    
    gl_FragColor = vec4(vec3(color), 1.0);     
}