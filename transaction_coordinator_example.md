```staruml
@startuml
allowmixing
object User
object OrderService
object FulfillmentService
object Order
object FoodPreparationJob
object FoodDeliveryJob
object EntityTriggersGraph
object Gateway
database Spanner

User --> OrderService : 1. Place Order
OrderService --> Order : 2. Create Order
OrderService --> Gateway : 3. Save Order
Gateway --> Spanner : 4. Store Order
OrderService --> FulfillmentService : 5. Start fulfillment
FulfillmentService --> Gateway : 6. Query Order
FulfillmentService --> FoodPreparationJob : 7. Create FoodPreparationJob
FulfillmentService --> FoodDeliveryJob : 8. Create FoodDeliveryJob
FulfillmentService --> FulfillmentService : 9. Do some business logic
FulfillmentService --> EntityTriggersGraph : 10. Create EntityTriggersGraph 
FulfillmentService --> Gateway : 11. Send EntityTriggersGraph to update entities
Gateway --> Spanner : 12. Update every node in Graph



@enduml
```
