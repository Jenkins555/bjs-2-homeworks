class AlarmClock {
    constructor() {
        this.alarmCollection = [],
            this.timerId = null
    }


    addClock(hm, func, id) {

        if (!id) {
            throw new Error('Нет параметра id');
        }
        if (this.alarmCollection.some(elem => elem.id === id)) {
            console.error("Такой звонок уже существует");
        } else {
            this.alarmCollection.push({ hm, func, id });
        }

    }

    removeClock(id) {
        let len1 = this.alarmCollection.length
        let newArr = this.alarmCollection.filter(elem => elem.id !== id);
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

        const checkClock = (elem) => {
            if (elem.hm === getCurrentFormattedTime()) { elem.func() };
        }

        if (this.timerId) {
            return;
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(checkClock())
        }, 1000);


    }


    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log("Будильник № " + item.id + " выставлен на " + item.hm  ));
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }


}