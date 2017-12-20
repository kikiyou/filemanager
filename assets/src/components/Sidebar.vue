<template>
<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
                <div class="dropdown profile-element">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">admin</strong>
                         </span> <span class="text-muted text-xs block">管理 <b class="caret"></b></span> </span> </a>
                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a href="#">注销</a></li>
                        </ul>
                </div>
                <div class="logo-element">
                    烽
                </div>
            </li>
                <li class="active">
                    <a href="/index"><i class="fa fa-th-large"></i> <span class="nav-label">首页</span></a>
                </li>
                <li>
                    <a href="dash"><i class="fa fa-bar-chart-o"></i> <span class="nav-label">运维之眼</span><span class="fa arrow"></span></a>
                </li>
                <li>
                    <a href="/upload"><i class="fa fa-upload"></i> <span class="nav-label">多文件上传</span><span class="fa arrow"></span></a>
                </li>
                <li>
                    <a href="/public"><i class="fa fa-download"></i> <span class="nav-label">下载文件</span><span class="fa arrow"></span></a>
                </li>
        </ul>

    </div>
</nav>
</template>

<script>
export default {
  name: 'sidebar',
  computed: {
    // ...mapState(['user', 'staticGen', 'version']),
    active () {
      return this.$store.state.show === 'sidebar'
    }
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>