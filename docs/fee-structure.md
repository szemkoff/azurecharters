# Azure Yacht Group Fee Structure

## Charter Fee Breakdown

```mermaid
graph TD
    CF[Charter Fee 100%] --> APA[APA 30%]
    CF --> Commission[Azure Commission]
    CF --> OwnerShare[Owner's Share]
    
    Commission --> StandardComm[Standard: 15%]
    Commission --> SpecialComm[Special Marketing: Up to 20%]
    Commission --> AddServComm[Additional Services: 10%]
    
    APA --> Fuel[Fuel]
    APA --> Food[Food & Beverages]
    APA --> Port[Port Fees]
    APA --> Other[Other Operating Costs]
    APA --> Refund[Unused Amount Refunded]

    style CF fill:#f9f,stroke:#333,stroke-width:4px
    style APA fill:#bbf,stroke:#333
    style Commission fill:#bfb,stroke:#333
    style OwnerShare fill:#fbb,stroke:#333
```

## Additional Required Payments

```mermaid
graph LR
    Required[Required Payments] --> Tax[Florida Sales Tax 7%]
    Required --> Gratuity[Crew Gratuity 20%]
    Required --> Security[Security Deposit]
    
    style Required fill:#f9f,stroke:#333,stroke-width:4px
```

## Payment Flow Example
For a $10,000 Charter:

```mermaid
graph TD
    Total[$10,000 Charter Fee] --> Base[Base Charter Fee]
    Total --> Extra[Additional Required]
    
    Base --> Commission[$1,500 Commission]
    Base --> APA[$3,000 APA]
    Base --> Owner[$5,500 Owner]
    
    Extra --> Tax[$700 Sales Tax]
    Extra --> Gratuity[$2,000 Crew Gratuity]
    Extra --> Security[Security Deposit]
    
    style Total fill:#f9f,stroke:#333,stroke-width:4px
    style Commission fill:#bfb,stroke:#333
    style APA fill:#bbf,stroke:#333
    style Owner fill:#fbb,stroke:#333
```

## Notes:
1. APA (Advanced Provisioning Allowance):
   - 30% of charter fee
   - Managed by captain
   - Unused portion refunded
   - Can be replenished if depleted

2. Commission Structure:
   - Standard: 15% of gross charter fee
   - Special Marketing: Up to 20%
   - Additional Services: 10%

3. Required Payments:
   - Florida Sales Tax: 7%
   - Recommended Crew Gratuity: 20%
   - Security Deposit: Amount varies by vessel

4. Payment Schedule:
   - Booking Deposit: 25-50% (vessel dependent)
   - Balance: 30 days before or day-of-charter
   - Security Deposit: With final payment or 48h before 