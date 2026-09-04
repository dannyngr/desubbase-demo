# Security

Desubbase uses multiple layers of protection for financial and account operations.

## Authentication

User authentication is handled through secure server-side authentication mechanisms.

## Transaction PIN

Financial operations can require a separate transaction PIN.

Repeated failed PIN attempts can trigger temporary account protection.

## Idempotency

Idempotency keys are used for important financial operations to help prevent duplicate transactions.

## Database Transactions

Critical balance operations use database transactions and row-level locking to maintain consistency.

## Secrets

Production credentials and API keys are stored outside the source code using environment variables.