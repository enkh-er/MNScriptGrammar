import { getData } from './restApi.js';
import SideBarData from './sideBarDatas.js';
import TableData from './tableDatas.js';
import StartPage from './components/start.js'
import HomePage from './components/home.js'
import Content from './components/content.js'
import Contact from './components/contact.js'
import Login from './components/login.js'
import Register from './components/register.js'

export default class Datas {

    constructor(url) {
        this._dataList = [];
        this._url = url;
        this._lastUpdated = Date.now();
        this._hasChanged = false;
        this._tableDataList = [];
        this._listButton = [];

    }

    DownloadData() {
        getData(this._url, (result) => {
            result.forEach(element => {
                this._dataList.push(element);
            });
            this.setSidebar("sidebar");
            this.setSideNav("sidenav");
        });
    }

    setSidebar(targetElement) {
        var datas = '';
        this._dataList.forEach(element => {
            datas = datas + (
                new SideBarData(element.header, element.content).Render()
            )
        });
        gebi(targetElement).innerHTML = datas;
        this.setTableDatas();
    }

    setSideNav(targetElement) {
        let openbtn = document.querySelector('#openNav');

        openbtn.addEventListener('click', () => {
            var datas = '<a href="javascript:void(0)" class="closebtn" id="closeNav">&times;</a>';
            this._dataList.forEach(element => {
                datas = datas + (
                    new SideBarData(element.header, element.content).Render()
                )
            });
            gebi(targetElement).innerHTML = datas;
            document.getElementById("sidenav").style.width = "50%";
            this.setTableDatas();
            this.closeSideBar();
        })

    }

    closeSideBar() {
        let closeBtn = document.querySelector('#closeNav');
        closeBtn.addEventListener('click', () => {
            document.getElementById("sidenav").style.width = "0";
        })
    }

    setTableDatas() {
        let str;
        this._listButton = Array.from(document.querySelectorAll('.sidebarBtn'))
        this._listButton.forEach((route) => route.addEventListener('click', () => {
            let val = route.value;
            this._dataList.forEach((dList) => {
                let row = dList.content;
                row.forEach((d) => {
                    if (d.list === val) {
                        str = new TableData(d.data.title, d.data.tableHeades, d.data.tableDatas).Render();
                        gebi('table').innerHTML = str;
                    }
                })
            })
        }, false))
    }

    navigateTo() {
        let homePageBtn = document.querySelector('#homePageBtn');
        let contactPageBtn = document.querySelector("#contactPageBtn");
        homePageBtn.addEventListener('click', () => {
            gebi('mainBody').innerHTML = new Content().Render();
            this.setSidebar("sidebar");
            this.search();
        })
        contactPageBtn.addEventListener('click', () => {
            gebi('mainBody').innerHTML = new Contact().Render();
        })
    }

    search() {
        let str;
        const form = document.getElementById('searchForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let val = document.getElementById('search').value;
            this._dataList.forEach((dList) => {
                let row = dList.content;
                row.forEach((d) => {
                    if (d.list.toUpperCase() === val.toUpperCase()) {
                        str = new TableData(d.data.title, d.data.tableHeades, d.data.tableDatas).Render();
                        gebi('table').innerHTML = str;
                    }
                })
            })
        })
    }

    showModal() {
        let loginBtn = document.querySelector('#loginBtn');
        let registerBtn = document.querySelector("#registerBtn");
        loginBtn.addEventListener('click', () => {
            this.showLoginModal()
            this.closeModal();
        })
        registerBtn.addEventListener('click', () => {
            this.showRegisterModal();
            this.closeModal();
        })
    }

    showLoginModal() {
        gebi('modal').innerHTML = new Login().Render();
        let redirectResiter = document.querySelector('#redirectResiter');
        redirectResiter.addEventListener('click', () => {
            this.showRegisterModal();
            this.closeModal();
        })
    }
    showRegisterModal() {
        gebi('modal').innerHTML = new Register().Render();
        let redirectLogin = document.querySelector('#redirectLogin');
        redirectLogin.addEventListener('click', () => {
            this.showLoginModal();
            this.closeModal();
        })

    }
    closeModal() {
        let modalCloseBtn;
        modalCloseBtn = document.querySelectorAll('#modalCloseBtn');
        modalCloseBtn.forEach((m) => {
            m.addEventListener('click', () => {
                gebi('modal').innerHTML = '';
            })
        })
    }

    start() {
        let str = new StartPage().Render();
        let str2 = new HomePage().Render();
        let str3 = new Content().Render();
        gebi('root').innerHTML = str;
        let btn = document.querySelector('#startBtn');
        btn.addEventListener('click', () => {
            gebi('root').innerHTML = str2;
            gebi('mainBody').innerHTML = str3;
            this.search();
            this.DownloadData();
            this.navigateTo();
            this.showModal();
        })

    }
}

const gebi = id => document.getElementById(id);

const url = "https://api.jsonbin.io/b/5fba498490e7c66167f565b7/latest";

const datas = new Datas(url);
datas.start();
setInterval(() => datas.DownloadData(), 600000);