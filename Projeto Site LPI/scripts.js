var kris1 = document.getElementById("krishs")

var ralsei1 = document.getElementById("ralseihs")

var susie1 = document.getElementById("susiehs")

var noelle1 = document.getElementById("noellehs")

var berdly1 = document.getElementById("berdlyhs")

var enemies1 = document.getElementById("enemieshs")

var npcs1 = document.getElementById("npcshs")

var kris2 = document.getElementById("krisb")

var ralsei2 = document.getElementById("ralseib")

var susie2 = document.getElementById("susieb")

var noelle2 = document.getElementById("noelleb")

var berdly2 = document.getElementById("berdlyb")

var enemies2 = document.getElementById("enemiesb")

var npcs2 = document.getElementById("npcb")

var contato = document.getElementById("contato")

var navbar = document.getElementById("navbar")

var movk = document.getElementById("kb1")

var defk = document.getElementById("kb2")

var atkk = document.getElementById("kb3")

var actk = document.getElementById("kb4")

var kmov = document.getElementById("kmov")

var katk = document.getElementById("katk")

var kdef = document.getElementById("kdef")

var kact = document.getElementById("kact")

var sticky = navbar.offsetTop;

var kb1t = true

var kb2t = false

var kb3t = false

var kb4t = false

var ktrue = true

var rtrue = false

var strue = false

var ntrue = false

var btrue = false

var etrue = false

var nptrue = false

function kris()
{
    ktrue = false
    rtrue = true
    strue = true
    ntrue = true
    btrue = true
    etrue = true
    nptrue = true
    kris1.style.display ="flex";
    ralsei1.style.display = "none";
    susie1.style.display = "none";
    noelle1.style.display = "none";
    berdly1.style.display = "none";
    enemies1.style.display = "none";
    npcs1.style.display = "none";
}
function ralsei()
{
    ktrue = true
    rtrue = false
    strue = true
    ntrue = true
    btrue = true
    etrue = true
    nptrue = true
    kris1.style.display = "none";
    ralsei1.style.display ="flex";
    susie1.style.display = "none";
    noelle1.style.display = "none";
    berdly1.style.display = "none";
    enemies1.style.display = "none";
    npcs1.style.display = "none";
}
function susie()
{
    ktrue = true
    rtrue = true
    strue = false
    ntrue = true
    btrue = true
    etrue = true
    nptrue = true
    kris1.style.display = "none";
    ralsei1.style.display = "none";
    susie1.style.display ="flex";
    noelle1.style.display = "none";
    berdly1.style.display = "none";
    enemies1.style.display = "none";
    npcs1.style.display = "none";
}
function noelle()
{
    
    if (ntrue = true)
    {
        ktrue = true
        rtrue = true
        strue = true
        ntrue = false
        btrue = true
        etrue = true
        nptrue = true
        kris1.style.display = "none";
        ralsei1.style.display = "none";
        susie1.style.display = "none";
        noelle1.style.display ="flex";
        berdly1.style.display = "none";
        enemies1.style.display = "none";
        npcs1.style.display = "none";
    }
}
function berdly()
{
    
    if (btrue = true)
    {
        ktrue = true
        rtrue = true
        strue = true
        ntrue = true
        btrue = false
        etrue = true
        nptrue = true
        kris1.style.display = "none";
        ralsei1.style.display = "none";
        susie1.style.display = "none";
        noelle1.style.display = "none";
        berdly1.style.display ="flex";
        enemies1.style.display = "none";
        npcs1.style.display = "none";
    }
}
function enemies()
{
    
    if (etrue = true)
    {
        ktrue = true
        rtrue = true
        strue = true
        ntrue = true
        btrue = true
        etrue = false
        nptrue = true
        kris1.style.display = "none";
        ralsei1.style.display = "none";
        susie1.style.display = "none";
        noelle1.style.display = "none";
        berdly1.style.display = "none";
        enemies1.style.display ="flex";
        npcs1.style.display = "none";
    }
}
function npcs()
{

    if (nptrue = true)
    {
        ktrue = true
        rtrue = true
        strue = true
        ntrue = true
        btrue = true
        etrue = true
        nptrue = false
        kris1.style.display = "none";
        ralsei1.style.display = "none";
        susie1.style.display = "none";
        noelle1.style.display = "none";
        berdly1.style.display = "none";
        enemies1.style.display = "none";
        npcs1.style.display ="flex";
    }
}
krisb.addEventListener("click", function onClick()
{
    if (ktrue === false)
    {
        krisb.style.color = "rgb(239, 255, 17)";
        krisb.style.borderBottomColor = "rgb(239, 255, 17)";

        ralseib.style.color = "rgb(36, 255, 255)"
        ralseib.style.borderBottomColor = "rgb(0, 0, 0)"

        susieb.style.color = "rgb(36, 255, 255)"
        susieb.style.borderBottomColor = "rgb(0, 0, 0)"

        noelleb.style.color = "rgb(36, 255, 255)"
        noelleb.style.borderBottomColor = "rgb(0, 0, 0)"

        berdlyb.style.color = "rgb(36, 255, 255)"
        berdlyb.style.borderBottomColor = "rgb(0, 0, 0)"

        enemiesb.style.color = "rgb(36, 255, 255)"
        enemiesb.style.borderBottomColor = "rgb(0, 0, 0)"
        
        npcb.style.color = "rgb(36, 255, 255)"
        npcb.style.borderBottomColor = "rgb(0, 0, 0)"
    }
});
ralseib.addEventListener("click",function onClick()
{
    if (rtrue === false)
    {
        krisb.style.color = "rgb(36, 255, 255)";
        krisb.style.borderBottomColor = "rgb(0, 0, 0)";

        ralseib.style.color = "rgb(239, 255, 17)"
        ralseib.style.borderBottomColor = "rgb(239, 255, 17)"

        susieb.style.color = "rgb(36, 255, 255)"
        susieb.style.borderBottomColor = "rgb(0, 0, 0)"

        noelleb.style.color = "rgb(36, 255, 255)"
        noelleb.style.borderBottomColor = "rgb(0, 0, 0)"

        berdlyb.style.color = "rgb(36, 255, 255)"
        berdlyb.style.borderBottomColor = "rgb(0, 0, 0)"

        enemiesb.style.color = "rgb(36, 255, 255)"
        enemiesb.style.borderBottomColor = "rgb(0, 0, 0)"
        
        npcb.style.color = "rgb(36, 255, 255)"
        npcb.style.borderBottomColor = "rgb(0, 0, 0)"
    }
});
susieb.addEventListener("click",function onClick()
{
    if (strue === false)
    {
        krisb.style.color = "rgb(36, 255, 255)";
        krisb.style.borderBottomColor = "rgb(0, 0, 0)";

        ralseib.style.color = "rgb(36, 255, 255)"
        ralseib.style.borderBottomColor = "rgb(0, 0, 0)"

        susieb.style.color = "rgb(239, 255, 17)"
        susieb.style.borderBottomColor = "rgb(239, 255, 17)"

        noelleb.style.color = "rgb(36, 255, 255)"
        noelleb.style.borderBottomColor = "rgb(0, 0, 0)"

        berdlyb.style.color = "rgb(36, 255, 255)"
        berdlyb.style.borderBottomColor = "rgb(0, 0, 0)"

        enemiesb.style.color = "rgb(36, 255, 255)"
        enemiesb.style.borderBottomColor = "rgb(0, 0, 0)"
        
        npcb.style.color = "rgb(36, 255, 255)"
        npcb.style.borderBottomColor = "rgb(0, 0, 0)"
    }
});
noelleb.addEventListener("click",function onClick()
{
    if (ntrue === false)
    {
        krisb.style.color = "rgb(36, 255, 255)";
        krisb.style.borderBottomColor = "rgb(0, 0, 0)";

        ralseib.style.color = "rgb(36, 255, 255)"
        ralseib.style.borderBottomColor = "rgb(0, 0, 0)"

        susieb.style.color = "rgb(36, 255, 255)"
        susieb.style.borderBottomColor = "rgb(0, 0, 0)"

        noelleb.style.color = "rgb(239, 255, 17)"
        noelleb.style.borderBottomColor = "rgb(239, 255, 17)"

        berdlyb.style.color = "rgb(36, 255, 255)"
        berdlyb.style.borderBottomColor = "rgb(0, 0, 0)"

        enemiesb.style.color = "rgb(36, 255, 255)"
        enemiesb.style.borderBottomColor = "rgb(0, 0, 0)"
        
        npcb.style.color = "rgb(36, 255, 255)"
        npcb.style.borderBottomColor = "rgb(0, 0, 0)"
    }
});
berdlyb.addEventListener("click",function onClick()
{
    if (btrue === false)
    {
        krisb.style.color = "rgb(36, 255, 255)";
        krisb.style.borderBottomColor = "rgb(0, 0, 0)";

        ralseib.style.color = "rgb(36, 255, 255)"
        ralseib.style.borderBottomColor = "rgb(0, 0, 0)"

        susieb.style.color = "rgb(36, 255, 255)"
        susieb.style.borderBottomColor = "rgb(0, 0, 0)"

        noelleb.style.color = "rgb(36, 255, 255)"
        noelleb.style.borderBottomColor = "rgb(0, 0, 0)"

        berdlyb.style.color = "rgb(239, 255, 17)"
        berdlyb.style.borderBottomColor = "rgb(239, 255, 17)"

        enemiesb.style.color = "rgb(36, 255, 255)"
        enemiesb.style.borderBottomColor = "rgb(0, 0, 0)"
        
        npcb.style.color = "rgb(36, 255, 255)"
        npcb.style.borderBottomColor = "rgb(0, 0, 0)"
    }
});
enemiesb.addEventListener("click",function onClick()
{
    if (etrue === false)
    {
        krisb.style.color = "rgb(36, 255, 255)";
        krisb.style.borderBottomColor = "rgb(0, 0, 0)";

        ralseib.style.color = "rgb(36, 255, 255)"
        ralseib.style.borderBottomColor = "rgb(0, 0, 0)"

        susieb.style.color = "rgb(36, 255, 255)"
        susieb.style.borderBottomColor = "rgb(0, 0, 0)"

        noelleb.style.color = "rgb(36, 255, 255)"
        noelleb.style.borderBottomColor = "rgb(0, 0, 0)"

        berdlyb.style.color = "rgb(36, 255, 255)"
        berdlyb.style.borderBottomColor = "rgb(0, 0, 0)"

        enemiesb.style.color = "rgb(239, 255, 17)"
        enemiesb.style.borderBottomColor = "rgb(239, 255, 17)"
        
        npcb.style.color = "rgb(36, 255, 255)"
        npcb.style.borderBottomColor = "rgb(0, 0, 0)"
    }
});
npcb.addEventListener("click",function onClick()
{
    if (nptrue === false)
    {
        krisb.style.color = "rgb(36, 255, 255)";
        krisb.style.borderBottomColor = "rgb(0, 0, 0)";

        ralseib.style.color = "rgb(36, 255, 255)"
        ralseib.style.borderBottomColor = "rgb(0, 0, 0)"

        susieb.style.color = "rgb(36, 255, 255)"
        susieb.style.borderBottomColor = "rgb(0, 0, 0)"

        noelleb.style.color = "rgb(36, 255, 255)"
        noelleb.style.borderBottomColor = "rgb(0, 0, 0)"

        berdlyb.style.color = "rgb(36, 255, 255)"
        berdlyb.style.borderBottomColor = "rgb(0, 0, 0)"

        enemiesb.style.color = "rgb(36, 255, 255)"
        enemiesb.style.borderBottomColor = "rgb(0, 0, 0)"
        
        npcb.style.color = "rgb(239, 255, 17)"
        npcb.style.borderBottomColor = "rgb(239, 255, 17)"
    }
});
contato.addEventListener("click", function onClick()
{
    window.open("contato.html")
});

function kb1()
{
    kb1t = false
    kb2t = true
    kb3t = true
    kb4t = true
    kmov.style.display = "block";
    katk.style.display = "none";
    kdef.style.display = "none";
    kact.style.display = "none";
}
function kb2()
{
    kb1t = true
    kb2t = false
    kb3t = true
    kb4t = true
    kdef.style.display = "block";
    kmov.style.display = "none";  
    katk.style.display = "none";
    kact.style.display = "none";
}
function kb3()
{
    kb1t = true
    kb2t = true
    kb3t = false
    kb4t = true
    katk.style.display = "block";
    kmov.style.display = "none";
    kdef.style.display = "none";
    kact.style.display = "none";
}
function kb4()
{
    kb1t = true
    kb2t = true
    kb3t = true
    kb4t = false
    kact.style.display = "block";
    kmov.style.display = "none";
    kdef.style.display = "none";
    katk.style.display = "none";
}
movk.addEventListener("click", function onClick()
{
    movk.style.color = "rgb(239, 255, 17)"
    movk.style.borderBottomColor = "rgb(239, 255, 17)"
    defk.style.color = "rgb(36, 255, 255)"
    defk.style.borderBottomColor = "rgb(0, 0, 0)"
    atkk.style.color = "rgb(36, 255, 255)"
    atkk.style.borderBottomColor = "rgb(0, 0, 0)"
    actk.style.color = "rgb(36, 255, 255)"
    actk.style.borderBottomColor = "rgb(0, 0, 0)"

});
defk.addEventListener("click", function onClick()
{
    movk.style.color = "rgb(36, 255, 255)"
    movk.style.borderBottomColor = "rgb(0, 0, 0)"
    defk.style.color = "rgb(239, 255, 17)"
    defk.style.borderBottomColor = "rgb(239, 255, 17)"
    atkk.style.color = "rgb(36, 255, 255)"
    atkk.style.borderBottomColor = "rgb(0, 0, 0)"
    actk.style.color = "rgb(36, 255, 255)"
    actk.style.borderBottomColor = "rgb(0, 0, 0)"
});
atkk.addEventListener("click", function onClick()
{
    movk.style.color = "rgb(36, 255, 255)"
    movk.style.borderBottomColor = "rgb(0, 0, 0)"
    defk.style.color = "rgb(36, 255, 255)"
    defk.style.borderBottomColor = "rgb(0, 0, 0)"
    atkk.style.color = "rgb(239, 255, 17)"
    atkk.style.borderBottomColor = "rgb(239, 255, 17)"
    actk.style.color = "rgb(36, 255, 255)"
    actk.style.borderBottomColor = "rgb(0, 0, 0)"
});
actk.addEventListener("click", function onClick()
{
    movk.style.color = "rgb(36, 255, 255)"
    movk.style.borderBottomColor = "rgb(0, 0, 0)"
    defk.style.color = "rgb(36, 255, 255)"
    defk.style.borderBottomColor = "rgb(0, 0, 0)"
    atkk.style.color = "rgb(36, 255, 255)"
    atkk.style.borderBottomColor = "rgb(0, 0, 0)"
    actk.style.color = "rgb(239, 255, 17)"
    actk.style.borderBottomColor = "rgb(239, 255, 17)"
});
