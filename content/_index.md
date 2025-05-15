---
draft: false
containerClass: "container max-w-full flex justify-center items-center h-screen"
contentClass: "mt-8 p-4 flex justify-center items-center w-full sm:max-w-md flex-col gap-3 font-semibold"

preloader: true

title: "nozsh"
cover:
  pic: ""
  alt: ""
desc:
  text: ""
twitter_card: "summary"
assets:
  favicon_on: true
  favicon: ""
  apple_touch_icon_180x180_png_on: true
  apple_touch_icon_180x180_png: ""
  favicon32x32_png_on: true
  favicon32x32_png: ""
  favicon16x16_png_on: true
  favicon16x16_png: ""
  svg_on: true
  svg: ""

background:
  image: "/img/home-bg.avif"
  imageOpacity: "1"
  imageBlur: ""
  custom: ""
  customOpacity: "1"
  customPseudoBefore: ""
  customPseudoBeforeOpacity: "1"
  solid: ""
  SolidOpacity: "1"
---

<style>
  #background-image {
    filter: hue-rotate(200deg) brightness(0.9) contrast(1.3);
  }

  .itemsbg {
    background: rgba(0, 0, 0, 0.35);
  }

  .item {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.2s ease;
  }

  .action:hover .item {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    background: rgba(0, 0, 0, 0.2);
  }
</style>

<div class="itemsbg py-4 flex flex-col justify-center items-center backdrop-blur-[1rem] rounded-lg w-full">
  <div class="flex items-center m-2 leading-none action cursor-default">
    <div class="item bg-transparent p-2 flex justify-center items-center w-[32px] mr-2 backdrop-blur-[1rem] rounded-lg">
      <img class="" src="/fav/favicon.svg" alt="" loading="lazy">
    </div>
    <div class="item bg-transparent py-2 px-6 backdrop-blur-[1rem] rounded-lg">nozsh::hub</div>
  </div>
</div>

<div class="itemsbg py-4 flex flex-col justify-center items-center backdrop-blur-[1rem] rounded-lg w-full">
  <a href="#">
    <div class="flex items-center m-2 leading-none action">
      <div class="item bg-transparent p-2 flex justify-center w-[32px] mr-2 backdrop-blur-[1rem] rounded-lg">✏️</div>
      <div class="item bg-transparent py-2 px-6 backdrop-blur-[1rem] rounded-lg">Blog</div>
    </div>
  </a>

  <a href="#">
    <div class="flex items-center m-2 leading-none action">
      <div class="item bg-transparent p-2 flex justify-center items-center w-[32px] mr-2 backdrop-blur-[1rem] rounded-lg">🧠</div>
      <div class="item bg-transparent py-2 px-6 backdrop-blur-[1rem] rounded-lg">Knowledge Base</div>
    </div>
  </a>

  <a href="#">
    <div class="flex items-center m-2 leading-none action">
      <div class="item bg-transparent p-2 flex justify-center items-center w-[32px] mr-2 backdrop-blur-[1rem] rounded-lg">☕</div>
      <div class="item bg-transparent py-2 px-6 backdrop-blur-[1rem] rounded-lg">Contact</div>
    </div>
  </a>
</div>

<div class="credits cursor-default fixed text-sm text-nowrap overflow-hidden leading-[0.2] bottom-[1rem] bg-transparent px-[1.5rem] py-[1rem] hover:py-[1.5rem] hover:backdrop-blur-[1rem] hover:rounded-lg group">
  Background by <a class="group-hover:font-bold cool-underline" href="https://unsplash.com/@pawel_czerwinski">Pawel Czerwinski</a> / <a class="group-hover:font-bold cool-underline" href="https://unsplash.com/">Unsplash</a>
</div>

<style>
  .credits {
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s ease;
    opacity: 0.5;
  }

  .credits:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.35);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
</style>

<style>
  .cool-underline {
    position: relative;
    display: inline-block;
  }

  .cool-underline::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 1);
    transition: all 0.2s ease;
    transform-origin: right;
  }

  .cool-underline:hover::after {
    transform: scaleX(0);
  }
</style>
