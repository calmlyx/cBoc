<template>
    <div class="historytoday">
        <mt-header fixed title="历史上的今天">
            <div slot="left">
                <span @click="$router.back()">返回</span>
            </div>
        </mt-header>
        <div class="historyEvents">
            <table>
                <tr >
                    <th colspan="2" class="hisTableHead">
                        <h3><span class="historyIco">&#xe6c2;</span>1633年12月8日</h3>
                    </th>
                </tr>
                <tr>
                    <td>
                        <p>在386年前的今天，1633年12月8日 (农历冬月初八)，明代科学家徐光启逝世。</p>
                    </td>
                    <td>
                        <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/201112/8/2B10350576.jpg" alt="" width="150">
                    </td>

                </tr>
            </table>
            <table>
                <tr >
                    <th colspan="2" class="hisTableHead">
                        <h3><span class="historyIco">&#xe6c2;</span>1861年12月8日</h3>
                    </th>
                </tr>
                <tr>
                    <td>
                        <p>在158年前的今天，1861年12月8日 (农历冬月初七)，法国早期电影艺术家梅里爱诞生。</p>
                    </td>
                    <td>
                        <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/toh/200905/17/B9233823206.jpg" alt="" width="150">
                    </td>

                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Historytoday",
        mounted() {
           /* this.axios.get("").then((response) => {
                console.log(response.data)
            })*/
        }
    }
</script>

<style>
    .historytoday{
        background: url("../Oneiromancy/images/otherBcg.png");
        background-size: 100% 100%;
    }
    .historyEvents>table{
        width: 300px;
        text-align: left;
        margin: 20px 0;
    }
    .hisTableHead{
        background: lightblue;
    }
    .hisTableHead>h3{
        margin-left: 10px;
    }
    .historyEvents p{
        text-indent: 25px;
    }
    .historyEvents>table img{
        text-align: center;
    }
    .historyIco{
        font-family: "iconfont" !important;
        color: orange;
        margin-right: 5px;
    }
</style>
