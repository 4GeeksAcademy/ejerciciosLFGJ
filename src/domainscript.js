let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger','racoon','travelus', 'puedes'];
let extensions = ['.com', '.net', '.us', '.io','.es'];

for (let pronomb of pronoun){
    for (let adjeti of adj){
        for (let sustan of noun){
            for (let dotext of extensions){
                let dominio = pronomb+adjeti+sustan+dotext;

                let sinext = sustan;
                let conext = dotext.replace('.','');
                if (sinext.endsWith(conext)){
                    console.log(pronomb+adjeti+sinext.slice(0, -conext.length)+'.'+conext)
                } else{
                console.log(dominio)
                }   
            }
        }
    }
}
