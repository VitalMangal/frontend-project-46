### Hexlet tests and linter status:
[![Actions Status](https://github.com/VitalMangal/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/VitalMangal/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/64afa1f58d140bca88ab/maintainability)](https://codeclimate.com/github/VitalMangal/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/64afa1f58d140bca88ab/test_coverage)](https://codeclimate.com/github/VitalMangal/frontend-project-46/test_coverage)

## Что это

CLI-Утилита, позволяющая находить и выводить на экран различия между двумя конфигурационными файлами формата json, yml или yaml

## Как это работает


Установка: (внутри директории с исходным кодом)
   make install
   make publish
   make link

Удаление: (внутри директории с исходным кодом)
   make unlink

Использование:
   gendiff [options] <filepath1.json> <filepath2.json>

Доступные опции:
   --format, -f  -  формат вывода: stylish (по умолчанию), plain, json

Примеры:
   gendiff --format plain ./file1.json ./file2.json
   gendiff -f json filepath1.yaml filepath2.yaml

## Как это выглядит

https://asciinema.org/a/06cHUCbgIizOYqgJFK6w8Qn7y