function DisplayImage(roomNumber) {

    const prevImg = document.getElementById("roomImage")

    if (prevImg != null) {
        prevImg.remove()
    }

    var img = document.createElement("img");
    img.src = "res/" + roomNumber + ".jpg"
    img.id = "roomImage"
    img.style = "display: block; margin-left: auto; margin-right: auto; width: 50%;"

    console.log(roomNumber + ".jpg")

    document.body.appendChild(img)
}


