var container = document.querySelector('.container')
var common = document.querySelector('.common')
var hero = document.querySelector('.hero')
var alphonse = document.querySelector('.alphonse')
var scar = document.querySelector('.scar')
var edward = document.querySelector('.edward')
var lingyao = document.querySelector('.lingyao')
var enemies = document.querySelector('.enemies')
var enemy = document.querySelector('.enemy')
var enemydiv = document.querySelector('.enemydiv')
var enemiesdiv = document.querySelector('.enemiesdiv')
var abouthero = document.querySelector('.abouthero')
var aboutenemy = document.querySelector('.aboutenemy')
var names1 = document.querySelector('.name1')
var power1 = document.querySelector('.power1')
var health1 = document.querySelector('.health1')
var names2 = document.querySelector('.name2')
var power2 = document.querySelector('.power2')
var health2 = document.querySelector('.health2')
var h21 = document.querySelector('.h21')
var fight = document.querySelector('.fight')
var fightzone = document.querySelector('.fightzone')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var top1 = document.querySelector('.top1')
var top2 = document.querySelector('.top2')
var lefthero = document.querySelector('.lefthero')
var rightenemy = document.querySelector('.rightenemy')
var green1 = document.querySelector('.green1')
var green2 = document.querySelector('.green2')
var attack = document.querySelector('.attack')
var viczone = document.querySelector('.viczone')
var herovar = false
var enemyvar = false
edward.onclick = function () {
    if (herovar == false) {
        setInterval(() => {
            edward.style.transform = 'scale(1.0)'
        }, 700)
        setInterval(() => {
            edward.style.transform = 'scale(1.1)'
        }, 1400)
        enemiesdiv.style.display = 'flex'
        enemies.append(scar, alphonse, lingyao)
        herovar = edward
        h21.innerText = 'Your Character'
        edward.style.boxShadow = 'none'
        abouthero.style.display = 'flex'
        names1.innerText = edward.dataset.name
        power1.innerText = edward.dataset.power
        health1.innerText = edward.dataset.health
    }
    else if (enemyvar == false) {
        if (herovar !== edward) {
            setInterval(() => {
                edward.style.transform = 'scale(1.0)'
            }, 700)
            setInterval(() => {
                edward.style.transform = 'scale(1.1)'
            }, 1400)
            common.style.justifyContent = 'space-between'
            enemydiv.style.display = 'flex'
            enemy.append(edward)
            enemyvar = edward
            edward.style.boxShadow = 'none'
            aboutenemy.style.display = 'flex'
            edward.style.transform = 'scale(1)'
            names2.innerText = edward.dataset.name
            power2.innerText = edward.dataset.power
            health2.innerText = edward.dataset.health
            fight.style.display = 'block'
            enemiesdiv.style.display = 'none'
        }

    }
}
alphonse.onclick = function () {
    if (herovar == false) {
        setInterval(() => {
            alphonse.style.transform = 'scale(1.0)'
        }, 700)
        setInterval(() => {
            alphonse.style.transform = 'scale(1.1)'
        }, 1400)
        enemiesdiv.style.display = 'flex'
        enemies.append(scar, edward, lingyao)
        herovar = alphonse
        h21.innerText = 'Your Character'
        alphonse.style.boxShadow = 'none'
        abouthero.style.display = 'flex'

        names1.innerText = alphonse.dataset.name
        power1.innerText = alphonse.dataset.power
        health1.innerText = alphonse.dataset.health
    }
    else if (enemyvar == false) {
        if (herovar !== alphonse) {
            setInterval(() => {
                alphonse.style.transform = 'scale(1.0)'
            }, 700)
            setInterval(() => {
                alphonse.style.transform = 'scale(1.1)'
            }, 1400)
            common.style.justifyContent = 'space-between'
            enemydiv.style.display = 'flex'
            enemy.append(alphonse)
            enemyvar = alphonse
            alphonse.style.boxShadow = 'none'
            aboutenemy.style.display = 'flex'
            alphonse.style.transform = 'scale(1)'
            names2.innerText = alphonse.dataset.name
            power2.innerText = alphonse.dataset.power
            health2.innerText = alphonse.dataset.health
            fight.style.display = 'block'
            enemiesdiv.style.display = 'none'
        }

    }
}
scar.onclick = function () {
    if (herovar == false) {
        setInterval(() => {
            scar.style.transform = 'scale(1.0)'
        }, 700)
        setInterval(() => {
            scar.style.transform = 'scale(1.06)'
        }, 1400)
        enemiesdiv.style.display = 'flex'
        enemies.append(edward, alphonse, lingyao)
        herovar = scar
        h21.innerText = 'Your Character'
        scar.style.boxShadow = 'none'
        abouthero.style.display = 'flex'
        names1.innerText = scar.dataset.name
        power1.innerText = scar.dataset.power
        health1.innerText = scar.dataset.health
    }
    else if (enemyvar == false) {
        if (herovar !== scar) {
            setInterval(() => {
                scar.style.transform = 'scale(1.0)'
            }, 700)
            setInterval(() => {
                scar.style.transform = 'scale(1.06)'
            }, 1400)
            common.style.justifyContent = 'space-between'
            enemydiv.style.display = 'flex'
            enemy.append(scar)
            enemyvar = scar
            scar.style.boxShadow = 'none'
            aboutenemy.style.display = 'flex'
            scar.style.transform = 'scale(1)'
            names2.innerText = scar.dataset.name
            power2.innerText = scar.dataset.power
            health2.innerText = scar.dataset.health
            fight.style.display = 'block'
            enemiesdiv.style.display = 'none'
        }

    }
}
lingyao.onclick = function () {
    if (herovar == false) {
        setInterval(() => {
            lingyao.style.transform = 'scale(1.0)'
        }, 700)
        setInterval(() => {
            lingyao.style.transform = 'scale(1.06)'
        }, 1400)
        enemiesdiv.style.display = 'flex'
        enemies.append(edward, alphonse, scar)
        herovar = lingyao
        h21.innerText = 'Your Character'
        lingyao.style.boxShadow = 'none'
        abouthero.style.display = 'flex'
        names1.innerText = lingyao.dataset.name
        power1.innerText = lingyao.dataset.power
        health1.innerText = lingyao.dataset.health
    }

    else if (enemyvar == false) {
        if (herovar !== lingyao) {
            setInterval(() => {
                lingyao.style.transform = 'scale(1.0)'
            }, 700)
            setInterval(() => {
                lingyao.style.transform = 'scale(1.06)'
            }, 1400)
            common.style.justifyContent = 'space-between'
            enemydiv.style.display = 'flex'
            enemy.append(lingyao)
            enemyvar = lingyao
            lingyao.style.transform = 'scale(1)'
            lingyao.style.boxShadow = 'none'
            aboutenemy.style.display = 'flex'
            names2.innerText = lingyao.dataset.name
            power2.innerText = lingyao.dataset.power
            health2.innerText = lingyao.dataset.health
            fight.style.display = 'block'
            enemiesdiv.style.display = 'none'
        }

    }
}
fight.onclick = function () {

    fightzone.style.display = 'flex'
    container.style.display = 'none'
    top1.append(abouthero)
    top2.append(aboutenemy)
    lefthero.append(herovar)
    rightenemy.append(enemyvar)
    clearInterval(1)
    clearInterval(2)
    clearInterval(3)
    clearInterval(4)
}

attack.onclick = function () {
    if (herovar == edward) {
        if (enemyvar == scar) {
            scar.dataset.health = scar.dataset.health - (Math.floor(Math.random() * edward.dataset.power))
            edward.dataset.health = edward.dataset.health - (Math.floor(Math.random() * scar.dataset.power))
            green2.style.width = scar.dataset.health + 'px'
            green1.style.width = edward.dataset.health + 'px'
            if (scar.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 

            }
            else if (edward.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp) 
                }, 100);
                
            }
        }
        else if (enemyvar == alphonse) {
            alphonse.dataset.health = alphonse.dataset.health - (Math.floor(Math.random() * edward.dataset.power))
            edward.dataset.health = edward.dataset.health - (Math.floor(Math.random() * alphonse.dataset.power))
            green2.style.width = alphonse.dataset.health + 'px'
            green1.style.width = edward.dataset.health + 'px'
            if (alphonse.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                   fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 
            }
            else if (edward.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                   fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)  
                   }, 500);
            }
        }
        else if (enemyvar == lingyao) {
            lingyao.dataset.health = lingyao.dataset.health - (Math.floor(Math.random() * edward.dataset.power))
            edward.dataset.health = edward.dataset.health - (Math.floor(Math.random() * lingyao.dataset.power))
            green2.style.width = lingyao.dataset.health + 'px'
            green1.style.width = edward.dataset.health + 'px'
            if (lingyao.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 500); 
            }
            else if (edward.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)    
                   }, 100);
            }
        }

    }
    else if (herovar == alphonse) {
        if (enemyvar == scar) {
            scar.dataset.health = scar.dataset.health - (Math.floor(Math.random() * alphonse.dataset.power))
            alphonse.dataset.health = alphonse.dataset.health - (Math.floor(Math.random() * scar.dataset.power))
            green2.style.width = scar.dataset.health + 'px'
            green1.style.width = alphonse.dataset.health + 'px'
            if (scar.dataset.health < 0) {
                green2.style.width = '0px'
                 setTimeout(() => {
                   fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 500); 
            }
            else if (alphonse.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                   fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)    
                   }, 500);
            }
        }
        else if (enemyvar == edward) {
            edward.dataset.health = edward.dataset.health - (Math.floor(Math.random() * alphonse.dataset.power))
            alphonse.dataset.health = alphonse.dataset.health - (Math.floor(Math.random() * edward.dataset.power))
            green2.style.width = edward.dataset.health + 'px'
            green1.style.width = alphonse.dataset.health + 'px'
            if (edward.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                   fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 500); 
            }
            else if (alphonse.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)    
                   }, 100);
            }
        }
        else if (enemyvar == lingyao) {
            lingyao.dataset.health = lingyao.dataset.health - (Math.floor(Math.random() * alphonse.dataset.power))
            alphonse.dataset.health = alphonse.dataset.health - (Math.floor(Math.random() * lingyao.dataset.power))
            green2.style.width = lingyao.dataset.health + 'px'
            green1.style.width = alphonse.dataset.health + 'px'
            if (lingyao.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 
            }
            else if (alphonse.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)   
                   }, 100);
            }
        }
    }
    else if (herovar == scar) {
        if (enemyvar == alphonse) {
alphonse.dataset.health =alphonse.dataset.health - (Math.floor(Math.random() * scar.dataset.power))
            scar.dataset.health = scar.dataset.health - (Math.floor(Math.random() * alphonse.dataset.power))
            green2.style.width = alphonse.dataset.health + 'px'
            green1.style.width = scar.dataset.health + 'px'
            if (alphonse.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 
            }
            else if (scar.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                  fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)   
                   }, 100);
            }
        }
        else if (enemyvar == edward) {
            edward.dataset.health = edward.dataset.health - (Math.floor(Math.random() * scar.dataset.power))
            scar.dataset.health = scar.dataset.health - (Math.floor(Math.random() * edward.dataset.power))
            green2.style.width = edward.dataset.health + 'px'
            green1.style.width = scar.dataset.health + 'px'
            if (edward.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 
            }
            else if (scar.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                   fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)    
                   }, 100);
            }
        }
        else if (enemyvar == lingyao) {
            lingyao.dataset.health = lingyao.dataset.health - (Math.floor(Math.random() * scar.dataset.power))
            scar.dataset.health = scar.dataset.health - (Math.floor(Math.random() * lingyao.dataset.power))
            green2.style.width = lingyao.dataset.health + 'px'
            green1.style.width = scar.dataset.health + 'px'
            if (lingyao.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 
            }
            else if (scar.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)    
                   }, 100);
            }
        }

    }
    else if (herovar == lingyao) {
        if (enemyvar == scar) {
            scar.dataset.health = scar.dataset.health - (Math.floor(Math.random() * lingyao.dataset.power))
            lingyao.dataset.health = lingyao.dataset.health - (Math.floor(Math.random() * scar.dataset.power))
            green2.style.width = scar.dataset.health + 'px'
            green1.style.width = lingyao.dataset.health + 'px'
            if (scar.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                   fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 
            }
            else if (lingyao.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                   fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)    
                   }, 100);
            }
        }
        else if (enemyvar == edward) {
            edward.dataset.health = edward.dataset.health - (Math.floor(Math.random() * lingyao.dataset.power))
            lingyao.dataset.health = lingyao.dataset.health - (Math.floor(Math.random() * edward.dataset.power))
            green2.style.width = edward.dataset.health + 'px'
            green1.style.width = lingyao.dataset.health + 'px'
            if (edward.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 
            }
            else if (lingyao.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)    
                   }, 100);
            }
        }
        else if (enemyvar == alphonse) {
            alphonse.dataset.health = alphonse.dataset.health - (Math.floor(Math.random() * lingyao.dataset.power))
            lingyao.dataset.health = lingyao.dataset.health - (Math.floor(Math.random() * alphonse.dataset.power))
            green2.style.width = alphonse.dataset.health + 'px'
            green1.style.width = lingyao.dataset.health + 'px'
            if (alphonse.dataset.health < 0) {
                green2.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU WON!'
                    viczone.append(pp)
                }, 100); 
            }
            else if (lingyao.dataset.health < 0) {
                green1.style.width = '0px'
                setTimeout(() => {
                    fightzone.style.display='none'
                    viczone.style.display='flex'
                    var pp = document.createElement('p')
                    pp.innerText='YOU LOST!'
                    viczone.append(pp)   
                   }, 100);
            }
        }
    }
}