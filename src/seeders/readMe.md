### Documentacion:

En este proyecto se pone de manifiesto la herramienta de desarrollo sequelize-cli.

#### Paso 1:

Instalar la herramienta de desarrollo en tu proyecto ya iniciado de node:

__$ npm init --yes__

__$ npm install sequelize mysql2 express__

__$ npm install --save-dev sequelize-cli nodemon__

#### Paso 2:

Configurar el package.json editando el campo script:

```json

"scripts": {
    "dev": "nodemon src/index",
    "start": "node src/index"
}


```

#### Paso 3:

Crear la carpeta src que albergara todo nuestro codigo.

__$ mkdir src__

__$ cd src__

#### Paso 4:

Inicializar un proyecto de sequelize-cli:

__$ npx sequelize-cli init__

Este comando reara una serie de directorio:
-config
-migrations
-models
-seeders

#### Paso 5:

Acceder al directorio config donde se encuentra el archivo config.json que especifica la configuracion de conexion con nuestra base de datos.

```json

{
  "development": {
    "username": "xxxxx",
    "password": "xxxxx",
    "database": "Databasename",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```

Especificamos una configuracion para que sequelize sepa lo que tiene que crear.

#### Paso 6: 

Crear la base de datos con los comandos de sequelize-cli:

__$ npx sequelize-cli db:generate__

Sequelize-cli recogera la configuracion establecida en config.json y crea la base de datos con el nombre especificado.

#### Paso 7:

Crear un modelo de datos que sera un objeto y tendra el esquema definido para guardar los registros en base de datos.

__$ npx sequelize-cli model:generate --name XXXX --attributes attribute_name:attribute_datatype__

Puedes añadir tantos atributos como quieras, enumarandolos con la nomenclatura correcta.

Este comando creara un archivo en el directorio models con el nombre especificado, como tambien creara un archivo en el directorio de migrations.


#### Paso 8: 

Ejecutar el comando para migrar todos los modelos a la base de datos:

__$ npx sequelize-cli db:migrate__

#### Psso 9:

Crear seeds para alimentar una tabla o en este caso un modelo previamente creado. Este comando creara un archivo en el directorio _seeders_ donde habra que configurar manualmente la function.

__$ npx sequelize-cli seed:generate --name XXXX__

#### Paso 10:

Toca configurar manualmente el archivo creado con el comando previo. Configurarmos y especificamos la manera de insertar estos seeders:

```js

await queryInterface.bulkInsert('Lavadoras', [{
      model: 'XC32',
      name: 'Bosh',
      year: 2012,
      time_end: new Date()
    }, {
      model: 'AQM6',
      name: 'Siemens',
      year: 2013,
      time_end: new Date()
    }]);

```

Este metodo inserta un array de datos dentro de la tabla especificada. 

metodos destacados:
```js
// function to insert an array of data

// async function

await queryInterface.bultInsert('TableName', [{
    property1: value,
    proerty2: value,
},{},{}])

```

Tambien es necesario definir un metodo para eliminar ese array de datos:

```js
await queryInterface.bulkDelete('TableName', null, {});

```

#### Psso 11:

Ejecutar y poblar las tablas mediante los _seeders_:

__$ npx sequelize-cli db:seed:all__

Este comando ejecutara el archivo guardado en el directorio _seeders_, asi como la function para insertar un bulk de datos.

