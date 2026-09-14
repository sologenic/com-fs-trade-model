package client

import (
	"context"
	"sync"

	grpcdef "github.com/sologenic/com-fs-trade-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const endpoint = "TRADE_STORE"

var (
	client     grpcdef.TradeServiceClient
	grpcClient *grpcclient.GRPCClient

	// once ensures the client is initialized only once, even under concurrent access
	once sync.Once
)

// initClient initializes the gRPC client and connection.
// It is intended to be called only via sync.Once.
func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewTradeServiceClient(grpcClient.Conn)
}

// Client returns the initialized TradeServiceClient.
// It is safe for concurrent use by multiple goroutines.
func Client() grpcdef.TradeServiceClient {
	once.Do(initClient)
	return client
}

// AuthCtx wraps the provided context with authentication data using the gRPC client.
// It ensures the client is initialized before attempting to use it.
func AuthCtx(ctx context.Context) context.Context {
	once.Do(initClient)
	return grpcClient.AuthCtx(ctx)
}
