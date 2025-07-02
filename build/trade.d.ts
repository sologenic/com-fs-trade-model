import _m0 from "protobufjs/minimal";
import { Denom } from "./sologenic/com-fs-asset-model/domain/denom/denom";
import { Decimal } from "./sologenic/com-fs-utils-lib/go/decimal/decimal";
import { MetaData } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { Side } from "./sologenic/com-fs-utils-lib/models/order-properties/order-properties";
export declare const protobufPackage = "trade";
/** Key in store is TXID-Sequence-Metadata.Network */
export interface Trade {
    /** Wallet Address of user who placed the order */
    Wallet: string;
    /** Datastore key: OrderID-SmartContractAddr-Network */
    OrderKey: string;
    /** The sequence number of the order, assigned by the DEX (guaranteed unique value for the order) */
    Sequence: number;
    Amount: Decimal | undefined;
    Price: number;
    /** Base currency (e.g. suwusdc_1-smartContractAddr) */
    Denom1: Denom | undefined;
    /** Asset denom (e.g. suaapl_1-smartContractAddr) */
    Denom2: Denom | undefined;
    /** The buy/sell (e.g. did the user place a buy or sell order) */
    Side: Side;
    /** The time the trade was executed in UTC */
    BlockTime: Date | undefined;
    OrganizationID: string;
    /** Standard storage related fields */
    MetaData: MetaData | undefined;
    TXID?: string | undefined;
    BlockHeight: number;
    /** If the trade has been enriched with precision data */
    Enriched: boolean;
    /** Check if trade is processed into the OHLC */
    Processed: boolean;
    /** USD representation of the trade values and trading fee (fixed base for easy data comparisson in reports etc), applicable for non-WUSDC based trades, RWAs, etc. */
    USD?: number | undefined;
    /**
     * Trades get stored in alphabetical order of the denom pair.
     * Data is "uninverted" on retrieval and
     * this flag only indicates that the denoms as seen in the record are not in the original order
     */
    Inverted: boolean;
}
export interface Trades {
    Trades: Trade[];
}
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
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    create<I extends {
        Wallet?: string | undefined;
        OrderKey?: string | undefined;
        Sequence?: number | undefined;
        Amount?: {
            Value?: number | undefined;
            Exp?: number | undefined;
        } | undefined;
        Price?: number | undefined;
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
        Side?: Side | undefined;
        BlockTime?: Date | undefined;
        OrganizationID?: string | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        TXID?: string | undefined;
        BlockHeight?: number | undefined;
        Enriched?: boolean | undefined;
        Processed?: boolean | undefined;
        USD?: number | undefined;
        Inverted?: boolean | undefined;
    } & {
        Wallet?: string | undefined;
        OrderKey?: string | undefined;
        Sequence?: number | undefined;
        Amount?: ({
            Value?: number | undefined;
            Exp?: number | undefined;
        } & {
            Value?: number | undefined;
            Exp?: number | undefined;
        } & { [K in Exclude<keyof I["Amount"], keyof Decimal>]: never; }) | undefined;
        Price?: number | undefined;
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
            } & { [K_1 in Exclude<keyof I["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_2 in Exclude<keyof I["Denom1"], keyof Denom>]: never; }) | undefined;
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
            } & { [K_3 in Exclude<keyof I["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_4 in Exclude<keyof I["Denom2"], keyof Denom>]: never; }) | undefined;
        Side?: Side | undefined;
        BlockTime?: Date | undefined;
        OrganizationID?: string | undefined;
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
        } & { [K_5 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        TXID?: string | undefined;
        BlockHeight?: number | undefined;
        Enriched?: boolean | undefined;
        Processed?: boolean | undefined;
        USD?: number | undefined;
        Inverted?: boolean | undefined;
    } & { [K_6 in Exclude<keyof I, keyof Trade>]: never; }>(base?: I | undefined): Trade;
    fromPartial<I_1 extends {
        Wallet?: string | undefined;
        OrderKey?: string | undefined;
        Sequence?: number | undefined;
        Amount?: {
            Value?: number | undefined;
            Exp?: number | undefined;
        } | undefined;
        Price?: number | undefined;
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
        Side?: Side | undefined;
        BlockTime?: Date | undefined;
        OrganizationID?: string | undefined;
        MetaData?: {
            Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        TXID?: string | undefined;
        BlockHeight?: number | undefined;
        Enriched?: boolean | undefined;
        Processed?: boolean | undefined;
        USD?: number | undefined;
        Inverted?: boolean | undefined;
    } & {
        Wallet?: string | undefined;
        OrderKey?: string | undefined;
        Sequence?: number | undefined;
        Amount?: ({
            Value?: number | undefined;
            Exp?: number | undefined;
        } & {
            Value?: number | undefined;
            Exp?: number | undefined;
        } & { [K_7 in Exclude<keyof I_1["Amount"], keyof Decimal>]: never; }) | undefined;
        Price?: number | undefined;
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
            } & { [K_8 in Exclude<keyof I_1["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_9 in Exclude<keyof I_1["Denom1"], keyof Denom>]: never; }) | undefined;
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
            } & { [K_10 in Exclude<keyof I_1["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_11 in Exclude<keyof I_1["Denom2"], keyof Denom>]: never; }) | undefined;
        Side?: Side | undefined;
        BlockTime?: Date | undefined;
        OrganizationID?: string | undefined;
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
        } & { [K_12 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        TXID?: string | undefined;
        BlockHeight?: number | undefined;
        Enriched?: boolean | undefined;
        Processed?: boolean | undefined;
        USD?: number | undefined;
        Inverted?: boolean | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof Trade>]: never; }>(object: I_1): Trade;
};
export declare const Trades: {
    encode(message: Trades, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trades;
    fromJSON(object: any): Trades;
    toJSON(message: Trades): unknown;
    create<I extends {
        Trades?: {
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            Price?: number | undefined;
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
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[] | undefined;
    } & {
        Trades?: ({
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            Price?: number | undefined;
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
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[] & ({
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            Price?: number | undefined;
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
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        } & {
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K in Exclude<keyof I["Trades"][number]["Amount"], keyof Decimal>]: never; }) | undefined;
            Price?: number | undefined;
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
                } & { [K_1 in Exclude<keyof I["Trades"][number]["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_2 in Exclude<keyof I["Trades"][number]["Denom1"], keyof Denom>]: never; }) | undefined;
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
                } & { [K_3 in Exclude<keyof I["Trades"][number]["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_4 in Exclude<keyof I["Trades"][number]["Denom2"], keyof Denom>]: never; }) | undefined;
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
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
            } & { [K_5 in Exclude<keyof I["Trades"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        } & { [K_6 in Exclude<keyof I["Trades"][number], keyof Trade>]: never; })[] & { [K_7 in Exclude<keyof I["Trades"], keyof {
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            Price?: number | undefined;
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
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, "Trades">]: never; }>(base?: I | undefined): Trades;
    fromPartial<I_1 extends {
        Trades?: {
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            Price?: number | undefined;
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
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[] | undefined;
    } & {
        Trades?: ({
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            Price?: number | undefined;
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
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[] & ({
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            Price?: number | undefined;
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
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        } & {
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_9 in Exclude<keyof I_1["Trades"][number]["Amount"], keyof Decimal>]: never; }) | undefined;
            Price?: number | undefined;
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
                } & { [K_10 in Exclude<keyof I_1["Trades"][number]["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_11 in Exclude<keyof I_1["Trades"][number]["Denom1"], keyof Denom>]: never; }) | undefined;
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
                } & { [K_12 in Exclude<keyof I_1["Trades"][number]["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_13 in Exclude<keyof I_1["Trades"][number]["Denom2"], keyof Denom>]: never; }) | undefined;
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
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
            } & { [K_14 in Exclude<keyof I_1["Trades"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        } & { [K_15 in Exclude<keyof I_1["Trades"][number], keyof Trade>]: never; })[] & { [K_16 in Exclude<keyof I_1["Trades"], keyof {
            Wallet?: string | undefined;
            OrderKey?: string | undefined;
            Sequence?: number | undefined;
            Amount?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            Price?: number | undefined;
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
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            MetaData?: {
                Network?: import("./sologenic/com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, "Trades">]: never; }>(object: I_1): Trades;
};
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
