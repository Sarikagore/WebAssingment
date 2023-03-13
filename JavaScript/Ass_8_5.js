var ArrNum = [21,10,56,20,10,56,10,95,23,57,10,11,10];
var num = 10;
var cnt=0;

for(let i=0; i <= ArrNum.length; i++)
{
   if(ArrNum[i]==num)
   {
     cnt++;
   }
}
console.log(cnt);