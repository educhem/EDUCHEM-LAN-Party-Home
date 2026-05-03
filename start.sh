#!/bin/sh
set -eu

export PORT="${PORT:-80}"
export HOSTNAME="${HOSTNAME:-0.0.0.0}"

exec node server.js