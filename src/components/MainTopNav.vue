<template>
    <div class="main-top-nav-main-ctn">
        <div class="main-top-nav-mini-ctn">
            <h1 class="user-welcome-msg">
                Welcome, Rachael!
            </h1>
            <section class="main-top-nav-main-nav-ctn">
                <div class="search-box-ctn">
                    <input type="text" class="search-box" placeholder="Search...">
                    <div class="search-icon-ctn">
                        <i class='bx bx-search' ></i>
                        <!-- <i class='bx bx-search-alt' ></i> -->
                    </div>
                </div>
                <div class="notification-icon-ctn">
                    <i class='bx bxs-bell' ></i>
                </div>
            </section>
        </div>
    </div>
    <!-- welcome user
    search...
    notification bell with small dot ontop  -->
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
}
.main-top-nav-main-nav-ctn{

}
.search-box-ctn{
    width:400px;
    border-radius:100px;
    display:flex;
    background-color: bisque;
}
.search-box-ctn input{
    width:100%;
    border-radius:inherit;
}
.notification-icon-ctn{

}
</style>