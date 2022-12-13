var kol = 0
x = []
masitg = []

while(kol < 10){
    var CorD = ' ' + prompt('Кошка или Собака?', 'Кошка')
    var breed = ' Порода: ' + prompt('Какой породы?', 'Дворняга')
    var name = ' Кличка: ' + prompt('Как зовут?', 'Марсик')
    var year = ' Год рождения: ' + prompt('Год рождения', '2020')
    var age = ' Полных лет: ' + prompt('Сколько полных лет?', '2')
    var next = confirm('Продолжить?')

    x = CorD + breed + name + year + age

    if (next){

        masitg[kol]=x

        kol += 1
    }
    else{
        alert('Пока')
        kol = 10
    } 
} 


for(var i=0; i<10; i++){
    console.log(masitg[i])
}




