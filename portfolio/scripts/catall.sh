#!/bin/bash
find "$1" \
  \( -name node_modules -o -name .next -o -name scripts -o -name package-lock.json \) -prune -o \
  -type f -exec sh -c '
    for file do
      if grep -Iq . "$file"; then
        printf "\n\n=== %s ===\n" "$file"
        cat "$file"
      fi
    done
  ' sh {} +

