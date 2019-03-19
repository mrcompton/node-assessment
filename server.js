const express = require('express');
const bodyParser = require('body-parser')
const ctrl = require('./usersCtrl')
const app = express();

app.use(bodyParser.json());

app.get(`/api/user`,ctrl.getUser)
app.get(`/api/user/:id`, ctrl.getUserId)
app.get(`/api/admin`, ctrl.getAdmin)
app.get(`/api/nonadmin`, ctrl.getNonAdmin)
app.get(`/api/type/:userType`, ctrl.getUserType)
app.put(`/api/user/:id`, ctrl.editUser)
app.post(`/api/user`, ctrl.addUser)
app.delete(`/api/user/:id`, ctrl.deleteUser)

const PORT = 3000;
app.listen(PORT, () => {console.log(`Loud and clear at ${PORT}`)})