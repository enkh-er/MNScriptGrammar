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
            <h1>Монгол бичгийн зөв бичих дүрмийн хураангуй</h1>
            <div class="dropdown-menu">

                <span class="dropbtn"><i class='fas fa-user-alt'></i></span>
                <div class="dropdown-content">
                    <button class="dropContentBtn" id="loginBtn"> Нэвтрэх</button>
                    <button class="dropContentBtn" id="registerBtn">Бүртгүүлэх</button>
                    <button class="dropContentBtn">
                            Заавар</button>
                </div>
            </div>

        </nav>
        <section id="modal"></section>
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
       <h1>Холбоо барих</h1>
       <div class="vl"></div>
        <section>
        <p> <i class="material-icons">location_on</i>Улаанбаатар, сүхбаатар дүүрэг, 8-р хороо</p> <br>
        <p> <i class='fas fa-phone'></i>9999999</p> <br>
        <p> <i class="material-icons">email</i> <a href="#">erdeni@gmail.com </a></p> <br>
        <p> <i class='fab fa-facebook'></i> <a href="#">https://www.facebook.com/erdeni</a> </p><br>
        <p> <i class='fab fa-instagram'></i> <a href="#">https://www.instagram.com/erdeni</a> </p><br>
        </section>
    </footer>
                `
    }
}