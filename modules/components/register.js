export default class Register {

    Render() {
        return `
        <section id="registerModal" class="modal">
        <form class="modal-content animate">
            <header class="modal-header">
                <button class="btn btn-nobottomBorder gridItem" type="button" id="redirectLogin">
                    Нэвтрэх
                </button>
                <button class="btn btn-bottomBorder gridItem" type="button">
                    Бүртгүүлэх
                </button>
            </header>

            <input name="registerUsername" type="text" class="inputForm" aria-label="Justify" placeholder="Нэвтрэх нэр эсвэл и-мэйл" required />
            <input name="email" type="email" class="inputForm" placeholder="И-мэйл" aria-label="Justify" required />
            <input name="registerPassword" type="password" class="inputForm" aria-label="Justify" placeholder="Нууц үг" required />
            <input name="repeatPassword" type="password" class="inputForm" aria-label="Justify" placeholder="Нууц үг давтах" required />

            <div class="gridCont">
                <button class="btn btnPrimary gridItem" type="submit">
                    Бүртгүүлэх
                </button>

                <button class="btn btn-secondary gridItem" type="button" id="modalCloseBtn">
                    Буцах
                </button>
            </div>
        </form>
    </section>
                `
    }
}