function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    var screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    var paragraph = document.createElement('p');
    var text = document.createTextNode("Welcome Holberton!")
    paragraph.appendChild(text)
    document.body.appendChild(paragraph)


    var spookybt = document.createElement("button")
    spookybt.innerText = "Spooky"
    document.body.appendChild(spookybt)
    spookybt.addEventListener('click', spooky)

    var darkmodebt = document.createElement("button")
    darkmodebt.innerText = "Dark mode"
    document.body.appendChild(darkmodebt)
    darkmodebt.addEventListener('click', darkMode)


    var screammodebt = document.createElement("button")
    screammodebt.innerHTML = "Scream mode"
    document.body.appendChild(screammodebt)
    screammodebt.addEventListener('click', screamMode)
}
main()