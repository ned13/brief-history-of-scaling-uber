```mermaid
graph TD
    subgraph Helix
        Coordinator[Helix Coordinator] --> Node1[Node 1]
        Coordinator --> Node2[Node 2]
        Coordinator --> Node3[Node 3]
        Coordinator --> Node4[Node 4]
        
        Node1 -- Manages --> Shard1[Shard 1]
        Node2 -- Manages --> Shard2[Shard 2]
        Node3 -- Manages --> Shard3[Shard 3]
        Node4 -- Manages --> Shard4[Shard 4]
    end
    
    subgraph Zookeeper
        Zookeeper[Zookeeper]
    end
    
    Zookeeper --> Coordinator
    
    style Helix fill:#BBF,stroke:#000,stroke-width:2px
    style Zookeeper fill:#BBF,stroke:#000,stroke-width:2px
    style Shard1 fill:#F9F,stroke:#333,stroke-width:1px
    style Shard2 fill:#F9F,stroke:#333,stroke-width:1px
    style Shard3 fill:#F9F,stroke:#333,stroke-width:1px
    style Shard4 fill:#F9F,stroke:#333,stroke-width:1px

```
