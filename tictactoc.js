let i = 0
let win = [{ ti: 0 }, { ti: 1 }, { ti: 2 }, { ti: 3 }, { ti: 4 }, { ti: 5 }, { ti: 6 }, { ti: 7 }, { ti: 8 }]
let score = document.querySelector('.score')
let replay = document.querySelector('.reload')
let pp = document.querySelector('.PvsP')
let ma = document.querySelector('.MACHINEvsP')
let methode = false
let methode1 = false
let l = [0, 1, 2, 3, 4, 5, 6, 7, 8]


pp.addEventListener('click', e => {
    methode = true
    ma.style.display = 'none'
})
ma.addEventListener('click', e => {
    methode1 = true
    pp.style.display = 'none'
})

function play(num) {
    let tic = document.querySelector(`.item${num}`)
    let user
    if (methode) {
        if (i % 2 == 0) {
            if (tic.innerHTML != 'x' && tic.innerHTML != 'o') {
                tic.innerHTML = 'x'
                win[parseInt(num)] = { ti: tic.innerHTML }
                user = 'x'
                i++
                tic.style.color = 'black'
            }
        }
        else {
            if (tic.innerHTML != 'x' && tic.innerHTML != 'o') {
                tic.innerHTML = 'o'
                win[parseInt(num)] = { ti: tic.innerHTML }
                user = 'o'
                i++
                tic.style.color = 'black'
            }
        }
        if (((win[0].ti == win[1].ti && win[1].ti == win[2].ti) || (win[3].ti == win[4].ti && win[4].ti == win[5].ti) || (win[6].ti == win[7].ti && win[7].ti == win[8].ti) || (win[0].ti == win[3].ti && win[3].ti == win[6].ti) || (win[1].ti == win[4].ti && win[4].ti == win[7].ti) || (win[2].ti == win[5].ti && win[5].ti == win[8].ti) || (win[0].ti == win[4].ti && win[4].ti == win[8].ti) || (win[2].ti == win[4].ti && win[4].ti == win[6].ti)) && (user == 'x')) {
            score.innerHTML = 'X WIN'
            replay.style.zIndex = 1
        }
        else {
            if (((win[0].ti == win[1].ti && win[1].ti == win[2].ti) || (win[3].ti == win[4].ti && win[4].ti == win[5].ti) || (win[6].ti == win[7].ti && win[7].ti == win[8].ti) || (win[0].ti == win[3].ti && win[3].ti == win[6].ti) || (win[1].ti == win[4].ti && win[4].ti == win[7].ti) || (win[2].ti == win[5].ti && win[5].ti == win[8].ti) || (win[0].ti == win[4].ti && win[4].ti == win[8].ti) || (win[2].ti == win[4].ti && win[4].ti == win[6].ti)) && (user == 'o')) {
                score.innerHTML = 'O WIN'
                replay.style.zIndex = 1
            }
            else {
                if (i == 9) {
                    score.innerHTML = 'DRAW'
                    replay.style.zIndex = 1
                }
            }
        }
    } if (methode1) {
        if (i % 2 == 0) {
            if (tic.innerHTML != 'x' && tic.innerHTML != 'o') {
                tic.innerHTML = 'x'
                win[parseInt(num)] = { ti: tic.innerHTML }
                user = 'x'
                i++
                tic.style.color = 'black'
                rem(l, num)
                if ((win[0].ti == win[1].ti && win[1].ti == win[2].ti && win[2].ti == 'x') || (win[3].ti == win[4].ti && win[4].ti == win[5].ti && win[5].ti == 'x') || (win[6].ti == win[7].ti && win[7].ti == win[8].ti && win[8].ti == 'x') || (win[0].ti == win[3].ti && win[3].ti == win[6].ti && win[6].ti == 'x') || (win[1].ti == win[4].ti && win[4].ti == win[7].ti && win[7].ti == 'x') || (win[2].ti == win[5].ti && win[5].ti == win[8].ti && win[8].ti == 'x') || (win[0].ti == win[4].ti && win[4].ti == win[8].ti && win[8].ti == 'x') || (win[2].ti == win[4].ti && win[4].ti == win[6].ti) && win[6].ti == 'x') {
                    score.innerHTML = 'WIN'
                    replay.style.zIndex = 1
                } else {
                    if (i == 9) {
                        score.innerHTML = 'DRAW'
                        replay.style.zIndex = 1
                    }
                }
            }
        }
        let num1 = Math.floor(Math.random() * (l.length - 1))
        let tic1 = document.querySelector(`.item${l[num1]}`)
        if (i % 2 != 0) {
            if (tic1.innerHTML != 'x' && tic1.innerHTML != 'o') {
                tic1.innerHTML = 'o'
                win[l[num1]] = { ti: tic1.innerHTML }
                user = 'o'
                i++
                tic1.style.color = 'black'
                rem(l, l[num1])
                if ((win[0].ti == win[1].ti && win[1].ti == win[2].ti && win[2].ti == 'o') || (win[3].ti == win[4].ti && win[4].ti == win[5].ti && win[5].ti == 'o') || (win[6].ti == win[7].ti && win[7].ti == win[8].ti && win[8].ti == 'o') || (win[0].ti == win[3].ti && win[3].ti == win[6].ti && win[6].ti == 'o') || (win[1].ti == win[4].ti && win[4].ti == win[7].ti && win[7].ti == 'o') || (win[2].ti == win[5].ti && win[5].ti == win[8].ti && win[8].ti == 'o') || (win[0].ti == win[4].ti && win[4].ti == win[8].ti && win[8].ti == 'o') || (win[2].ti == win[4].ti && win[4].ti == win[6].ti) && win[6].ti == 'o') {
                    score.innerHTML = 'LOSE'
                    replay.style.zIndex = 1
                }
                else {
                    if (i == 9) {
                        score.innerHTML = 'DRAW'
                        replay.style.zIndex = 1
                    }
                }
            }
        }

    }


}
replay.addEventListener('click', e => {
    location.reload()
})
function rem(l, num) {
    for (let i = 0; i < l.length; i++) {
        if (l[i] == num) {
            l.splice(i, 1)
        }
    }
}