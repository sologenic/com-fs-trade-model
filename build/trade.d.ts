import _m0 from "protobufjs/minimal";
import { Decimal } from "./dependencies/google/type/decimal";
export declare const protobufPackage = "trade";
/** TradeSide defines the direction of the trade. */
export declare enum TradeSide {
    TRADE_SIDE_UNSPECIFIED = 0,
    TRADE_SIDE_BUY = 1,
    TRADE_SIDE_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function tradeSideFromJSON(object: any): TradeSide;
export declare function tradeSideToJSON(object: TradeSide): string;
/**
 * Each trade represents a full or partial fill of an order.
 * An order can have zero, one, or many trades.
 * We store the exact time when the trade was executed, linked order ID, and fee information.
 *
 * The Trade model is universal and supports both:
 * 1) Broker Securities Smart Contract (buying and selling securities using Alpaca).
 * 2) TX marketplace (to be implemented).
 *
 * A Trade is immutable after it has been saved in the database.
 * Datastore Key format: OrganizationID + "_" + ExecutionID
 *
 * BaseAssetReference, QuoteAssetReference, FeeAssetReference
 * These fields specify the assets involved in the trade and can be one of the following:
 *
 * 1) Asset denom in the TX marketplace (includes subunit, version, issuer address).
 *    Example: "uamc_v1-testcore1vrp9245tzfe6quac0ld9qwqe6x747exwgfg0lqglg6vh23jg3vrsmpm3rr" (AMC stock)
 *
 * 2) Ticker symbol for Alpaca fiat.
 *    In Alpaca, trading is done only against USD. Since the user's USD is stored
 *    at the broker, we use "USD" as the QuoteAssetReference.
 *
 * Note: Validation requires the value to be either a strict TX asset denom format or exactly "USD".
 */
export interface Trade {
    /**
     * Unique trade execution ID. Uniqueness is guaranteed only within the scope of an organization.
     * This corresponds to the "execution_id" from Alpaca SSE Trade Events.
     * Example: "bf286435-d55d-4fd1-be1e-c9a5b6722c28".
     */
    ExecutionID: string;
    /** Organization UUID. */
    OrganizationID: string;
    /** User ID in our system (Firebase UID). */
    UserID: string;
    /** Optional external user ID (e.g., the account ID at Alpaca). */
    ExternalUserID: string;
    /**
     * Internal Order ID.
     * For organizations using the Broker Securities Smart Contract, this is a combination of
     * the user ID and an order sequence.
     * Example: "Sardr0i479afuVl0nRUkthHnUA33_37".
     */
    OrderID: string;
    /**
     * External Order ID.
     * Used to keep track of orders in third-party services (e.g., the order ID at Alpaca).
     */
    ExternalOrderID: string;
    /** The direction of the trade (buy or sell). */
    Side: TradeSide;
    /**
     * The primary asset being traded.
     * Must be either a valid TX denom or "USD".
     */
    BaseAssetReference: string;
    /**
     * The asset used to pay for the trade.
     * Must be either a valid TX denom or "USD".
     */
    QuoteAssetReference: string;
    /**
     * Execution price per 1 unit of base, expressed in quote.
     * Must be strictly greater than 0.
     */
    Price: Decimal | undefined;
    /**
     * The amount of base that was traded.
     * Must be strictly greater than 0.
     */
    Qty: Decimal | undefined;
    /**
     * The absolute fee amount paid for this trade execution.
     * Must be greater than or equal to 0.
     */
    FeeQty: Decimal | undefined;
    /**
     * The asset in which the fee was paid.
     * Must be either a valid TX denom or "USD".
     */
    FeeAssetReference: string;
    /**
     * The exact time the trade was executed.
     * This field is required.
     */
    ExecutedAt: Date | undefined;
}
/** Pagination should be done using From and To timestamps. */
export interface Trades {
    Trades: Trade[];
}
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    create<I extends {
        ExecutionID?: string | undefined;
        OrganizationID?: string | undefined;
        UserID?: string | undefined;
        ExternalUserID?: string | undefined;
        OrderID?: string | undefined;
        ExternalOrderID?: string | undefined;
        Side?: TradeSide | undefined;
        BaseAssetReference?: string | undefined;
        QuoteAssetReference?: string | undefined;
        Price?: {
            value?: string | undefined;
        } | undefined;
        Qty?: {
            value?: string | undefined;
        } | undefined;
        FeeQty?: {
            value?: string | undefined;
        } | undefined;
        FeeAssetReference?: string | undefined;
        ExecutedAt?: Date | undefined;
    } & {
        ExecutionID?: string | undefined;
        OrganizationID?: string | undefined;
        UserID?: string | undefined;
        ExternalUserID?: string | undefined;
        OrderID?: string | undefined;
        ExternalOrderID?: string | undefined;
        Side?: TradeSide | undefined;
        BaseAssetReference?: string | undefined;
        QuoteAssetReference?: string | undefined;
        Price?: ({
            value?: string | undefined;
        } & {
            value?: string | undefined;
        } & { [K in Exclude<keyof I["Price"], "value">]: never; }) | undefined;
        Qty?: ({
            value?: string | undefined;
        } & {
            value?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Qty"], "value">]: never; }) | undefined;
        FeeQty?: ({
            value?: string | undefined;
        } & {
            value?: string | undefined;
        } & { [K_2 in Exclude<keyof I["FeeQty"], "value">]: never; }) | undefined;
        FeeAssetReference?: string | undefined;
        ExecutedAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Trade>]: never; }>(base?: I | undefined): Trade;
    fromPartial<I_1 extends {
        ExecutionID?: string | undefined;
        OrganizationID?: string | undefined;
        UserID?: string | undefined;
        ExternalUserID?: string | undefined;
        OrderID?: string | undefined;
        ExternalOrderID?: string | undefined;
        Side?: TradeSide | undefined;
        BaseAssetReference?: string | undefined;
        QuoteAssetReference?: string | undefined;
        Price?: {
            value?: string | undefined;
        } | undefined;
        Qty?: {
            value?: string | undefined;
        } | undefined;
        FeeQty?: {
            value?: string | undefined;
        } | undefined;
        FeeAssetReference?: string | undefined;
        ExecutedAt?: Date | undefined;
    } & {
        ExecutionID?: string | undefined;
        OrganizationID?: string | undefined;
        UserID?: string | undefined;
        ExternalUserID?: string | undefined;
        OrderID?: string | undefined;
        ExternalOrderID?: string | undefined;
        Side?: TradeSide | undefined;
        BaseAssetReference?: string | undefined;
        QuoteAssetReference?: string | undefined;
        Price?: ({
            value?: string | undefined;
        } & {
            value?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["Price"], "value">]: never; }) | undefined;
        Qty?: ({
            value?: string | undefined;
        } & {
            value?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["Qty"], "value">]: never; }) | undefined;
        FeeQty?: ({
            value?: string | undefined;
        } & {
            value?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["FeeQty"], "value">]: never; }) | undefined;
        FeeAssetReference?: string | undefined;
        ExecutedAt?: Date | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Trade>]: never; }>(object: I_1): Trade;
};
export declare const Trades: {
    encode(message: Trades, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trades;
    fromJSON(object: any): Trades;
    toJSON(message: Trades): unknown;
    create<I extends {
        Trades?: {
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: {
                value?: string | undefined;
            } | undefined;
            Qty?: {
                value?: string | undefined;
            } | undefined;
            FeeQty?: {
                value?: string | undefined;
            } | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        }[] | undefined;
    } & {
        Trades?: ({
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: {
                value?: string | undefined;
            } | undefined;
            Qty?: {
                value?: string | undefined;
            } | undefined;
            FeeQty?: {
                value?: string | undefined;
            } | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        }[] & ({
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: {
                value?: string | undefined;
            } | undefined;
            Qty?: {
                value?: string | undefined;
            } | undefined;
            FeeQty?: {
                value?: string | undefined;
            } | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        } & {
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: ({
                value?: string | undefined;
            } & {
                value?: string | undefined;
            } & { [K in Exclude<keyof I["Trades"][number]["Price"], "value">]: never; }) | undefined;
            Qty?: ({
                value?: string | undefined;
            } & {
                value?: string | undefined;
            } & { [K_1 in Exclude<keyof I["Trades"][number]["Qty"], "value">]: never; }) | undefined;
            FeeQty?: ({
                value?: string | undefined;
            } & {
                value?: string | undefined;
            } & { [K_2 in Exclude<keyof I["Trades"][number]["FeeQty"], "value">]: never; }) | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        } & { [K_3 in Exclude<keyof I["Trades"][number], keyof Trade>]: never; })[] & { [K_4 in Exclude<keyof I["Trades"], keyof {
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: {
                value?: string | undefined;
            } | undefined;
            Qty?: {
                value?: string | undefined;
            } | undefined;
            FeeQty?: {
                value?: string | undefined;
            } | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "Trades">]: never; }>(base?: I | undefined): Trades;
    fromPartial<I_1 extends {
        Trades?: {
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: {
                value?: string | undefined;
            } | undefined;
            Qty?: {
                value?: string | undefined;
            } | undefined;
            FeeQty?: {
                value?: string | undefined;
            } | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        }[] | undefined;
    } & {
        Trades?: ({
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: {
                value?: string | undefined;
            } | undefined;
            Qty?: {
                value?: string | undefined;
            } | undefined;
            FeeQty?: {
                value?: string | undefined;
            } | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        }[] & ({
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: {
                value?: string | undefined;
            } | undefined;
            Qty?: {
                value?: string | undefined;
            } | undefined;
            FeeQty?: {
                value?: string | undefined;
            } | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        } & {
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: ({
                value?: string | undefined;
            } & {
                value?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["Trades"][number]["Price"], "value">]: never; }) | undefined;
            Qty?: ({
                value?: string | undefined;
            } & {
                value?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["Trades"][number]["Qty"], "value">]: never; }) | undefined;
            FeeQty?: ({
                value?: string | undefined;
            } & {
                value?: string | undefined;
            } & { [K_8 in Exclude<keyof I_1["Trades"][number]["FeeQty"], "value">]: never; }) | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        } & { [K_9 in Exclude<keyof I_1["Trades"][number], keyof Trade>]: never; })[] & { [K_10 in Exclude<keyof I_1["Trades"], keyof {
            ExecutionID?: string | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            ExternalUserID?: string | undefined;
            OrderID?: string | undefined;
            ExternalOrderID?: string | undefined;
            Side?: TradeSide | undefined;
            BaseAssetReference?: string | undefined;
            QuoteAssetReference?: string | undefined;
            Price?: {
                value?: string | undefined;
            } | undefined;
            Qty?: {
                value?: string | undefined;
            } | undefined;
            FeeQty?: {
                value?: string | undefined;
            } | undefined;
            FeeAssetReference?: string | undefined;
            ExecutedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "Trades">]: never; }>(object: I_1): Trades;
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
