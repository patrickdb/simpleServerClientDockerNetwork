docker run -d --name backend  --network demo_net --ip 172.12.0.2 -p 8080:8080 pdebeer/myserver 
REM docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' backend
 
docker run -d --name frontend --network demo_net --ip 172.12.0.3 -p 80:3000 pdebeer/react_app
REM docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' frontend
