import { getData } from './restApi.js';
import SideBarData from './sideBarDatas.js';
import TableData from './tableDatas.js';
import StartPage from './start.js'
import HomePage from './home.js'

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
            this.setSideNav("sidenav");
            this.setSidebar("sidebar");
            this.setTableDatas();
        });
    }

    setSidebar(targetElement) {
        var datas = '';
        this._dataList.forEach(element => {
            datas = datas + (
                    new SideBarData(element.header, element.content).Render()
                )
                // console.log("datas:", datas)
        });
        gebi(targetElement).innerHTML = datas;
    }

    setSideNav(targetElement) {
        let btn = document.querySelector('#openNav');


        var datas = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
        this._dataList.forEach(element => {
            datas = datas + (
                new SideBarData(element.header, element.content).Render()
            )
        });
        gebi(targetElement).innerHTML = datas;

    }

    setTableDatas() {
        var str;
        this._listButton = Array.from(document.querySelectorAll('.sidebarBtn'))
        this._listButton.forEach((route) => route.addEventListener('click', () => {
            let val = route.value;
            this._dataList.forEach((dList) => {
                    let row = dList.content;
                    row.forEach((d) => {
                        if (d.list === val) {
                            str = new TableData(d.data.title, d.data.tableHeades, d.data.tableDatas).Render();
                        }
                    })
                })
                // console.log(str);
            gebi('table').innerHTML = str;
        }, false))
    }

    start() {
        let str = new StartPage().Render();
        let str2 = new HomePage().Render();
        gebi('main').innerHTML = str;
        let btn = document.querySelector('#startBtn');
        btn.addEventListener('click', () => {
            gebi('main').innerHTML = str2;
            this.DownloadData();
        })

    }
}

const gebi = id => document.getElementById(id);

const url = "https://api.jsonbin.io/b/5fba498490e7c66167f565b7/latest";

const datas = new Datas(url);
datas.start();
setInterval(() => datas.DownloadSidebar("sidebar"), 600000);