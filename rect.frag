#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;


float rect(vec2 pos, vec2 scale) {
    vec2 boundary = vec2(0.5 - scale.x * 0.5, 0.5 - scale.y * 0.5);
    return (pos.x > boundary.x && pos.x < boundary.x + scale.x ? 1.0 : 0.) *
        (pos.y > boundary.y && pos.y < boundary.y + scale.y ? 1.0 : 0.);
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float rectangle = rect(uv, vec2(0.3, 0.3));
    color = vec3(rectangle);

    gl_FragColor = vec4(color,1.0);
}