# Trade Documentation

## Table of Contents

- [trade.proto](#trade)
- [tradepair.proto](#tradepair)

## Overview

The Trade provides data structures and definitions for managing trade within the system.

## trade.proto {#trade}

### Package Information

- **Package Name**: `trade`
- **Go Package Path**: `github.com/sologenic/com-fs-trade-model;trade`

### Overview

The `trade.proto` file defines the Trade model.

### Messages

#### Trade

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Denom2 | `Denom` | 7 |  |
| Side | `Side` | 8 |  |
| BlockTime | `Timestamp` | 9 |  |
| OrganizationID | `string` | 10 |  |
| Receiver | `Receiver` | 11 |  |
| MetaData | `MetaData` | 30 |  |
| TXID | `string` | 31 |  |
| BlockHeight | `int64` | 32 |  |
| Enriched | `bool` | 33 |  |
| Processed | `bool` | 34 |  |
| Status | `Status` | 35 |  |
| USD | `float` | 40 |  |
| TradeType | `TradeType` | 41 |  |
| Commission | `double` | 42 |  |
| TimeInForce | `TimeInForce` | 43 |  |
| ActivityType | `ActivityType` | 44 |  |
| Inverted | `bool` | 50 |  |
| RequestedQty | `Decimal` | 51 |  |
| LimitPrice | `double` | 52 |  |
| FilledQty | `Decimal` | 53 |  |
| FilledAvgPrice | `double` | 54 |  |

## tradepair.proto {#tradepair}

### Package Information

- **Package Name**: `trade`
- **Go Package Path**: `github.com/sologenic/com-fs-trade-model;trade`

### Overview

The `tradepair.proto` file defines the Tradepair model.

## Version Information

This documentation corresponds to the current version of the proto files in this repository.

## Support

For more information, see:
- README.md in this repository
- Protocol Buffer documentation
