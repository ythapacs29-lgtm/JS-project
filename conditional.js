var place = 'first';

if(place == 'first'){
    console.log('Gold')

} else if (place == 'second'){
    console.log('Silver')
}else if(place == 'third'){
    console.log('Bronze')
}else {
    console.log('No medal')
}


var place = 'first';

switch(place){
    case 'first':
        console.log('Gold');
    case 'second':
        console.log('Silver')
    case 'third':
        console.log('Bronze')
    default:
        console.log('No metal')
}