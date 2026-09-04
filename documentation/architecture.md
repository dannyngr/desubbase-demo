Desubbase Architecture

Overview

Desubbase is a modern VTU and digital services platform designed for Nigerian users.

The application follows a layered architecture that separates the user interface, backend business logic, database operations, external service integrations, and administration.

                         DESUBBASE
                             │
              ┌──────────────┴──────────────┐
              │                             │
        User Application              Admin Application
         React + Vite                    React + Vite
              │                             │
              └──────────────┬──────────────┘
                             │
                         REST API
                             │
                             ▼
                  Node.js + Express
                       Backend
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
       MySQL           External APIs       Payment Services
      Database         VTU Providers        & Webhooks
          │
          ▼
   Application Data

---

1. Frontend Layer

The frontend is built with React and Vite and provides the user-facing interface.

The application is designed to work across mobile and desktop devices.

Main responsibilities

- User interface
- Navigation
- Forms and validation
- Service selection
- Transaction displays
- Wallet interface
- Marketplace interface
- Notifications
- User profile
- Responsive layouts
- API communication

The frontend communicates with the backend through HTTP API requests.

User
  │
  ▼
React Components
  │
  ▼
API Requests
  │
  ▼
Backend API

The frontend does not directly communicate with the MySQL database.

---

2. Backend Layer

The backend is built with Node.js and Express.js.

It acts as the central application layer between the frontend, database, payment systems, and external VTU providers.

Main responsibilities

- Authentication
- Authorization
- User management
- Wallet operations
- Transaction processing
- Service purchases
- Pricing and business rules
- Referral processing
- Achievement processing
- Marketplace operations
- Payment processing
- Webhook handling
- Provider communication
- Input validation
- Security controls

The backend is responsible for important calculations and financial decisions rather than trusting values supplied by the frontend.

Frontend
   │
   │ Request
   ▼
Express API
   │
   ├── Validate request
   ├── Authenticate user
   ├── Apply business rules
   ├── Process transaction
   ├── Update database
   └── Return response

---

3. Database Layer

Desubbase uses MySQL as its primary relational database.

The database stores application data required for users, transactions, services, payments, achievements, and marketplace operations.

Major entities

Users
 │
 ├── Transactions
 ├── Achievements
 ├── Wallet information
 ├── Virtual accounts
 └── Marketplace orders

Service Configuration
 │
 ├── Data plans
 ├── Airtime configuration
 ├── Cable services
 ├── Electricity services
 └── Examination products

The backend communicates with MySQL. The frontend does not directly access the database.

---

4. External VTU Providers

Desubbase can communicate with external service providers to fulfil digital services.

Examples of service categories include:

- Airtime
- Data
- Cable TV
- Electricity
- Recharge cards
- Examination PINs
- Other digital services

The backend acts as the integration layer.

User
  │
  ▼
Desubbase Backend
  │
  ▼
Provider Integration
  │
  ▼
External VTU Provider
  │
  ▼
Transaction Result

Provider credentials and private integration details are kept outside the public repository.

---

5. Payment Architecture

The platform supports payment processing for wallet funding and other financial operations.

The general flow is:

User
 │
 ▼
Payment Request
 │
 ▼
Payment Provider
 │
 ▼
Payment Processing
 │
 ▼
Webhook / Confirmation
 │
 ▼
Desubbase Backend
 │
 ▼
Verify Transaction
 │
 ▼
Update Wallet
 │
 ▼
Record Transaction

Payment confirmations are processed by the backend rather than trusting the frontend.

Production payment credentials and webhook secrets are not included in this public repository.

---

6. Wallet & Transaction Processing

Financial operations are handled by the backend.

A typical transaction follows this process:

User initiates transaction
          │
          ▼
Authenticate user
          │
          ▼
Validate request
          │
          ▼
Validate transaction PIN
          │
          ▼
Check balance
          │
          ▼
Apply business rules
          │
          ▼
Create transaction
          │
          ▼
Process service
          │
          ▼
Update transaction status
          │
          ▼
Return result

Critical database operations use transaction controls to help maintain consistency and prevent incorrect wallet balances.

---

7. Idempotency

Important financial operations can use idempotency keys to reduce the risk of duplicate processing.

Request
   │
   ▼
Idempotency Key
   │
   ▼
Check Existing Request
   │
   ├── Exists ──► Return Previous Result
   │
   └── New ─────► Process Transaction

This is particularly useful when a user retries a request because of a slow network connection or temporary failure.

---

8. Webhook Architecture

External services can notify Desubbase through webhooks.

The general flow is:

External Service
      │
      ▼
Webhook Endpoint
      │
      ▼
Verify Request
      │
      ▼
Validate Event
      │
      ▼
Process Event
      │
      ▼
Update Database
      │
      ▼
Record Result

Webhook authentication and signatures are verified where supported.

---

9. Authentication & Authorization

The application separates authentication from authorization.

Authentication determines whether a user is logged in.

Authorization determines what the authenticated user is allowed to do.

User
 │
 ▼
Login
 │
 ▼
Authentication
 │
 ▼
Authenticated Session
 │
 ▼
Authorization
 │
 ▼
Allowed Application Features

Administrative functionality is protected separately from normal user functionality.

---

10. Admin Architecture

The administration system provides tools for managing the platform.

Administrative functionality can include:

- User management
- Transaction monitoring
- Product management
- Pricing
- Service configuration
- Notifications
- Achievements
- Marketplace management
- Payment monitoring
- Platform configuration

                 Admin
                   │
                   ▼
            Admin Interface
                   │
                   ▼
              Admin API
                   │
          ┌────────┴────────┐
          ▼                 ▼
       MySQL          Application Services

Administrative access is controlled through roles and permissions.

---

11. Marketplace Architecture

The marketplace allows users to browse products and place orders.

A simplified checkout flow is:

Browse Products
      │
      ▼
Add to Cart
      │
      ▼
Checkout
      │
      ▼
Authenticate
      │
      ▼
Validate Transaction PIN
      │
      ▼
Check Balance & Stock
      │
      ▼
Create Order
      │
      ▼
Process Payment
      │
      ▼
Update Stock
      │
      ▼
Record Transaction

Critical checkout operations are handled on the backend.

---

12. Security Architecture

Security is implemented across multiple layers.

Application security

- Authentication
- Authorization
- Password hashing
- Transaction PIN protection
- PIN attempt limits
- Rate limiting
- Input validation
- Secure session handling

Financial security

- Backend-side balance validation
- Database transactions
- Row-level locking where required
- Idempotency protection
- Transaction records
- Webhook verification

Infrastructure security

Sensitive configuration is stored using environment variables or secure deployment configuration.

The public repository does not contain:

- Database passwords
- API keys
- Payment secrets
- JWT secrets
- Webhook secrets
- Customer information
- Production credentials

---

13. Error Handling

The backend handles failures from both internal operations and external providers.

A typical flow is:

Request
  │
  ▼
Process Operation
  │
  ├── Success ──► Successful Response
  │
  └── Error
        │
        ▼
   Error Handling
        │
        ├── Retryable
        │
        ├── Validation Error
        │
        └── Permanent Failure

This helps the platform provide consistent responses while protecting transaction integrity.

---

14. Overall Request Flow

A typical service transaction can be represented as:

┌───────────────┐
│     User      │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ React / Vite  │
│   Frontend    │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ Node / Express│
│     API       │
└───────┬───────┘
        │
   ┌────┼───────────────┐
   │    │               │
   ▼    ▼               ▼
 MySQL  Business     External
        Logic        Providers
   │                    │
   │                    ▼
   │              Service Result
   │                    │
   └──────────┬─────────┘
              ▼
       Transaction Update
              │
              ▼
        API Response
              │
              ▼
        React Interface

---

15. Technology Stack

Layer| Technology
Frontend| React
Build Tool| Vite
Styling| Tailwind CSS
HTTP Client| Axios
Icons| Lucide React
Backend| Node.js
API Framework| Express.js
Database| MySQL
Authentication| JWT
Password Security| bcrypt
Real-time Features| Socket.IO
Image Storage| Cloud-based image storage
Payments| External payment providers
VTU Services| External VTU providers

---

16. Public Repository Scope

This public repository is intended as a project showcase.

The production application contains additional private infrastructure and business logic that is intentionally not published.

The public repository focuses on:

- Architecture
- User interface
- Demonstration components
- Documentation
- Project features
- Technical decisions

Sensitive production infrastructure remains private.

---

Conclusion

Desubbase uses a layered architecture that separates the frontend, backend, database, external service integrations, payment processing, and administration.

This separation allows the platform to remain maintainable, scalable, and secure while providing a single interface through which users can access multiple Nigerian digital services.