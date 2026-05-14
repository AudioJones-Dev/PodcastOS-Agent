# Service Tier Cadence Schema

## Purpose

Defines how often the production cycle runs based on the client service tier.

## Tier 1 - Monthly

```yaml
tier: tier_1
cadence: monthly
episodes_per_month: 1
production_cycles_per_month: 1
```

## Tier 2 - Bi-Weekly

```yaml
tier: tier_2
cadence: bi_weekly
episodes_per_month: 2
production_cycles_per_month: 2
```

## Tier 3 - Weekly

```yaml
tier: tier_3
cadence: weekly
episodes_per_month: 4
production_cycles_per_month: 4
```

## Scheduling Rule

The system should not create more episode cycles than the client tier allows unless manually approved.
