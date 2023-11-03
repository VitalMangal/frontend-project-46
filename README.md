### Hexlet tests and linter status:
[![Actions Status](https://github.com/VitalMangal/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/VitalMangal/frontend-project-46/actions)

## Что это

CLI-Утилита, позволяющая находить и выводить на экран различия между двумя конфигурационными файлами формата json, yml или ini

## Как это

- JS с минимумом библиотечных зависимостей
  - [lodash](https://github.com/lodash/lodash)
  - [Commander](https://github.com/tj/commander.js) (библиотека, упрощающая создание command-line интерфейсов приложений)
- Тесты: [Jest](https://github.com/facebook/jest)
- [Eslint](https://github.com/eslint/eslint)

## Как это работает

```sh
Установка: (внутри директории с исходным кодом)
   make install
   make publish
   make link

Удаление: (внутри директории с исходным кодом)
   make unlink

Использование:
   gendiff [options] <initialConfig> <modifiedConfig>

Доступные опции:
   --format, -f  -  формат вывода: pretty (по умолчанию), plain, json

Примеры:
   gendiff --format plain ./config1.json ./config2.json
   gendiff -f json config.ini anotherConfig.json
```

## Как это выглядит

https://asciinema.org/a/C3Fg1GJ58tfbcopsr4n7hebmX