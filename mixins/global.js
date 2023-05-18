import jwt_decode from "jwt-decode";
export default{
    data(){
        return{
            isAuth: '',
            token: '',
            userEmail: '',
            userName: '',
        }
    },
    mounted(){
        this.isAuth = localStorage.getItem('isLogin');
        this.token = localStorage.getItem('token');

        if(this.token){
            var decoded = jwt_decode(this.token);
            
            this.userEmail = decoded.email
            this.userName = decoded.email
        }

    }
}