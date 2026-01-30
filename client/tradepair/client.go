package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-trade-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const endpoint = "TRADE_STORE"

var (
	client     grpcdef.TradePairServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewTradePairServiceClient(grpcClient.Conn)
}

func Client() grpcdef.TradePairServiceClient {
	if client == nil {
		initClient()
	}
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initClient()
	}
	return grpcClient.AuthCtx(ctx)
}
