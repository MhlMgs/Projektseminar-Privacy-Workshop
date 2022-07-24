const app = Vue.createApp({
    //data elements used in the html documents to run the methods above
    data() {
        return {
            seen: true,
            pictureA: true,
            pictureB: true
        }
    },
    //methods to toggle the respective information and picture
    methods: {
        toggleElementA(seen, pictureA) {
            this.seen = !seen
            this.pictureA = !pictureA
            
        },
        toggleElementB(seen, pictureB) {
            this.seen = !seen
            this.pictureB = !pictureB
            
        }
    }
})