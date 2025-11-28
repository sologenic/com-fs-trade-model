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

The Trade provides a comprehensive data structure for managing trade within the system. This model supports organizational context: links items to organizations via organizationid, metadata and audit: includes metadata and audit trails for tracking changes, identification: provides unique identifiers for trade, and more. 

Key features of the {model_name.lower()} model include:
- **Organizational Context**: Links items to organizations via OrganizationID
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Identification**: Provides unique identifiers for trade
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
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| TXID | `string` | Optional | Unique identifier for the tx |
| BlockHeight | `int64` | Required | BlockHeight field |
| Status | `Status` | Optional | Current status of this item (see related enum) |
| ActivityType | `ActivityType` | Optional | Type classification for this item (see related enum) |
| Inverted | `bool` | Required | Inverted field |

**Use Cases:**
- Creating new trade records
- Retrieving trade information
- Updating trade data
- Associating items with specific organizations
- Tracking status for administrative purposes

**Important Notes:**
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
