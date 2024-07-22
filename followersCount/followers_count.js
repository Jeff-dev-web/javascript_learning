let count=0;

function increaseCount() {
    count++;
    console.log(`count: ${count}`);
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count===10) {
        alert("Your Instagram post gained 10 followers!");
    } else if(count===20) {
        alert("Your Instagram post gained 20 followers! keep it up");
    }
}

function resetCount() {
    count = 0;
    alert("Count is reset");
    displayCount();
}