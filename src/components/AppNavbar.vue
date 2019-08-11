<template>
  <div id="app-navbar">
    <nav class="sidebar text-center" v-bind:class="{ sidebarShow: showMobileMenu }">
      <ul class="sidebar-nav">
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><router-link to="/" exact>Home</router-link></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><router-link to="/about" exact>About</router-link></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><router-link to="/service" exact>Service</router-link></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><router-link to="/parts" exact>Parts</router-link></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><router-link to="/security" exact>Security</router-link></li>
        <li v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }"><router-link to="/contact" exact>Contact</router-link></li>
      </ul>
    </nav>
    <button class="sidebar-btn" v-on:click="showMobileMenu = !showMobileMenu" v-bind:class="{ toggle: showMobileMenu }">
      <span></span>
    </button>
  </div>
  
</template>

<script>

export default {
    data() {
        return{
            showMobileMenu: false,
        }
    }
}

</script>

<style scoped>

#app-navbar {
  width: 100%;
}

/* sidebar (mobile) */
.sidebar {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0; 			
    background: #595959;
    width: 100%;
    height: 100%;
    z-index: 3;
    
}

.sidebarShow {
    visibility: visible;
    opacity: 1;
    width: 100%;    
    -webkit-transition: .5s;    
    transition: .5s;
    -webkit-transition: 0.5s;
}
  
ul {
    margin: 0;
    padding: 0;
}
  

ul.sidebar-nav {
    padding-top: 20px;
}

ul.sidebar-nav li a{
    padding: 10px 20px;
    border-width: 0 2px 2px 2px;
    border-style: solid;
    border-color: transparent;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-transition: 0s;
    transition: 0s;
}
ul.sidebar-nav li a:active,
ul.sidebar-nav li a:hover,
ul.sidebar-nav li a.active {
    border-color: transparent;
    background-color: transparent;
}

ul.sidebar-nav li a {
    color: #ffffff;
    background: transparent;
}

ul.sidebar-nav li a:hover {
    text-decoration: none;
}
 
/* 'burger' */
.sidebar-btn {
    display: block;
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    cursor: pointer;
    background:none;
    border-width: 0px 0px 2px 2px;
    border-style: solid;
    border-color: #ed6c1d;
    background-color: #fa9a55;
    outline: none;
    padding-left: 5px;
}

.sidebar-btn:focus {
    outline: none;
}

.sidebar-btn span {
    display: block;
    width: 38px;
    height: 2px;
    background: white;
    position: absolute;
    top: 24px;
    -webkit-transition: .3s;
    transition: .3s;
    -o-transition: .3s;
}

.sidebar-btn span:before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transition: .3s;
    -webkit-transition: .3s;
    -o-transition: .3s;
}

.sidebar-btn span:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transition: .3s;
    -webkit-transition: .3s;
    -o-transition: .3s;
}

.sidebar-btn.toggle{
    -webkit-transition: 0.3s;
    transition: 0.3s;
    -webkit-transition: .3s;
    -o-transition: .3s;
}

.sidebar-btn.toggle span {
    background: transparent;
}

.sidebar-btn.toggle span:before {
    top: 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
}

.sidebar-btn.toggle span:after {
    top: 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
}
/* end of 'burger' */


/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

    /* navbar */

    .sidebar {
        visibility: visible;
        opacity: 1;
        position: static;
        left: auto;
        height: auto;
        display: inline-block;
        text-align: center;
        float: none;
        vertical-align: top;
        padding: 0 3rem 0 0;
        margin-bottom: 0;
        border-radius: 0;
    }
    
    nav {
        width: 80%;
        margin: 0 auto;
        padding: 0;
    }
    
    ul.sidebar-nav li{
        list-style: none;
        display: inline-block;
    }
    
    ul.sidebar-nav li a {
        font-size: 15px;
        padding: 10px 20px;
        margin-bottom: 10px;  
        margin-right: 5px;
    }

    ul.sidebar-nav li a:active,
    ul.sidebar-nav li a:hover,
    ul.sidebar-nav li a.active,
    /* class below is required for vue router */
    a.router-link-exact-active.router-link-active {
        border-color: #ed6c1d;
        background-color:#fa9a55;
    }

    ul.sidebar-nav {
        float: right;
        padding-top: 0;
    }

    .sidebar-btn {
        display: none;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

    ul.sidebar-nav li a {
        font-size: 20px; 
        padding: 10px 20px;
        
    }
}

</style>
