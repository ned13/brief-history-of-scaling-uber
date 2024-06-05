import { Machine, interpret } from 'xstate';

const orderFulfillmentMachine = Machine({
  id: 'orderFulfillment',
  initial: 'orderCreated',
  states: {
    orderCreated: {
      on: {
        processOrder: 'processing'
      }
    },
    processing: {
      initial: 'inventoryChecked',
      states: {
        inventoryChecked: {
          on: {
            checkInventory: 'packaging'
          }
        },
        packaging: {
          on: {
            generateShippingLabel: 'shippingLabelGenerated'
          }
        },
        shippingLabelGenerated: {
          on: {
            shipOrder: '#orderFulfillment.shipped'
          }
        }
      },
      on: {
        cancel: 'orderCancelled'
      }
    },
    shipped: {
      on: {
        completeOrder: 'completed'
      }
    },
    completed: {
      type: 'final'
    },
    orderCancelled: {
      type: 'final'
    }
  }
});

// 創建一個解釋器
const orderService = interpret(orderFulfillmentMachine)
  .onTransition(state => console.log(state.value))
  .start();

// 發送一些事件來測試狀態機
orderService.send('processOrder'); // 進入 processing
orderService.send('checkInventory'); // 進入 packaging
orderService.send('generateShippingLabel'); // 進入 shippingLabelGenerated
orderService.send('shipOrder'); // 進入 shipped
orderService.send('completeOrder'); // 進入 completed
