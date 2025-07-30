# Trade

The trade proto provides all the functionality required to interact with the trade store.

The `Trade` model was initially designed to represent an executed order. However, with the introduction of the `ActivityType` enum, the definition of a `Trade` has expanded to become more of a `Transaction`.

The `ActivityType` enum includes values such as `DEPOSIT`, `WITHDRAWAL`, `DIVIDEND`, etc., which are not trades in the traditional sense, but rather transactions that affect an account's balance. This was a necessary change to accommodate the needs of the system.

Therefore, it is important to understand that when we are working with the `Trade` model, we are actually working with a `Transaction` that can represent a variety of activities, not just a trade.

Since wallets hold tokenized assets, we can treat inflow activities (e.g., deposits, dividends, received) as "buys" and outflow activities (e.g., withdrawals, sent) as "sells".

## Building the required files

Once the proto file is updated, update the generated files with:

```sh
./bin/build.sh
```