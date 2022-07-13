//глобальная переменная массива
let arr = [8, 2, 3, 6, 1, 5, 4, 7, 10, 15, 14, 13, 11, 12, 20, 18, 16, 17, 19];

//функция запуска скрипта
function run()
{
    console.log("Массив до сортировки: " + arr);
    var startTime = performance.now()
    sortArray(arr, 0, arr.length - 1);
    var endTime = performance.now()
    console.log("Массив после сортировки: " + arr);
    console.log(`Сортировка заняла ${endTime - startTime} миллисекунд`)
    drawArray(arr);
}

//функция выводящая массив
function drawArray(arr)
{
    let out_arr = document.getElementById('out_arr');
    let str = '';
    for (let i = 0; i < arr.length; i++)
    {
        str += arr[i] + ' ';
    } 
    str += '<br>';
    out_arr.innerHTML = str;
}

//рекурсивная быстрая сортировка
function sortArray(params, low, high)
{
    //когда индексы левой и правой границы пересекутся выходим из функции
    if (low >= high)
    {
        return;
    }

    //вызов функции определяющей индекс опорного элемента
    let index = partition(params, low, high);

    sortArray(params, low, index - 1);
    sortArray(params, index + 1, high);
}

//функция определяющая индекс опорного элемента
function partition(params, low, high)
{
    //берем последний элемент в качестве опорной точки
    const pivotValue = params[high];
    let pivotIndex = low;

    for (let i = low; i < high; i++)
    {
        //если элемент меньше опорного, меняем местами
        if (params[i] < pivotValue)
        {
            [params[i], params[pivotIndex]] = [params[pivotIndex], params[i]];

            pivotIndex++;
        }
    }

    //меняем местами последний и опорный элемент
    [params[pivotIndex], params[high]] = [params[high], params[pivotIndex]]
    
    //возвращаем индекс опорного элемента 
    return pivotIndex;
}
