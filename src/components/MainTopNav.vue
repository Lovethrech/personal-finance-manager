<template>
    <div class="main-top-nav-main-ctn">
        <div class="main-top-nav-mini-ctn">
            <h1 class="user-welcome-msg">
                Welcome, User!
            </h1>
            <section class="main-top-nav-main-nav-ctn">
                <div class="search-box-ctn">
                    <input type="text" class="search-box" placeholder="Search...">
                    <div class="search-icon-ctn">
                        <i class='bx bx-search' ></i>
                    </div>
                </div>
                <div class="search-icon-ctn-general">
                    <i class='bx bx-search-alt' ></i>
                </div>
                <div class="notication-content-ctn">
                    <div class="notification-icon-ctn">
                        <i class='bx bxs-bell' ></i>
                    </div>
                    <div class="notification-red-dot"></div>
                </div>
                
            </section>
        </div>
    </div>
</template>

<style scoped>
.main-top-nav-main-ctn{
    padding:10px 3vw;
    width:100%;
}
.main-top-nav-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.user-welcome-msg{
    color:#fff;
    text-transform: capitalize;
}
.main-top-nav-main-nav-ctn{
    color:#fff;
    display:flex;
    flex-direction: row;
    gap:20px;
}
.search-box-ctn{
    width:400px;
    border-radius:100px;
    display:flex;
    flex-direction: row;
}
.search-box-ctn input{
    background-color: ;
    width:100%;
    border-radius:100px 0 0 100px;
    padding:5px 10px;
    font-size:16px;
}
.search-icon-ctn{
    background-color: #93200B;
    color:#fff;
    padding: 6px 20px;
    border-radius: 0 100px 100px 0;
}
.notication-content-ctn{
    display:flex;
    flex-direction:row;
}
.notification-icon-ctn{

}
.notification-red-dot{
    width:5px;
    height:5px;
    background-color: red;
    border-radius:50%;
    margin-left:-2px
}
.search-icon-ctn-general, .notication-content-ctn{
    margin:auto 0;
    font-size:20px;
}
</style>