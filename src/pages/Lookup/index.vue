<template>
    <div class="lookup">
        <mt-header fixed title="号码查询">
            <div slot="left">
                <span @click="$router.back()">返回</span>
            </div>
        </mt-header>
        <div class="lookupMain">
            <form action="">
                <input type="tel" placeholder="请输入要查询的手机号码(段)" value="15999999999">
                <input type="submit">
            </form>
            <div class="searchResult">
                <table>
                    <tr >
                        <th colspan="2" class="tableHead">查询结果</th>
                    </tr>
                    <tr>
                        <th>手机号码段</th>
                        <td>15999999999</td>
                    </tr>
                    <tr>
                        <th>卡号归属地</th>
                        <td>广东 广州</td>
                    </tr>
                    <tr>
                        <th>运营商</th>
                        <td>移动</td>
                    </tr>
                    <tr>
                        <th>区号</th>
                        <td>020</td>
                    </tr>
                    <tr>
                        <th>邮编</th>
                        <td>510000</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Lookup"
    }
</script>

<style>
    .lookupMain {
        text-align: center;
    }

    .lookupMain > form {
        width: 335px;
        height: 50px;
        margin: 30px auto;
        /*background: skyblue;*/
    }

    .lookupMain > form > input {
        outline: none;
        font-size: 18px;
    }

    .lookupMain > form > input[type="tel"] {
        width: 261px;
        height: 50px;
        text-indent: 12px;
    }

    .lookupMain > form > input[type="submit"] {
        width: 60px;
        height: 50px;
        background: skyblue;
        border: none;
        margin: 0 5px;
        color: white;
    }

    table {
        text-align: center;
        width: 335px;
        border-collapse: collapse;
        margin: 30px auto;
    }
.tableHead{
    background: skyblue;
    color: white;
    font-size: 16px;
    letter-spacing: 10px;
}
    table, td, th {
        border: 1px solid skyblue;
    }
    td, th{
        font-size: 12px;
        height: 40px;
        color: gray;
    }
    th{
        width: 100px;
    }

</style>


