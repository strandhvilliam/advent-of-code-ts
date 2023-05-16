type Operation = (leftVal: number, rightVal: number) => number;

interface Monkey {
    items: number[];
    operation: (old: number) => number;
    test: (val: number) => number;
    inspectCount: number;
    divisible: number;
}

type DivisibleFunction = (monkey: Monkey, item: number) => number;

const operators: Record<string, Operation> = {
    "+": (leftVal, rightVal) => leftVal + rightVal,
    "-": (leftVal, rightVal) => leftVal - rightVal,
    "/": (leftVal, rightVal) => leftVal / rightVal,
    "*": (leftVal, rightVal) => leftVal * rightVal,
};

const generateMonkeys = (input: string[], result: Monkey[]): Monkey[] => {
    if (input.length === 0) return result;

    const [_, ...arr] = [...input];

    const items = arr
        .shift()!
        .replace("Starting items:", "")
        .split(",")
        .map((e) => +e.trim());

    const [operator, value] = arr.shift()!.split(" ").slice(-2);

    const func = (oldVal: number) =>
        operators[operator](oldVal, value === "old" ? oldVal : +value)!;

    const divisible = +arr.shift()!.split(" ").slice(-1)!;
    const ifTrue = +arr.shift()!.split(" ").slice(-1)!;
    const ifFalse = +arr.shift()!.split(" ").slice(-1)!;
    const test = (val: number) => (val % divisible === 0 ? ifTrue : ifFalse);

    const monkey: Monkey = {
        items,
        operation: func,
        test: test,
        inspectCount: 0,
        divisible,
    };

    return generateMonkeys(arr, [...result, monkey]);
};

const processMonkeys = (monkeys: Monkey[], fn: DivisibleFunction) => {
    monkeys.forEach((monkey) => {
        const updatedItems = monkey.items.map((item) =>
            Math.floor(fn(monkey, item))
        );
        monkey.items = [];
        monkey.inspectCount += updatedItems.length;

        updatedItems.forEach((item) => {
            monkeys[monkey.test(item)].items.push(item);
        });
    });
};

const calculate = (monkeys: Monkey[], fn: DivisibleFunction, iterations: number) => {
    Array.from({ length: iterations }).reduce(
        () => processMonkeys(monkeys, fn),
        monkeys
    );    
    
    const [first, second] = monkeys
        .sort((a, b) => b.inspectCount - a.inspectCount)
        .slice(0, 2)
        .map((e) => e.inspectCount);

    return first * second;
}


export const part1 = (input: string[]) => {
    const monkeys = generateMonkeys(
        input.filter((s) => s.length != 0),
        []
    );

    const fn: DivisibleFunction = (monkey: Monkey, item: number) =>
        monkey.operation(item) / 3;

    return calculate(monkeys, fn, 20).toString();
};

export const part2 = (input: string[]) => {
    const monkeys = generateMonkeys(
        input.filter((s) => s.length != 0),
        []
    );

    const common = monkeys.reduce((acc, cur) => (acc *= cur.divisible), 1);

    const fn: DivisibleFunction = (monkey: Monkey, item: number) =>
        monkey.operation(item) % common;

    return calculate(monkeys, fn, 10000).toString();
};