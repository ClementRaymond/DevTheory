Vue.createApp({
    data() {
        return {
            title: 'hello <strong>world</strong>',
            image: 'https://cdn.svgporn.com/logos/vue.svg',
            taskname: '',
            isTaskInProgress: false,
            startTime: null,
            errorMsg: null,
        }
    },
    methods: {
        startTask() {
            if (this.taskname.length === 0) {
                this.errorMsg = "Le nom d'une tâche ne peut pas être vide"
                return
            } else if (this.isTaskInProgress) {
                this.errorMsg = "Une tâche est déjà en cours"
                return
            } else {
                this.errorMsg = null
            }

            this.isTaskInProgress = true
            this.startTime = Date.now()
        },
        stopTask() {
            this.isTaskInProgress = false
            this.startTime = Date.now()
            this.errorMsg = null
        }
    }
}).mount('#app')
