# dev_collect_static.sh
# collects static assets
docker-compose -f docker-compose.dev.yml exec web python manage.py collectstatic --noinput
./fix_permissions.sh