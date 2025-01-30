const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method: "POST", // POST 요청
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => {
        return res.json(); // JSON으로 변환
    })
    .then((data) => {
        if (data.success) {
            location.href = '/'; // 로그인 성공 시 이동할 페이지
        } else {
            alert(data.msg); // 로그인 실패 시 메시지 표시
        }
    })
    .catch((error) => {
        console.error("Error:", error); // 에러 발생 시 출력
    });
}
