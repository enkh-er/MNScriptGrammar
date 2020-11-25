export default class Contact {

    Render() {
        return `
        <section class="contactMsg">
        <form class="contactForm">
            <h1>Холбоо барих</h1>
            <label for="fullname">Овог нэр</label>
            <input type="text" id="fullname" name="fullname" class="searchInput">

            <label for="email">И-мэйл</label>
            <input type="email" id="email" name="email" class="searchInput">

            <label for="subject">Гарчиг</label>
            <input type="text" id="subject" name="subject" class="searchInput">

            <label for="msg">Зурвас</label>
            <textarea id="msg" name="msg" rows="5" cols="50"></textarea>

            <button type="submit" class="btn btnPrimary">Илгээх</button>
        </form>
    </section>
                `
    }
}