function navbar(){
    return `
    <ul id="li">
    <li>
    <a href="index.html"><button>Home</button></a>
</li>
    <li>
       <a href="receipeofday.html"><button>Day Receipe</button></a>
    </li>
    <li>
    <a href="random.html"><button>Random</button></a>
  </li>
    <li>
        <a href="signup.html"><button>Sign Up</button></a>
    </li>
    <li>
        <a href="signIn.html" id="disable"><button id="btn">Login</button></a>
    </li>
  
    
</ul>
<h1>Food Receipe</h1>
<!-- <h3>Discover the best food receipe & drinks in Delhi NCR</h3> -->
<div class="searchbox">
    <div>
        <input type="text" id="search" placeholder="Search Food" oninput="debouncing(main, 2000)">
        <div id="foods"></div>
    </div>

</div>

`
}
export default navbar