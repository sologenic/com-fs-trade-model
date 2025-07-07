import _m0 from "protobufjs/minimal";
import { Denom } from "./sologenic/com-fs-asset-model/domain/denom/denom";
import { Decimal } from "./sologenic/com-fs-utils-lib/go/decimal/decimal";
import { MetaData } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { Side } from "./sologenic/com-fs-utils-lib/models/order-properties/order-properties";
export declare const protobufPackage = "trade";
export declare enum Status {
    NOT_USED_STATUS = 0,
    PARTIALLY_FILLED = 1,
    FILLED = 2,
    CANCELLED = 3,
    PLACED = 4,
    EXPIRED = 5,
    PENDING = 6,
    UNRECOGNIZED = -1
}
export declare function statusFromJSON(object: any): Status;
export declare function statusToJSON(object: Status): string;
/** Key in store is TXID-Sequence-Metadata.Network */
export interface Trade {
    UserID: string;
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
    /**
     * This status field enables unified indexing in Elasticsearch, allowing the backend to return a single combined dataset of both trades(executed orders) and orders for user trade history,
     * eliminating the need for separate Trade and Order queries on the frontend. Therefore, this field is to be used only when creating indexes in Elasticsearch.
     */
    Status?: Status | undefined;
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
    /** Offset for pagination */
    Offset?: number | undefined;
}
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    create<I extends {
        UserID?: string | undefined;
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
        Status?: Status | undefined;
        USD?: number | undefined;
        Inverted?: boolean | undefined;
    } & {
        UserID?: string | undefined;
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
        Status?: Status | undefined;
        USD?: number | undefined;
        Inverted?: boolean | undefined;
    } & { [K_6 in Exclude<keyof I, keyof Trade>]: never; }>(base?: I | undefined): Trade;
    fromPartial<I_1 extends {
        UserID?: string | undefined;
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
        Status?: Status | undefined;
        USD?: number | undefined;
        Inverted?: boolean | undefined;
    } & {
        UserID?: string | undefined;
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
        Status?: Status | undefined;
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
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Trades?: ({
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[] & ({
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        } & {
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        } & { [K_6 in Exclude<keyof I["Trades"][number], keyof Trade>]: never; })[] & { [K_7 in Exclude<keyof I["Trades"], keyof {
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_8 in Exclude<keyof I, keyof Trades>]: never; }>(base?: I | undefined): Trades;
    fromPartial<I_1 extends {
        Trades?: {
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Trades?: ({
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[] & ({
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        } & {
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        } & { [K_15 in Exclude<keyof I_1["Trades"][number], keyof Trade>]: never; })[] & { [K_16 in Exclude<keyof I_1["Trades"], keyof {
            UserID?: string | undefined;
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
            Status?: Status | undefined;
            USD?: number | undefined;
            Inverted?: boolean | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof Trades>]: never; }>(object: I_1): Trades;
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
