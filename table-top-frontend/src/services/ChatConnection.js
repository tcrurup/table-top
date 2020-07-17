import ActionCable from 'actioncable'

class ChatConnection{

    constructor(senderId, callback){
        this.senderId = senderId
        this.callback = callback

        const url = 'ws://localhost:3001/cable'

        this.connection = ActionCable.createConsumer(url)
        this.roomConnections = []     
    }

    openNewRoom(roomId){
        if(roomId !== undefined){
            this.roomConnections.push({
                roomId: roomId, 
                conn: this.createRoomConnection(roomId)
            })
        }
    }

    createRoomConnection(roomId){
        console.log('connecting to room')
        this.connection.subscriptions.create({
            channel: 'RoomChannel', 
            room_id: roomId, 
            sender: this.senderId
        })
    }

    talk(message, roomId){
        const room = this.roomConnections.find(room => room.roomId == roomId)
        if(room){
            return room
        }
    }  
}

export default ChatConnection