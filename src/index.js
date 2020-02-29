
module.exports = function toReadable(number) {
    let result = '';
        let a = [...number + ''];
        if (!number) return 'zero';
        let map = {            
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            80: 'eighty'
        }
        let limit = 10;
        let summStr = '';
        let dig = 0;
        for (let i = 0; i < a.length; i++ , limit *= 10) {
            const element = number % limit;
            dig = number%limit + dig;                   
            if (map[element]) {
                if (map[element] == 'ten') {
                    summStr = map[dig];
                    continue
                } else {
                    summStr = map[element] + ' ' + summStr;
                }
            } else {
                if (element.toString().length == 2) {                    
                    summStr = map[element.toString()[0]] + 'ty' + ' ' + summStr;
                }
                if (element.toString().length == 3) {                    
                    summStr = map[element.toString()[0]] + ' hundred' + ' ' + summStr;
                }
            }
            number = number - (number % limit);        
        }       
        result = summStr.trim()
        return result
}


// function toReadable(number) {
//     let result = '';
//     let a = [...number + ''];
//     let map = {
//         // 0: 'zero',
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine',
//         10: 'ten',
//         11: 'eleven',
//         12: 'twelve',
//         13: 'thirty',
//         14: 'fourteen',
//         15: 'fifteen',
//         16: 'sixteen',
//         17: 'seventeen',
//         18: 'eighteen',
//         19: 'nineteen',
//         20: 'twenty',
//         30: 'thirty',
//         40: 'forty',
//         50: 'fifty',
//         80: 'eighty'
//     }
//     let limit = 10;
//     let summStr = '';
//     let dig = 0;
//     for (let i = 0; i < a.length; i++ , limit *= 10) {
//         const element = number % limit;
//         dig = number%limit + dig;       
//         console.log(element)
//         if (map[element]) {
//             if (map[element] == 'ten') {
//                 summStr = map[dig]// + ' ' + summStr;                
//                 continue
//             } else {
//                 summStr = map[element] + ' ' + summStr;
//             }

//         } else {
//             if (element.toString().length == 2) {
//                 // summStr+=map[element.toString()[0]]+'ty'+' ';
//                 summStr = map[element.toString()[0]] + 'ty' + ' ' + summStr;
//             }
//             if (element.toString().length == 3) {
//                 // summStr+=map[element.toString()[0]]+' hundred'+' ';
//                 summStr = map[element.toString()[0]] + ' hundred' + ' ' + summStr;
//             }
//         }
//         number = number - (number % limit);

//         console.log(number, 'number');
//         console.log(summStr, 'sumStr');
//         //    console.log(element)
//         //    console.log(number%limit,limit);
//         //    console.log(number-(number%limit),'number-(number%limit)')
//         //    console.log(number/limit,limit);
//     }
//     // result = summStr.split('_').reverse().slice(1).join();
//     result = summStr//.slice(0,-1);
//     console.log('------------')
//     console.log(result)
// }

// console.log(toReadable(919));
