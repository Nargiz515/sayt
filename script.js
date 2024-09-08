let total = 0
let total1 = 0
let total2 = 0
let total3 = 0
let total4 = 0

const ilkInp = document.getElementById('ilkInp')
const ilkXerc = document.getElementById('ilkXerc')
const statikSehifeler = document.getElementById('statikSəhifələr')
const ikinciInp = document.getElementById('ikinciInp')

function hesablaQiymet() {
    const count1 = ilkInp.value
    const deyer = 100
    const count2 = ikinciInp ? ikinciInp.value : 1
    total = count1 * deyer * count2  
    
    ilkXerc.innerHTML = `${count1} səhifə / ₼ ${total}`
    statikSehifeler.innerHTML = `₼ ${total}`
    hesablaUmumiQiymet() 
}

const inp2 = document.getElementById('inp2')
const elaveEt = document.getElementById('elaveEt')
const elaveQiymet = document.getElementById('elaveQiymet')
function hesabla2() {
    const blog = inp2.checked ? 200 : 0
    const uzv = inp3?.checked ? 400 : 0
    const responsive = inp4?.checked ? 100 : 0
    const forum = inp5?.checked ? 400 : 0
    const mesajlama = inp6?.checked ? 50 : 0
    const canli = inp7?.checked ? 50 : 0
    const qalereya = inp8?.checked ? 100 : 0
    const elaqe = inp9?.checked ? 100 : 0
    const axtaris = inp10?.checked ? 100 : 0
    const xerite = inp11?.checked ? 100 : 0
    const rezervasiya = inp12?.checked ? 400 : 0
    const social = inp13?.checked ? 50 : 0
    const analitika = inp14?.checked ? 50 : 0
    const admin = inp15?.checked ? 300 : 0

    total2 = blog + uzv + responsive + forum + mesajlama + canli + qalereya + elaqe + axtaris + xerite + rezervasiya + social + analitika + admin
    const totalText = `₼ ${total2}`

    elaveEt.innerHTML = totalText
    elaveQiymet.innerHTML = totalText
    hesablaUmumiQiymet()  
}

const second1 = document.getElementById('middle1')
const elaveEt2 = document.getElementById('elaveEt2')
const seoQiymet = document.getElementById('seoQiymet')
function hesabla3() {
    const meta = second1?.checked ? 200 : 0
    const acar = middle2?.checked ? 300 : 0
    const texnika = middle3?.checked ? 300 : 0
    const teq = middle4?.checked ? 100 : 0
    const map = middle5?.checked ? 100 : 0

    total3 = meta + acar + texnika + teq + map  
    const totalText = `₼ ${total3}`

    elaveEt2.innerHTML = totalText
    seoQiymet.innerHTML = totalText
    hesablaUmumiQiymet()  
}

const part1 = document.getElementById('part1')
const elaveEt3 = document.getElementById('elaveEt3')
const eticaretQiymet = document.getElementById('eticaretQiymet')
function hesabla4() {
    const odenis = part1?.checked ? 200 : 0
    const sebet = part2?.checked ? 500 : 0
    const mehsullar = part3?.checked ? 300 : 0
    const beyendiklerim = part4?.checked ? 300 : 0
    const filtr = part5?.checked ? 300 : 0
    const haqqinda = part6?.checked ? 200 : 0

    total4 = odenis + sebet + mehsullar + beyendiklerim + filtr + haqqinda  
    const totalText = `₼ ${total4}`

    elaveEt3.innerHTML = totalText
    eticaretQiymet.innerHTML = totalText
    hesablaUmumiQiymet()  
}

const son1 = document.getElementById('son1')
const elaveEt4 = document.getElementById('elaveEt4')
const logoQiymet = document.getElementById('logoQiymet')
function hesabla5() {
    const count3 = son1.value
    const deyer = 100
    total1 = (count3 - 1) * deyer 

    const totalText = `₼ ${total1}`

    elaveEt4.innerHTML = totalText
    logoQiymet.innerHTML = totalText
    hesablaUmumiQiymet() 
}


const umumiQiymet = document.getElementById('umumiQiymet')
function hesablaUmumiQiymet() {
    const umumi = total + total1 + total2 + total3 + total4  
    const finalQiymet = umumi < 450 ? 450 : umumi 

    umumiQiymet.innerHTML = `₼ ${finalQiymet}`  
}
function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}
function hideSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
