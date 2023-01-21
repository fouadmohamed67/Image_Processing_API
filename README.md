# image processing API
small service helps you to resize image and save it
# Description 
1. the service is done using nodejs TypeScript ("express")
2. service take image name ,height and width to create new image with new height and width
3. if image already exixt with the required size it will be loaded from cache and will not make resize on it 
4. the service has its own middleWare to handle unexpcted errors like (image name not found , height or width negative)
5. use unit test Jasmine to test all the functions, middleWare, Routes and api is working like expected

# How to run the service
1. npm init (to initialize the node_module)
2. npm run build && npm run jasmine  (to build and run testCases)
3. npm run build && nodemon src/index (to build and run the project using nodemon)