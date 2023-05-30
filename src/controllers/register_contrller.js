const {registerService} = require("../services/register_service");

module.exports = {
    registerController: (req, res, next) => {
        const { adm_name, adm_Lname, adm_user, adm_pass, adm_sect } = res.body;
        const user_adm = registerService(adm_name, adm_Lname,adm_user, adm_pass, adm_sect);
        if (!user_adm)
            return req
            .status(404)
            .json({ status: 404, message: "This user have in data base"});


    }
}