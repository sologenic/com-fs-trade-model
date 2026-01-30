package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-trade-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const endpoint = "TRADE_STORE"

var (
	client     grpcdef.TradeServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewTradeServiceClient(grpcClient.Conn)
}

func Client() grpcdef.TradeServiceClient {
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
