<template>
    <div id="panda">
        <div id="main">
            <router-view></router-view>
        </div>
        <footer id="footer">
            <ul>
                 <li>
                     <router-link to="/">首页</router-link>
                 </li>
                 <li>
                     <router-link to="">分类</router-link>
                 </li>
                 <li>
                     <router-link to="">购物车</router-link>
                 </li>
                 <li>
                     <router-link to="/owner">我的</router-link>
                 </li>
             </ul>            
        </footer>
    </div>
</template>

<script type="text/javascript">
    import '../../style/panda.scss';

    export default {};
</script>

