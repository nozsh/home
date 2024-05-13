// Remove target=_blank
function llinks_rmtb() {
  llinks_rmtb = document
    .querySelectorAll("a[target*='_blank']")
    .forEach((llinks_rmtb) => {
      llinks_rmtb.setAttribute("target", "");
    });
}

setInterval(llinks_rmtb, 500);

// New tab links
function llinks_moredetail() {
  llinks_moredetail = document
    .querySelectorAll("a[href*='?nt']")
    .forEach((llinks_moredetail) => {
      llinks_moredetail.setAttribute("target", "moredetail");
      llinks_moredetail.setAttribute("rel", "noreferrer nofollow noopener");

      let llinks_moredetail_name = llinks_moredetail.innerHTML
        .toString()
        .slice(0, -3);
      llinks_moredetail.innerHTML = llinks_moredetail_name;

      let llinks_moredetail_href = llinks_moredetail.href
        .toString()
        .slice(0, -3);
      llinks_moredetail.setAttribute(
        "href",
        "https://href.li/?" + llinks_moredetail_href
      );
    });
}

setInterval(llinks_moredetail, 500);
