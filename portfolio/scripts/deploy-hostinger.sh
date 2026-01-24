#!/bin/bash

# 1. Load Environment Variables Safely
if [ -f .env ]; then
  set -a
  source .env
  set +a
else
  echo "Error: .env file not found."
  exit 1
fi

# 2. Safety Check
if [[ -z "$REMOTE_USER" || -z "$REMOTE_HOST" || -z "$REMOTE_PATH" || -z "$REMOTE_PORT" ]]; then
  echo "Error: Missing configuration in .env file (Did you add REMOTE_PORT?)."
  exit 1
fi

echo "Building project..."
npm run build:hostinger

echo "Preparing for deployment..."
cd dist

echo "Generating .htaccess..."
cat > .htaccess <<EOL
<IfModule mod_rewrite.c>
  Options -MultiViews
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^ index.html [QSA,L]
</IfModule>
EOL

echo "Deploying to Hostinger..."
# 4. The Deploy Command (UPDATED FOR PORT)
# -e "ssh -p $REMOTE_PORT" tells rsync to use the specific custom port
rsync -avz --delete \
  -e "ssh -p $REMOTE_PORT" \
  --exclude='*.map' \
  --exclude='.DS_Store' \
  ./ "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"

echo "Fixing remote permissions..."
# 5. Permission Fix (UPDATED FOR PORT)
ssh -p "$REMOTE_PORT" "$REMOTE_USER@$REMOTE_HOST" "find $REMOTE_PATH -type d -exec chmod 755 {} \; && find $REMOTE_PATH -type f -exec chmod 644 {} \;"

echo "Deployment complete!"
