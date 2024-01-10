function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function countToTen()
{
    for (let i = 1; i <= 10; i++)
    {
        document.getElementById("Counter").innerHTML += i + "<br>";
        await delay(1000);
    }
}

async function printHello()
{
    await delay(1500);
    document.getElementById("Hello").innerHTML = "Hello!";
}

async function printMultipleLines()
{
    await delay(2000);
    div = document.getElementById("MultipleLines");
    div.innerHTML += "<p>";
    for (let i = 0; i < 5; i++) {
        div.innerHTML += "Hi!!!<br>";
    }
    div.innerHTML += "</p>";
}

function main()
{
    countToTen();
    printHello();
    printMultipleLines();
}