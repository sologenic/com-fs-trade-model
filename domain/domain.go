package domain

import (
	"fmt"

	"github.com/sologenic/com-fs-utils-lib/models/metadata"
	orderproperties "github.com/sologenic/com-fs-utils-lib/models/order-properties"
)

// In Datastore, trades use the TXID value as a key component. However, this makes the key non-reproducible when a trade is updated, which prevents updating the indexed object in OpenSearch.
// The challenge is to create a key that can reliably identify a trade for updates (e.g., from 'pending' to 'filled') without using fields that are unique to each transaction, like TXID or Sequence.
// Relying on optional fields like OrderKey or TXID is not a viable solution as they can be nil, leading to potential issues.
// Therefore, the most reliable solution is to create a composite key from a set of non-optional fields that uniquely identify a conceptual trade.
// This composite key is generated using the user's ID, organization ID, the two currency denoms, the side of the trade (buy/sell), the creation timestamp in seconds and network.
// This combination represents a specific user's intent to trade a specific pair in a specific direction, initiated at a specific time.
// While there is a small risk of collision if the same user creates identical orders in the same second, this is a much less likely failure scenario than relying on an optional field that might be nil.
func TradeOpenSearchIndexKey(userID, orgID, denom1Str, denom2Str string, side orderproperties.Side, createdAtSeconds int64, network metadata.Network) string {
	return fmt.Sprintf("%s_%s_%s_%d_%d_%s_%d", userID, denom1Str, denom2Str, side, createdAtSeconds, orgID, network)
}
