#!/usr/bin/env sh
# Downloads the Aurora hero background video into public/hero.mp4
set -e
mkdir -p public
curl -L "https://pub-1e5b4001b36b47e28e6a2fb775966a79.r2.dev/templates/aurora/hero.mp4" -o public/hero.mp4
