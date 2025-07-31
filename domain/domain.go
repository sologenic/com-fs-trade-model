package domain

import (
	"fmt"

	"github.com/sologenic/com-fs-utils-lib/models/metadata"
)

// In Datastore, trades use the TXID value as a key component. However, this makes the key non-reproducible when a trade is updated, which prevents updating the indexed object in OpenSearch.
// To address this, we use a different key for trade indexes in OpenSearch, allowing pending or partially filled "trades" to be updated.
func TradeOpenSearchIndexKey(userID, orgID string, sequence int64, network metadata.Network) string {
	return fmt.Sprintf("%s_%d_%s_%d", userID, sequence, orgID, network)
}
