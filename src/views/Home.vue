<template>
    <div  class="app-home">
        <div class="case">
            <v-btn to="one">案例1</v-btn>
            <v-btn to="two">案例2</v-btn>
            <v-btn to="three">案例3</v-btn>
            <v-btn to="four">案例4</v-btn>
            <v-btn to="five">案例5</v-btn>
            <v-btn to="six">案例6</v-btn>
            <v-btn to="seven">案例7</v-btn>
            <v-btn to="eight">案例8</v-btn>
            <v-btn to="nine">案例9</v-btn>
            <v-btn to="ten">案例10</v-btn>
            <v-btn to="eleven">案例11</v-btn>
            <v-btn to="twelve">案例12</v-btn>
            <v-btn to="thirteen">案例13</v-btn>
            <v-btn to="fourteen">案例14</v-btn>
            <v-btn to="fifteen">案例15</v-btn>
        </div>
        <v-main>
            <router-view />
        </v-main>
    </div>
</template>
<style lang="less" scoped>
.app-home{
    padding: 20px;
    .case{
        background-color: antiquewhite;
    }
    .v-btn{
        margin: 10px;
    }
}
</style>
