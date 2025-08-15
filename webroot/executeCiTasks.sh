#!/bin/bash

# Composer Validate
composer validate --strict --ansi

# Package audit
composer audit

# Lint Yaml
composer yaml:lint

# Lint Twig
composer twig:lint

# PHP Stan
composer phpstan

# PHP CS Fixer
composer csfixer:dryrun

# PHP Magic Numers
composer phpmnd

# Twig CS
composer twigcs

# Charge NVM pour pouvoir utiliser nvm use
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use

# ES Lint
npm run eslint:js

# Style Lint
npm run stylelint