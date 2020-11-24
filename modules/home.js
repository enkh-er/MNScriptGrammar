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
    <main id="main">
        <section class="mainNav">
            <nav class="mainNavbar">
                <ul>
                    <li>
                        <button id="homePageBtn">Нүүр хуудас</button>
                    </li>
                    <li>
                        <button id="contactPageBtn">Холбоо барих</button>
                    </li>
                </ul>
            </nav>
        </section>
        <section id="mainBody"></section>
    </main>
    <footer>
        <section class="contactUs">
            <p>Холбоо барих</p>
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