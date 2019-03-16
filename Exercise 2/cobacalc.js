    var a;
    var b;
    var c = this.getAttribute("data-ops");
    var selected = false;
    var result;

    function num(thenumber)
    {
        var calcdisplay= document.getElementById("calcdisplay").value;
        if (calcdisplay!= 0) 
        {
            calcdisplay+= thenumber;
        }else
        {
            calcdisplay= thenumber;
        }
        document.getElementById("calcdisplay").value = calcdisplay;
    }
    function decimal() 
    {
        var calcdisplay= document.getElementById("calcdisplay").value;
        if (calcdisplay.includes(".") == false ) 
        {
            calcdisplay+= ".";
        }
        document.getElementById("calcdisplay").value = calcdisplay;
    }
    function ops(x)
    {
        selected = true;
        c = x;
        a = parseFloat(document.getElementById("calcdisplay").value);
        document.getElementById("calcdisplay").value = "";
        // switch (c) {
        //     case 1:
        //         document.getElementById("calcdisplay").value = "x";
        //         break;
        //     case 2:
        //         document.getElementById("calcdisplay").value = "/";
        //         break;
        //     case 3:
        //         document.getElementById("calcdisplay").value = "-";
        //         break;
        //     case 3:
        //         document.getElementById("calcdisplay").value = "-";
        //         break;
        //     case 4:
        //         document.getElementById("calcdisplay").value = "+";
        //         break;
        //     case 5:
        //         document.getElementById("calcdisplay").value ='x<sup>2</sup>';
        //         break;
        //     case 6:
        //         document.getElementById("calcdisplay").value = "%";
        //         break;
        // }
    }
    function del() 
    {
        document.getElementById("calcdisplay").value = "0";
        a = 0;
        b = 0;
        selected = false;
    }
    function calculate() 
    {
        if (selected == true)
        {
            b = parseFloat(document.getElementById("calcdisplay").value);
            switch(c)
            {
                case 1 :
                    result = a * b;
                    document.getElementById("calcdisplay").value =  result;
                    break;
                case 2 :
                    result = a / b;
                    document.getElementById("calcdisplay").value =  result;
                    break;
                case 3 :
                    result = a - b;
                    document.getElementById("calcdisplay").value =  result;
                    break;
                case 4 : 
                    result = a + b;
                    document.getElementById("calcdisplay").value =  result;
                    break;
                case 5 :
                    result = a * a;
                    document.getElementById("calcdisplay").value =  result;
                    break;
                case 6 :
                    result = a / 100;
                    document.getElementById("calcdisplay").value = result;
                    break;
                case 7 :
                    result = Math.sqrt(a);
                    document.getElementById("calcdisplay").value = result;
                    break;


            }
            selected = true;
            result = 0;
        }
    }
