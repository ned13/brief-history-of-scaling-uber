import { createMachine } from "xstate";

export const machine = createMachine({
  context: {},
  id: "tripEntity",
  initial: "created",
  states: {
    created: {
      initial: "requestReceived",
      on: {
        CANCEL: {
          target: "cancelled",
        },
      },
      states: {
        requestReceived: {
          on: {
            CONFIRM_REQUEST: {
              target: "awaitingDriver",
            },
          },
        },
        awaitingDriver: {
          on: {
            ASSIGN_DRIVER: {
              target: "#tripEntity.driverAssigned",
            },
          },
        },
      },
    },
    cancelled: {
      type: "final",
    },
    driverAssigned: {
      initial: "driverEnRoute",
      on: {
        CANCEL: {
          target: "cancelled",
        },
      },
      states: {
        driverEnRoute: {
          on: {
            DRIVER_ARRIVED: {
              target: "driverArrived",
            },
          },
        },
        driverArrived: {
          on: {
            START_TRIP: {
              target: "#tripEntity.inProgress",
            },
          },
        },
      },
    },
    inProgress: {
      type: "parallel",
      on: {
        COMPLETE_TRIP: {
          target: "completed",
        },
        CANCEL: {
          target: "cancelled",
        },
      },
      states: {
        riderState: {
          initial: "inCar",
          states: {
            inCar: {
              on: {
                RIDER_LEFT: {
                  target: "leftCar",
                },
              },
            },
            leftCar: {
              type: "final",
            },
          },
        },
        driverState: {
          initial: "driving",
          states: {
            driving: {
              on: {
                ARRIVED_AT_DESTINATION: {
                  target: "arrived",
                },
              },
            },
            arrived: {
              type: "final",
            },
          },
        },
      },
    },
    completed: {
      type: "final",
    },
  },
}).withConfig({});
