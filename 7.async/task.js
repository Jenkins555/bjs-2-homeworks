class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.timerId = null
    }


    addClock(hm, func, id) {

        if (!id) {
            throw new Error('Нет параметра id');
        }
        let call = this.alarmCollection.some(elem => elem.idCall === id);
        if (call===true) {
            console.error("Такой звонок уже существует");
        } else {
            let newObj = { time: hm, func, idCall: id };
            this.alarmCollection.push(newObj);
        }


    }

    removeClock(id) {
        let len1 = this.alarmCollection.length
        let newArr = this.alarmCollection.filter(elem => elem.idCall !== id );
        this.alarmCollection = newArr;
        return len1 !== this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        let time = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
        return time;
    }


    start() {
       if(this.timerId) {
         return;
     } 
     this.timerId = this.alarmCollection.forEach(item => {
        item.time === this.getCurrentFormattedTime();
        setInterval(this.addClock,1000);  
     });
     
    }
    

    stop() {
     if (this.timerId) {
         clearInterval(this.timerId);
         this.timerId = null;
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