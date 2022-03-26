в директории печатаем (лучше из PowerShell(админ)
$ npm init

команда создает package.json и запрашивает значения ключей
отвечаем yes

устанавливаем в эту же папку chai и mocha
npm install --save-dev chai mocha

(-S, --save: Пакет будет отображается в ваших dependencies
 -D, --save-dev: пакет будет отображаться в ваших devDependencies)

chai and mocha будут добавлены в файл package.json как зависимости devDependencies

изменить в этом файле "test": "mocha"

нужен каталог test mocha будет в нем искать тесты