const phone = [
  "mhan29468xx",
  "mhan8998040xx",
  "mhan2258xx",
  "mhan2436xx",
  "mhan221434xx",
  "mhan229174xx",
  "mhan242765xx",
  "mhan225473xx",
  "mhan222193xx",
  "mhan221794xx",
  "mhan241294xx",
  "mhan324511xx",
  "mhan2448707xx",
  "mhan2376086xx",
  "mhan258526xx",
  "mhan221416xx",
  "mhan222584xx",
  "mhan272950xx",
  "mhan222174xx",
  "mhan244745xx",
  "mhan246802xx",
  "mhan243737xx",
  "mhan29208xx",
  "mhan762580xx",
  "mhan2718286xx",
  "mhan763450xx",
  "mhan253048xx",
  "mhan2716700xx",
  "mhan555117xx",
  "mhan225878xx",
  "mhan89029xx",
  "mhan222424xx",
  "mhan296373xx",
  "mhan247705xx",
  "mhan242449xx",
  "mhan224929xx",
  "mhan8972447xx",
  "mhan222373xx",
  "mhan762403xx",
  "mhan224813xx",
];

const pricePool = [
  100, 120, 180, 200, 300, 400, 500, 600, 750, 850, 990, 1020, 1200, 1240, 1400,
  1500, 1800, 2000, 300, 200, 600, 1050, 4000, 9000, 12040, 280,
];

const listUrlLogoGame = [
  "https://gladiator-slot.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Asgardian-Rising-pg.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/11/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Diner-Delights.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Road-Rage.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/12/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Road-Rage.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/10/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Alchemy-Gold.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/07/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Wild-Coaster.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2021/05/GD_%E0%B8%9B%E0%B8%81-Ways-of-the-Qilin.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2021/05/GD_%E0%B8%9B%E0%B8%81-Roma-X.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2021/08/VIKINGS-UNLEASHED-MEGAWAYS-logo1.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/06/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Folsom-Prison.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/06/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Lucky-Piggy.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/06/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Moodie-Foodie.png.webp",
  "https://gladiator-slot.com/wp-content/uploads/2022/06/%E0%B8%97%E0%B8%94%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Raging-Pop.png.webp",
];

let limit = 10;
let count = 1;

setInterval(() => {
  let randomLucky = phone[Math.floor(Math.random() * phone.length)];
  let randomPrice = pricePool[Math.floor(Math.random() * pricePool.length)];
  let randomLogogame =
    listUrlLogoGame[Math.floor(Math.random() * listUrlLogoGame.length)];

  if (count <= limit) {
    // Fade last data  in

    $("#box-slide").append(
      `
      <div style='display:none' class='card-slide' id='key-${count}'> 
      
      <div style='margin-top:auto;margin-bottom:auto;margin-right:8px'>

      🎉 ยินดีด้วยกับคุณ <b class='c-gold'>${randomLucky} </b> ได้รับรางวัลโบนัส ${addCommas(
        randomPrice
      )} ขอให้โชคดีนะคะ ☺️  
      </div>
      
      <div style='margin-top:auto;margin-bottom:auto;'>
        <img width='32' src='${randomLogogame}'></img>  
      </div>
      </div>
      `
    );
    $(`#key-${count}`).fadeIn();

    count++;
  } else {
    // Fade Top data out
    $(`#key-${count - limit}`).fadeOut();

    // Fade last data in
    $("#box-slide").append(
      `
      <div style='display:none' class='card-slide' id='key-${count}'> 
      
      <div style='margin-top:auto;margin-bottom:auto;margin-right:8px'>

      🎉 ยินดีด้วยกับคุณ <b class='c-gold'>${randomLucky} </b> ได้รับรางวัลโบนัส ${addCommas(
        randomPrice
      )} ขอให้โชคดีนะคะ ☺️  
      </div>
      
      <div style='margin-top:auto;margin-bottom:auto;'>
        <img width='32' src='${randomLogogame}'></img>  
      </div>
      </div>
      `
    );
    $(`#key-${count}`).fadeIn();

    count++;
  }
}, 1000);

function addCommas(nStr) {
  nStr += "";
  x = nStr.split(".");
  x1 = x[0];
  x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}
