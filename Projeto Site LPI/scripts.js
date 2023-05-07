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


var ktrue = true

var rtrue = false

var strue = false

var ntrue = false

var btrue = false

var etrue = false

var nptrue = false

function kris()
{
    if (ktrue = true)
    {
        ktrue = false
        rtrue = true
        strue = true
        ntrue = true
        btrue = true
        etrue = true
        nptrue = true
        kris1.style.display = "block";
        ralsei1.style.display = "none";
        susie1.style.display = "none";
        noelle1.style.display = "none";
        berdly1.style.display = "none";
        enemies1.style.display = "none";
        npcs1.style.display = "none";
    }
}
function ralsei()
{

    if (rtrue = true)
    {
        ktrue = true
        rtrue = false
        strue = true
        ntrue = true
        btrue = true
        etrue = true
        nptrue = true
        kris1.style.display = "none";
        ralsei1.style.display = "block";
        susie1.style.display = "none";
        noelle1.style.display = "none";
        berdly1.style.display = "none";
        enemies1.style.display = "none";
        npcs1.style.display = "none";
    }
}
function susie()
{

    if (strue = true)
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
        susie1.style.display = "block";
        noelle1.style.display = "none";
        berdly1.style.display = "none";
        enemies1.style.display = "none";
        npcs1.style.display = "none";
    }
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
        noelle1.style.display = "block";
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
        berdly1.style.display = "block";
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
        enemies1.style.display = "block";
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
        npcs1.style.display = "block";
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