<template>
    <div class="register">
        <div class="text-center">
            <h1>РЕГИСТРАЦИЯ</h1>
        </div>
        <div class="register__body d-flex justify-content-center">
            <div class="d-flex align-items-end">
                <img src="@/assets/img/planet.png" class="img-fluid" alt="">
            </div>
            <div class="form">

                <div class="form-group">

                    <label for="name">Ваше Имя</label>
                    <input v-model="name" type="text" class="form-control" id="name" placeholder="Введите имя" required>

                </div>

                <div class="form-group">

                    <label for="email">Ваш email</label>
                    <input v-model="email" type="email" class="form-control" id="email"
                        placeholder="Введите адрес электронной почты" required>
                </div>

                <div class="form-group">

                    <label for="password">Ваш пароль</label>
                    <input v-model="password" type="password" class="form-control" id="password"
                        placeholder="Введите пароль (минимум 6 символов)" required>

                </div>

                <div class="form-group">

                    <label for="repeat__password">Повторите пароль</label>
                    <input v-model="repeatPassword" type="password" class="form-control" id="repeat__password"
                        placeholder="Введите пароль ещё раз" required>

                </div>
                <div class="text-center">
                    <button type="button" @click="register()">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </div>
            </div>
            <div class="d-flex align-items-start">
                <img src="@/assets/img/note.png" class="img-fluid" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        }
    },
    methods: {
        register() {
            const path = "https://justdelivery.kz/api/register";
            if (this.name != '' && this.email != '' && this.password != '') {
                if (this.password == this.repeatPassword) {
                    axios
                        .post(path, { email: this.email, password: this.password, name: this.name })
                        .then((res) => {

                            if (res.status == 201) {
                                console.log(res);
                                window.location.href = '/login'
                            }
                            else {

                                alert("Произошла ошибка")
                                console.log(res)
                            }


                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
                else {
                    alert('Пароли не совпадают')
                }
            }
            else {
                alert('Заполните все поля')
            }
        }



    }
}
</script>
<script setup>
useSeoMeta({
    title: 'JustDelivery | Регистрация',
    ogTitle: 'JustDelivery | Регистрация',
    description: 'Просто доставляем Регистрация',
    ogDescription: 'Просто доставляем Регистрация',
})
</script>
<style scoped>
label {
    font-family: var(--jur);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #000;
}

.form {
    margin: 0 110px 0 53px;
}

.form button {
    background: transparent;
    padding: 15px 24px;
    border: 3px solid #000000;

    font-family: var(--jur);
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 106%;
    color: #000;
    margin-top: 40px;
    margin-bottom: 132px;
    transition: all .3s ease;
}

.form button:hover {
    color: #fff;
    background: #000;
}

input {
    width: 530px;
    height: 44px;
    border: 2px solid #000000;
    border-radius: 0;

    font-family: var(--jur);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000;
    margin-bottom: 34px;
}

input::placeholder {
    font-family: var(--jur);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #929292;
}

.register h1 {
    font-family: var(--tab);
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 106%;
    color: #000;
}

.register {
    padding: 9.813vw 16.406vw 1.719vw;
}

@media (max-width: 1500px) {
    .register {
        padding: 9.813vw 150px 1.719vw;
    }
}

@media (max-width: 1300px) {
    .register {
        padding: 9.813vw 60px 1.719vw;
    }
}

@media (max-width: 1024px) {
    .register img {
        display: none;
    }

    .form {
        margin: 0;
    }
}

@media (max-width: 768px) {
    .register {
        padding: 15.813vw 10px 1.719vw;
    }

    input {
        width: 100%;
    }

    .register__body,
    .form {
        width: 100%;
        justify-content: left !important;
        flex-direction: column;
    }

    .register .text-center {
        text-align: left !important;
    }

    .register h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
        margin-top: 40px;
    }

    .form button {
        margin-top: 20px;
        margin-bottom: 40px;
        width: 100%;
        border: 2px solid #000;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 106%;
        padding: 11px 0;
    }

    .form .text-center {
        padding: 0 22px;
    }
}
</style>