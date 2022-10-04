# `AdonisJS`

### Iniciar um projeto.

    npm init adonis-ts-app@latest [nome]

### Start o servidor de desenvolvimento.

    node ace serve --watch

### Criando um Controller.

    node ace make:controller [Nome]

### Codigo de uma rota com Controller
```js
import Curso from 'App/Models/Curso'

export default class CursosController {
  index () {
    return Curso.all()
  }
  store ({request}){
    const dados = request.only(['nome', 'duracao', 'modalidade'])
    return Curso.create(dados)
  }
}
```

### Instalando o `lucid` para o baco de dados.

    npm i @adonisjs/lucid

### Configurando o `lucid`.

    node ace configure @adonisjs/lucid

### Criar Model e Migration

    node ace make:model [nome] -m

### Código de uma migration

```js
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cursos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 50).notNullable()
      table.integer('duracao')
      table.string('modalidade',1).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
```
### Codigo de um Model

```js
import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public duracao: number

  @column()
  public modalidade: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
```

### Codigo de uma Seed

```js
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Aluno from "App/Models/Aluno";

export default class extends BaseSeeder {
  public async run() {
    await Aluno.createMany([
      {
        nome: "Diogo Sales",
        cpf: "05889054104",
        matricula: "21114290031",
        email: "diogodobu@gmail.com",
        telefone: "984212998",
        cep: 72341306,
        logradouro: "Qr 207 conjunto 06",
        complemento: "Casa 19",
        numero: "19",
        bairro: "Samambaia Norte",
      },
    ]);
  }
}
```

### Rodar as Migration

    node ace migration:run

### Voltar as Migration

    node ace migration:rollback
    node ace migration:refresh
    node ace migration:refresh --seed

### Voltar as Migration ao início

    node ace migration:reset

### Criar uma seeder

    node ace make:seeder [Nome]

### Rodar uma seeder

    node ace db:seed
