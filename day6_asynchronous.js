console.log("Start of script");

// Using setTimeout (Callback example)
setTimeout(() => {
    console.log("This runs after 2 seconds (setTimeout)");
}, 2000);

// Using Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully (Promise)");
        }, 3000);
    });
};

fetchData().then((data) => console.log(data));

// Using Async/Await
const asyncFunction = async () => {
    console.log("Async function started");
    const result = await fetchData();
    console.log(result);
    console.log("Async function completed");
};

asyncFunction();

console.log("End of script");
