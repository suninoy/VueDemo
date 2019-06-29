<template>
    <el-container>
        <el-header>
            <mainMenu></mainMenu>
        </el-header>
        <el-main><router-view/></el-main>
        <el-footer></el-footer>
    </el-container>

</template>

<script>
    import eChartDemo from './components/eChartDemo.vue';
    import mainMenu from './components/mainMenu.vue'
    export default {
        components: {
            mainMenu,eChartDemo
        }

    }
</script>

<style scoped>
    .el-header,
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }



    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height:600px
    }

    body>.el-container {
        margin-bottom: 40px;
    }
</style>