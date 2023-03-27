function fun(){
    document.getElementById("f").innerHTML=localStorage.getItem("textvalue1");
    document.getElementById("s").innerHTML=localStorage.getItem("textvalue2");
    let a=localStorage.getItem("textvalue1");
    let b=localStorage.getItem("textvalue2");
    if(a.length==0 || b.length==0)
    {
        window.alert("!!Enter 2 Names !!");
    }
    else if(a.length<=2 || b.length<=2)
    {
        window.alert("!!Invalid Names !!");
    }
    else if(a==b)
    {
        window.alert("!!Both names cannot be same !!")
    }
    else
    {
        a=a.replace(' ','');
        b=b.replace(' ','');
        a=a.toLowerCase();
        b=b.toLowerCase();
        let n1=a.split('');
        let n2=b.split('');
        let c=0;
        for(let i=0;i<n1.length;i++)
        {
            let j=0;
            let f=false;
            for(;j<n2.length;j++)
            {
                if(n1[i]==n2[j])
                {
                    f=true;
                    break;
                }
            }
            if(f){
                c=c+1;
                delete n1[i];
                n2.splice(j,1);
            }
        }
        let len=(n1.length-c)+n2.length;
        let flames=['F','L','A','M','E','S'];
        while(flames.length>1)
        {
            if(len<=flames.length)
            {
                flames.splice(len-1,1);
            }
            else
            {
                let k=(len%flames.length)-1;
                flames.splice(k,1);
            }
        }
        if(flames[0]=="F")
        {
            document.getElementById("c").innerHTML="Friend";
        }
        else if(flames[0]=="L")
        {
            document.getElementById("c").innerHTML="Love";
        }
        else if(flames[0]=="A")
        {
            document.getElementById("c").innerHTML="Affection";
        }
        else if(flames[0]=="M")
        {
            document.getElementById("c").innerHTML="Marriage";
        }
        else if(flames[0]=="E")
        {
            document.getElementById("c").innerHTML="Enemy";
        }
        else
        {
            document.getElementById("c").innerHTML="Sister";
        }
    }
}