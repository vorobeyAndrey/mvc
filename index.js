const app = new App('#app')

app.addComponent({
    name: 'dog',
    view: function (model) {
        return ''
    },
    controller: function (model) {
        model.a = '123'
    },
    model: {}
})