
document.getElementById("button").addEventListener("click", function(event){
        event.preventDefault()
    });
const analyzer = () =>
{
    v=0,c=0,n=0,sp=0,sc=0;
    var s=document.getElementById("input").value;
    document.getElementById("input").value="";
    document.getElementById("preview-content").textContent=s;
    for(var i=0;i<s.length;i++)
    {
        if(s.charCodeAt(i)===65 || s.charCodeAt(i)==97 || s.charCodeAt(i)===69 || s.charCodeAt(i)===73 || s.charCodeAt(i)===85 || s.charCodeAt(i)===101 || s.charCodeAt(i)===105 || s.charCodeAt(i)===111 || s.charCodeAt(i)===117)
        {
            v++;
        }
        else if( s.charCodeAt(i)===32)
        {
            sp++;
        }   
        else if( (s.charCodeAt(i)>=32 && s.charCodeAt(i)<=47) || ( s.charCodeAt(i)>=123 && s.charCodeAt(i)<=126) || ( s.charCodeAt(i)>=91 && s.charCodeAt(i)<=96) || (s.charCodeAt(i)>=58 && s.charCodeAt(i)<=64))
        {
            sc++;
        }
        else if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57)
        {
            n++;
        }
        else
        {
            c++;
        }
    }
    document.getElementById("vowels").textContent=v;
    document.getElementById("consonants").textContent=c;
    document.getElementById("number").textContent=n;
    document.getElementById("spaces").textContent=sp;
    document.getElementById("specialCharacters").textContent=sc;
};
