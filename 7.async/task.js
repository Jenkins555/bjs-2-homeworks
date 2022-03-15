class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.timerId = null
    }


    addClock(hm, func, id) {

        if (!id) {
            throw new Error('Нет параметра id');
        }
        let call = this.alarmCollection.find(elem => elem.idCall === id);
        if (call) {
            console.log("Такой звонок уже существует");
            return id;
        } else {
            let newObj = { time: hm, callback, idCall: id };
            this.alarmCollection.push(newObj);
        }


    }

    removeClock(id) {
        let len1 = this.alarmCollection.length
        let callback = this.alarmCollection.filter(elem => elem.idCall !== id );
        this.alarmCollection = callback;
        return len1 === this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        let time = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
        return time;
    }


    start() {
      let checkClock;

        if(!timerId) {
          timerId = setInterval( this.alarmCollection.forEach(time => 
            time === this.getCurrentFormattedTime()),1000);
            checkClock();
        }   
        
       checkClock = this.newObj.forEach(item => 
       newObj.time === this.getCurrentFormattedTime);
       return newObj.callback();
    }

    stop() {
     if (this.timerId) {
         clearInterval(this.timerId);
         delete this.timerId;
     }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.time + "" + item.idCall));
    }

    clearAlarms () {
       this.stop()
       this.alarmCollection = [];
    }





}