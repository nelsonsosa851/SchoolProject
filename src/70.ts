export function calculateAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Example usage:
const dataPoints = [5, 10, 20, 30, 40];
console.log(calculateAverage(dataPoints)); // Output: 25
