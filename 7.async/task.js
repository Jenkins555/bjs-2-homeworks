class AlarmClock {
    constructor(alarmCollection = [], timerId) {
        this.alarmCollection = alarmCollection,
            this.timerId = timerId
    }


    addClock(hm, func, id) {
        hm = "";
        if (id !== true) {
            throw new Error('Нет параметра id');
        }
        let x = this.alarmCollection.find((elem) => { elem.idCall === id });
        if (x === true) {
            console.log("Такой звонок уже существует");
            return id;
        } else {
            let newObj = { time: hm, callback: func(), idCall: id };
            this.alarmCollection.push(newObj);
        }


    }

    removeClock(id) {
        let len1 = this.alarmCollection.length
        let x = this.alarmCollection.filter((elem, i) => {
            if (elem.idCall === id) {
                this.alarmCollection.splice(i, 1)
            }
        });
        let len2 = this.alarmCollection.length - x.length;
        if (len1 === len2) {
            return false;
        } else {
            return true;
        }

    }

    getCurrentFormattedTime() {
        let now = new Date();
        let hh = String(now.getHours());
        let mm = String(now.getMinutes());
        return hh + ":" + mm;
    }


    start() {
        let checkClock = AlarmClock.bind(timerId);
        if(timerId === 0) {
          timerId = setInterval();
        }
       
        
    }

    stop() {

    }

    printAlarms() {

    }

    clearAlarms () {

    }





}