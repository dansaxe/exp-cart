
for i in nod/*js
do
se1=$(echo $i |sed s/nod/bro/g)
echo $se1

mv $i $se1
done
