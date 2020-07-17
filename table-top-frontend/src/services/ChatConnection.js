import ActionCable from 'actioncable'

class ChatConnection{

    constructor(senderId, callback){
        this.senderId = senderId
        this.callback = callback

        const url = 'ws://localhost:3001/cable'

        this.connection = ActionCable.createConsumer(url)
        console.log(this.connection)
        this.roomConnections = []     
    }

    chat(message, roomId){
        let room = this.roomConnections.find(conn => conn.roomId == roomId)
        if(room){
            room.conn.speak(message)
        } else {
            console.log('error sending message')
        }
    }

    openNewRoom(roomId){
        if(roomId !== undefined){
            this.roomConnections.push({
                roomId: roomId, 
                conn: this.createRoomConnection(roomId)
            })
        }
        return this
    }

    createRoomConnection(roomId){
        const scope = this

        return this.connection.subscriptions.create({
            channel: 'RoomChannel', 
            room_id: roomId, 
            sender: this.senderId
        },{
            connected: function () {
                console.log(`connected tp ${roomId}`)
            },
            speak: function(message){
                console.log(this)
                return this.perform('speak', {
                    room_id: roomId,
                    message: message,
                    sender_id: scope.senderId
                })
            }
        })
    }

}

export default ChatConnection