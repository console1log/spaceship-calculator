# Spaceship calculator API app

## Install
From project repository to install all packages please run:
```bash
$ yarn
```
## Launch
Create and fill `.env` fill based on `.env.example`

**(But because of testing in GitHub Codespaces .env will be in repository although this is not best practice)**

To start project, launch it from project repository:
```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Database Access

App is using mongoDB that provides by MongoDb Atlas

Set `MONGO_ATLAS_URL` in `.env` file to access database

## File structure

In case creating a new service, module, controller or schema, please use default file structure:
* all providers, like database, redis, message queues, external APIs should be stored by `src/providers`
* middlewares should be stored by `src/middleware`
* directory `src/modules` uses default file structure:
    * `src/modules/configurations` only to store configuration service with DTO for .env file (in order to check validity of .env content)
    * `src/modules/schemas` only to store low-level services with access only to related database's document and schema 
    * `src/modules/utils` to provide access to common for all app utils, like math etc
    * `src/modules/apis` for all provided by app controllers with related modules/services:
        * `src/modules/apis/scanners-api` - all provided by app APIs for scanners part of app
        * `src/modules/apis/vessel-config-api` - all provided by app APIs for vessel config part of app

## Schemas, services and DTOs

All part schemas should be created with extending `/src/modules/schemas/parts-base/parts-base.schema.ts`

The `PartBaseSchema` have 5 mandatory fields for any new parts schema:
* `name: string`
* `vendor: string`
* `type: PartsTypeEnum`
* `weight: number`
* `price: number`

You don't need to set this fields additionally (please avoid code duplication).

In similar way you should use `PartsBaseService`, `GetPartsBaseResponseDto`, `CreatePartsBaseResponseDto` and `RemoveResponseDto` to extending this classes in your schemas services and DTOs:
* `/src/modules/schemas/parts-base/parts-base.service.ts` - implemented `findAll()`, `findById()`, `create()`, `updateById()`, `removeById()`, `deleteAll()`, `insertMany()` public methods
* `/src/modules/schemas/parts-base/dtos/create-parts-base-request.dto.ts` - implemented `name`, `vendor`, `type`, `weight`, `price` fields with Swagger properties
* `/src/modules/schemas/parts-base/dtos/get-parts-base-request.dto.ts` - extends from `CreatedPartsBaseResponseDto` implemented `_id`, `__v` fields with Swagger properties
* `/src/modules/schemas/parts-base/dtos/remove-response.dto.ts` - implemented `acknowledged` and `deletedCount` fields with Swagger properties

## Seeding

Nest.js uses Mongoose.

If you want to populate database you can use
```bash
$ yarn seed
```

Seeds located in `/src/providers/seeders`

## API documentation

You can check swagger documentation on [Documentation](http://localhost:3000/documentation) after launch this app
