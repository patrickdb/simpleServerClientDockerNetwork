REM Stop active containers
docker kill frontend
docker kill backend

REM Cleanup containers from environment
docker container rm frontend
docker container rm backend

REM Cleanup network
docker network rm demo_net

