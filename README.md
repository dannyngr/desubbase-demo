Desubbase

A Nigerian VTU & Digital Services Platform

Desubbase is a modern digital services platform designed for Nigerian users to conveniently access VTU, utility, wallet, and digital marketplace services from one platform.

"Desubbase Dashboard" (screenshots/dashboard.png)

---

🚀 Features

- 📱 Data subscription
- 📞 Airtime purchase
- 🧾 Recharge card printing
- ⚡ Electricity payments
- 📺 Cable TV subscription
- 🎓 Examination PINs
- 🪪 NIN services
- 💰 Airtime-to-cash
- 📩 Bulk SMS
- 🛒 Digital marketplace
- 💳 Wallet funding
- 📊 Transaction history
- 🎁 Referral system
- 🏆 Achievement system
- 🔐 Transaction PIN security
- 👨‍💼 Admin management system

"View all features →" (documentation/features.md)

---

🏗️ Architecture

                    Desubbase
                        │
             ┌──────────┴──────────┐
             │                     │
       React / Vite           Admin Interface
         Frontend
             │
             ▼
       Node.js / Express
           Backend
             │
       ┌─────┴─────┐
       ▼           ▼
     MySQL     External APIs
               & Providers

"View architecture →" (documentation/architecture.md)

---

🛠️ Technology Stack

Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Lucide React

Backend

- Node.js
- Express.js
- MySQL
- JWT
- bcrypt

External Services

- VTU service providers
- Payment gateways
- Cloud image storage
- Email services

---

🔐 Security

The platform is designed with multiple security layers for account and financial operations.

- Password hashing
- Authentication
- Transaction PIN
- PIN attempt protection
- Rate limiting
- Database transactions
- Row-level locking
- Idempotency protection
- Webhook verification
- Environment-based secrets

"View security documentation →" (documentation/security.md)

---

🗄️ Database Design

The backend uses MySQL as its primary relational database.

Major application entities include:

- Users
- Transactions
- Data plans
- Virtual accounts
- Payment gateways
- Achievements
- Marketplace products
- Marketplace orders
- Notifications

"View database design →" (documentation/database-design.md)

---

🔌 API Overview

The backend provides REST API endpoints for:

- Authentication
- Users
- Wallet
- Airtime
- Data
- Electricity
- Cable TV
- Recharge cards
- Examination PINs
- Marketplace
- Transactions
- Notifications
- Administration

"View API overview →" (documentation/api-overview.md)

---

📸 Screenshots

Dashboard

"Dashboard" (screenshots/dashboard.png)

Transactions

"Transactions" (screenshots/transactions.png)

Data Subscription

"Data Subscription" (screenshots/data.png)

Marketplace

"Marketplace" (screenshots/marketplace.png)

---

📚 Documentation

Section| Description
"Features" (documentation/features.md)| Application features
"Architecture" (documentation/architecture.md)| System architecture
"Security" (documentation/security.md)| Security approach
"Database Design" (documentation/database-design.md)| Database structure
"API Overview" (documentation/api-overview.md)| API organization
"Development" (documentation/development.md)| Development information

---

📊 Project Status

Status: Active Development

Desubbase is continuously being improved with new digital services, UI/UX improvements, security enhancements, and platform features.

---

🎯 Project Goal

The goal of Desubbase is to provide Nigerian users with a reliable, convenient, and modern platform for accessing everyday digital and utility services.

---

⚠️ Public Demo

This repository is a public showcase of the Desubbase project.

Production credentials, API keys, database credentials, customer information, payment secrets, and other sensitive infrastructure are intentionally excluded.

---

👨‍💻 Built With

React • Vite • Node.js • Express • MySQL • Tailwind CSS

---

Desubbase

A modern Nigerian VTU & digital services platform.