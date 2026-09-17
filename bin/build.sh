#!/usr/bin/env bash

set -euo pipefail

# Move to the root directory of the package
rd=$(git rev-parse --show-toplevel)

mkdir -p dependencies/buf/validate
curl https://raw.githubusercontent.com/bufbuild/protovalidate/refs/heads/main/proto/protovalidate/buf/validate/validate.proto > dependencies/buf/validate/validate.proto

mkdir -p dependencies/google/protobuf
curl https://raw.githubusercontent.com/protocolbuffers/protobuf/refs/heads/main/src/google/protobuf/timestamp.proto > dependencies/google/protobuf/timestamp.proto

mkdir -p dependencies/google/type
curl https://raw.githubusercontent.com/googleapis/googleapis/refs/heads/master/google/type/decimal.proto > dependencies/google/type/decimal.proto

protoc \
--proto_path=. "trade.proto" \
--proto_path="$rd" \
"--go_out=." --go_opt=paths=source_relative \
--go-grpc_opt=require_unimplemented_servers=false \
"--go-grpc_out=." --go-grpc_opt=paths=source_relative

protoc \
--proto_path=. "trade-grpc.proto" \
--proto_path="$rd" \
"--go_out=." --go_opt=paths=source_relative \
--go-grpc_opt=require_unimplemented_servers=false \
"--go-grpc_out=." --go-grpc_opt=paths=source_relative

rm -rf node_modules
npm i

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
--proto_path=. \
--proto_path="$rd" \
--ts_proto_out=. \
--ts_proto_opt=esModuleInterop=true \
--ts_proto_opt=outputServices=grpc-js \
trade.proto

npm run build-ts
rm -rf node_modules
git add build/

git add *.ts
