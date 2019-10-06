class Bus {
    constructor(direction, stations, seats, passengers, lastStation) {
        this.direction = direction; 
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.lastStation = lastStation;
    };

    // methods
    current() {
        return this.stations[this.lastStation];
        
    };
    next() {
        this.lastStation++;
        console.log(this.lastStation++);
    };
    board(count) {
        this.passengers += count;
        if (this.passengers > this.seats) {
            this.passengers = this.seats;
        }
    };
    unboard(count) {
        this.passengers -= count; 
        if (count > this.seats) {
            this.passengers = 0;
        }
    };
    
};
console.log(current());