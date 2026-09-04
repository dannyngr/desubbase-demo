# Database Design

The application uses MySQL as its primary relational database.

## Main Entities

### Users

Stores account and profile information.

### Transactions

Stores financial and service transactions.

### Data Plans

Stores available data subscription plans.

### Virtual Accounts

Stores virtual account information used for wallet funding.

### Achievements

Stores achievement definitions and user progress.

### Marketplace Orders

Stores marketplace purchase information.

## Relationships

Users can have many transactions.

Users can have many achievements.

Users can have many marketplace orders.

Transactions may reference different service types and providers.