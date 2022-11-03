# Identity

Adds customer name, birthday and address to Flamarkt

## Scout Integration

Since Scout uses a single index per model, since users/customers share the same Flarum model and since searched attributes can't be customized at run time, there's no way to make the private information from this extension available only to shop managers.

For this reason, indexing of Identity data by Scout must be manually allowed in the backoffice.
You must purge and re-generate the Scout index for users after changing the setting.

Make sure only trusted user groups are granted the **Search users** Flarum permissions.

Unfortunately, this means you currently can't use Flamarkt together with Mentions or User Directory and make this data searchable at the same time.
It's planned to fix this once a good solution is found in the Scout extension to have multiple indexes or whitelist attributes during search.

When indexing is allowed, this extension also adds the user email to the Scout search index.
This might be moved to a different extension (maybe Scout itself) in the future.
