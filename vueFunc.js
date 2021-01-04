window.onload = Main;

function Main() {
    const app = new Vue({
        el: "#app",
        data: {
            memoArray: [],
            input: ""
        },
        methods: {
            addMemo: function (event) {
                if (this.input == "") {
                    return;
                } else {
                    this.memoArray.unshift(new Memo(this.input));
                    this.input = "";
                }

            }
        }
    });
}

class Memo {
    constructor(str) {
        this.memoStr = str;
        let now = new Date();
        this.memoDate = now.toLocaleDateString() + "  " + now.toLocaleTimeString();
        this.goodNum = "0";
    }
}