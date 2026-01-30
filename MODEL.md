# Trade Documentation

## Table of Contents

- [Overview](#overview)
- [trade.proto](#trade)
  - [Messages](#messages)
    - [Trade](#trade)
    - [Trades](#trades)
    - [Receiver](#receiver)
  - [Enums](#enums)
    - [ActivityType](#activitytype)
    - [ReceiverType](#receivertype)
    - [Status](#status)
- [tradepair.proto](#tradepair)
  - [Messages](#messages)
    - [TradePair](#tradepair)
    - [TradePairs](#tradepairs)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Trade provides a comprehensive data structure for managing trade within the system. This model supports identification: provides unique identifiers for trade, organizational context: links items to organizations via organizationid, metadata and audit: includes metadata and audit trails for tracking changes, and more. 

Key features of the trade model include:
- **Identification**: Provides unique identifiers for trade
- **Organizational Context**: Links items to organizations via OrganizationID
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Status Management**: Tracks status for administrative control
- **Pagination Support**: Provides offset-based pagination for collections

## trade.proto

### Package Information

- **Package Name**: `trade`
- **Go Package Path**: `github.com/sologenic/com-fs-trade-model;trade`

### Overview

The `trade.proto` file defines the core trade model for trade management. It provides message types for representing trade data and operations. The file integrates with external utility libraries: `order-properties.proto`, `metadata.proto`, `denom.proto`.

### Messages

#### Trade {#trade}

The `Trade` message provides trade data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| UserID | `string` | Required | Unique identifier for the user |
| OrderKey | `string` | Optional | Datastore key: OrderID-SmartContractAddr-Network |
| Sequence | `int64` | Required | The sequence number of the order, assigned by the DEX (guaranteed unique value for the order) |
| Amount | `decimal.Decimal` | Required | Last fill quantity from the most recent fill/partial fill event |
| Price | `double` | Required | Last fill price from the most recent fill/partial fill event |
| Denom1 | `denom.Denom` | Required | Base currency (e.g. suwusdc_1-smartContractAddr) |
| Denom2 | `denom.Denom` | Required | Asset denom (e.g. suaapl_1-smartContractAddr) |
| Side | `orderproperties.Side` | Required | The buy/sell (in the context of transactions, buys are inflow of funds and sells are outflow of funds) |
| BlockTime | `google.protobuf.Timestamp` | Required | The time the trade was executed in UTC |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| Receiver | `Receiver` | Optional | The address of the receiver, used for sending of funds. Receiver can also be an email address, tx address or blockchain addres from another blockchain. |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| TXID | `string` | Optional | Unique identifier for the tx |
| BlockHeight | `int64` | Required | BlockHeight field |
| Enriched | `bool` | Required | If the trade has been enriched with precision data |
| Processed | `bool` | Required | Check if trade is processed into the OHLC |
| Status | `Status` | Optional | Current status of this item (see related enum) |
| USD | `float` | Optional | The USD value of the trade, calculated from the USD value of the currencies and the trading fee. |
| TradeType | `order.TradeType` | Optional | The type of the trade, e.g. limit, market, etc. |
| Commission | `double` | Optional | The commission paid to the brokerage |
| TimeInForce | `orderproperties.TimeInForce` | Optional | The time in force for the trade, e.g. GTC, IOC, FOK, etc. |
| ActivityType | `ActivityType` | Optional | Type classification for this item (see related enum) |
| Inverted | `bool` | Required | Inverted field |
| RequestedQty | `decimal.Decimal` | Optional | Original requested order quantity |
| LimitPrice | `double` | Optional | Limit price set by the user |
| FilledQty | `decimal.Decimal` | Optional | Total accumulated quantity filled |
| FilledAvgPrice | `double` | Optional | Average execution price |

**Use Cases:**
- Creating new trade records
- Retrieving trade information
- Updating trade data
- Associating items with specific organizations
- Tracking status for administrative purposes

**Important Notes:**
- The `UserID` field must match a valid identifier format
- The `Side` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format
- The `TXID` field must match a valid identifier format
- The `Status` field determines the current state of this item

#### Trades {#trades}

The `Trades` message represents a collection of trade with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Trades | `Trade` | Optional | Trades field |
| Offset | `int32` | Optional | Offset for pagination |

**Use Cases:**
- Returning paginated lists of trade from queries or searches
- Implementing pagination in trade listing APIs
- Handling large trades efficiently
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

#### Receiver {#receiver}

The `Receiver` message provides receiver data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Address | `string` | Required | The address of the receiver, used for sending of funds. |
| Type | `ReceiverType` | Required | The type of the receiver, e.g. email, tx address, blockchain address from another blockchain. |

**Use Cases:**
- Creating new receiver records
- Retrieving receiver information
- Updating receiver data

**Important Notes:**
- This message provides the receiver representation

### Enums

#### ActivityType {#activitytype}

The `ActivityType` enum defines the possible states or types for trade, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_ACTIVITY_TYPE | 0 | Default/unused value (protobuf convention) |
| ORDER | 1 | Order state or type |
| DEPOSIT | 2 | Deposit state or type |
| WITHDRAWAL | 3 | Withdrawal state or type |
| DIVIDEND | 4 | Dividend state or type |
| INTEREST | 5 | Interest state or type |
| RECEIVED | 6 | Received state or type |
| SENT | 7 | Sent state or type |
| SUBSCRIPTION | 8 | Subscription state or type |
| USDC_USD_CONVERSION | 9 | Usdc Usd Conversion state or type |

**Use Cases:**
- Setting activitytype for items
- Filtering items by activitytype in queries
- Enforcing business logic based on activitytype

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid activitytype values should be used in production code
- ActivityType changes should be tracked in audit trails for compliance purposes

#### ReceiverType {#receivertype}

The `ReceiverType` enum defines the possible states or types for trade, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| EMAIL | 0 | Default/unused value (protobuf convention) |
| TX | 1 | Tx state or type |
| ETHEREUM | 2 | Ethereum state or type |
| SOLANA | 3 | Solana state or type |

**Use Cases:**
- Setting receivertype for items
- Filtering items by receivertype in queries
- Enforcing business logic based on receivertype

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid receivertype values should be used in production code
- ReceiverType changes should be tracked in audit trails for compliance purposes

#### Status {#status}

The `Status` enum defines the possible states or types for trade, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_STATUS | 0 | Default/unused value (protobuf convention) |
| PARTIALLY_FILLED | 1 | Partially Filled state or type |
| FILLED | 2 | Filled state or type |
| CANCELLED | 3 | Cancelled state or type |
| PLACED | 4 | Placed state or type |
| EXPIRED | 5 | Expired state or type |
| PENDING | 6 | Pending state or type |

**Use Cases:**
- Setting status for items
- Filtering items by status in queries
- Enforcing business logic based on status

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid status values should be used in production code
- Status changes should be tracked in audit trails for compliance purposes

## tradepair.proto

### Package Information

- **Package Name**: `trade`
- **Go Package Path**: `github.com/sologenic/com-fs-trade-model;trade`

### Overview

The `tradepair.proto` file defines the core tradepair model for trade management. It provides message types for representing tradepair data and operations. The file integrates with external utility libraries: `metadata.proto`, `denom.proto`, `decimal.proto`.

### Messages

#### TradePair {#tradepair}

The `TradePair` message provides tradepair data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Denom1 | `denom.Denom` | Required | Denom information |
| Denom2 | `denom.Denom` | Required | Denom information |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| PriceTick | `decimal.Decimal` | Optional | Decimal information |
| QuantityStep | `int64` | Optional | QuantityStep field |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |

**Use Cases:**
- Creating new tradepair records
- Retrieving tradepair information
- Updating tradepair data
- Associating items with specific organizations

**Important Notes:**
- The `OrganizationID` must be a valid UUID format

#### TradePairs {#tradepairs}

The `TradePairs` message represents a collection of tradepair with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| TradePairs | `TradePair` | Optional | TradePairs field |
| Offset | `int32` | Optional | Offset field |

**Use Cases:**
- Returning paginated lists of tradepair from queries or searches
- Implementing pagination in tradepair listing APIs
- Handling large tradepairs efficiently
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `trade.proto`, `tradepair.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `trade.proto`, `tradepair.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-asset-model/domain/denom/denom.proto`
  - `sologenic/com-fs-utils-lib/models/decimal/decimal.proto`
