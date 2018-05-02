<template>
    <div id="panda_owner">
        <div class="owner_top">
            <span class="iconfont icon-tuichu6 exit"></span>
            <div class="owner_top_cont">
                <div class="owner_top_main">
                    <div class="touxiang">
                        <input type="file" id="upload"/>
                        <div class="avator">
                            <img alt="" data-src="http://vue.wclimb.site/images//avator/8d348rp6z21524744505636.png" src="http://vue.wclimb.site/images//avator/8d348rp6z21524744505636.png" lazy="loaded">
                        </div>
                    </div>
                    <div class="name">winnie兔<span class="iconfont icon-icon-2" @click="modify"></span></div>
                    <div class="cont">
                        <ul>
                            <li><span  class="iconfont icon-wodedingdan active"></span><span><router-link to="/order/all">我的订单</router-link></span></li>
                            <li><span  class="iconfont icon-gouwucheman active"></span><span><router-link to="/order">我的购物</router-link></span></li>
                            <li><span  class="iconfont icon-icon3 active"></span><span><router-link to="/order">收藏商品</router-link></span></li>
                            <li><span  class="iconfont icon-dizhi active"></span><span><router-link to="/order">地址管理</router-link></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="owner_main">
            <ul>
                <li>推荐APP给小伙伴</li>
                <li>求打分好评~</li>
                <li>帮助反馈</li>
                <li>关于熊猫优选</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        methods:{
            modify(event){
                if(event.target.classList.contains('icon-icon-2')){
                    event.target.classList.remove('icon-icon-2');
                    event.target.classList.add('icon-icon-2');
                    let input=document.createElement('input');
                    let txt=event.target.previousSibling.nodeValue;
                    input.value=txt;
                    input.type="text";
                    event.target.previousSibling.nodeValue='';
                    event.target.parentNode.insertBefore(input,event.target);
                }
                
            }
        }
    }
</script>
<style lang="scss" >
@import 'owner.scss';
</style>

