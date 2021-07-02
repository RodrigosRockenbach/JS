function calcular(){
    var txtv = document.getSelection('input#txtvel')
    var res = document.getSelection('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p> Sua velocidade atual é de ${vel}KM/h <br>Diriga com segurança! Use cinto! </p>`

}