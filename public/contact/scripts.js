let simplex_link =
  "https://simplex.chat/contact/#/?v=2-5&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FtlswJJ3eqCGTiAerhZB7MP__xF9JE4pU%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAJWqpa2av0m7eTWc1pJNmoHobzFw57rqSrMbUtjphdDg%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion";
let simplex_qr_img = "QoYxdPfqU3PCypJynsJroJvyCtj8tiBk.png";
let simplex_qr_img_width = "250px";

let simplex_link_el = document.getElementById("simplex-link");
let simplex_qr_el = document.getElementById("simplex-qr");

if (simplex_link_el) {
  simplex_link_el.setAttribute("href", "https://href.li/?" + simplex_link);
}

if (simplex_qr_el) {
  document
    .getElementById("simplex-qr-link")
    .setAttribute("href", simplex_qr_img);

  document.getElementById("simplex-qr-img").setAttribute("src", simplex_qr_img);
  document
    .getElementById("simplex-qr-img")
    .setAttribute("width", simplex_qr_img_width);
}
