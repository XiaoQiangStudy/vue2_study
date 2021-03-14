<template>
    <div>
        <h1>404</h1>
        <p>page is not found</p>
        <p>the path match is <i>{{$route.params.pathMatch}}</i></p>
    </div>
</template>

<style scoped>
    h1{
        font-size: 100px;
        color: brown;
        margin-top: 100px;
    }
    p{
        color: #555;
        margin-top: 10px;
    }
    i{
        color: brown;
        font-style: normal;
    }
</style>

