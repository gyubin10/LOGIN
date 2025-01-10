"use strict";

const id = document.querySelector("#id"),           //#은 input id = "id" ~~~  "id"를 가져오는것
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login )

function login(){
    const req = {
        id:id.value,
        psword: psword.value,
    };

    fetch("/login ", {
        method : "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json())
    .then(console.log);
}