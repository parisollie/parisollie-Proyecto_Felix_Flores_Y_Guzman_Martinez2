#version 330 core
in vec3 TexCoords;
out vec4 color;

uniform samplerCube skybox;

void main()
{
    //Estoy capturando la posicion de la imagen 
    color = texture(skybox, TexCoords); 
}