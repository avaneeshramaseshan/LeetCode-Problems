function mergeTwoLists(list1,list2) {
    let i=0, j=0, k=0, list3=[];
    while(list1[i]!==null && list2[j]!==null){
        if(list1[i]>=list2[j]){
            list3[k] = list1[i];
            i++;
            k++;
        }
        else{
            list3[k] = list2[j];
            j++;
            k++;
        }
    }
    return list3;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));