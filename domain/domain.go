package domain

import "fmt"

// In Datastore, trades use the TXID value as a key component. However, this makes the key non-reproducible when a trade is updated, which prevents updating the indexed object in OpenSearch.
// To address this, we use a different key for trade indexes in OpenSearch, allowing pending or partially filled "trades" to be updated.
// OrderKey includes the network, as well as the order number, which is unique for each order.
func TradeOpenSearchIndexKey(orderKey, orgID string) string {
	return fmt.Sprintf("%s_%s", orgID, orderKey)
}
