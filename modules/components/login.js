export default class Login {

    Render() {
        return `
        <section id="loginModal" class="modal">
        <form class="modal-content animate">
            <header class="modal-header">
                <button class="btn btn-bottomBorder gridItem" type="button">
                    Нэвтрэх
                </button>
                <button class="btn btn-nobottomBorder gridItem" type="button" id="redirectResiter">
                    Бүртгүүлэх
                </button>
            </header>
            <input name="username" type="text" class="inputForm" aria-label="Justify" placeholder="Нэвтрэх нэр эсвэл и-мэйл" required />
            <input name="password" type="password" class="inputForm" aria-label="Justify" placeholder="Нууц үг" required />

            <div class="gridCont">
                <button class="btn btnPrimary gridItem" type="submit">
                    Нэвтрэх
                </button>

                <button class="btn btn-secondary gridItem" type="button" id="modalCloseBtn">
                    Буцах
                </button>
            </div>
            <a href="#">
                Нууц үг мартсан?
            </a>
            <br />
        </form>
    </section>
                `
    }
}