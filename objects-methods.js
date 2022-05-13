let restaurant={
    name: 'RASR',
    guestCapacity:75,
    guestCount:0,
    checkAvailability:function(partySize){
        let seatsLeft= this.guestCapacity-this.guestCount
        return partySize<=seatsLeft
    },
    seatParty:function(seatParty){
        this.guestCount=this.guestCount+seatParty
    },
    removeParty:function(removeParty){
        this.guestCount=this.guestCount-removeParty
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))