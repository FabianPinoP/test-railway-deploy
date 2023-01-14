pasos para deploy

preparar proyecto para pasar a produccion 

-configurar variables de entorno en el proyecto
-no olvidar agregar puerto de produccion en el server
-agregar script a package,json  "start": "node app.js",


en railway 
logearse con git hub

ir a nuevo proyecto

implementar desde git

pinchar en "Only select repositories"

seleccionar el repo a deployar

crear proyecto postgres en railway

entrar al proyecto pinchar en variables

agregar variables de entorno base de datos al proyecto

en railway ir a settings i pinchar en generate domain  

test-railway-deploy-production.up.railway.app // no funciona por que no esta creada la raiz

end points de prueba 

-test-railway-deploy-production.up.railway.app/users
-test-railway-deploy-production.up.railway.app/user/1