let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger','racoon','travelus', 'puedes'];
let extensions = ['.com', '.net', '.us', '.io','.es'];

for (let rnd1 of pronoun){
    for (let rnd2 of adj){
        for (let rnd3 of noun){
            for (let rnd4 of extensions){
                let dominio = rnd1+rnd2+rnd3+rnd4;

                let sinext = rnd3;
                let conext = rnd4.replace('.','');
                if (sinext.endsWith(conext)){
                    console.log(rnd1+rnd2+sinext.slice(0, -conext.length)+'.'+conext)
                } else{
                console.log(dominio)
                }   
            }
        }
    }
}
