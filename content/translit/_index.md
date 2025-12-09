---
type: "home"
draft: false
noindex: true
containerClass: "container max-w-full flex justify-center items-center min-h-screen"
contentClass: "mt-8 p-4 flex justify-center items-center w-full sm:max-w-md flex-col gap-3 font-semibold"

preloader: false

title: "Транслит"
desc:
  text: "Простой инструмент для транслитерации текста EN → RU."
cover:
  pic: ""
  alt: ""
twitter_card: "summary"
assets:
  favicon_on: false
  favicon: ""
  apple_touch_icon_180x180_png_on: false
  apple_touch_icon_180x180_png: ""
  favicon32x32_png_on: false
  favicon32x32_png: ""
  favicon16x16_png_on: false
  favicon16x16_png: ""
  svg_on: true
  svg: "../fav/immersivetranslate.svg"

background:
  image: ""
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
  textarea, textarea:focus {
    outline: none;
  }
</style>

{{< desc class="p-4 rounded-2xl border-1 border-gray-500/35 bg-base-300/35 relative flex flex-col gap-4" >}}

<div class="bg-base-300/35 backdrop-blur-lg p-3 rounded-xl flex gap-4">
  <textarea
    class="w-full"
    id="input"
    rows="1"
    cols=""
    placeholder="Ввод"
  ></textarea>
  <button id="clearInput" class="cursor-pointer tooltip lg:tooltip-right" data-tip="Очистить">(CL)</button>
</div>

<div class="bg-base-300/35 backdrop-blur-lg p-3 rounded-xl">
  <div id="highlighted" class="overflow-auto">...</div>
</div>

<div class="bg-base-300/35 backdrop-blur-lg p-3 rounded-xl flex gap-4">
  <textarea
    class="w-full"
    id="output"
    rows="1"
    cols=""
    placeholder="Вывод"
    readonly
  ></textarea>
  <button id="copyOutput" class="copy-btn cursor-pointer tooltip lg:tooltip-right" data-tip="Копировать" data-clipboard-text="">(CP)</button>
</div>

{{< /desc >}}

{{< desc class="p-4 rounded-2xl border-1 border-gray-500/35 bg-base-300/35 relative" >}}

<div class="bg-base-300/35 backdrop-blur-lg p-3 rounded-xl">
  <details>
    <summary class="select-none">Настройки</summary>
    <div>
      <input type="checkbox" id="capitalize-first" checked />
      <label for="capitalize-first">Первая буква заглавная</label>
    </div>
    <div>
      <h4>Исключения:</h4>
      <div class="select-none">
        <input type="checkbox" id="toggleAllExceptions" checked>
        <label for="toggleAllExceptions">
          <span class="underline">Вкл/Выкл все исключения</span>
        </label>
      </div>
      <div id="exceptionsList" class="select-none"></div>
    </div>
  </details>
</div>

{{< /desc >}}

<script>
  let exceptions = {
    гайд: { value: "guide", enabled: true },
    россия: { value: "russia", enabled: true },
    сша: { value: "usa", enabled: true },
    "соединенные-штаты-америки": { value: "united-states-of-america", enabled: true },
    великобритания: { value: "united-kingdom", enabled: true },
    англия: { value: "england", enabled: true },
    германия: { value: "germany", enabled: true },
    франция: { value: "france", enabled: true },
    испания: { value: "spain", enabled: true },
    италия: { value: "italy", enabled: true },
    китай: { value: "china", enabled: true },
    япония: { value: "japan", enabled: true },
    канада: { value: "canada", enabled: true },
    австралия: { value: "australia", enabled: true },
    бразилия: { value: "brazil", enabled: true },
    индия: { value: "india", enabled: true },
    украина: { value: "ukraine", enabled: true },
    беларусь: { value: "belarus", enabled: true },
    казахстан: { value: "kazakhstan", enabled: true },
    турция: { value: "turkey", enabled: true },
    корея: { value: "korea", enabled: true },
    швеция: { value: "sweden", enabled: true },
    норвегия: { value: "norway", enabled: true },
    финляндия: { value: "finland", enabled: true },
    нидерланды: { value: "netherlands", enabled: true },
    польша: { value: "poland", enabled: true },
    чехия: { value: "czech", enabled: true },
    греция: { value: "greece", enabled: true },
    португалия: { value: "portugal", enabled: true },
    швейцария: { value: "switzerland", enabled: true },
    австрия: { value: "austria", enabled: true },
    бельгия: { value: "belgium", enabled: true },
    дания: { value: "denmark", enabled: true },
    ирландия: { value: "ireland", enabled: true },
    мексика: { value: "mexico", enabled: true },
    аргентина: { value: "argentina", enabled: true },
    чили: { value: "chile", enabled: true },
    египет: { value: "egypt", enabled: true },
    израиль: { value: "israel", enabled: true },
    "саудовская-аравия": { value: "saudi-arabia", enabled: true },
    оаэ: { value: "uae", enabled: true },
    "объединенные-арабские-эмираты": { value: "united-arab-emirates", enabled: true },
    сингапур: { value: "singapore", enabled: true },
    тайланд: { value: "thailand", enabled: true },
    вьетнам: { value: "vietnam", enabled: true },
    индонезия: { value: "indonesia", enabled: true },
    малайзия: { value: "malaysia", enabled: true },
    филиппины: { value: "philippines", enabled: true },
    юар: { value: "south-africa", enabled: true },
    "южная-африка": { value: "south-africa", enabled: true },
    "новая-зеландия": { value: "new-zealand", enabled: true }
  };

  function renderExceptionControls() {
    const box = document.getElementById("exceptionsList");
    box.innerHTML = "";

    for (const word in exceptions) {
      const item = document.createElement("div");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = exceptions[word].enabled;
      checkbox.addEventListener("change", () => {
        exceptions[word].enabled = checkbox.checked;
        updateOutput();
      });

      const label = document.createElement("label");
      label.textContent = ` ${word} → ${exceptions[word].value}`;

      item.appendChild(checkbox);
      item.appendChild(label);
      box.appendChild(item);
    }
  }

  renderExceptionControls();

  function translitWord(word) {
    const map = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "yo",
      ж: "zh",
      з: "z",
      и: "i",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "h",
      ц: "ts",
      ч: "ch",
      ш: "sh",
      щ: "sch",
      ы: "y",
      э: "e",
      ю: "yu",
      я: "ya",
      ъ: "",
      ь: "",
    };

    return word
      .split("")
      .map((ch) => map[ch] || ch)
      .join("");
  }

  function cleanInput(str) {
    str = str.replace(/\./g, "-"); // точки -> дефисы
    str = str.replace(/[^a-zA-Zа-яА-Я0-9\s\-]/g, " "); // убрать спецсимволы кроме букв, цифр, дефисов
    str = str.replace(/\s+/g, " ").trim(); // многократные пробелы -> один
    return str;
  }

  function processText(str) {
    str = cleanInput(str);
    const rawWords = str.split(" ");

    const finalWords = rawWords.map((original) => {
      const lower = original.toLowerCase();
      if (exceptions[lower] && exceptions[lower].enabled) {
        return exceptions[lower].value;
      }
      return translitWord(lower);
    });

    let result = finalWords
      .join("-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const capitalize = document.getElementById("capitalize-first").checked;
    if (capitalize && result.length > 0) {
      result = result.charAt(0).toUpperCase() + result.slice(1);
    }

    return result;
  }

  function updateOutput() {
    const input = document.getElementById("input").value;
    const result = processText(input);

    document.getElementById("output").value = result;
    document.getElementById("copyOutput").dataset.clipboardText = result;

    const cleaned = cleanInput(input);
    const words = cleaned.split(" ").filter(w => w.length > 0);

    let highlighted = "";
    if (words.length === 0) {
      highlighted = "...";
    } else {
      highlighted = words.map(word => {
        const lower = word.toLowerCase();
        if (exceptions[lower] && exceptions[lower].enabled) {
          return `<span class="bg-blue-300 text-blue-950">${word}</span>`;
        }
        return word;
      }).join(" ");
    }

    document.getElementById("highlighted").innerHTML = highlighted;
  }

  document.getElementById("clearInput").addEventListener("click", () => {
    const input = document.getElementById("input");
    input.value = "";
    updateOutput();
  });

  document.getElementById("toggleAllExceptions").addEventListener("change", function() {
    const enableAll = this.checked;
    for (const key in exceptions) {
      exceptions[key].enabled = enableAll;
    }

    const checkboxes = document.querySelectorAll('#exceptionsList input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = enableAll);

    updateOutput();
  });

  document.getElementById("input").addEventListener("input", updateOutput);
  document.getElementById("capitalize-first").addEventListener("change", updateOutput);

  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleAllExceptions").checked = true;
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
  });
</script>

<script src="/js/clipboard.min.js"></script>

<script>
  let clipboard = new ClipboardJS('.copy-btn');
</script>
