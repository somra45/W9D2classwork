import {htmlGenerator} from "./warmup";
import Clock from "./clock.js"; 



    let clock = new Clock();

let clockDiv = document.getElementById("clock");
setInterval(() => htmlGenerator(clock.timeString, clockDiv), 1000);