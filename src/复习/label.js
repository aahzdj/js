top:
    for (var i =0;i<3;i++){
        for (var j =0;j<3;j++)
        {
            if (i==1 &&j==1)break top;
            else{
                console.log(i,j);
            }
        }
    }
console.log('###################')
for (var i =0 ;i<3;i++)
{top:
    for (var j=0;j<3;j++)
    {
        if (i==1&&j==1)break top;
        else{
            console.log(i,j);
        }

    }

}
console.log('###################')
for (var i =0 ;i<3;i++)
{top:
    for (var j=0;j<3;j++)
    {
        if (i==1&&j==1)continue top;//继续内层循环，也就是j+=1
        else{
            console.log(i,j);
        }

    }

}
console.log('###################')
top:
for (var i =0 ;i<3;i++)
{
    for (var j=0;j<3;j++)
    {
        if (i==1&&j==1)continue top;//继续外层循环,也就是i+=1
        else{
            console.log(i,j);
        }

    }

}