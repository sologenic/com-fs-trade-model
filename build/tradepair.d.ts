import _m0 from "protobufjs/minimal";
import { Denom } from "./sologenic/com-fs-asset-model/domain/denom/denom";
import { Decimal } from "./sologenic/com-fs-utils-lib/models/decimal/decimal";
import { MetaData } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "trade";
export interface TradePair {
    Denom1: Denom | undefined;
    Denom2: Denom | undefined;
    MetaData: MetaData | undefined;
    PriceTick?: Decimal | undefined;
    QuantityStep?: number | undefined;
    OrganizationID: string;
}
export interface TradePairs {
    TradePairs: TradePair[];
    Offset?: number | undefined;
}
export declare const TradePair: {
    encode(message: TradePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradePair;
    fromJSON(object: any): TradePair;
    toJSON(message: TradePair): unknown;
    create<I extends {
        Denom1?: {
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } | undefined;
        Denom2?: {
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        PriceTick?: {
            Value?: number | undefined;
            Exp?: number | undefined;
        } | undefined;
        QuantityStep?: number | undefined;
        OrganizationID?: string | undefined;
    } & {
        Denom1?: ({
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & {
            Currency?: ({
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & { [K in Exclude<keyof I["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Denom1"], keyof Denom>]: never; }) | undefined;
        Denom2?: ({
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & {
            Currency?: ({
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & { [K_2 in Exclude<keyof I["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_3 in Exclude<keyof I["Denom2"], keyof Denom>]: never; }) | undefined;
        MetaData?: ({
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_4 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        PriceTick?: ({
            Value?: number | undefined;
            Exp?: number | undefined;
        } & {
            Value?: number | undefined;
            Exp?: number | undefined;
        } & { [K_5 in Exclude<keyof I["PriceTick"], keyof Decimal>]: never; }) | undefined;
        QuantityStep?: number | undefined;
        OrganizationID?: string | undefined;
    } & { [K_6 in Exclude<keyof I, keyof TradePair>]: never; }>(base?: I | undefined): TradePair;
    fromPartial<I_1 extends {
        Denom1?: {
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } | undefined;
        Denom2?: {
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        PriceTick?: {
            Value?: number | undefined;
            Exp?: number | undefined;
        } | undefined;
        QuantityStep?: number | undefined;
        OrganizationID?: string | undefined;
    } & {
        Denom1?: ({
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & {
            Currency?: ({
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["Denom1"], keyof Denom>]: never; }) | undefined;
        Denom2?: ({
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & {
            Currency?: ({
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_10 in Exclude<keyof I_1["Denom2"], keyof Denom>]: never; }) | undefined;
        MetaData?: ({
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_11 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        PriceTick?: ({
            Value?: number | undefined;
            Exp?: number | undefined;
        } & {
            Value?: number | undefined;
            Exp?: number | undefined;
        } & { [K_12 in Exclude<keyof I_1["PriceTick"], keyof Decimal>]: never; }) | undefined;
        QuantityStep?: number | undefined;
        OrganizationID?: string | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof TradePair>]: never; }>(object: I_1): TradePair;
};
export declare const TradePairs: {
    encode(message: TradePairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradePairs;
    fromJSON(object: any): TradePairs;
    toJSON(message: TradePairs): unknown;
    create<I extends {
        TradePairs?: {
            Denom1?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Denom2?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            PriceTick?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        TradePairs?: ({
            Denom1?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Denom2?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            PriceTick?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        }[] & ({
            Denom1?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Denom2?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            PriceTick?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        } & {
            Denom1?: ({
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & {
                Currency?: ({
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & { [K in Exclude<keyof I["TradePairs"][number]["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_1 in Exclude<keyof I["TradePairs"][number]["Denom1"], keyof Denom>]: never; }) | undefined;
            Denom2?: ({
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & {
                Currency?: ({
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & { [K_2 in Exclude<keyof I["TradePairs"][number]["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_3 in Exclude<keyof I["TradePairs"][number]["Denom2"], keyof Denom>]: never; }) | undefined;
            MetaData?: ({
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_4 in Exclude<keyof I["TradePairs"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            PriceTick?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_5 in Exclude<keyof I["TradePairs"][number]["PriceTick"], keyof Decimal>]: never; }) | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        } & { [K_6 in Exclude<keyof I["TradePairs"][number], keyof TradePair>]: never; })[] & { [K_7 in Exclude<keyof I["TradePairs"], keyof {
            Denom1?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Denom2?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            PriceTick?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_8 in Exclude<keyof I, keyof TradePairs>]: never; }>(base?: I | undefined): TradePairs;
    fromPartial<I_1 extends {
        TradePairs?: {
            Denom1?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Denom2?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            PriceTick?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        TradePairs?: ({
            Denom1?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Denom2?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            PriceTick?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        }[] & ({
            Denom1?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Denom2?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            PriceTick?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        } & {
            Denom1?: ({
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & {
                Currency?: ({
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & { [K_9 in Exclude<keyof I_1["TradePairs"][number]["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["TradePairs"][number]["Denom1"], keyof Denom>]: never; }) | undefined;
            Denom2?: ({
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & {
                Currency?: ({
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } & { [K_11 in Exclude<keyof I_1["TradePairs"][number]["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_12 in Exclude<keyof I_1["TradePairs"][number]["Denom2"], keyof Denom>]: never; }) | undefined;
            MetaData?: ({
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_13 in Exclude<keyof I_1["TradePairs"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            PriceTick?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_14 in Exclude<keyof I_1["TradePairs"][number]["PriceTick"], keyof Decimal>]: never; }) | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        } & { [K_15 in Exclude<keyof I_1["TradePairs"][number], keyof TradePair>]: never; })[] & { [K_16 in Exclude<keyof I_1["TradePairs"], keyof {
            Denom1?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            Denom2?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            PriceTick?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            QuantityStep?: number | undefined;
            OrganizationID?: string | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof TradePairs>]: never; }>(object: I_1): TradePairs;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
