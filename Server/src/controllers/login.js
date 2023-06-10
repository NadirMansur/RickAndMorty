const userList = require('../utils/users')
    const userLogin  = (req, res) => {
        const {email, password} = req.query
        // const login ={
        //     access: true && !!usersList
        //     .filter(user=>user.mail === email)
        //     .filter(trylog=>trylog.password === password)
        // }
        // res.json(login)
        const valido = userList.find(
            (user) => user.email === email && user.password === password
        );
        if(Boolean(valido)) res.status(200).json({access: true})
        else res.status(200).json({access: false});
    }


module.exports = userLogin;