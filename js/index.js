var index=0;
        myfunction();

    
        function myfunction()
        {
            var i=0;
            var obj=document.getElementsByClassName("myslides");
            for(i=0;i<obj.length;i++)
            {
                obj[i].style.display=none;
            }
            index++;
            if(index>obj.length){index=0;}
            obj[index].style.display=block;
            setTimeout(myfunction,3000);
    
        }