class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.timerId = null
    }


    addClock(hm, func, id) {

        if (!id) {
            throw new Error('Нет параметра id');
        }
        if (this.alarmCollection.some(elem => elem.idCall === id)){
             console.error("Такой звонок уже существует");
        } else {
            this.alarmCollection.push({time , func , idCall});
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

     this.timerId = setInterval(this.alarmCollection.forEach(elem => elem.time === this.getCurrentFormattedTime()) => {
       this.alarmCollection.func()
     }, 1000);

    }
    
    
    stop() {
     if (this.timerId) {
         clearInterval(this.timerId);
         this.timerId = null;
     }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.time + "" ));
    }

    clearAlarms () {
       this.stop()
       this.alarmCollection = [];
    }


}