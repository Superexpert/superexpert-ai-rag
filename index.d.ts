
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model corpus
 * 
 */
export type corpus = $Result.DefaultSelection<Prisma.$corpusPayload>
/**
 * Model corpusFiles
 * 
 */
export type corpusFiles = $Result.DefaultSelection<Prisma.$corpusFilesPayload>
/**
 * Model corpusFileChunks
 * 
 */
export type corpusFileChunks = $Result.DefaultSelection<Prisma.$corpusFileChunksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Corpuses
 * const corpuses = await prisma.corpus.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Corpuses
   * const corpuses = await prisma.corpus.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.corpus`: Exposes CRUD operations for the **corpus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Corpuses
    * const corpuses = await prisma.corpus.findMany()
    * ```
    */
  get corpus(): Prisma.corpusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.corpusFiles`: Exposes CRUD operations for the **corpusFiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CorpusFiles
    * const corpusFiles = await prisma.corpusFiles.findMany()
    * ```
    */
  get corpusFiles(): Prisma.corpusFilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.corpusFileChunks`: Exposes CRUD operations for the **corpusFileChunks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CorpusFileChunks
    * const corpusFileChunks = await prisma.corpusFileChunks.findMany()
    * ```
    */
  get corpusFileChunks(): Prisma.corpusFileChunksDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    corpus: 'corpus',
    corpusFiles: 'corpusFiles',
    corpusFileChunks: 'corpusFileChunks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "corpus" | "corpusFiles" | "corpusFileChunks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      corpus: {
        payload: Prisma.$corpusPayload<ExtArgs>
        fields: Prisma.corpusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.corpusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.corpusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>
          }
          findFirst: {
            args: Prisma.corpusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.corpusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>
          }
          findMany: {
            args: Prisma.corpusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>[]
          }
          create: {
            args: Prisma.corpusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>
          }
          createMany: {
            args: Prisma.corpusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.corpusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>[]
          }
          delete: {
            args: Prisma.corpusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>
          }
          update: {
            args: Prisma.corpusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>
          }
          deleteMany: {
            args: Prisma.corpusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.corpusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.corpusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>[]
          }
          upsert: {
            args: Prisma.corpusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusPayload>
          }
          aggregate: {
            args: Prisma.CorpusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorpus>
          }
          groupBy: {
            args: Prisma.corpusGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorpusGroupByOutputType>[]
          }
          count: {
            args: Prisma.corpusCountArgs<ExtArgs>
            result: $Utils.Optional<CorpusCountAggregateOutputType> | number
          }
        }
      }
      corpusFiles: {
        payload: Prisma.$corpusFilesPayload<ExtArgs>
        fields: Prisma.corpusFilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.corpusFilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.corpusFilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>
          }
          findFirst: {
            args: Prisma.corpusFilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.corpusFilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>
          }
          findMany: {
            args: Prisma.corpusFilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>[]
          }
          create: {
            args: Prisma.corpusFilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>
          }
          createMany: {
            args: Prisma.corpusFilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.corpusFilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>[]
          }
          delete: {
            args: Prisma.corpusFilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>
          }
          update: {
            args: Prisma.corpusFilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>
          }
          deleteMany: {
            args: Prisma.corpusFilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.corpusFilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.corpusFilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>[]
          }
          upsert: {
            args: Prisma.corpusFilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFilesPayload>
          }
          aggregate: {
            args: Prisma.CorpusFilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorpusFiles>
          }
          groupBy: {
            args: Prisma.corpusFilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorpusFilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.corpusFilesCountArgs<ExtArgs>
            result: $Utils.Optional<CorpusFilesCountAggregateOutputType> | number
          }
        }
      }
      corpusFileChunks: {
        payload: Prisma.$corpusFileChunksPayload<ExtArgs>
        fields: Prisma.corpusFileChunksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.corpusFileChunksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.corpusFileChunksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>
          }
          findFirst: {
            args: Prisma.corpusFileChunksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.corpusFileChunksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>
          }
          findMany: {
            args: Prisma.corpusFileChunksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>[]
          }
          create: {
            args: Prisma.corpusFileChunksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>
          }
          createMany: {
            args: Prisma.corpusFileChunksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.corpusFileChunksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>[]
          }
          delete: {
            args: Prisma.corpusFileChunksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>
          }
          update: {
            args: Prisma.corpusFileChunksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>
          }
          deleteMany: {
            args: Prisma.corpusFileChunksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.corpusFileChunksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.corpusFileChunksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>[]
          }
          upsert: {
            args: Prisma.corpusFileChunksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$corpusFileChunksPayload>
          }
          aggregate: {
            args: Prisma.CorpusFileChunksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorpusFileChunks>
          }
          groupBy: {
            args: Prisma.corpusFileChunksGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorpusFileChunksGroupByOutputType>[]
          }
          count: {
            args: Prisma.corpusFileChunksCountArgs<ExtArgs>
            result: $Utils.Optional<CorpusFileChunksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    corpus?: corpusOmit
    corpusFiles?: corpusFilesOmit
    corpusFileChunks?: corpusFileChunksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CorpusCountOutputType
   */

  export type CorpusCountOutputType = {
    corpusFiles: number
  }

  export type CorpusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corpusFiles?: boolean | CorpusCountOutputTypeCountCorpusFilesArgs
  }

  // Custom InputTypes
  /**
   * CorpusCountOutputType without action
   */
  export type CorpusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorpusCountOutputType
     */
    select?: CorpusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CorpusCountOutputType without action
   */
  export type CorpusCountOutputTypeCountCorpusFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corpusFilesWhereInput
  }


  /**
   * Count Type CorpusFilesCountOutputType
   */

  export type CorpusFilesCountOutputType = {
    corporaFileChunks: number
  }

  export type CorpusFilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corporaFileChunks?: boolean | CorpusFilesCountOutputTypeCountCorporaFileChunksArgs
  }

  // Custom InputTypes
  /**
   * CorpusFilesCountOutputType without action
   */
  export type CorpusFilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorpusFilesCountOutputType
     */
    select?: CorpusFilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CorpusFilesCountOutputType without action
   */
  export type CorpusFilesCountOutputTypeCountCorporaFileChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corpusFileChunksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model corpus
   */

  export type AggregateCorpus = {
    _count: CorpusCountAggregateOutputType | null
    _min: CorpusMinAggregateOutputType | null
    _max: CorpusMaxAggregateOutputType | null
  }

  export type CorpusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CorpusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CorpusCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type CorpusMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type CorpusMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type CorpusCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CorpusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corpus to aggregate.
     */
    where?: corpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpuses to fetch.
     */
    orderBy?: corpusOrderByWithRelationInput | corpusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: corpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned corpuses
    **/
    _count?: true | CorpusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorpusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorpusMaxAggregateInputType
  }

  export type GetCorpusAggregateType<T extends CorpusAggregateArgs> = {
        [P in keyof T & keyof AggregateCorpus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorpus[P]>
      : GetScalarType<T[P], AggregateCorpus[P]>
  }




  export type corpusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corpusWhereInput
    orderBy?: corpusOrderByWithAggregationInput | corpusOrderByWithAggregationInput[]
    by: CorpusScalarFieldEnum[] | CorpusScalarFieldEnum
    having?: corpusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorpusCountAggregateInputType | true
    _min?: CorpusMinAggregateInputType
    _max?: CorpusMaxAggregateInputType
  }

  export type CorpusGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string
    createdAt: Date
    _count: CorpusCountAggregateOutputType | null
    _min: CorpusMinAggregateOutputType | null
    _max: CorpusMaxAggregateOutputType | null
  }

  type GetCorpusGroupByPayload<T extends corpusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorpusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorpusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorpusGroupByOutputType[P]>
            : GetScalarType<T[P], CorpusGroupByOutputType[P]>
        }
      >
    >


  export type corpusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    corpusFiles?: boolean | corpus$corpusFilesArgs<ExtArgs>
    _count?: boolean | CorpusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corpus"]>

  export type corpusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["corpus"]>

  export type corpusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["corpus"]>

  export type corpusSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type corpusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt", ExtArgs["result"]["corpus"]>
  export type corpusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corpusFiles?: boolean | corpus$corpusFilesArgs<ExtArgs>
    _count?: boolean | CorpusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type corpusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type corpusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $corpusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "corpus"
    objects: {
      corpusFiles: Prisma.$corpusFilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["corpus"]>
    composites: {}
  }

  type corpusGetPayload<S extends boolean | null | undefined | corpusDefaultArgs> = $Result.GetResult<Prisma.$corpusPayload, S>

  type corpusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<corpusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorpusCountAggregateInputType | true
    }

  export interface corpusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['corpus'], meta: { name: 'corpus' } }
    /**
     * Find zero or one Corpus that matches the filter.
     * @param {corpusFindUniqueArgs} args - Arguments to find a Corpus
     * @example
     * // Get one Corpus
     * const corpus = await prisma.corpus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends corpusFindUniqueArgs>(args: SelectSubset<T, corpusFindUniqueArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Corpus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {corpusFindUniqueOrThrowArgs} args - Arguments to find a Corpus
     * @example
     * // Get one Corpus
     * const corpus = await prisma.corpus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends corpusFindUniqueOrThrowArgs>(args: SelectSubset<T, corpusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corpus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFindFirstArgs} args - Arguments to find a Corpus
     * @example
     * // Get one Corpus
     * const corpus = await prisma.corpus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends corpusFindFirstArgs>(args?: SelectSubset<T, corpusFindFirstArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Corpus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFindFirstOrThrowArgs} args - Arguments to find a Corpus
     * @example
     * // Get one Corpus
     * const corpus = await prisma.corpus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends corpusFindFirstOrThrowArgs>(args?: SelectSubset<T, corpusFindFirstOrThrowArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Corpuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Corpuses
     * const corpuses = await prisma.corpus.findMany()
     * 
     * // Get first 10 Corpuses
     * const corpuses = await prisma.corpus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const corpusWithIdOnly = await prisma.corpus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends corpusFindManyArgs>(args?: SelectSubset<T, corpusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Corpus.
     * @param {corpusCreateArgs} args - Arguments to create a Corpus.
     * @example
     * // Create one Corpus
     * const Corpus = await prisma.corpus.create({
     *   data: {
     *     // ... data to create a Corpus
     *   }
     * })
     * 
     */
    create<T extends corpusCreateArgs>(args: SelectSubset<T, corpusCreateArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Corpuses.
     * @param {corpusCreateManyArgs} args - Arguments to create many Corpuses.
     * @example
     * // Create many Corpuses
     * const corpus = await prisma.corpus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends corpusCreateManyArgs>(args?: SelectSubset<T, corpusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Corpuses and returns the data saved in the database.
     * @param {corpusCreateManyAndReturnArgs} args - Arguments to create many Corpuses.
     * @example
     * // Create many Corpuses
     * const corpus = await prisma.corpus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Corpuses and only return the `id`
     * const corpusWithIdOnly = await prisma.corpus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends corpusCreateManyAndReturnArgs>(args?: SelectSubset<T, corpusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Corpus.
     * @param {corpusDeleteArgs} args - Arguments to delete one Corpus.
     * @example
     * // Delete one Corpus
     * const Corpus = await prisma.corpus.delete({
     *   where: {
     *     // ... filter to delete one Corpus
     *   }
     * })
     * 
     */
    delete<T extends corpusDeleteArgs>(args: SelectSubset<T, corpusDeleteArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Corpus.
     * @param {corpusUpdateArgs} args - Arguments to update one Corpus.
     * @example
     * // Update one Corpus
     * const corpus = await prisma.corpus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends corpusUpdateArgs>(args: SelectSubset<T, corpusUpdateArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Corpuses.
     * @param {corpusDeleteManyArgs} args - Arguments to filter Corpuses to delete.
     * @example
     * // Delete a few Corpuses
     * const { count } = await prisma.corpus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends corpusDeleteManyArgs>(args?: SelectSubset<T, corpusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corpuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Corpuses
     * const corpus = await prisma.corpus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends corpusUpdateManyArgs>(args: SelectSubset<T, corpusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Corpuses and returns the data updated in the database.
     * @param {corpusUpdateManyAndReturnArgs} args - Arguments to update many Corpuses.
     * @example
     * // Update many Corpuses
     * const corpus = await prisma.corpus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Corpuses and only return the `id`
     * const corpusWithIdOnly = await prisma.corpus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends corpusUpdateManyAndReturnArgs>(args: SelectSubset<T, corpusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Corpus.
     * @param {corpusUpsertArgs} args - Arguments to update or create a Corpus.
     * @example
     * // Update or create a Corpus
     * const corpus = await prisma.corpus.upsert({
     *   create: {
     *     // ... data to create a Corpus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Corpus we want to update
     *   }
     * })
     */
    upsert<T extends corpusUpsertArgs>(args: SelectSubset<T, corpusUpsertArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Corpuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusCountArgs} args - Arguments to filter Corpuses to count.
     * @example
     * // Count the number of Corpuses
     * const count = await prisma.corpus.count({
     *   where: {
     *     // ... the filter for the Corpuses we want to count
     *   }
     * })
    **/
    count<T extends corpusCountArgs>(
      args?: Subset<T, corpusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorpusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Corpus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CorpusAggregateArgs>(args: Subset<T, CorpusAggregateArgs>): Prisma.PrismaPromise<GetCorpusAggregateType<T>>

    /**
     * Group by Corpus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends corpusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: corpusGroupByArgs['orderBy'] }
        : { orderBy?: corpusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, corpusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorpusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the corpus model
   */
  readonly fields: corpusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for corpus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__corpusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    corpusFiles<T extends corpus$corpusFilesArgs<ExtArgs> = {}>(args?: Subset<T, corpus$corpusFilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the corpus model
   */
  interface corpusFieldRefs {
    readonly id: FieldRef<"corpus", 'String'>
    readonly userId: FieldRef<"corpus", 'String'>
    readonly name: FieldRef<"corpus", 'String'>
    readonly description: FieldRef<"corpus", 'String'>
    readonly createdAt: FieldRef<"corpus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * corpus findUnique
   */
  export type corpusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * Filter, which corpus to fetch.
     */
    where: corpusWhereUniqueInput
  }

  /**
   * corpus findUniqueOrThrow
   */
  export type corpusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * Filter, which corpus to fetch.
     */
    where: corpusWhereUniqueInput
  }

  /**
   * corpus findFirst
   */
  export type corpusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * Filter, which corpus to fetch.
     */
    where?: corpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpuses to fetch.
     */
    orderBy?: corpusOrderByWithRelationInput | corpusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corpuses.
     */
    cursor?: corpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corpuses.
     */
    distinct?: CorpusScalarFieldEnum | CorpusScalarFieldEnum[]
  }

  /**
   * corpus findFirstOrThrow
   */
  export type corpusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * Filter, which corpus to fetch.
     */
    where?: corpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpuses to fetch.
     */
    orderBy?: corpusOrderByWithRelationInput | corpusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corpuses.
     */
    cursor?: corpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corpuses.
     */
    distinct?: CorpusScalarFieldEnum | CorpusScalarFieldEnum[]
  }

  /**
   * corpus findMany
   */
  export type corpusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * Filter, which corpuses to fetch.
     */
    where?: corpusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpuses to fetch.
     */
    orderBy?: corpusOrderByWithRelationInput | corpusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing corpuses.
     */
    cursor?: corpusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpuses.
     */
    skip?: number
    distinct?: CorpusScalarFieldEnum | CorpusScalarFieldEnum[]
  }

  /**
   * corpus create
   */
  export type corpusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * The data needed to create a corpus.
     */
    data: XOR<corpusCreateInput, corpusUncheckedCreateInput>
  }

  /**
   * corpus createMany
   */
  export type corpusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many corpuses.
     */
    data: corpusCreateManyInput | corpusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * corpus createManyAndReturn
   */
  export type corpusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * The data used to create many corpuses.
     */
    data: corpusCreateManyInput | corpusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * corpus update
   */
  export type corpusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * The data needed to update a corpus.
     */
    data: XOR<corpusUpdateInput, corpusUncheckedUpdateInput>
    /**
     * Choose, which corpus to update.
     */
    where: corpusWhereUniqueInput
  }

  /**
   * corpus updateMany
   */
  export type corpusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update corpuses.
     */
    data: XOR<corpusUpdateManyMutationInput, corpusUncheckedUpdateManyInput>
    /**
     * Filter which corpuses to update
     */
    where?: corpusWhereInput
    /**
     * Limit how many corpuses to update.
     */
    limit?: number
  }

  /**
   * corpus updateManyAndReturn
   */
  export type corpusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * The data used to update corpuses.
     */
    data: XOR<corpusUpdateManyMutationInput, corpusUncheckedUpdateManyInput>
    /**
     * Filter which corpuses to update
     */
    where?: corpusWhereInput
    /**
     * Limit how many corpuses to update.
     */
    limit?: number
  }

  /**
   * corpus upsert
   */
  export type corpusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * The filter to search for the corpus to update in case it exists.
     */
    where: corpusWhereUniqueInput
    /**
     * In case the corpus found by the `where` argument doesn't exist, create a new corpus with this data.
     */
    create: XOR<corpusCreateInput, corpusUncheckedCreateInput>
    /**
     * In case the corpus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<corpusUpdateInput, corpusUncheckedUpdateInput>
  }

  /**
   * corpus delete
   */
  export type corpusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
    /**
     * Filter which corpus to delete.
     */
    where: corpusWhereUniqueInput
  }

  /**
   * corpus deleteMany
   */
  export type corpusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corpuses to delete
     */
    where?: corpusWhereInput
    /**
     * Limit how many corpuses to delete.
     */
    limit?: number
  }

  /**
   * corpus.corpusFiles
   */
  export type corpus$corpusFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    where?: corpusFilesWhereInput
    orderBy?: corpusFilesOrderByWithRelationInput | corpusFilesOrderByWithRelationInput[]
    cursor?: corpusFilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CorpusFilesScalarFieldEnum | CorpusFilesScalarFieldEnum[]
  }

  /**
   * corpus without action
   */
  export type corpusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpus
     */
    select?: corpusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpus
     */
    omit?: corpusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusInclude<ExtArgs> | null
  }


  /**
   * Model corpusFiles
   */

  export type AggregateCorpusFiles = {
    _count: CorpusFilesCountAggregateOutputType | null
    _avg: CorpusFilesAvgAggregateOutputType | null
    _sum: CorpusFilesSumAggregateOutputType | null
    _min: CorpusFilesMinAggregateOutputType | null
    _max: CorpusFilesMaxAggregateOutputType | null
  }

  export type CorpusFilesAvgAggregateOutputType = {
    chunkSize: number | null
    chunkOverlap: number | null
  }

  export type CorpusFilesSumAggregateOutputType = {
    chunkSize: number | null
    chunkOverlap: number | null
  }

  export type CorpusFilesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    chunkSize: number | null
    chunkOverlap: number | null
    createdAt: Date | null
    corpusId: string | null
  }

  export type CorpusFilesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fileName: string | null
    chunkSize: number | null
    chunkOverlap: number | null
    createdAt: Date | null
    corpusId: string | null
  }

  export type CorpusFilesCountAggregateOutputType = {
    id: number
    userId: number
    fileName: number
    chunkSize: number
    chunkOverlap: number
    createdAt: number
    corpusId: number
    _all: number
  }


  export type CorpusFilesAvgAggregateInputType = {
    chunkSize?: true
    chunkOverlap?: true
  }

  export type CorpusFilesSumAggregateInputType = {
    chunkSize?: true
    chunkOverlap?: true
  }

  export type CorpusFilesMinAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    chunkSize?: true
    chunkOverlap?: true
    createdAt?: true
    corpusId?: true
  }

  export type CorpusFilesMaxAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    chunkSize?: true
    chunkOverlap?: true
    createdAt?: true
    corpusId?: true
  }

  export type CorpusFilesCountAggregateInputType = {
    id?: true
    userId?: true
    fileName?: true
    chunkSize?: true
    chunkOverlap?: true
    createdAt?: true
    corpusId?: true
    _all?: true
  }

  export type CorpusFilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corpusFiles to aggregate.
     */
    where?: corpusFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpusFiles to fetch.
     */
    orderBy?: corpusFilesOrderByWithRelationInput | corpusFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: corpusFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpusFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpusFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned corpusFiles
    **/
    _count?: true | CorpusFilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CorpusFilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CorpusFilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorpusFilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorpusFilesMaxAggregateInputType
  }

  export type GetCorpusFilesAggregateType<T extends CorpusFilesAggregateArgs> = {
        [P in keyof T & keyof AggregateCorpusFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorpusFiles[P]>
      : GetScalarType<T[P], AggregateCorpusFiles[P]>
  }




  export type corpusFilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corpusFilesWhereInput
    orderBy?: corpusFilesOrderByWithAggregationInput | corpusFilesOrderByWithAggregationInput[]
    by: CorpusFilesScalarFieldEnum[] | CorpusFilesScalarFieldEnum
    having?: corpusFilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorpusFilesCountAggregateInputType | true
    _avg?: CorpusFilesAvgAggregateInputType
    _sum?: CorpusFilesSumAggregateInputType
    _min?: CorpusFilesMinAggregateInputType
    _max?: CorpusFilesMaxAggregateInputType
  }

  export type CorpusFilesGroupByOutputType = {
    id: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt: Date
    corpusId: string
    _count: CorpusFilesCountAggregateOutputType | null
    _avg: CorpusFilesAvgAggregateOutputType | null
    _sum: CorpusFilesSumAggregateOutputType | null
    _min: CorpusFilesMinAggregateOutputType | null
    _max: CorpusFilesMaxAggregateOutputType | null
  }

  type GetCorpusFilesGroupByPayload<T extends corpusFilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorpusFilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorpusFilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorpusFilesGroupByOutputType[P]>
            : GetScalarType<T[P], CorpusFilesGroupByOutputType[P]>
        }
      >
    >


  export type corpusFilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    chunkSize?: boolean
    chunkOverlap?: boolean
    createdAt?: boolean
    corpusId?: boolean
    corpus?: boolean | corpusDefaultArgs<ExtArgs>
    corporaFileChunks?: boolean | corpusFiles$corporaFileChunksArgs<ExtArgs>
    _count?: boolean | CorpusFilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corpusFiles"]>

  export type corpusFilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    chunkSize?: boolean
    chunkOverlap?: boolean
    createdAt?: boolean
    corpusId?: boolean
    corpus?: boolean | corpusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corpusFiles"]>

  export type corpusFilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fileName?: boolean
    chunkSize?: boolean
    chunkOverlap?: boolean
    createdAt?: boolean
    corpusId?: boolean
    corpus?: boolean | corpusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corpusFiles"]>

  export type corpusFilesSelectScalar = {
    id?: boolean
    userId?: boolean
    fileName?: boolean
    chunkSize?: boolean
    chunkOverlap?: boolean
    createdAt?: boolean
    corpusId?: boolean
  }

  export type corpusFilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fileName" | "chunkSize" | "chunkOverlap" | "createdAt" | "corpusId", ExtArgs["result"]["corpusFiles"]>
  export type corpusFilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corpus?: boolean | corpusDefaultArgs<ExtArgs>
    corporaFileChunks?: boolean | corpusFiles$corporaFileChunksArgs<ExtArgs>
    _count?: boolean | CorpusFilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type corpusFilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corpus?: boolean | corpusDefaultArgs<ExtArgs>
  }
  export type corpusFilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corpus?: boolean | corpusDefaultArgs<ExtArgs>
  }

  export type $corpusFilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "corpusFiles"
    objects: {
      corpus: Prisma.$corpusPayload<ExtArgs>
      corporaFileChunks: Prisma.$corpusFileChunksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fileName: string
      chunkSize: number
      chunkOverlap: number
      createdAt: Date
      corpusId: string
    }, ExtArgs["result"]["corpusFiles"]>
    composites: {}
  }

  type corpusFilesGetPayload<S extends boolean | null | undefined | corpusFilesDefaultArgs> = $Result.GetResult<Prisma.$corpusFilesPayload, S>

  type corpusFilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<corpusFilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorpusFilesCountAggregateInputType | true
    }

  export interface corpusFilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['corpusFiles'], meta: { name: 'corpusFiles' } }
    /**
     * Find zero or one CorpusFiles that matches the filter.
     * @param {corpusFilesFindUniqueArgs} args - Arguments to find a CorpusFiles
     * @example
     * // Get one CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends corpusFilesFindUniqueArgs>(args: SelectSubset<T, corpusFilesFindUniqueArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CorpusFiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {corpusFilesFindUniqueOrThrowArgs} args - Arguments to find a CorpusFiles
     * @example
     * // Get one CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends corpusFilesFindUniqueOrThrowArgs>(args: SelectSubset<T, corpusFilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CorpusFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFilesFindFirstArgs} args - Arguments to find a CorpusFiles
     * @example
     * // Get one CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends corpusFilesFindFirstArgs>(args?: SelectSubset<T, corpusFilesFindFirstArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CorpusFiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFilesFindFirstOrThrowArgs} args - Arguments to find a CorpusFiles
     * @example
     * // Get one CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends corpusFilesFindFirstOrThrowArgs>(args?: SelectSubset<T, corpusFilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CorpusFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.findMany()
     * 
     * // Get first 10 CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const corpusFilesWithIdOnly = await prisma.corpusFiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends corpusFilesFindManyArgs>(args?: SelectSubset<T, corpusFilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CorpusFiles.
     * @param {corpusFilesCreateArgs} args - Arguments to create a CorpusFiles.
     * @example
     * // Create one CorpusFiles
     * const CorpusFiles = await prisma.corpusFiles.create({
     *   data: {
     *     // ... data to create a CorpusFiles
     *   }
     * })
     * 
     */
    create<T extends corpusFilesCreateArgs>(args: SelectSubset<T, corpusFilesCreateArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CorpusFiles.
     * @param {corpusFilesCreateManyArgs} args - Arguments to create many CorpusFiles.
     * @example
     * // Create many CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends corpusFilesCreateManyArgs>(args?: SelectSubset<T, corpusFilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CorpusFiles and returns the data saved in the database.
     * @param {corpusFilesCreateManyAndReturnArgs} args - Arguments to create many CorpusFiles.
     * @example
     * // Create many CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CorpusFiles and only return the `id`
     * const corpusFilesWithIdOnly = await prisma.corpusFiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends corpusFilesCreateManyAndReturnArgs>(args?: SelectSubset<T, corpusFilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CorpusFiles.
     * @param {corpusFilesDeleteArgs} args - Arguments to delete one CorpusFiles.
     * @example
     * // Delete one CorpusFiles
     * const CorpusFiles = await prisma.corpusFiles.delete({
     *   where: {
     *     // ... filter to delete one CorpusFiles
     *   }
     * })
     * 
     */
    delete<T extends corpusFilesDeleteArgs>(args: SelectSubset<T, corpusFilesDeleteArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CorpusFiles.
     * @param {corpusFilesUpdateArgs} args - Arguments to update one CorpusFiles.
     * @example
     * // Update one CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends corpusFilesUpdateArgs>(args: SelectSubset<T, corpusFilesUpdateArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CorpusFiles.
     * @param {corpusFilesDeleteManyArgs} args - Arguments to filter CorpusFiles to delete.
     * @example
     * // Delete a few CorpusFiles
     * const { count } = await prisma.corpusFiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends corpusFilesDeleteManyArgs>(args?: SelectSubset<T, corpusFilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorpusFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends corpusFilesUpdateManyArgs>(args: SelectSubset<T, corpusFilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorpusFiles and returns the data updated in the database.
     * @param {corpusFilesUpdateManyAndReturnArgs} args - Arguments to update many CorpusFiles.
     * @example
     * // Update many CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CorpusFiles and only return the `id`
     * const corpusFilesWithIdOnly = await prisma.corpusFiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends corpusFilesUpdateManyAndReturnArgs>(args: SelectSubset<T, corpusFilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CorpusFiles.
     * @param {corpusFilesUpsertArgs} args - Arguments to update or create a CorpusFiles.
     * @example
     * // Update or create a CorpusFiles
     * const corpusFiles = await prisma.corpusFiles.upsert({
     *   create: {
     *     // ... data to create a CorpusFiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CorpusFiles we want to update
     *   }
     * })
     */
    upsert<T extends corpusFilesUpsertArgs>(args: SelectSubset<T, corpusFilesUpsertArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CorpusFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFilesCountArgs} args - Arguments to filter CorpusFiles to count.
     * @example
     * // Count the number of CorpusFiles
     * const count = await prisma.corpusFiles.count({
     *   where: {
     *     // ... the filter for the CorpusFiles we want to count
     *   }
     * })
    **/
    count<T extends corpusFilesCountArgs>(
      args?: Subset<T, corpusFilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorpusFilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CorpusFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusFilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CorpusFilesAggregateArgs>(args: Subset<T, CorpusFilesAggregateArgs>): Prisma.PrismaPromise<GetCorpusFilesAggregateType<T>>

    /**
     * Group by CorpusFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends corpusFilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: corpusFilesGroupByArgs['orderBy'] }
        : { orderBy?: corpusFilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, corpusFilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorpusFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the corpusFiles model
   */
  readonly fields: corpusFilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for corpusFiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__corpusFilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    corpus<T extends corpusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, corpusDefaultArgs<ExtArgs>>): Prisma__corpusClient<$Result.GetResult<Prisma.$corpusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    corporaFileChunks<T extends corpusFiles$corporaFileChunksArgs<ExtArgs> = {}>(args?: Subset<T, corpusFiles$corporaFileChunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the corpusFiles model
   */
  interface corpusFilesFieldRefs {
    readonly id: FieldRef<"corpusFiles", 'String'>
    readonly userId: FieldRef<"corpusFiles", 'String'>
    readonly fileName: FieldRef<"corpusFiles", 'String'>
    readonly chunkSize: FieldRef<"corpusFiles", 'Int'>
    readonly chunkOverlap: FieldRef<"corpusFiles", 'Int'>
    readonly createdAt: FieldRef<"corpusFiles", 'DateTime'>
    readonly corpusId: FieldRef<"corpusFiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * corpusFiles findUnique
   */
  export type corpusFilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * Filter, which corpusFiles to fetch.
     */
    where: corpusFilesWhereUniqueInput
  }

  /**
   * corpusFiles findUniqueOrThrow
   */
  export type corpusFilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * Filter, which corpusFiles to fetch.
     */
    where: corpusFilesWhereUniqueInput
  }

  /**
   * corpusFiles findFirst
   */
  export type corpusFilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * Filter, which corpusFiles to fetch.
     */
    where?: corpusFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpusFiles to fetch.
     */
    orderBy?: corpusFilesOrderByWithRelationInput | corpusFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corpusFiles.
     */
    cursor?: corpusFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpusFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpusFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corpusFiles.
     */
    distinct?: CorpusFilesScalarFieldEnum | CorpusFilesScalarFieldEnum[]
  }

  /**
   * corpusFiles findFirstOrThrow
   */
  export type corpusFilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * Filter, which corpusFiles to fetch.
     */
    where?: corpusFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpusFiles to fetch.
     */
    orderBy?: corpusFilesOrderByWithRelationInput | corpusFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corpusFiles.
     */
    cursor?: corpusFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpusFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpusFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corpusFiles.
     */
    distinct?: CorpusFilesScalarFieldEnum | CorpusFilesScalarFieldEnum[]
  }

  /**
   * corpusFiles findMany
   */
  export type corpusFilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * Filter, which corpusFiles to fetch.
     */
    where?: corpusFilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpusFiles to fetch.
     */
    orderBy?: corpusFilesOrderByWithRelationInput | corpusFilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing corpusFiles.
     */
    cursor?: corpusFilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpusFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpusFiles.
     */
    skip?: number
    distinct?: CorpusFilesScalarFieldEnum | CorpusFilesScalarFieldEnum[]
  }

  /**
   * corpusFiles create
   */
  export type corpusFilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * The data needed to create a corpusFiles.
     */
    data: XOR<corpusFilesCreateInput, corpusFilesUncheckedCreateInput>
  }

  /**
   * corpusFiles createMany
   */
  export type corpusFilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many corpusFiles.
     */
    data: corpusFilesCreateManyInput | corpusFilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * corpusFiles createManyAndReturn
   */
  export type corpusFilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * The data used to create many corpusFiles.
     */
    data: corpusFilesCreateManyInput | corpusFilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * corpusFiles update
   */
  export type corpusFilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * The data needed to update a corpusFiles.
     */
    data: XOR<corpusFilesUpdateInput, corpusFilesUncheckedUpdateInput>
    /**
     * Choose, which corpusFiles to update.
     */
    where: corpusFilesWhereUniqueInput
  }

  /**
   * corpusFiles updateMany
   */
  export type corpusFilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update corpusFiles.
     */
    data: XOR<corpusFilesUpdateManyMutationInput, corpusFilesUncheckedUpdateManyInput>
    /**
     * Filter which corpusFiles to update
     */
    where?: corpusFilesWhereInput
    /**
     * Limit how many corpusFiles to update.
     */
    limit?: number
  }

  /**
   * corpusFiles updateManyAndReturn
   */
  export type corpusFilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * The data used to update corpusFiles.
     */
    data: XOR<corpusFilesUpdateManyMutationInput, corpusFilesUncheckedUpdateManyInput>
    /**
     * Filter which corpusFiles to update
     */
    where?: corpusFilesWhereInput
    /**
     * Limit how many corpusFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * corpusFiles upsert
   */
  export type corpusFilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * The filter to search for the corpusFiles to update in case it exists.
     */
    where: corpusFilesWhereUniqueInput
    /**
     * In case the corpusFiles found by the `where` argument doesn't exist, create a new corpusFiles with this data.
     */
    create: XOR<corpusFilesCreateInput, corpusFilesUncheckedCreateInput>
    /**
     * In case the corpusFiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<corpusFilesUpdateInput, corpusFilesUncheckedUpdateInput>
  }

  /**
   * corpusFiles delete
   */
  export type corpusFilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
    /**
     * Filter which corpusFiles to delete.
     */
    where: corpusFilesWhereUniqueInput
  }

  /**
   * corpusFiles deleteMany
   */
  export type corpusFilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corpusFiles to delete
     */
    where?: corpusFilesWhereInput
    /**
     * Limit how many corpusFiles to delete.
     */
    limit?: number
  }

  /**
   * corpusFiles.corporaFileChunks
   */
  export type corpusFiles$corporaFileChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    where?: corpusFileChunksWhereInput
    orderBy?: corpusFileChunksOrderByWithRelationInput | corpusFileChunksOrderByWithRelationInput[]
    cursor?: corpusFileChunksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CorpusFileChunksScalarFieldEnum | CorpusFileChunksScalarFieldEnum[]
  }

  /**
   * corpusFiles without action
   */
  export type corpusFilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFiles
     */
    select?: corpusFilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFiles
     */
    omit?: corpusFilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFilesInclude<ExtArgs> | null
  }


  /**
   * Model corpusFileChunks
   */

  export type AggregateCorpusFileChunks = {
    _count: CorpusFileChunksCountAggregateOutputType | null
    _avg: CorpusFileChunksAvgAggregateOutputType | null
    _sum: CorpusFileChunksSumAggregateOutputType | null
    _min: CorpusFileChunksMinAggregateOutputType | null
    _max: CorpusFileChunksMaxAggregateOutputType | null
  }

  export type CorpusFileChunksAvgAggregateOutputType = {
    id: number | null
  }

  export type CorpusFileChunksSumAggregateOutputType = {
    id: number | null
  }

  export type CorpusFileChunksMinAggregateOutputType = {
    id: number | null
    userId: string | null
    chunk: string | null
    corpusFileId: string | null
  }

  export type CorpusFileChunksMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    chunk: string | null
    corpusFileId: string | null
  }

  export type CorpusFileChunksCountAggregateOutputType = {
    id: number
    userId: number
    chunk: number
    corpusFileId: number
    _all: number
  }


  export type CorpusFileChunksAvgAggregateInputType = {
    id?: true
  }

  export type CorpusFileChunksSumAggregateInputType = {
    id?: true
  }

  export type CorpusFileChunksMinAggregateInputType = {
    id?: true
    userId?: true
    chunk?: true
    corpusFileId?: true
  }

  export type CorpusFileChunksMaxAggregateInputType = {
    id?: true
    userId?: true
    chunk?: true
    corpusFileId?: true
  }

  export type CorpusFileChunksCountAggregateInputType = {
    id?: true
    userId?: true
    chunk?: true
    corpusFileId?: true
    _all?: true
  }

  export type CorpusFileChunksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corpusFileChunks to aggregate.
     */
    where?: corpusFileChunksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpusFileChunks to fetch.
     */
    orderBy?: corpusFileChunksOrderByWithRelationInput | corpusFileChunksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: corpusFileChunksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpusFileChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpusFileChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned corpusFileChunks
    **/
    _count?: true | CorpusFileChunksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CorpusFileChunksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CorpusFileChunksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorpusFileChunksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorpusFileChunksMaxAggregateInputType
  }

  export type GetCorpusFileChunksAggregateType<T extends CorpusFileChunksAggregateArgs> = {
        [P in keyof T & keyof AggregateCorpusFileChunks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorpusFileChunks[P]>
      : GetScalarType<T[P], AggregateCorpusFileChunks[P]>
  }




  export type corpusFileChunksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: corpusFileChunksWhereInput
    orderBy?: corpusFileChunksOrderByWithAggregationInput | corpusFileChunksOrderByWithAggregationInput[]
    by: CorpusFileChunksScalarFieldEnum[] | CorpusFileChunksScalarFieldEnum
    having?: corpusFileChunksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorpusFileChunksCountAggregateInputType | true
    _avg?: CorpusFileChunksAvgAggregateInputType
    _sum?: CorpusFileChunksSumAggregateInputType
    _min?: CorpusFileChunksMinAggregateInputType
    _max?: CorpusFileChunksMaxAggregateInputType
  }

  export type CorpusFileChunksGroupByOutputType = {
    id: number
    userId: string
    chunk: string
    corpusFileId: string
    _count: CorpusFileChunksCountAggregateOutputType | null
    _avg: CorpusFileChunksAvgAggregateOutputType | null
    _sum: CorpusFileChunksSumAggregateOutputType | null
    _min: CorpusFileChunksMinAggregateOutputType | null
    _max: CorpusFileChunksMaxAggregateOutputType | null
  }

  type GetCorpusFileChunksGroupByPayload<T extends corpusFileChunksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorpusFileChunksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorpusFileChunksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorpusFileChunksGroupByOutputType[P]>
            : GetScalarType<T[P], CorpusFileChunksGroupByOutputType[P]>
        }
      >
    >


  export type corpusFileChunksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chunk?: boolean
    corpusFileId?: boolean
    corpusFile?: boolean | corpusFilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corpusFileChunks"]>

  export type corpusFileChunksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chunk?: boolean
    corpusFileId?: boolean
    corpusFile?: boolean | corpusFilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corpusFileChunks"]>

  export type corpusFileChunksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chunk?: boolean
    corpusFileId?: boolean
    corpusFile?: boolean | corpusFilesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corpusFileChunks"]>

  export type corpusFileChunksSelectScalar = {
    id?: boolean
    userId?: boolean
    chunk?: boolean
    corpusFileId?: boolean
  }

  export type corpusFileChunksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "chunk" | "corpusFileId", ExtArgs["result"]["corpusFileChunks"]>
  export type corpusFileChunksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corpusFile?: boolean | corpusFilesDefaultArgs<ExtArgs>
  }
  export type corpusFileChunksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corpusFile?: boolean | corpusFilesDefaultArgs<ExtArgs>
  }
  export type corpusFileChunksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    corpusFile?: boolean | corpusFilesDefaultArgs<ExtArgs>
  }

  export type $corpusFileChunksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "corpusFileChunks"
    objects: {
      corpusFile: Prisma.$corpusFilesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      chunk: string
      corpusFileId: string
    }, ExtArgs["result"]["corpusFileChunks"]>
    composites: {}
  }

  type corpusFileChunksGetPayload<S extends boolean | null | undefined | corpusFileChunksDefaultArgs> = $Result.GetResult<Prisma.$corpusFileChunksPayload, S>

  type corpusFileChunksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<corpusFileChunksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorpusFileChunksCountAggregateInputType | true
    }

  export interface corpusFileChunksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['corpusFileChunks'], meta: { name: 'corpusFileChunks' } }
    /**
     * Find zero or one CorpusFileChunks that matches the filter.
     * @param {corpusFileChunksFindUniqueArgs} args - Arguments to find a CorpusFileChunks
     * @example
     * // Get one CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends corpusFileChunksFindUniqueArgs>(args: SelectSubset<T, corpusFileChunksFindUniqueArgs<ExtArgs>>): Prisma__corpusFileChunksClient<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CorpusFileChunks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {corpusFileChunksFindUniqueOrThrowArgs} args - Arguments to find a CorpusFileChunks
     * @example
     * // Get one CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends corpusFileChunksFindUniqueOrThrowArgs>(args: SelectSubset<T, corpusFileChunksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__corpusFileChunksClient<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CorpusFileChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFileChunksFindFirstArgs} args - Arguments to find a CorpusFileChunks
     * @example
     * // Get one CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends corpusFileChunksFindFirstArgs>(args?: SelectSubset<T, corpusFileChunksFindFirstArgs<ExtArgs>>): Prisma__corpusFileChunksClient<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CorpusFileChunks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFileChunksFindFirstOrThrowArgs} args - Arguments to find a CorpusFileChunks
     * @example
     * // Get one CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends corpusFileChunksFindFirstOrThrowArgs>(args?: SelectSubset<T, corpusFileChunksFindFirstOrThrowArgs<ExtArgs>>): Prisma__corpusFileChunksClient<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CorpusFileChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFileChunksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.findMany()
     * 
     * // Get first 10 CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const corpusFileChunksWithIdOnly = await prisma.corpusFileChunks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends corpusFileChunksFindManyArgs>(args?: SelectSubset<T, corpusFileChunksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CorpusFileChunks.
     * @param {corpusFileChunksCreateArgs} args - Arguments to create a CorpusFileChunks.
     * @example
     * // Create one CorpusFileChunks
     * const CorpusFileChunks = await prisma.corpusFileChunks.create({
     *   data: {
     *     // ... data to create a CorpusFileChunks
     *   }
     * })
     * 
     */
    create<T extends corpusFileChunksCreateArgs>(args: SelectSubset<T, corpusFileChunksCreateArgs<ExtArgs>>): Prisma__corpusFileChunksClient<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CorpusFileChunks.
     * @param {corpusFileChunksCreateManyArgs} args - Arguments to create many CorpusFileChunks.
     * @example
     * // Create many CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends corpusFileChunksCreateManyArgs>(args?: SelectSubset<T, corpusFileChunksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CorpusFileChunks and returns the data saved in the database.
     * @param {corpusFileChunksCreateManyAndReturnArgs} args - Arguments to create many CorpusFileChunks.
     * @example
     * // Create many CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CorpusFileChunks and only return the `id`
     * const corpusFileChunksWithIdOnly = await prisma.corpusFileChunks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends corpusFileChunksCreateManyAndReturnArgs>(args?: SelectSubset<T, corpusFileChunksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CorpusFileChunks.
     * @param {corpusFileChunksDeleteArgs} args - Arguments to delete one CorpusFileChunks.
     * @example
     * // Delete one CorpusFileChunks
     * const CorpusFileChunks = await prisma.corpusFileChunks.delete({
     *   where: {
     *     // ... filter to delete one CorpusFileChunks
     *   }
     * })
     * 
     */
    delete<T extends corpusFileChunksDeleteArgs>(args: SelectSubset<T, corpusFileChunksDeleteArgs<ExtArgs>>): Prisma__corpusFileChunksClient<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CorpusFileChunks.
     * @param {corpusFileChunksUpdateArgs} args - Arguments to update one CorpusFileChunks.
     * @example
     * // Update one CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends corpusFileChunksUpdateArgs>(args: SelectSubset<T, corpusFileChunksUpdateArgs<ExtArgs>>): Prisma__corpusFileChunksClient<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CorpusFileChunks.
     * @param {corpusFileChunksDeleteManyArgs} args - Arguments to filter CorpusFileChunks to delete.
     * @example
     * // Delete a few CorpusFileChunks
     * const { count } = await prisma.corpusFileChunks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends corpusFileChunksDeleteManyArgs>(args?: SelectSubset<T, corpusFileChunksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorpusFileChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFileChunksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends corpusFileChunksUpdateManyArgs>(args: SelectSubset<T, corpusFileChunksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorpusFileChunks and returns the data updated in the database.
     * @param {corpusFileChunksUpdateManyAndReturnArgs} args - Arguments to update many CorpusFileChunks.
     * @example
     * // Update many CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CorpusFileChunks and only return the `id`
     * const corpusFileChunksWithIdOnly = await prisma.corpusFileChunks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends corpusFileChunksUpdateManyAndReturnArgs>(args: SelectSubset<T, corpusFileChunksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CorpusFileChunks.
     * @param {corpusFileChunksUpsertArgs} args - Arguments to update or create a CorpusFileChunks.
     * @example
     * // Update or create a CorpusFileChunks
     * const corpusFileChunks = await prisma.corpusFileChunks.upsert({
     *   create: {
     *     // ... data to create a CorpusFileChunks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CorpusFileChunks we want to update
     *   }
     * })
     */
    upsert<T extends corpusFileChunksUpsertArgs>(args: SelectSubset<T, corpusFileChunksUpsertArgs<ExtArgs>>): Prisma__corpusFileChunksClient<$Result.GetResult<Prisma.$corpusFileChunksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CorpusFileChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFileChunksCountArgs} args - Arguments to filter CorpusFileChunks to count.
     * @example
     * // Count the number of CorpusFileChunks
     * const count = await prisma.corpusFileChunks.count({
     *   where: {
     *     // ... the filter for the CorpusFileChunks we want to count
     *   }
     * })
    **/
    count<T extends corpusFileChunksCountArgs>(
      args?: Subset<T, corpusFileChunksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorpusFileChunksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CorpusFileChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorpusFileChunksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CorpusFileChunksAggregateArgs>(args: Subset<T, CorpusFileChunksAggregateArgs>): Prisma.PrismaPromise<GetCorpusFileChunksAggregateType<T>>

    /**
     * Group by CorpusFileChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {corpusFileChunksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends corpusFileChunksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: corpusFileChunksGroupByArgs['orderBy'] }
        : { orderBy?: corpusFileChunksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, corpusFileChunksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorpusFileChunksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the corpusFileChunks model
   */
  readonly fields: corpusFileChunksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for corpusFileChunks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__corpusFileChunksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    corpusFile<T extends corpusFilesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, corpusFilesDefaultArgs<ExtArgs>>): Prisma__corpusFilesClient<$Result.GetResult<Prisma.$corpusFilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the corpusFileChunks model
   */
  interface corpusFileChunksFieldRefs {
    readonly id: FieldRef<"corpusFileChunks", 'Int'>
    readonly userId: FieldRef<"corpusFileChunks", 'String'>
    readonly chunk: FieldRef<"corpusFileChunks", 'String'>
    readonly corpusFileId: FieldRef<"corpusFileChunks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * corpusFileChunks findUnique
   */
  export type corpusFileChunksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * Filter, which corpusFileChunks to fetch.
     */
    where: corpusFileChunksWhereUniqueInput
  }

  /**
   * corpusFileChunks findUniqueOrThrow
   */
  export type corpusFileChunksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * Filter, which corpusFileChunks to fetch.
     */
    where: corpusFileChunksWhereUniqueInput
  }

  /**
   * corpusFileChunks findFirst
   */
  export type corpusFileChunksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * Filter, which corpusFileChunks to fetch.
     */
    where?: corpusFileChunksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpusFileChunks to fetch.
     */
    orderBy?: corpusFileChunksOrderByWithRelationInput | corpusFileChunksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corpusFileChunks.
     */
    cursor?: corpusFileChunksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpusFileChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpusFileChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corpusFileChunks.
     */
    distinct?: CorpusFileChunksScalarFieldEnum | CorpusFileChunksScalarFieldEnum[]
  }

  /**
   * corpusFileChunks findFirstOrThrow
   */
  export type corpusFileChunksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * Filter, which corpusFileChunks to fetch.
     */
    where?: corpusFileChunksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpusFileChunks to fetch.
     */
    orderBy?: corpusFileChunksOrderByWithRelationInput | corpusFileChunksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for corpusFileChunks.
     */
    cursor?: corpusFileChunksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpusFileChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpusFileChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of corpusFileChunks.
     */
    distinct?: CorpusFileChunksScalarFieldEnum | CorpusFileChunksScalarFieldEnum[]
  }

  /**
   * corpusFileChunks findMany
   */
  export type corpusFileChunksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * Filter, which corpusFileChunks to fetch.
     */
    where?: corpusFileChunksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of corpusFileChunks to fetch.
     */
    orderBy?: corpusFileChunksOrderByWithRelationInput | corpusFileChunksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing corpusFileChunks.
     */
    cursor?: corpusFileChunksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` corpusFileChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` corpusFileChunks.
     */
    skip?: number
    distinct?: CorpusFileChunksScalarFieldEnum | CorpusFileChunksScalarFieldEnum[]
  }

  /**
   * corpusFileChunks create
   */
  export type corpusFileChunksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * The data needed to create a corpusFileChunks.
     */
    data: XOR<corpusFileChunksCreateInput, corpusFileChunksUncheckedCreateInput>
  }

  /**
   * corpusFileChunks createMany
   */
  export type corpusFileChunksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many corpusFileChunks.
     */
    data: corpusFileChunksCreateManyInput | corpusFileChunksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * corpusFileChunks createManyAndReturn
   */
  export type corpusFileChunksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * The data used to create many corpusFileChunks.
     */
    data: corpusFileChunksCreateManyInput | corpusFileChunksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * corpusFileChunks update
   */
  export type corpusFileChunksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * The data needed to update a corpusFileChunks.
     */
    data: XOR<corpusFileChunksUpdateInput, corpusFileChunksUncheckedUpdateInput>
    /**
     * Choose, which corpusFileChunks to update.
     */
    where: corpusFileChunksWhereUniqueInput
  }

  /**
   * corpusFileChunks updateMany
   */
  export type corpusFileChunksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update corpusFileChunks.
     */
    data: XOR<corpusFileChunksUpdateManyMutationInput, corpusFileChunksUncheckedUpdateManyInput>
    /**
     * Filter which corpusFileChunks to update
     */
    where?: corpusFileChunksWhereInput
    /**
     * Limit how many corpusFileChunks to update.
     */
    limit?: number
  }

  /**
   * corpusFileChunks updateManyAndReturn
   */
  export type corpusFileChunksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * The data used to update corpusFileChunks.
     */
    data: XOR<corpusFileChunksUpdateManyMutationInput, corpusFileChunksUncheckedUpdateManyInput>
    /**
     * Filter which corpusFileChunks to update
     */
    where?: corpusFileChunksWhereInput
    /**
     * Limit how many corpusFileChunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * corpusFileChunks upsert
   */
  export type corpusFileChunksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * The filter to search for the corpusFileChunks to update in case it exists.
     */
    where: corpusFileChunksWhereUniqueInput
    /**
     * In case the corpusFileChunks found by the `where` argument doesn't exist, create a new corpusFileChunks with this data.
     */
    create: XOR<corpusFileChunksCreateInput, corpusFileChunksUncheckedCreateInput>
    /**
     * In case the corpusFileChunks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<corpusFileChunksUpdateInput, corpusFileChunksUncheckedUpdateInput>
  }

  /**
   * corpusFileChunks delete
   */
  export type corpusFileChunksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
    /**
     * Filter which corpusFileChunks to delete.
     */
    where: corpusFileChunksWhereUniqueInput
  }

  /**
   * corpusFileChunks deleteMany
   */
  export type corpusFileChunksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which corpusFileChunks to delete
     */
    where?: corpusFileChunksWhereInput
    /**
     * Limit how many corpusFileChunks to delete.
     */
    limit?: number
  }

  /**
   * corpusFileChunks without action
   */
  export type corpusFileChunksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the corpusFileChunks
     */
    select?: corpusFileChunksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the corpusFileChunks
     */
    omit?: corpusFileChunksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: corpusFileChunksInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CorpusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CorpusScalarFieldEnum = (typeof CorpusScalarFieldEnum)[keyof typeof CorpusScalarFieldEnum]


  export const CorpusFilesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fileName: 'fileName',
    chunkSize: 'chunkSize',
    chunkOverlap: 'chunkOverlap',
    createdAt: 'createdAt',
    corpusId: 'corpusId'
  };

  export type CorpusFilesScalarFieldEnum = (typeof CorpusFilesScalarFieldEnum)[keyof typeof CorpusFilesScalarFieldEnum]


  export const CorpusFileChunksScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chunk: 'chunk',
    corpusFileId: 'corpusFileId'
  };

  export type CorpusFileChunksScalarFieldEnum = (typeof CorpusFileChunksScalarFieldEnum)[keyof typeof CorpusFileChunksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type corpusWhereInput = {
    AND?: corpusWhereInput | corpusWhereInput[]
    OR?: corpusWhereInput[]
    NOT?: corpusWhereInput | corpusWhereInput[]
    id?: StringFilter<"corpus"> | string
    userId?: StringFilter<"corpus"> | string
    name?: StringFilter<"corpus"> | string
    description?: StringFilter<"corpus"> | string
    createdAt?: DateTimeFilter<"corpus"> | Date | string
    corpusFiles?: CorpusFilesListRelationFilter
  }

  export type corpusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    corpusFiles?: corpusFilesOrderByRelationAggregateInput
  }

  export type corpusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: corpusUserIdNameCompoundUniqueInput
    AND?: corpusWhereInput | corpusWhereInput[]
    OR?: corpusWhereInput[]
    NOT?: corpusWhereInput | corpusWhereInput[]
    userId?: StringFilter<"corpus"> | string
    name?: StringFilter<"corpus"> | string
    description?: StringFilter<"corpus"> | string
    createdAt?: DateTimeFilter<"corpus"> | Date | string
    corpusFiles?: CorpusFilesListRelationFilter
  }, "id" | "userId_name">

  export type corpusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: corpusCountOrderByAggregateInput
    _max?: corpusMaxOrderByAggregateInput
    _min?: corpusMinOrderByAggregateInput
  }

  export type corpusScalarWhereWithAggregatesInput = {
    AND?: corpusScalarWhereWithAggregatesInput | corpusScalarWhereWithAggregatesInput[]
    OR?: corpusScalarWhereWithAggregatesInput[]
    NOT?: corpusScalarWhereWithAggregatesInput | corpusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"corpus"> | string
    userId?: StringWithAggregatesFilter<"corpus"> | string
    name?: StringWithAggregatesFilter<"corpus"> | string
    description?: StringWithAggregatesFilter<"corpus"> | string
    createdAt?: DateTimeWithAggregatesFilter<"corpus"> | Date | string
  }

  export type corpusFilesWhereInput = {
    AND?: corpusFilesWhereInput | corpusFilesWhereInput[]
    OR?: corpusFilesWhereInput[]
    NOT?: corpusFilesWhereInput | corpusFilesWhereInput[]
    id?: StringFilter<"corpusFiles"> | string
    userId?: StringFilter<"corpusFiles"> | string
    fileName?: StringFilter<"corpusFiles"> | string
    chunkSize?: IntFilter<"corpusFiles"> | number
    chunkOverlap?: IntFilter<"corpusFiles"> | number
    createdAt?: DateTimeFilter<"corpusFiles"> | Date | string
    corpusId?: StringFilter<"corpusFiles"> | string
    corpus?: XOR<CorpusScalarRelationFilter, corpusWhereInput>
    corporaFileChunks?: CorpusFileChunksListRelationFilter
  }

  export type corpusFilesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    chunkSize?: SortOrder
    chunkOverlap?: SortOrder
    createdAt?: SortOrder
    corpusId?: SortOrder
    corpus?: corpusOrderByWithRelationInput
    corporaFileChunks?: corpusFileChunksOrderByRelationAggregateInput
  }

  export type corpusFilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: corpusFilesWhereInput | corpusFilesWhereInput[]
    OR?: corpusFilesWhereInput[]
    NOT?: corpusFilesWhereInput | corpusFilesWhereInput[]
    userId?: StringFilter<"corpusFiles"> | string
    fileName?: StringFilter<"corpusFiles"> | string
    chunkSize?: IntFilter<"corpusFiles"> | number
    chunkOverlap?: IntFilter<"corpusFiles"> | number
    createdAt?: DateTimeFilter<"corpusFiles"> | Date | string
    corpusId?: StringFilter<"corpusFiles"> | string
    corpus?: XOR<CorpusScalarRelationFilter, corpusWhereInput>
    corporaFileChunks?: CorpusFileChunksListRelationFilter
  }, "id">

  export type corpusFilesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    chunkSize?: SortOrder
    chunkOverlap?: SortOrder
    createdAt?: SortOrder
    corpusId?: SortOrder
    _count?: corpusFilesCountOrderByAggregateInput
    _avg?: corpusFilesAvgOrderByAggregateInput
    _max?: corpusFilesMaxOrderByAggregateInput
    _min?: corpusFilesMinOrderByAggregateInput
    _sum?: corpusFilesSumOrderByAggregateInput
  }

  export type corpusFilesScalarWhereWithAggregatesInput = {
    AND?: corpusFilesScalarWhereWithAggregatesInput | corpusFilesScalarWhereWithAggregatesInput[]
    OR?: corpusFilesScalarWhereWithAggregatesInput[]
    NOT?: corpusFilesScalarWhereWithAggregatesInput | corpusFilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"corpusFiles"> | string
    userId?: StringWithAggregatesFilter<"corpusFiles"> | string
    fileName?: StringWithAggregatesFilter<"corpusFiles"> | string
    chunkSize?: IntWithAggregatesFilter<"corpusFiles"> | number
    chunkOverlap?: IntWithAggregatesFilter<"corpusFiles"> | number
    createdAt?: DateTimeWithAggregatesFilter<"corpusFiles"> | Date | string
    corpusId?: StringWithAggregatesFilter<"corpusFiles"> | string
  }

  export type corpusFileChunksWhereInput = {
    AND?: corpusFileChunksWhereInput | corpusFileChunksWhereInput[]
    OR?: corpusFileChunksWhereInput[]
    NOT?: corpusFileChunksWhereInput | corpusFileChunksWhereInput[]
    id?: IntFilter<"corpusFileChunks"> | number
    userId?: StringFilter<"corpusFileChunks"> | string
    chunk?: StringFilter<"corpusFileChunks"> | string
    corpusFileId?: StringFilter<"corpusFileChunks"> | string
    corpusFile?: XOR<CorpusFilesScalarRelationFilter, corpusFilesWhereInput>
  }

  export type corpusFileChunksOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chunk?: SortOrder
    corpusFileId?: SortOrder
    corpusFile?: corpusFilesOrderByWithRelationInput
  }

  export type corpusFileChunksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: corpusFileChunksWhereInput | corpusFileChunksWhereInput[]
    OR?: corpusFileChunksWhereInput[]
    NOT?: corpusFileChunksWhereInput | corpusFileChunksWhereInput[]
    userId?: StringFilter<"corpusFileChunks"> | string
    chunk?: StringFilter<"corpusFileChunks"> | string
    corpusFileId?: StringFilter<"corpusFileChunks"> | string
    corpusFile?: XOR<CorpusFilesScalarRelationFilter, corpusFilesWhereInput>
  }, "id">

  export type corpusFileChunksOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chunk?: SortOrder
    corpusFileId?: SortOrder
    _count?: corpusFileChunksCountOrderByAggregateInput
    _avg?: corpusFileChunksAvgOrderByAggregateInput
    _max?: corpusFileChunksMaxOrderByAggregateInput
    _min?: corpusFileChunksMinOrderByAggregateInput
    _sum?: corpusFileChunksSumOrderByAggregateInput
  }

  export type corpusFileChunksScalarWhereWithAggregatesInput = {
    AND?: corpusFileChunksScalarWhereWithAggregatesInput | corpusFileChunksScalarWhereWithAggregatesInput[]
    OR?: corpusFileChunksScalarWhereWithAggregatesInput[]
    NOT?: corpusFileChunksScalarWhereWithAggregatesInput | corpusFileChunksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"corpusFileChunks"> | number
    userId?: StringWithAggregatesFilter<"corpusFileChunks"> | string
    chunk?: StringWithAggregatesFilter<"corpusFileChunks"> | string
    corpusFileId?: StringWithAggregatesFilter<"corpusFileChunks"> | string
  }

  export type corpusCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
    corpusFiles?: corpusFilesCreateNestedManyWithoutCorpusInput
  }

  export type corpusUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
    corpusFiles?: corpusFilesUncheckedCreateNestedManyWithoutCorpusInput
  }

  export type corpusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corpusFiles?: corpusFilesUpdateManyWithoutCorpusNestedInput
  }

  export type corpusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corpusFiles?: corpusFilesUncheckedUpdateManyWithoutCorpusNestedInput
  }

  export type corpusCreateManyInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
  }

  export type corpusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type corpusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type corpusFilesCreateInput = {
    id?: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt?: Date | string
    corpus: corpusCreateNestedOneWithoutCorpusFilesInput
    corporaFileChunks?: corpusFileChunksCreateNestedManyWithoutCorpusFileInput
  }

  export type corpusFilesUncheckedCreateInput = {
    id?: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt?: Date | string
    corpusId: string
    corporaFileChunks?: corpusFileChunksUncheckedCreateNestedManyWithoutCorpusFileInput
  }

  export type corpusFilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corpus?: corpusUpdateOneRequiredWithoutCorpusFilesNestedInput
    corporaFileChunks?: corpusFileChunksUpdateManyWithoutCorpusFileNestedInput
  }

  export type corpusFilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corpusId?: StringFieldUpdateOperationsInput | string
    corporaFileChunks?: corpusFileChunksUncheckedUpdateManyWithoutCorpusFileNestedInput
  }

  export type corpusFilesCreateManyInput = {
    id?: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt?: Date | string
    corpusId: string
  }

  export type corpusFilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type corpusFilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corpusId?: StringFieldUpdateOperationsInput | string
  }

  export type corpusFileChunksCreateInput = {
    userId: string
    chunk: string
    corpusFile: corpusFilesCreateNestedOneWithoutCorporaFileChunksInput
  }

  export type corpusFileChunksUncheckedCreateInput = {
    id?: number
    userId: string
    chunk: string
    corpusFileId: string
  }

  export type corpusFileChunksUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    chunk?: StringFieldUpdateOperationsInput | string
    corpusFile?: corpusFilesUpdateOneRequiredWithoutCorporaFileChunksNestedInput
  }

  export type corpusFileChunksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    chunk?: StringFieldUpdateOperationsInput | string
    corpusFileId?: StringFieldUpdateOperationsInput | string
  }

  export type corpusFileChunksCreateManyInput = {
    id?: number
    userId: string
    chunk: string
    corpusFileId: string
  }

  export type corpusFileChunksUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    chunk?: StringFieldUpdateOperationsInput | string
  }

  export type corpusFileChunksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    chunk?: StringFieldUpdateOperationsInput | string
    corpusFileId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CorpusFilesListRelationFilter = {
    every?: corpusFilesWhereInput
    some?: corpusFilesWhereInput
    none?: corpusFilesWhereInput
  }

  export type corpusFilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type corpusUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type corpusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type corpusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type corpusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CorpusScalarRelationFilter = {
    is?: corpusWhereInput
    isNot?: corpusWhereInput
  }

  export type CorpusFileChunksListRelationFilter = {
    every?: corpusFileChunksWhereInput
    some?: corpusFileChunksWhereInput
    none?: corpusFileChunksWhereInput
  }

  export type corpusFileChunksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type corpusFilesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    chunkSize?: SortOrder
    chunkOverlap?: SortOrder
    createdAt?: SortOrder
    corpusId?: SortOrder
  }

  export type corpusFilesAvgOrderByAggregateInput = {
    chunkSize?: SortOrder
    chunkOverlap?: SortOrder
  }

  export type corpusFilesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    chunkSize?: SortOrder
    chunkOverlap?: SortOrder
    createdAt?: SortOrder
    corpusId?: SortOrder
  }

  export type corpusFilesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fileName?: SortOrder
    chunkSize?: SortOrder
    chunkOverlap?: SortOrder
    createdAt?: SortOrder
    corpusId?: SortOrder
  }

  export type corpusFilesSumOrderByAggregateInput = {
    chunkSize?: SortOrder
    chunkOverlap?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CorpusFilesScalarRelationFilter = {
    is?: corpusFilesWhereInput
    isNot?: corpusFilesWhereInput
  }

  export type corpusFileChunksCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chunk?: SortOrder
    corpusFileId?: SortOrder
  }

  export type corpusFileChunksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type corpusFileChunksMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chunk?: SortOrder
    corpusFileId?: SortOrder
  }

  export type corpusFileChunksMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chunk?: SortOrder
    corpusFileId?: SortOrder
  }

  export type corpusFileChunksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type corpusFilesCreateNestedManyWithoutCorpusInput = {
    create?: XOR<corpusFilesCreateWithoutCorpusInput, corpusFilesUncheckedCreateWithoutCorpusInput> | corpusFilesCreateWithoutCorpusInput[] | corpusFilesUncheckedCreateWithoutCorpusInput[]
    connectOrCreate?: corpusFilesCreateOrConnectWithoutCorpusInput | corpusFilesCreateOrConnectWithoutCorpusInput[]
    createMany?: corpusFilesCreateManyCorpusInputEnvelope
    connect?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
  }

  export type corpusFilesUncheckedCreateNestedManyWithoutCorpusInput = {
    create?: XOR<corpusFilesCreateWithoutCorpusInput, corpusFilesUncheckedCreateWithoutCorpusInput> | corpusFilesCreateWithoutCorpusInput[] | corpusFilesUncheckedCreateWithoutCorpusInput[]
    connectOrCreate?: corpusFilesCreateOrConnectWithoutCorpusInput | corpusFilesCreateOrConnectWithoutCorpusInput[]
    createMany?: corpusFilesCreateManyCorpusInputEnvelope
    connect?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type corpusFilesUpdateManyWithoutCorpusNestedInput = {
    create?: XOR<corpusFilesCreateWithoutCorpusInput, corpusFilesUncheckedCreateWithoutCorpusInput> | corpusFilesCreateWithoutCorpusInput[] | corpusFilesUncheckedCreateWithoutCorpusInput[]
    connectOrCreate?: corpusFilesCreateOrConnectWithoutCorpusInput | corpusFilesCreateOrConnectWithoutCorpusInput[]
    upsert?: corpusFilesUpsertWithWhereUniqueWithoutCorpusInput | corpusFilesUpsertWithWhereUniqueWithoutCorpusInput[]
    createMany?: corpusFilesCreateManyCorpusInputEnvelope
    set?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
    disconnect?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
    delete?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
    connect?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
    update?: corpusFilesUpdateWithWhereUniqueWithoutCorpusInput | corpusFilesUpdateWithWhereUniqueWithoutCorpusInput[]
    updateMany?: corpusFilesUpdateManyWithWhereWithoutCorpusInput | corpusFilesUpdateManyWithWhereWithoutCorpusInput[]
    deleteMany?: corpusFilesScalarWhereInput | corpusFilesScalarWhereInput[]
  }

  export type corpusFilesUncheckedUpdateManyWithoutCorpusNestedInput = {
    create?: XOR<corpusFilesCreateWithoutCorpusInput, corpusFilesUncheckedCreateWithoutCorpusInput> | corpusFilesCreateWithoutCorpusInput[] | corpusFilesUncheckedCreateWithoutCorpusInput[]
    connectOrCreate?: corpusFilesCreateOrConnectWithoutCorpusInput | corpusFilesCreateOrConnectWithoutCorpusInput[]
    upsert?: corpusFilesUpsertWithWhereUniqueWithoutCorpusInput | corpusFilesUpsertWithWhereUniqueWithoutCorpusInput[]
    createMany?: corpusFilesCreateManyCorpusInputEnvelope
    set?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
    disconnect?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
    delete?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
    connect?: corpusFilesWhereUniqueInput | corpusFilesWhereUniqueInput[]
    update?: corpusFilesUpdateWithWhereUniqueWithoutCorpusInput | corpusFilesUpdateWithWhereUniqueWithoutCorpusInput[]
    updateMany?: corpusFilesUpdateManyWithWhereWithoutCorpusInput | corpusFilesUpdateManyWithWhereWithoutCorpusInput[]
    deleteMany?: corpusFilesScalarWhereInput | corpusFilesScalarWhereInput[]
  }

  export type corpusCreateNestedOneWithoutCorpusFilesInput = {
    create?: XOR<corpusCreateWithoutCorpusFilesInput, corpusUncheckedCreateWithoutCorpusFilesInput>
    connectOrCreate?: corpusCreateOrConnectWithoutCorpusFilesInput
    connect?: corpusWhereUniqueInput
  }

  export type corpusFileChunksCreateNestedManyWithoutCorpusFileInput = {
    create?: XOR<corpusFileChunksCreateWithoutCorpusFileInput, corpusFileChunksUncheckedCreateWithoutCorpusFileInput> | corpusFileChunksCreateWithoutCorpusFileInput[] | corpusFileChunksUncheckedCreateWithoutCorpusFileInput[]
    connectOrCreate?: corpusFileChunksCreateOrConnectWithoutCorpusFileInput | corpusFileChunksCreateOrConnectWithoutCorpusFileInput[]
    createMany?: corpusFileChunksCreateManyCorpusFileInputEnvelope
    connect?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
  }

  export type corpusFileChunksUncheckedCreateNestedManyWithoutCorpusFileInput = {
    create?: XOR<corpusFileChunksCreateWithoutCorpusFileInput, corpusFileChunksUncheckedCreateWithoutCorpusFileInput> | corpusFileChunksCreateWithoutCorpusFileInput[] | corpusFileChunksUncheckedCreateWithoutCorpusFileInput[]
    connectOrCreate?: corpusFileChunksCreateOrConnectWithoutCorpusFileInput | corpusFileChunksCreateOrConnectWithoutCorpusFileInput[]
    createMany?: corpusFileChunksCreateManyCorpusFileInputEnvelope
    connect?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type corpusUpdateOneRequiredWithoutCorpusFilesNestedInput = {
    create?: XOR<corpusCreateWithoutCorpusFilesInput, corpusUncheckedCreateWithoutCorpusFilesInput>
    connectOrCreate?: corpusCreateOrConnectWithoutCorpusFilesInput
    upsert?: corpusUpsertWithoutCorpusFilesInput
    connect?: corpusWhereUniqueInput
    update?: XOR<XOR<corpusUpdateToOneWithWhereWithoutCorpusFilesInput, corpusUpdateWithoutCorpusFilesInput>, corpusUncheckedUpdateWithoutCorpusFilesInput>
  }

  export type corpusFileChunksUpdateManyWithoutCorpusFileNestedInput = {
    create?: XOR<corpusFileChunksCreateWithoutCorpusFileInput, corpusFileChunksUncheckedCreateWithoutCorpusFileInput> | corpusFileChunksCreateWithoutCorpusFileInput[] | corpusFileChunksUncheckedCreateWithoutCorpusFileInput[]
    connectOrCreate?: corpusFileChunksCreateOrConnectWithoutCorpusFileInput | corpusFileChunksCreateOrConnectWithoutCorpusFileInput[]
    upsert?: corpusFileChunksUpsertWithWhereUniqueWithoutCorpusFileInput | corpusFileChunksUpsertWithWhereUniqueWithoutCorpusFileInput[]
    createMany?: corpusFileChunksCreateManyCorpusFileInputEnvelope
    set?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
    disconnect?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
    delete?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
    connect?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
    update?: corpusFileChunksUpdateWithWhereUniqueWithoutCorpusFileInput | corpusFileChunksUpdateWithWhereUniqueWithoutCorpusFileInput[]
    updateMany?: corpusFileChunksUpdateManyWithWhereWithoutCorpusFileInput | corpusFileChunksUpdateManyWithWhereWithoutCorpusFileInput[]
    deleteMany?: corpusFileChunksScalarWhereInput | corpusFileChunksScalarWhereInput[]
  }

  export type corpusFileChunksUncheckedUpdateManyWithoutCorpusFileNestedInput = {
    create?: XOR<corpusFileChunksCreateWithoutCorpusFileInput, corpusFileChunksUncheckedCreateWithoutCorpusFileInput> | corpusFileChunksCreateWithoutCorpusFileInput[] | corpusFileChunksUncheckedCreateWithoutCorpusFileInput[]
    connectOrCreate?: corpusFileChunksCreateOrConnectWithoutCorpusFileInput | corpusFileChunksCreateOrConnectWithoutCorpusFileInput[]
    upsert?: corpusFileChunksUpsertWithWhereUniqueWithoutCorpusFileInput | corpusFileChunksUpsertWithWhereUniqueWithoutCorpusFileInput[]
    createMany?: corpusFileChunksCreateManyCorpusFileInputEnvelope
    set?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
    disconnect?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
    delete?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
    connect?: corpusFileChunksWhereUniqueInput | corpusFileChunksWhereUniqueInput[]
    update?: corpusFileChunksUpdateWithWhereUniqueWithoutCorpusFileInput | corpusFileChunksUpdateWithWhereUniqueWithoutCorpusFileInput[]
    updateMany?: corpusFileChunksUpdateManyWithWhereWithoutCorpusFileInput | corpusFileChunksUpdateManyWithWhereWithoutCorpusFileInput[]
    deleteMany?: corpusFileChunksScalarWhereInput | corpusFileChunksScalarWhereInput[]
  }

  export type corpusFilesCreateNestedOneWithoutCorporaFileChunksInput = {
    create?: XOR<corpusFilesCreateWithoutCorporaFileChunksInput, corpusFilesUncheckedCreateWithoutCorporaFileChunksInput>
    connectOrCreate?: corpusFilesCreateOrConnectWithoutCorporaFileChunksInput
    connect?: corpusFilesWhereUniqueInput
  }

  export type corpusFilesUpdateOneRequiredWithoutCorporaFileChunksNestedInput = {
    create?: XOR<corpusFilesCreateWithoutCorporaFileChunksInput, corpusFilesUncheckedCreateWithoutCorporaFileChunksInput>
    connectOrCreate?: corpusFilesCreateOrConnectWithoutCorporaFileChunksInput
    upsert?: corpusFilesUpsertWithoutCorporaFileChunksInput
    connect?: corpusFilesWhereUniqueInput
    update?: XOR<XOR<corpusFilesUpdateToOneWithWhereWithoutCorporaFileChunksInput, corpusFilesUpdateWithoutCorporaFileChunksInput>, corpusFilesUncheckedUpdateWithoutCorporaFileChunksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type corpusFilesCreateWithoutCorpusInput = {
    id?: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt?: Date | string
    corporaFileChunks?: corpusFileChunksCreateNestedManyWithoutCorpusFileInput
  }

  export type corpusFilesUncheckedCreateWithoutCorpusInput = {
    id?: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt?: Date | string
    corporaFileChunks?: corpusFileChunksUncheckedCreateNestedManyWithoutCorpusFileInput
  }

  export type corpusFilesCreateOrConnectWithoutCorpusInput = {
    where: corpusFilesWhereUniqueInput
    create: XOR<corpusFilesCreateWithoutCorpusInput, corpusFilesUncheckedCreateWithoutCorpusInput>
  }

  export type corpusFilesCreateManyCorpusInputEnvelope = {
    data: corpusFilesCreateManyCorpusInput | corpusFilesCreateManyCorpusInput[]
    skipDuplicates?: boolean
  }

  export type corpusFilesUpsertWithWhereUniqueWithoutCorpusInput = {
    where: corpusFilesWhereUniqueInput
    update: XOR<corpusFilesUpdateWithoutCorpusInput, corpusFilesUncheckedUpdateWithoutCorpusInput>
    create: XOR<corpusFilesCreateWithoutCorpusInput, corpusFilesUncheckedCreateWithoutCorpusInput>
  }

  export type corpusFilesUpdateWithWhereUniqueWithoutCorpusInput = {
    where: corpusFilesWhereUniqueInput
    data: XOR<corpusFilesUpdateWithoutCorpusInput, corpusFilesUncheckedUpdateWithoutCorpusInput>
  }

  export type corpusFilesUpdateManyWithWhereWithoutCorpusInput = {
    where: corpusFilesScalarWhereInput
    data: XOR<corpusFilesUpdateManyMutationInput, corpusFilesUncheckedUpdateManyWithoutCorpusInput>
  }

  export type corpusFilesScalarWhereInput = {
    AND?: corpusFilesScalarWhereInput | corpusFilesScalarWhereInput[]
    OR?: corpusFilesScalarWhereInput[]
    NOT?: corpusFilesScalarWhereInput | corpusFilesScalarWhereInput[]
    id?: StringFilter<"corpusFiles"> | string
    userId?: StringFilter<"corpusFiles"> | string
    fileName?: StringFilter<"corpusFiles"> | string
    chunkSize?: IntFilter<"corpusFiles"> | number
    chunkOverlap?: IntFilter<"corpusFiles"> | number
    createdAt?: DateTimeFilter<"corpusFiles"> | Date | string
    corpusId?: StringFilter<"corpusFiles"> | string
  }

  export type corpusCreateWithoutCorpusFilesInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
  }

  export type corpusUncheckedCreateWithoutCorpusFilesInput = {
    id?: string
    userId: string
    name: string
    description: string
    createdAt?: Date | string
  }

  export type corpusCreateOrConnectWithoutCorpusFilesInput = {
    where: corpusWhereUniqueInput
    create: XOR<corpusCreateWithoutCorpusFilesInput, corpusUncheckedCreateWithoutCorpusFilesInput>
  }

  export type corpusFileChunksCreateWithoutCorpusFileInput = {
    userId: string
    chunk: string
  }

  export type corpusFileChunksUncheckedCreateWithoutCorpusFileInput = {
    id?: number
    userId: string
    chunk: string
  }

  export type corpusFileChunksCreateOrConnectWithoutCorpusFileInput = {
    where: corpusFileChunksWhereUniqueInput
    create: XOR<corpusFileChunksCreateWithoutCorpusFileInput, corpusFileChunksUncheckedCreateWithoutCorpusFileInput>
  }

  export type corpusFileChunksCreateManyCorpusFileInputEnvelope = {
    data: corpusFileChunksCreateManyCorpusFileInput | corpusFileChunksCreateManyCorpusFileInput[]
    skipDuplicates?: boolean
  }

  export type corpusUpsertWithoutCorpusFilesInput = {
    update: XOR<corpusUpdateWithoutCorpusFilesInput, corpusUncheckedUpdateWithoutCorpusFilesInput>
    create: XOR<corpusCreateWithoutCorpusFilesInput, corpusUncheckedCreateWithoutCorpusFilesInput>
    where?: corpusWhereInput
  }

  export type corpusUpdateToOneWithWhereWithoutCorpusFilesInput = {
    where?: corpusWhereInput
    data: XOR<corpusUpdateWithoutCorpusFilesInput, corpusUncheckedUpdateWithoutCorpusFilesInput>
  }

  export type corpusUpdateWithoutCorpusFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type corpusUncheckedUpdateWithoutCorpusFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type corpusFileChunksUpsertWithWhereUniqueWithoutCorpusFileInput = {
    where: corpusFileChunksWhereUniqueInput
    update: XOR<corpusFileChunksUpdateWithoutCorpusFileInput, corpusFileChunksUncheckedUpdateWithoutCorpusFileInput>
    create: XOR<corpusFileChunksCreateWithoutCorpusFileInput, corpusFileChunksUncheckedCreateWithoutCorpusFileInput>
  }

  export type corpusFileChunksUpdateWithWhereUniqueWithoutCorpusFileInput = {
    where: corpusFileChunksWhereUniqueInput
    data: XOR<corpusFileChunksUpdateWithoutCorpusFileInput, corpusFileChunksUncheckedUpdateWithoutCorpusFileInput>
  }

  export type corpusFileChunksUpdateManyWithWhereWithoutCorpusFileInput = {
    where: corpusFileChunksScalarWhereInput
    data: XOR<corpusFileChunksUpdateManyMutationInput, corpusFileChunksUncheckedUpdateManyWithoutCorpusFileInput>
  }

  export type corpusFileChunksScalarWhereInput = {
    AND?: corpusFileChunksScalarWhereInput | corpusFileChunksScalarWhereInput[]
    OR?: corpusFileChunksScalarWhereInput[]
    NOT?: corpusFileChunksScalarWhereInput | corpusFileChunksScalarWhereInput[]
    id?: IntFilter<"corpusFileChunks"> | number
    userId?: StringFilter<"corpusFileChunks"> | string
    chunk?: StringFilter<"corpusFileChunks"> | string
    corpusFileId?: StringFilter<"corpusFileChunks"> | string
  }

  export type corpusFilesCreateWithoutCorporaFileChunksInput = {
    id?: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt?: Date | string
    corpus: corpusCreateNestedOneWithoutCorpusFilesInput
  }

  export type corpusFilesUncheckedCreateWithoutCorporaFileChunksInput = {
    id?: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt?: Date | string
    corpusId: string
  }

  export type corpusFilesCreateOrConnectWithoutCorporaFileChunksInput = {
    where: corpusFilesWhereUniqueInput
    create: XOR<corpusFilesCreateWithoutCorporaFileChunksInput, corpusFilesUncheckedCreateWithoutCorporaFileChunksInput>
  }

  export type corpusFilesUpsertWithoutCorporaFileChunksInput = {
    update: XOR<corpusFilesUpdateWithoutCorporaFileChunksInput, corpusFilesUncheckedUpdateWithoutCorporaFileChunksInput>
    create: XOR<corpusFilesCreateWithoutCorporaFileChunksInput, corpusFilesUncheckedCreateWithoutCorporaFileChunksInput>
    where?: corpusFilesWhereInput
  }

  export type corpusFilesUpdateToOneWithWhereWithoutCorporaFileChunksInput = {
    where?: corpusFilesWhereInput
    data: XOR<corpusFilesUpdateWithoutCorporaFileChunksInput, corpusFilesUncheckedUpdateWithoutCorporaFileChunksInput>
  }

  export type corpusFilesUpdateWithoutCorporaFileChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corpus?: corpusUpdateOneRequiredWithoutCorpusFilesNestedInput
  }

  export type corpusFilesUncheckedUpdateWithoutCorporaFileChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corpusId?: StringFieldUpdateOperationsInput | string
  }

  export type corpusFilesCreateManyCorpusInput = {
    id?: string
    userId: string
    fileName: string
    chunkSize: number
    chunkOverlap: number
    createdAt?: Date | string
  }

  export type corpusFilesUpdateWithoutCorpusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corporaFileChunks?: corpusFileChunksUpdateManyWithoutCorpusFileNestedInput
  }

  export type corpusFilesUncheckedUpdateWithoutCorpusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corporaFileChunks?: corpusFileChunksUncheckedUpdateManyWithoutCorpusFileNestedInput
  }

  export type corpusFilesUncheckedUpdateManyWithoutCorpusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    chunkSize?: IntFieldUpdateOperationsInput | number
    chunkOverlap?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type corpusFileChunksCreateManyCorpusFileInput = {
    id?: number
    userId: string
    chunk: string
  }

  export type corpusFileChunksUpdateWithoutCorpusFileInput = {
    userId?: StringFieldUpdateOperationsInput | string
    chunk?: StringFieldUpdateOperationsInput | string
  }

  export type corpusFileChunksUncheckedUpdateWithoutCorpusFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    chunk?: StringFieldUpdateOperationsInput | string
  }

  export type corpusFileChunksUncheckedUpdateManyWithoutCorpusFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    chunk?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}