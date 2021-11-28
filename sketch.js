// a shader variable
let theShader;
let graph;

function preload() {
    // load the shader
    theShader = loadShader('basic.vert', 'basic.frag');
    graph = createGraphics(1, INITIAL_AGENTS);
}

function setup() {
    pixelDensity(1);
    // shaders require WEBGL mode to work
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
}

function draw() {
    // send resolution of sketch into shader
    theShader.setUniform('u_resolution', [width, windowHeight]);

    // shader() sets the active shader with our shader
    shader(theShader);

    // rect gives us some geometry on the screen
    rect(0, 0, width, height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}