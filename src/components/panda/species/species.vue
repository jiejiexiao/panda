<template>
	<!--分类组件-->
	<div id="panda_species">
		<div class="species_top">
			<!--搜索栏-->
		</div>
		<div class="species_left">
			<!--左边盒子-->
			<ul>
				<li><router-link to="tab1">女装</router-link></li>
				<li><router-link to="tab2">美妆护肤</router-link></li>
				<li><router-link to="tab3">男装</router-link></li>
				<li><router-link to="tab4">配饰</router-link></li>
				<li><router-link to="">女鞋</router-link></li>
				<li><router-link to="">食品</router-link></li>
				<li><router-link to="">箱包</router-link></li>
				<li><router-link to="">个人护理</router-link></li>
				<li><router-link to="">男鞋</router-link></li>
				<li><router-link to="">手机周边</router-link></li>
				<li><router-link to="">数码家电</router-link></li>
				<li><router-link to="">内衣袜子</router-link></li>
				<li><router-link to="">成人用品</router-link></li>
				<li><router-link to="">日用家居</router-link></li>
				<li><router-link to="">文娱体育</router-link></li>
			</ul>
		</div>
		<div  class="species_right">
			<router-view></router-view>
		</div>
	
		
		
		
		
	</div>
	
	
	
</template>

<script>
	export default{}	
</script>

<style lang="scss">
	@import'species.scss';
</style>