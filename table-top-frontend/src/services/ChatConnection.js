import ActionCable from 'actioncable'

class ChatConnection{

    constructor(senderId, callback){
        this.senderId = senderId
        this.callback = callback

        const url = 'http://localhost/3000/cable'

        this.connection = ActionCable.createConsumer(url)
        console.log(this.connection)
        this.roomConnections = []     
    }

    talk(message, roomId){
        const room = this.roomConnections.find(room => room.roomId == roomId)
        if(room){
            return room
        }
    }
}

export default ChatConnection