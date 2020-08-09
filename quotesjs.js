function Display(divId)
    {
        var div = document.getElementById(divId);

        if(divId != "Div1"){
            var temp = document.getElementById("Div1");
            temp.style.display = "none";
        }

        if(divId != "Div2"){
            var temp = document.getElementById("Div2");
            temp.style.display = "none";
        }

        if(divId != "Div3"){
            var temp = document.getElementById("Div3");
            temp.style.display = "none";
        }

        if (div.style.display == "block")
        {

            div.style.display = "none";
        }
        else
        {

            div.style.display = "block";
        }
    }
