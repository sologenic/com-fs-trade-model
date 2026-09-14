# Trade

The trade proto provides all the functionality required to interact with the trade store.

The `Trade` model represents a full or partial fill of an order. An order can have zero, one, or many trades.

The Trade model is universal and supports both:
1) Broker Securities Smart Contract (buying and selling securities using Alpaca).
2) TX marketplace.

A Trade is considered immutable after it has been saved in the database. The Datastore Key is built using the format: `OrganizationID_ExecutionID`.

## Building the required files

Once the proto file is updated, update the generated files with:

```sh
./bin/build.sh
