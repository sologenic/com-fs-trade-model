import _m0 from "protobufjs/minimal";
import { Denom } from "./sologenic/com-fs-asset-model/domain/denom/denom";
import { TradeType } from "./sologenic/com-fs-order-model/broker";
import { Decimal } from "./sologenic/com-fs-utils-lib/go/decimal/decimal";
import { MetaData } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { Side, TimeInForce } from "./sologenic/com-fs-utils-lib/models/order-properties/order-properties";
export declare const protobufPackage = "trade";
export declare enum ActivityType {
    NOT_USED_ACTIVITY_TYPE = 0,
    /** ORDER - Order related: buy, sell, cancel */
    ORDER = 1,
    /** DEPOSIT - Deposit of funds to an account */
    DEPOSIT = 2,
    /** WITHDRAWAL - Withdrawal of funds from an account */
    WITHDRAWAL = 3,
    /** DIVIDEND - Dividend payment to an account */
    DIVIDEND = 4,
    /** INTEREST - Interest payment to an account */
    INTEREST = 5,
    /** RECEIVED - Received funds from another account */
    RECEIVED = 6,
    /** SENT - Sent funds from this account to another account */
    SENT = 7,
    /** SUBSCRIPTION - Subscription to a service or product */
    SUBSCRIPTION = 8,
    /** USDC_USD_CONVERSION - Conversion of USDC to USD for deposit/withdrawals */
    USDC_USD_CONVERSION = 9,
    UNRECOGNIZED = -1
}
export declare function activityTypeFromJSON(object: any): ActivityType;
export declare function activityTypeToJSON(object: ActivityType): string;
export declare enum ReceiverType {
    EMAIL = 0,
    TX = 1,
    ETHEREUM = 2,
    SOLANA = 3,
    UNRECOGNIZED = -1
}
export declare function receiverTypeFromJSON(object: any): ReceiverType;
export declare function receiverTypeToJSON(object: ReceiverType): string;
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
    OrderKey?: string | undefined;
    /** The sequence number of the order, assigned by the DEX (guaranteed unique value for the order) */
    Sequence: number;
    /** Last fill quantity from the most recent fill/partial fill event */
    Amount: Decimal | undefined;
    /** Last fill price from the most recent fill/partial fill event */
    Price: number;
    /** Base currency (e.g. suwusdc_1-smartContractAddr) */
    Denom1: Denom | undefined;
    /** Asset denom (e.g. suaapl_1-smartContractAddr) */
    Denom2: Denom | undefined;
    /** The buy/sell (in the context of transactions, buys are inflow of funds and sells are outflow of funds) */
    Side: Side;
    /** The time the trade was executed in UTC */
    BlockTime: Date | undefined;
    OrganizationID: string;
    /** The address of the receiver, used for sending of funds. Receiver can also be an email address, tx address or blockchain addres from another blockchain. */
    Receiver?: Receiver | undefined;
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
    /** The type of the trade, e.g. limit, market, etc. */
    TradeType?: TradeType | undefined;
    /** The commission paid to the brokerage */
    Commission?: number | undefined;
    /** The time in force for the trade, e.g. GTC, IOC, FOK, etc. */
    TimeInForce?: TimeInForce | undefined;
    /**
     * Type of activity that the order represents, e.g. deposit, withdrawal, etc.
     * Since wallets hold tokenized assets, we can treat inflow activities (e.g. deposits, dividends, received) as "buys" and outflow activities (e.g. withdrawals, sent) as "sell"
     */
    ActivityType?: ActivityType | undefined;
    /**
     * Trades get stored in alphabetical order of the denom pair.
     * Data is "uninverted" on retrieval and
     * this flag only indicates that the denoms as seen in the record are not in the original order
     */
    Inverted: boolean;
    /** Order request details - what the user originally requested when placing the order */
    RequestedQty?: Decimal | undefined;
    /** Limit price set by the user */
    LimitPrice?: number | undefined;
    /** Actual execution details - cumulative results across all fills */
    FilledQty?: Decimal | undefined;
    /** Average execution price */
    FilledAvgPrice?: number | undefined;
}
export interface Trades {
    Trades: Trade[];
    /** Offset for pagination */
    Offset?: number | undefined;
}
export interface Receiver {
    /** The address of the receiver, used for sending of funds. */
    Address: string;
    /** The type of the receiver, e.g. email, tx address, blockchain address from another blockchain. */
    Type: ReceiverType;
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
        Receiver?: {
            Address?: string | undefined;
            Type?: ReceiverType | undefined;
        } | undefined;
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
        TradeType?: TradeType | undefined;
        Commission?: number | undefined;
        TimeInForce?: TimeInForce | undefined;
        ActivityType?: ActivityType | undefined;
        Inverted?: boolean | undefined;
        RequestedQty?: {
            Value?: number | undefined;
            Exp?: number | undefined;
        } | undefined;
        LimitPrice?: number | undefined;
        FilledQty?: {
            Value?: number | undefined;
            Exp?: number | undefined;
        } | undefined;
        FilledAvgPrice?: number | undefined;
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
        Receiver?: ({
            Address?: string | undefined;
            Type?: ReceiverType | undefined;
        } & {
            Address?: string | undefined;
            Type?: ReceiverType | undefined;
        } & { [K_5 in Exclude<keyof I["Receiver"], keyof Receiver>]: never; }) | undefined;
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
        } & { [K_6 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        TXID?: string | undefined;
        BlockHeight?: number | undefined;
        Enriched?: boolean | undefined;
        Processed?: boolean | undefined;
        Status?: Status | undefined;
        USD?: number | undefined;
        TradeType?: TradeType | undefined;
        Commission?: number | undefined;
        TimeInForce?: TimeInForce | undefined;
        ActivityType?: ActivityType | undefined;
        Inverted?: boolean | undefined;
        RequestedQty?: ({
            Value?: number | undefined;
            Exp?: number | undefined;
        } & {
            Value?: number | undefined;
            Exp?: number | undefined;
        } & { [K_7 in Exclude<keyof I["RequestedQty"], keyof Decimal>]: never; }) | undefined;
        LimitPrice?: number | undefined;
        FilledQty?: ({
            Value?: number | undefined;
            Exp?: number | undefined;
        } & {
            Value?: number | undefined;
            Exp?: number | undefined;
        } & { [K_8 in Exclude<keyof I["FilledQty"], keyof Decimal>]: never; }) | undefined;
        FilledAvgPrice?: number | undefined;
    } & { [K_9 in Exclude<keyof I, keyof Trade>]: never; }>(base?: I | undefined): Trade;
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
        Receiver?: {
            Address?: string | undefined;
            Type?: ReceiverType | undefined;
        } | undefined;
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
        TradeType?: TradeType | undefined;
        Commission?: number | undefined;
        TimeInForce?: TimeInForce | undefined;
        ActivityType?: ActivityType | undefined;
        Inverted?: boolean | undefined;
        RequestedQty?: {
            Value?: number | undefined;
            Exp?: number | undefined;
        } | undefined;
        LimitPrice?: number | undefined;
        FilledQty?: {
            Value?: number | undefined;
            Exp?: number | undefined;
        } | undefined;
        FilledAvgPrice?: number | undefined;
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
        } & { [K_10 in Exclude<keyof I_1["Amount"], keyof Decimal>]: never; }) | undefined;
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
            } & { [K_11 in Exclude<keyof I_1["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_12 in Exclude<keyof I_1["Denom1"], keyof Denom>]: never; }) | undefined;
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
            } & { [K_13 in Exclude<keyof I_1["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_14 in Exclude<keyof I_1["Denom2"], keyof Denom>]: never; }) | undefined;
        Side?: Side | undefined;
        BlockTime?: Date | undefined;
        OrganizationID?: string | undefined;
        Receiver?: ({
            Address?: string | undefined;
            Type?: ReceiverType | undefined;
        } & {
            Address?: string | undefined;
            Type?: ReceiverType | undefined;
        } & { [K_15 in Exclude<keyof I_1["Receiver"], keyof Receiver>]: never; }) | undefined;
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
        } & { [K_16 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        TXID?: string | undefined;
        BlockHeight?: number | undefined;
        Enriched?: boolean | undefined;
        Processed?: boolean | undefined;
        Status?: Status | undefined;
        USD?: number | undefined;
        TradeType?: TradeType | undefined;
        Commission?: number | undefined;
        TimeInForce?: TimeInForce | undefined;
        ActivityType?: ActivityType | undefined;
        Inverted?: boolean | undefined;
        RequestedQty?: ({
            Value?: number | undefined;
            Exp?: number | undefined;
        } & {
            Value?: number | undefined;
            Exp?: number | undefined;
        } & { [K_17 in Exclude<keyof I_1["RequestedQty"], keyof Decimal>]: never; }) | undefined;
        LimitPrice?: number | undefined;
        FilledQty?: ({
            Value?: number | undefined;
            Exp?: number | undefined;
        } & {
            Value?: number | undefined;
            Exp?: number | undefined;
        } & { [K_18 in Exclude<keyof I_1["FilledQty"], keyof Decimal>]: never; }) | undefined;
        FilledAvgPrice?: number | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof Trade>]: never; }>(object: I_1): Trade;
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
            Receiver?: {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } | undefined;
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
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: number | undefined;
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
            Receiver?: {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } | undefined;
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
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: number | undefined;
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
            Receiver?: {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } | undefined;
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
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: number | undefined;
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
            Receiver?: ({
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } & {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } & { [K_5 in Exclude<keyof I["Trades"][number]["Receiver"], keyof Receiver>]: never; }) | undefined;
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
            } & { [K_6 in Exclude<keyof I["Trades"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            Status?: Status | undefined;
            USD?: number | undefined;
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_7 in Exclude<keyof I["Trades"][number]["RequestedQty"], keyof Decimal>]: never; }) | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_8 in Exclude<keyof I["Trades"][number]["FilledQty"], keyof Decimal>]: never; }) | undefined;
            FilledAvgPrice?: number | undefined;
        } & { [K_9 in Exclude<keyof I["Trades"][number], keyof Trade>]: never; })[] & { [K_10 in Exclude<keyof I["Trades"], keyof {
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
            Receiver?: {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } | undefined;
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
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: number | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_11 in Exclude<keyof I, keyof Trades>]: never; }>(base?: I | undefined): Trades;
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
            Receiver?: {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } | undefined;
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
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: number | undefined;
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
            Receiver?: {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } | undefined;
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
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: number | undefined;
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
            Receiver?: {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } | undefined;
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
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: number | undefined;
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
            } & { [K_12 in Exclude<keyof I_1["Trades"][number]["Amount"], keyof Decimal>]: never; }) | undefined;
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
                } & { [K_13 in Exclude<keyof I_1["Trades"][number]["Denom1"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_14 in Exclude<keyof I_1["Trades"][number]["Denom1"], keyof Denom>]: never; }) | undefined;
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
                } & { [K_15 in Exclude<keyof I_1["Trades"][number]["Denom2"]["Currency"], keyof import("./sologenic/com-fs-asset-model/domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_16 in Exclude<keyof I_1["Trades"][number]["Denom2"], keyof Denom>]: never; }) | undefined;
            Side?: Side | undefined;
            BlockTime?: Date | undefined;
            OrganizationID?: string | undefined;
            Receiver?: ({
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } & {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } & { [K_17 in Exclude<keyof I_1["Trades"][number]["Receiver"], keyof Receiver>]: never; }) | undefined;
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
            } & { [K_18 in Exclude<keyof I_1["Trades"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            TXID?: string | undefined;
            BlockHeight?: number | undefined;
            Enriched?: boolean | undefined;
            Processed?: boolean | undefined;
            Status?: Status | undefined;
            USD?: number | undefined;
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_19 in Exclude<keyof I_1["Trades"][number]["RequestedQty"], keyof Decimal>]: never; }) | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_20 in Exclude<keyof I_1["Trades"][number]["FilledQty"], keyof Decimal>]: never; }) | undefined;
            FilledAvgPrice?: number | undefined;
        } & { [K_21 in Exclude<keyof I_1["Trades"][number], keyof Trade>]: never; })[] & { [K_22 in Exclude<keyof I_1["Trades"], keyof {
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
            Receiver?: {
                Address?: string | undefined;
                Type?: ReceiverType | undefined;
            } | undefined;
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
            TradeType?: TradeType | undefined;
            Commission?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            ActivityType?: ActivityType | undefined;
            Inverted?: boolean | undefined;
            RequestedQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: number | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: number | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_23 in Exclude<keyof I_1, keyof Trades>]: never; }>(object: I_1): Trades;
};
export declare const Receiver: {
    encode(message: Receiver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Receiver;
    fromJSON(object: any): Receiver;
    toJSON(message: Receiver): unknown;
    create<I extends {
        Address?: string | undefined;
        Type?: ReceiverType | undefined;
    } & {
        Address?: string | undefined;
        Type?: ReceiverType | undefined;
    } & { [K in Exclude<keyof I, keyof Receiver>]: never; }>(base?: I | undefined): Receiver;
    fromPartial<I_1 extends {
        Address?: string | undefined;
        Type?: ReceiverType | undefined;
    } & {
        Address?: string | undefined;
        Type?: ReceiverType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Receiver>]: never; }>(object: I_1): Receiver;
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
