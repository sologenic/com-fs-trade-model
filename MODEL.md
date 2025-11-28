# Trade Documentation

## Table of Contents

- [Overview](#overview)
- [trade.proto](#trade)
  - [Messages](#messages)
    - [Trade](#trade)
- [tradepair.proto](#tradepair)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Trade provides a comprehensive data structure for managing trade within the system. This model supports identification: provides unique identifiers for trade, organizational context: links items to organizations via organizationid, metadata and audit: includes metadata and audit trails for tracking changes, and more. 

Key features of the {model_name.lower()} model include:
- **Identification**: Provides unique identifiers for trade
- **Organizational Context**: Links items to organizations via OrganizationID
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Status Management**: Tracks status for administrative control

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
- The `Side` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format
- The `TXID` field must match a valid identifier format
- The `Status` field determines the current state of this item

## tradepair.proto

### Package Information

- **Package Name**: `trade`
- **Go Package Path**: `github.com/sologenic/com-fs-trade-model;trade`

### Overview

The `tradepair.proto` file defines the core tradepair model for trade management. It provides message types for representing tradepair data and operations. The file integrates with external utility libraries: `metadata.proto`, `denom.proto`, `decimal.proto`.

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `trade.proto`, `tradepair.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `trade.proto`, `tradepair.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-asset-model/domain/denom/denom.proto`
  - `sologenic/com-fs-utils-lib/go/decimal/decimal.proto`
