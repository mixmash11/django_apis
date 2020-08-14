#!/bin/bash
#### Description: collects static assets
docker-compose -f docker-compose.dev.yml exec web python manage.py collectstatic --noinput