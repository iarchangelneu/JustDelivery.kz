<template>
    <div class="login">
        <div class="text-center">
            <h1>Авторизация</h1>
        </div>
        <div class="login__body d-flex justify-content-center mt-5">
            <div>
                <div class="form d-flex justify-content-center">
                    <div>
                        <div class="form-group">

                            <label for="email">Ваш email</label>
                            <input type="text" class="form-control" id="email" placeholder="Введите адрес электронной почты"
                                required>

                        </div>

                        <div class="form-group">

                            <label for="password">Ваш пароль</label>
                            <input type="text" class="form-control" id="password"
                                placeholder="Введите пароль (минимум 6 символов)" required>

                        </div>

                        <div class="text-center">
                            <button>Войти</button>
                        </div>
                    </div>
                </div>
                <img src="@/assets/img/footerlogin.png" class="img-fluid" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
useSeoMeta({
    title: 'JustDelivery | Авторизация',
    ogTitle: 'JustDelivery | Авторизация',
    description: 'Просто доставляем Авторизация',
    ogDescription: 'Просто доставляем Авторизация',
})
</script>
<style scoped>
.form button {
    background: transparent;
    padding: 15px 72px;
    border: 3px solid #000000;

    font-family: var(--jur);
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 106%;
    color: #000;
    margin-top: 20px;
    text-transform: uppercase;
    margin-bottom: 62px;
    transition: all .3s ease;

}

.form button:hover {
    color: #fff;
    background: #000;
}

input {
    width: 526px;
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

.login h1 {
    font-family: var(--tab);
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 106%;
    color: #000;
}

.login {
    padding: 9.813vw 16.406vw 0;
}

@media (max-width: 768px) {
    .login__body img {
        display: none;
    }

    input {
        width: 100% !important;
    }

    .login {
        padding: 15.813vw 10px 0;
    }

    .form,
    .login__body {
        width: 100%;
        justify-content: left !important;
        flex-direction: column;
    }

    .login .text-center {
        text-align: left !important;
    }

    .login__body {
        margin-top: 20px !important;
    }

    .form button {
        width: 100%;
        border: 2px solid #000;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 106%;
        padding: 11px 0;
    }

    .form div .text-center {
        padding: 0 22px;
    }

    .login h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
        margin-top: 40px;
    }
}
</style>