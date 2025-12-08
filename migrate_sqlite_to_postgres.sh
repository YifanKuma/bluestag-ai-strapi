#!/bin/bash

input="exported_sqlite.sql"
output="converted_postgres.sql"

cat "$input" \
  | sed 's/PRAGMA .\+;//g' \
  | sed 's/BEGIN TRANSACTION;//g' \
  | sed 's/COMMIT;//g' \
  | sed 's/AUTOINCREMENT//g' \
  | sed 's/INTEGER PRIMARY KEY/SERIAL PRIMARY KEY/g' \
  | sed 's/DEFAULT NULL//g' \
  | sed 's/"//g' \
  | sed "s/'t'/TRUE/g" \
  | sed "s/'f'/FALSE/g" \
  | sed 's/\\x//g' \
  | sed 's/,,/,NULL,/g' \
  > "$output"

echo "✔ Strict SQL conversion done → $output"
