# Trade Documentation

## Table of Contents

- [Overview](#overview)
- [trade.proto](#tradeproto)
  - [Messages](#messages)
    - [Trade](#trade)
    - [Trades](#trades)
  - [Enums](#enums)
    - [TradeSide](#tradeside)
- [trade-service.proto](#trade-serviceproto)
  - [Services](#services)
    - [TradeService](#tradeservice)
  - [Messages](#messages-1)
    - [Filter](#filter)
    - [TradeKey](#tradekey)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Trade model provides a comprehensive data structure for managing trades within the system. This model supports unique identification, organizational context tracking, and execution details mapping.

Key features of the trade model include:
- **Identification**: Provides unique identifiers for executions and orders.
- **Organizational Context**: Links items to organizations via OrganizationID.
- **Execution Details**: Tracks execution time, assets, quantities, pricing, and fee information.
- **Pagination Support**: Provides time-based pagination for collections using gRPC filters.

## trade.proto

### Package Information

- **Package Name**: `trade`
- **Go Package Path**: `github.com/sologenic/com-fs-trade-model;trade`

### Overview

The `trade.proto` file defines the core data model for trades. It provides message types for representing trade execution data and integrates with external utility libraries for decimals, timestamps, and validation.

### Messages

#### Trade {#trade}

The `Trade` message provides execution data for a filled order.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ExecutionID | `string` | Required | Unique trade execution ID. Corresponds to the "execution_id" from Alpaca. |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to. |
| UserID | `string` | Required | User ID in our system (Firebase UID). |
| ExternalUserID | `string` | Optional | Optional external user ID (e.g., the account ID at Alpaca). |
| OrderID | `string` | Required | Internal Order ID. |
| ExternalOrderID| `string` | Optional | External Order ID used to keep track of orders in third-party services. |
| Side | `TradeSide` | Required | The direction of the trade (buy or sell). |
| BaseAssetReference| `string`| Required | The primary asset being traded (valid TX denom or "USD"). |
| QuoteAssetReference| `string`| Required | The asset used to pay for the trade (valid TX denom or "USD"). |
| Price | `google.type.Decimal`| Required | Execution price per 1 unit of base, expressed in quote (> 0). |
| Qty | `google.type.Decimal`| Required | The amount of base that was traded (> 0). |
| FeeQty | `google.type.Decimal`| Required | The absolute fee amount paid for this trade execution (>= 0). |
| FeeAssetReference | `string` | Required | The asset in which the fee was paid. |
| ExecutedAt | `google.protobuf.Timestamp`| Required | The exact time the trade was executed. |

**Important Notes:**
- A Trade is immutable after it has been saved in the database.
- Validation requires asset references (`BaseAssetReference`, `QuoteAssetReference`, `FeeAssetReference`) to be either a strict TX asset denom format or exactly "USD".

#### Trades {#trades}

The `Trades` message represents a collection of trades.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Trades | `Trade` | Optional | Repeated list of Trade records. |

### Enums

#### TradeSide {#tradeside}

The `TradeSide` enum defines the direction of the trade.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| TRADE_SIDE_UNSPECIFIED | 0 | Default/unused value (protobuf convention) |
| TRADE_SIDE_BUY | 1 | Trade side buy |
| TRADE_SIDE_SELL | 2 | Trade side sell |

## trade-service.proto

### Package Information

- **Package Name**: `trade`
- **Go Package Path**: `github.com/sologenic/com-fs-trade-model;trade`

### Overview

The `trade-service.proto` file defines the gRPC service and request/response models for interacting with the trade data store.

### Services

#### TradeService {#tradeservice}

The `TradeService` provides RPC methods to manage trades.

**Methods:**

| Method Name | Request Type | Response Type | Description |
|-------------|--------------|---------------|-------------|
| `Get` | `TradeKey` | `Trade` | Retrieves a specific trade by its composite key. |
| `Upsert` | `Trade` | `google.protobuf.Empty` | Inserts or updates a single trade record. |
| `BatchUpsert` | `Trades` | `google.protobuf.Empty` | Inserts or updates multiple trade records in batch. |
| `List` | `Filter` | `Trades` | Retrieves a list of trades based on time and organization filter criteria. |

### Messages

#### Filter {#filter}

The `Filter` message provides options to query trade history views.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| OrganizationID | `string` | Required | UUID of the organization. |
| From | `google.protobuf.Timestamp` | Optional | Start time for filtering trades. |
| To | `google.protobuf.Timestamp` | Optional | End time for filtering trades. |
| UserID | `string` | Optional | User ID for the trade. |
| Limit | `int32` | Optional | Maximum number of records to return. |

#### TradeKey {#tradekey}

The `TradeKey` message represents the unique composite key for a trade in the datastore.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| ExecutionID | `string` | Required | Unique trade execution ID. |
| OrganizationID | `string` | Required | UUID of the organization. |

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `trade.proto`ю The proto files use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.
