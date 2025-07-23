package domain

import "fmt"

// In Datastore, trades use the TXID value as a key component. However, this makes the key non-reproducible when a trade is updated, which prevents updating the indexed object in OpenSearch.
// To address this, we use a different key for trade indexes in OpenSearch, allowing pending or partially filled "trades" to be updated.
func TradeOpenSearchIndexKey(sequence int64, orderKey, orgID string) string { // Network is included in orderKey
	return fmt.Sprintf("%d_%s_%s", sequence, orgID, orderKey)
}
