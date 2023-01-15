// Даны три натуральных числа A, B, C. Определите, существует ли треугольник с такими сторонами. Если треугольник существует, выведите строку YES, 
// иначе выведите строку NO. Треугольник — это три точки, не лежащие на одной прямой. Формат входных данных: Вводятся три числа.

function isTriangle (a, b, c) {
    let numArr = [a, b, c];
    let maxNum = numArr.sort((a,b) => a-b)[2];
    let medNum = numArr.sort((a,b) => a-b)[1];
    let minNum = numArr.sort((a,b) => a-b)[0];

    if (medNum+minNum > maxNum) {
        return console.log('YES');
    } else {
        return console.log('NO');
    }
}

isTriangle (5, 12, 13);

// Шахматная ладья ходит по горизонтали или вертикали. Даны две различные клетки шахматной доски, определите, может ли ладья попасть с первой клетки на вторую одним ходом. 
// Формат входных данных: Программа получает на вход четыре числа от 1 до 8 каждое, задающие номер столбца и номер строки сначала для первой клетки, потом для второй клетки. 
// Формат выходных данных Программа должна вывести YES, если из первой клетки ходом ладьи можно попасть во вторую или NO в противном случае.

function isOneRookMove(a, b, c, d) {
    if (a == c || b == d) {
        return console.log('YES');
    } else {
        return console.log('NO');
    }
}
isOneRookMove(2, 3, 1, 3);

// Шахматный конь ходит буквой “Г” — на две клетки по вертикали в любом направлении и на одну клетку по горизонтали, или наоборот. 
// Даны две различные клетки шахматной доски, определите, может ли конь попасть с первой клетки на вторую одним ходом. 
// Формат входных данных: Программа получает на вход четыре числа от 1 до 8 каждое, задающие номер столбца и номер строки сначала для первой клетки, потом для второй клетки. 
// Формат выходных данных: Программа должна вывести YES, если из первой клетки ходом коня можно попасть во вторую или NO в противном случае.

function isOneKnightMove(x, y, a, b) {
    let x1 = x + 1,
        y1 = y - 2,
        x2 = x + 2,
        y2 = y - 1,
        x3 = x + 2,
        y3 = y + 1,
        x4 = x + 1,
        y4 = y + 2,
        x5 = x - 1,
        y5 = y + 2,
        x6 = x - 2,
        y6 = y + 1,
        x7 = x - 2,
        y7 = y - 1,
        x8 = x - 1,
        y8 = y - 2;
    if (x1 == a && y1 == b ||
        x2 == a && y2 == b ||
        x3 == a && y3 == b ||
        x4 == a && y4 == b ||
        x5 == a && y5 == b ||
        x6 == a && y6 == b ||
        x7 == a && y7 == b ||
        x8 == a && y8 == b){
        return console.log('YES');
    } else {
        return console.log('NO');
    }
}

isOneKnightMove(1, 2, 3, 1);


// Яша плавал в бассейне размером N×M метров и устал. В этот момент он обнаружил, что находится на расстоянии X метров от одного из длинных бортиков (не обязательно от ближайшего) 
// и Y метров от одного из коротких бортиков. Какое минимальное расстояние должен проплыть Яша, чтобы выбраться из бассейна на бортик? Формат входных данных: 
// Программа получает на вход числа N, M, X, Y. Формат выходных данных: Программа должна вывести число метров, которое нужно проплыть Яше до бортика.

function getMinMetersToEdge (n, m, x, y) {
    let x1, 
        y1;
    if (n > m ) {
        x1 = m - x;
        y1 = n - y;
    } else {
        x1 = n - x;
        y1 = m - y;
    };
    let minMetersToEdge = Math.min(x, x1, y, y1);
    return minMetersToEdge;
}

getMinMetersToEdge (4, 6, 1, 2);

// Есть две коробки, первая размером A1×B1×C1, вторая размером A2×B2×C2. Определите, можно ли разместить одну из этих коробок внутри другой, при условии, 
// что поворачивать коробки можно только на 90 градусов вокруг ребер. 
// Формат входных данных: Программа получает на вход числа A1, B1, C1, A2, B2, C2. Формат выходных данных: Программа должна вывести одну из следующих строчек: 
// Boxes are equal, если коробки одинаковые, 
// The first box is smaller than the second one, если первая коробка может быть положена во вторую, 
// The first box is larger than the second one, если вторая коробка может быть положена в первую, 
// Boxes are incomparable, во всех остальных случаях.

function compareBoxes (A1, B1, C1, A2, B2, C2) {
    if ((A1 == A2 && B1 == B2 && C1 == C2) || 
        (A1 == A2 && B1 == C2 && C1 == B2) || 
        (A1 == B2 && B1 == A2 && C1 == C2) || 
        (A1 == B2 && B1 == C2 && C1 == A2) || 
        (A1 == C2 && B1 == B2 && C1 == A2) || 
        (A1 == C2 && B1 == A2 && C1 == B2)) {
            console.log('Boxes are equal');
        }
else if (A1 > A2 && B1 > B2 && C1 > C2 || 
        A1 > A2 && B1 > C2 && C1 > B2 || 
        A1 > B2 && B1 > A2 && C1 > C2 || 
        A1 > B2 && B1 > C2 && C1 > A2 || 
        A1 > C2 && B1 > B2 && C1 > A2 || 
        A1 > C2 && B1 > A2 && C1 > B2) {
        console.log('The first box is larger than the second one');
} else if (A1 < A2 && B1 < B2 && C1 < C2 || 
        A1 < A2 && B1 < C2 && C1 < B2 || 
        A1 < B2 && B1 < A2 && C1 < C2 || 
        A1 < B2 && B1 < C2 && C1 < A2 || 
        A1 < C2 && B1 < B2 && C1 < A2 || 
        A1 < C2 && B1 < A2 && C1 < B2) {
        console.log('The first box is smaller than the second one');
    } else {
        console.log('Boxes are incomparable');
    }
}

compareBoxes(2, 2, 3, 15, 1, 7);

// или

function compareBoxes (A1, B1, C1, A2, B2, C2) {
    let firstArr = [A1, B1, C1];
    let secondArr = [A2, B2, C2];
    let minfirstArr = firstArr.sort((a,b) => a-b)[0];
    let medfirstArr = firstArr.sort((a,b) => a-b)[1];
    let maxfirstArr = firstArr.sort((a,b) => a-b)[2];
    let minSecondArr = secondArr.sort((a,b) => a-b)[0];
    let medSecondArr = secondArr.sort((a,b) => a-b)[1];
    let maxSecondArr = secondArr.sort((a,b) => a-b)[2];
    if (minfirstArr == minSecondArr &&
        medfirstArr == medSecondArr &&
        maxfirstArr == maxSecondArr) {
            console.log('Boxes are equal');
        } else if (minfirstArr > minSecondArr &&
            medfirstArr > medSecondArr &&
            maxfirstArr > maxSecondArr) {
                console.log('The first box is larger than the second one');
            } else if (minfirstArr < minSecondArr &&
                medfirstArr < medSecondArr &&
                maxfirstArr < maxSecondArr) {
                    onsole.log('The first box is smaller than the second one');
                } else {
                    console.log('Boxes are incomparable');
                }
}

compareBoxes(9, 8, 7, 6, 5, 4);