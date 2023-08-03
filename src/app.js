const MyNameApp = {
    data() {
        return {
            name: "",
            age: null,
            input_age: null,
            input_name: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;

            this.age = this.input_age;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");