<template>
    <div class="huangli">
        <mt-header fixed title="老黄历">
            <div slot="left">
                <span @click="$router.back()">返回</span>
            </div>
        </mt-header>
        <div class="huangliAll">
            <div class="dateChoice">
                <h3>选择时间</h3>
                <select name="year">
                    <option value="">2019</option>
                    <option value="">2020</option>
                    <option value="">2021</option>
                    <option value="">2022</option>
                </select>
                <span>年</span>
                <select name="month">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                </select>
                <span>月</span>
                <select name="month">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                </select>
                <span>日</span>
            </div>
            <div class="dateDetail">
                <div class="yangli">
                    <header>2019年 10月 (大) 星期三</header>
                    <main>16</main>
                </div>
                <div class="yinli">
                    <p class="timeOne"><b>九月十八</b></p>
                    <p class="timeTwo">己亥年 【猪年】 甲戌月 丙戌日</p>
                </div>
                <hr>
                <div class="festival">
                    <table class="festivalTable">
                        <tr>
                            <td><span class="dateIco">&#xe60a;</span></td>
                            <td><span>粮食日</span></td>
                        </tr>
                    </table>
                </div>
                <hr>
                <div class="should">
                    <table class="festivalTable">
                        <tr>
                            <td><span class="dateIco">&#xe607;</span></td>
                            <td><span>纳采 订盟 嫁娶 祭祀 祈福 求嗣 置产 求医 治病 开市 交易 立券 会亲友 移徙 竖柱 上梁 造屋 合脊 安门 放水 捕捉 纳畜</span></td>
                        </tr>
                    </table>
                </div>
                <hr>
                <div class="ban">
                    <table class="festivalTable">
                        <tr>
                            <td><span class="dateIco">&#xe605;</span></td>
                            <td><span>造庙 造船 动土 破土 安葬</span></td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Huangli"
    }
</script>

<style>
    .huangli{
        background: url("../Oneiromancy/images/otherBcg.png");
        background-size: 100% 100%;
    }
    .huangliAll {
        width: 95%;
        margin: 20px auto;
    }

    .dateChoice {
        width: 85%;
        margin: 0 auto;
    }

    .dateChoice > select {
        width: 70px;
        height: 30px;
        text-align: center;
        outline: none;
        border: none;
        margin: 10px 0;
    }

    .dateDetail {
        width: 95%;
        margin: 20px auto;
        text-align: center;
    }

    .dateDetail > hr {
        margin: 5px 0;
    }

    .yangli > header {
        height: 50px;
        background: #42962e;
        line-height: 50px;
        color: white;
    }

    .yangli > main {
        height: 120px;
        background: orange;
        font-size: 65px;
        line-height: 120px;
        color: white;
    }

    .yinli {
        margin: 10px 0;
    }

    .festival {
        text-align: left;
    }

    .dateIco {
        font-family: "iconfont" !important;
        font-size: 25px;
        margin-right: 5px;
        color: deepskyblue;
    }

    .should .dateIco {
        color: #42962e;
    }

    .ban .dateIco {
        color: orange;
    }

    .festivalTable td, tr {
        border: none !important;
    }
</style>
