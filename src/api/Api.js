class Api {
    static url = "http://127.0.0.1:8000/";

    static AddUser = this.url + "register";
    static getUserList = this.url + "getdata";
    static getUserById = this.url + "getdatabyid/";
    static updateById = this.url + "updateuser/";
    static deleteById = this.url + "deletebyid/";


}

export default Api;
