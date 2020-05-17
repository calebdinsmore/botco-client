# Blood on the Clocktower Online Angular Client

## Running for Development

```sh
npm install
npm run start
```

## Important Things to Know

### Server Authoritative State

In this app, the server is the single source of truth for the game state, and clients are dumb representations of it. The only means by which clients can modify state is by sending commands to the server, which validates those commands and modifies state as is appropriate. All of the commands the client can send that the server accepts are found in `commands.enum.ts`.

### Room Service (src/app/core/services/room/room.service.ts)

This is the core of the application and drives everything. It is how the client connects to the server and is how components keep track of state. When the client joins a room with the room service, the room service sets up the core Colyseus room handlers (onStateChange, onError, onLeave) as well as some specific message handlers used by the application.

The room service sets up a BehaviorSubject of the GameStateDto which is updated when the server patches the game state. Components subscribe to this subject and render state as it gets updated.

### Game Table Store (src/app/core/stores/game-table-store/game-table-store.service.ts)

This is an implementation of codewithdan's ObservableStore pattern, which is a simplified implementation of the Flux pattern (found in Redux). Since the server is the source of truth for game state, this store is used purely for cases where different components within the interface need access to the same bit of data mostly unrelated to game state.

An example of a use case for this store is when dragging players around to rearrange player seats. Without the store, there would be no way for the game-room-table-seat to know what player was being dragged when it was dropped. It works like this:

- onDragStart: set draggedPlayerId in the store
- onDrop: get draggedPlayerId and send command to server to set the player's new seat
- onDragEnd: set draggedPlayerId to null
