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