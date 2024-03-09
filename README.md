# Run MongoDB in Docker

```bash
mkdir ~/db
docker run -d -v ~/db:/data/db -p 27017:27017 --name mongodb mongo
```
