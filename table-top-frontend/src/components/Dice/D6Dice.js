import React, { Component } from 'react'
import './dice.css'

//Default settings for this component
const diceSettings = {
    angleUpdateInterval: 16,
    defaultSizeInPixels: 80,
    rollingDelta: 10,
    numberSizeInPixels: 40,
    gravity: .2,
    maxHeight: 240,  //12"
    throwingHeight: 180, //9"
    minHeight: 50
}

/*The field that the dice are thrown onto is considered to be a top down view with an
infinitely high ceiling.  The initial roll provides some upwards momentum then everything
after that is calculated using a modified formula for a parabola (X^a+ Xb + C)




//Calculates height based on parabola formula height = (-aX^2+ Xb + C)
where x is the number of frames that has occured (default 60 fps)

a => increases or decreases the duration it takes for the die to drop
b => 0 starts the dice level, 0+ gives it an initial toss up, 0- initial toss down
c => starting height of the throw


*/

const defaultState = {
    action: 'rolling',
    xyzRotation: [0,0,0],
    xyzVelocity: [0,0,0],
    height: diceSettings.throwingHeight,
    sizeInPixels: 80,
    gravity: diceSettings.gravity,
    transition: diceSettings.angleUpdateInterval,
    frameCount: 0,
    verticalVel: -1
}

class D6Dice extends Component{

    constructor(props){
        super(props)
        this.state = {
            ...defaultState
        }
        this.interval = null; //Coontrols when the animation starts   
    }

    rotateXYZ(xDelta, yDelta, zDelta){
        
        const calcDegree = (current, delta) => {
            //Keeps the rotation within the range of 0 to 360
            const total = parseFloat(current) + parseFloat(delta) 
            return total > 360 ? total - 360 : total
        }
        
        const currentRotations = this.state.xyzRotation
        const currentVelocities = this.state.xyzVelocity

        let x = calcDegree(currentRotations[0], currentVelocities[0])
        let y = calcDegree(currentRotations[1], currentVelocities[0])
        let z = calcDegree(currentRotations[2], currentVelocities[0])
        
        this.setState({ xyzRotation: [x, y, z] })
    }

    rollDice = () => {
        this.rotateXYZ()
        this.calculateHeight()
        const frames = this.state.frameCount
        this.setState({ frameCount: frames + 1 })
        if(this.state.height <= 51){
            clearInterval(this.interval)
        }
    }

    throwDice = () => {
        this.setState({...defaultState})
        this.setRotationVelocity()
        //Start the animation by setting the interval
        this.interval = setInterval(this.rollDice, diceSettings.angleUpdateInterval);
    }

    getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    setRotationVelocity = () => {
        const xyzVelocity = [
            this.randomizeRotationDirection(30),
            this.randomizeRotationDirection(10),
            this.randomizeRotationDirection(3)
        ]
        this.setState({ xyzVelocity })
    }

    randomizeRotationDirection = (max) => {
        //Random number between -1 and 1
        const rand  = Math.random()*max
        console.log(rand)
        const randPosOrNeg =  rand > .50 ? -1 : 1 
        console.log(randPosOrNeg)
        console.log(rand * randPosOrNeg)
        return rand * randPosOrNeg
    }

    calculateHeight = () => {
        //(-aX^2+ Xb + C)
        
        const gravity = this.state.gravity
        const frameCount = this.state.frameCount
        
        let height = (-gravity * Math.pow(frameCount, 2))+ (frameCount * 10) + 180
        this.setState({
            height,
            sizeInPixels: height
        })
    }


    bounce = () => {
        //When the dice hits the 'table' it needs to bounce back up using a formula for a porabola that 
        //starts at (0,0)
    }

    MAPPED_SIDES = (sideNumber) => {
        const zTrans = this.state.sizeInPixels/2
        switch(parseInt(sideNumber)){
            case 1: return `rotateY(0deg) translateZ(${zTrans}px)`
            case 2: return `rotateY(90deg) translateZ(${zTrans}px)`
            case 3: return `rotateX(-90deg) translateZ(${zTrans}px)`
            case 4: return `rotateX(90deg) translateZ(${zTrans}px)`
            case 5: return `rotateY(-90deg) translateZ(${zTrans}px)`
            case 6: return `rotateY(180deg) translateZ(${zTrans}px)`
        }
    }

    constructDiceObject = () => <>
        <div className = 'dice-container' style={this.diceContainerStyle()}>
            <div className = 'dice' style={this.tranformProperty()}>
                <div className = {"dice-face dice-face--1"} style={this.diceFaceStyle(1)}><span class='number'>1</span></div>
                <div className = {"dice-face dice-face--2"} style={this.diceFaceStyle(2)}><span class='number'>2</span></div>
                <div className = {"dice-face dice-face--3"} style={this.diceFaceStyle(3)}><span class='number'>3</span></div>
                <div className = {"dice-face dice-face--4"} style={this.diceFaceStyle(4)}><span class='number'>4</span></div>
                <div className = {"dice-face dice-face--5"} style={this.diceFaceStyle(5)}><span class='number'>5</span></div>
                <div className = {"dice-face dice-face--6"} style={this.diceFaceStyle(6)}><span class='number'>6</span></div>
            </div>
        </div>        
    </>

    currentScale = () => this.state.sizeInPixels / diceSettings.defaultSizeInPixels

    tranformProperty = () => {
        const xyzRotation = this.state.xyzRotation
        const x = xyzRotation[0]
        const y = xyzRotation[1]
        const z = xyzRotation[2] 

        return {
            transform: `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`,
        }
    }

    diceFaceStyle = (sideNumber) => {

        return {
            width: `${this.state.sizeInPixels}px`,
            height: `${this.state.sizeInPixels}px`,
            transform: this.MAPPED_SIDES(sideNumber),
            'font-size': `${diceSettings.numberSizeInPixels * this.currentScale()}px`
        }
    }

    diceContainerStyle = () => {
        return {
            width: `${this.state.sizeInPixels}px`,
            height: `${this.state.sizeInPixels}px`,
        }
    }


  
    controller = () => <>
        <div id='control-box'>
            <p>{`Frame count: ${this.state.frameCount}  Seconds: ${parseInt(this.state.frameCount/60)}`}</p>
            <div>
                x-rotation: <input 
                    type='range' 
                    id='xRotation'
                    min='0' 
                    max='360'
                    onChange={this.handleChange} 
                /><span>{this.state.xRotation}</span>
            </div>
            <div>
                y-rotation: <input 
                    type='range' 
                    id='yRotation'
                    min='0' 
                    max='360' 
                    onChange={this.handleChange}
                /> <span>{this.state.yRotation}</span>
            </div>
            <div>
                z-rotation: <input 
                    type='range' 
                    id='zRotation'
                    min='0' 
                    max='360' 
                    onChange={this.handleChange}
                /> <span>{this.state.zRotation}</span>
            </div>
            <div>
                size: <input 
                    type='range' 
                    id='sizeInPixels'
                    min='50' 
                    max='200' 
                    value={this.state.sizeInPixels}
                    onChange={this.handleChange}
                /> <span>{this.state.sizeInPixels}</span>
            </div>
            <button onClick ={this.throwDice}>ROLL!</button>
        </div>
    </>

    handleChange = event => {
        event.preventDefault()
        console.log(`changing ${event.target.id} to ${event.target.value}`)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render = () => <>
        {this.constructDiceObject()}
        {this.controller()}
    </>



}

export default D6Dice