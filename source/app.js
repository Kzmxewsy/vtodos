/**
 * Created by Mxethe on 2018/6/14.
 */
var class_optional = ['alert alert-success', 'alert alert-info', 'alert alert-warning', 'alert alert-danger'],
    count = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')).length : 0,
    current_class = [];

var app = new Vue({
    el: '#app',
    data: {
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
        detail: '',
        seen: false,
        // current_class: class_optional.slice(rand, rand + 1),// for all Unite class change style
        current_class: current_class,
        count: count,
    },
    methods: {
        add: function () {
            var check_status = this.checkdata();
            if (!check_status) {
                return false;
            }

            this.todos.push({text: this.detail, time: this.getdate(new Date().getTime())});
            this.count = this.todos.length;
            localStorage.setItem('todos', JSON.stringify(this.todos));
            this.detail = '';
            this.randclass(parseInt(4 * Math.random()));
        }
        ,
        checkdata: function () {
            if (!this.detail) {
                this.seen = true;
                return false;
            }
            this.seen = false;
            return true;
        }
        ,
        getdate: function (ns) {
            var d = new Date(ns),
                dformat;
            dformat = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-')
                + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
            return dformat;
        }
        ,
        del: function (index) {
            this.todos.splice(index, 1);
            this.count = this.todos.length;
            localStorage.setItem('todos', JSON.stringify(this.todos));
            this.current_class.pop();
            // this.randclass(parseInt(4 * Math.random()));// for all Unite class change style
        },
        randclass: function (rand) {
            // this.current_class = class_optional.slice(rand, rand + 1);// for all Unite class change style
            this.current_class.push(class_optional.slice(rand, rand + 1));
        },
        getdefaultclass: function () {
            for (var i = 0; i < count; i++) {
                var rand = parseInt(4 * Math.random());
                current_class.push(class_optional.slice(rand, rand + 1));
            }
        }
    }
})

app.getdefaultclass();