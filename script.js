{
    function showMyName(name) {
        console.log(name);
    }
    showMyName('John');
    function square(a) {
        return a * a;
    }
    square(10);
    function sum(title) {
        var numbers = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            numbers[_i - 1] = arguments[_i];
        }
        return title + ' = ' + numbers.reduce(function (sum, num) { return sum + num; }, 0);
    }
    sum('Numbers', 1, 6, 10);
    var executeFunc = function (func) {
        var title = 'Lorem Ipsum';
        func(title, 24, ['Sport', 'Movies']);
    };
    executeFunc(function (title, age, hobbies) { return true; });
}
// below is version proposed by authors; workable version was fixed due to VSC errors
// function showMyName(name: string): never {
//     console.log(name)
// }
// showMyName('John')
// function square(a: number): number {
//     return a * a
// }
// square(10)
// function sum(title: string, ...numbers: number[]): string {
//     return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0)
// }
// sum('Numbers', 1, 6, 10)
// const executeFunc = (func: (title: string, age: string, hobbies: string) => boolean): never => {
//     const title = 'Lorem Ipsum'
//     func(title, 24, ['Sport', 'Movies'])
// }
// executeFunc((title: string, age: number, hobbies: string[]): boolean => { return true })
