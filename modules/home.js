export default class HomePage {

    Render() {
        return `
        <header class="navHeader">
        <nav class="navbar">
            <div class="logo">
                <span class="bichigw">ᠡᠬᠡ<br>ᠬᠡᠯᠡ<br>ᠮᠢᠨᠦ</span>
            </div>
            <div class="menu-btn-container">
                <span style="font-size:30px;cursor:pointer" id="openNav">&#9776;</span>
            </div>
            <h1>Монгол бичгийн дүрмийн хураангуй</h1>
            <div class="dropdown-menu">

                <span class="dropbtn"><i class='fas fa-user-alt'></i></span>
                <div class="dropdown-content">
                    <button class="dropContentBtn"> Нэвтрэх</button>
                    <button class="dropContentBtn">Бүртгүүлэх</button>
                    <button class="dropContentBtn">
                            Заавар</button>
                </div>
            </div>

        </nav>
        <section id="sidenav" class="sidenav"></section>
    </header>
    <main class="main">
        <section class="mainNav">
            <nav class="mainNavbar">
                <ul>
                    <li>
                        <button>Нүүр хуудас</button>
                    </li>
                    <li>
                        <button>Холбоо барих</button>
                    </li>
                </ul>
            </nav>
        </section>
        <section class="mainheader">
            <form>
                <input type="text" id="search" aria-label="Justify" class="searchInput" required>
                <button id="searchBtn" class="btn btnPrimary" type="submit">хайх</button>
            </form>
            <button class="btn">Сануулсан дүрэм</button>
        </section>
        <section class="menuGrammar">
            <article id="sidebar" class="sidebar"></article>
            <article id="table" class="tables">
                <h1 style="text-align: center;">Монгол бичгийн зөв бичих дүрмийн хураангуй</h1>
                <div class="card">Монгол бичиг нь монголын ард түмний соёл, мэдлэгийн санг олон үеийн турш тээж ирсэн бичиг тул нийтээр сурч эзэмших, түгээн дэлгэрүүлэх явдлыг төрийн бодлогоор дэмжиж “Монгол бичгийн үндэсний хөтөлбөр”-ийг хэрэгжүүлэн их дээд сургуульд
                    элсэгчдийн элсэлтийн ерөнхий шалгалт, төрийн албан хаагчийн шалгалтанд монгол бичгийн мэдлэг шалгах сорил нэмэгдэн орж байгаа билээ. Мөн Монгол хэлний тухай хуульд зааснаар дунд болон урт хугацааны үндэсний хөтөлбөр боловсруулж хос
                    бичигтэн болох зорилтыг тавьж буй тул орчин үеийн мэдлэг боловсролтой монгол иргэний хувьд үндэсний монгол бичгээ сурч эзэмших нь чухал ач холбогдолтой болоод байна</div>
                <div class="card">Монгол бичиг нь монголын ард түмний соёл, мэдлэгийн санг олон үеийн турш тээж ирсэн бичиг тул нийтээр сурч эзэмших, түгээн дэлгэрүүлэх явдлыг төрийн бодлогоор дэмжиж “Монгол бичгийн үндэсний хөтөлбөр”-ийг хэрэгжүүлэн их дээд сургуульд
                    элсэгчдийн элсэлтийн ерөнхий шалгалт, төрийн албан хаагчийн шалгалтанд монгол бичгийн мэдлэг шалгах сорил нэмэгдэн орж байгаа билээ. Мөн Монгол хэлний тухай хуульд зааснаар дунд болон урт хугацааны үндэсний хөтөлбөр боловсруулж хос
                    бичигтэн болох зорилтыг тавьж буй тул орчин үеийн мэдлэг боловсролтой монгол иргэний хувьд үндэсний монгол бичгээ сурч эзэмших нь чухал ач холбогдолтой болоод байна</div>

            </article>
        </section>

    </main>
    <footer>
        <section class="contactUs">
            <p>Холбоо барих</p>

            <!-- <span> <i class='fas fa-mail-bulk'></i></span>
            <span><i class='fab fa-phone-square-alt'></i></span>
            <span><i class='fab fa-placeholder'></i></span> -->
            <a href="#"><img src="assests/photos/gmail.svg" alt="facebook"></a>
            <a href="#"><img src="assests/photos/telephone.svg" alt="instagram"></a>
            <a href="#"><img src="assests/photos/placeholder.svg" alt="instagram"></a>

        </section>
        <section class="followUs">
            <p>Биднийг дагах</p>
            <span> <i class='fab fa-facebook'></i></span>
            <span><i class='fab fa-instagram'></i></span>
        </section>
    </footer>
                `
    }
}