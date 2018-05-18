for i in *.htm
do
    se=$(echo $i|sed s/htm/ejs/g)
#    echo $i
    mv $i $se
done
