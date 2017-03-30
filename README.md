## Contact Manager
a simple contact app code exercise

### Setup
run cassandra, create keyspace, and create test user
`service cassandra start`
`cqlsh -f /var/www/html/argo_create_ks.cql`

### Deployment (Client)
`npm run build && rsync -av build/ gavin@45.55.67.227:/var/www/exercise.gavinfoster.com/html`

### Deployment (Server)
`rsync -av node_modules root@45.55.86.244:/var/www/html`
`rsync -av server root@45.55.86.244:/var/www/html`

`rsync -av server/ root@45.55.86.244:/var/www/html`
`npm run build && rsync -av build/ root@45.55.86.244:/var/www/html`