/* =========================================================
   Rotina Segura para Body Piercers — Interações
   ========================================================= */

// URL do checkout (Hotmart)
const CHECKOUT_URL = "https://pay.hotmart.com/M106604692Y?checkoutMode=10&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnjp8Ena_geupZ6onCMeexZzfOyjOzc2yM0uP_hFT-gAk3VGz-8cmkvNVl7Hs_aem__5CBnW9IGjcaPWJIR9vF-A&bid=1783527041233";

// ---------- Aplica o link do checkout em todos os CTAs marcados ----------
document.querySelectorAll("[data-checkout]").forEach((el) => {
  el.setAttribute("href", CHECKOUT_URL);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});

// ---------- Menu mobile ----------
const menuBtn = document.getElementById("menu-toggle");
const navMobile = document.getElementById("nav-mobile");
if (menuBtn && navMobile) {
  menuBtn.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });
  navMobile.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navMobile.classList.remove("open"));
  });
}

// ---------- Lista "Para quem é" (itens numerados) ----------
const forWhomItems = [
  "Aprendeu body piercing principalmente na prática e sente falta de uma base mais organizada.",
  "Ainda está construindo sua técnica e quer reduzir erros no atendimento.",
  "Atende clientes, mas ainda depende muito da memória e do improviso.",
  "Tem dúvidas sobre higiene, luvas, antissepsia, armazenamento e esterilização.",
  "Quer organizar melhor o ambiente e a bancada.",
  "Deseja transmitir mais segurança e profissionalismo.",
  "Quer entender melhor o que pode ser observado em uma fiscalização.",
  "Deseja criar uma sequência segura antes, durante e depois de cada atendimento.",
];
const numberedGrid = document.getElementById("numbered-grid");
if (numberedGrid) {
  numberedGrid.innerHTML = forWhomItems
    .map(
      (t, i) => `
      <div class="numbered-item">
        <div>
          <div class="num">${String(i + 1).padStart(2, "0")}</div>
          <div class="num-under"></div>
        </div>
        <p>${t}</p>
      </div>`
    )
    .join("");
}

// ---------- Accordion dos capítulos ----------
const chapterGroups = [
  {
    name: "Fundamentos",
    range: "Capítulos 1 – 5",
    description: "Base conceitual da biossegurança e contexto de fiscalização.",
    items: [
      "Introdução",
      "Por que pequenas falhas podem custar caro",
      "Biossegurança sem complicação",
      "Contaminação cruzada",
      "Fiscalização",
    ],
  },
  {
    name: "Barreiras e preparo",
    range: "Capítulos 6 – 9",
    description: "Higiene, EPI e preparação do ambiente antes do atendimento.",
    items: [
      "Higiene das mãos",
      "Uso de luvas",
      "Antissepsia",
      "Preparação do ambiente e bancada",
    ],
  },
  {
    name: "Ambiente e materiais",
    range: "Capítulos 10 – 13",
    description: "Rotina de limpeza, armazenamento, processamento e esterilização.",
    items: [
      "Limpeza do estúdio",
      "Armazenamento",
      "Processamento de materiais",
      "Esterilização",
    ],
  },
  {
    name: "Rotina completa",
    range: "Capítulos 14 – 17",
    description: "A sequência prática do antes, durante e depois de cada cliente.",
    items: [
      "Erros comuns",
      "Antes do atendimento",
      "Durante o atendimento",
      "Depois do atendimento",
    ],
  },
  {
    name: "Consolidação",
    range: "Capítulos 18 – 20",
    description: "Checklists e aplicação para consolidar tudo na prática.",
    items: [
      "Checklist para fiscalização",
      "Ajustes simples",
      "Conclusão e aplicação",
    ],
  },
];
const chaptersEl = document.getElementById("chapters-accordion");
if (chaptersEl) {
  chaptersEl.innerHTML = chapterGroups
    .map(
      (g, i) => `
      <div class="acc-item ${i === 0 ? "open" : ""}" data-index="${i}">
        <button class="acc-head" type="button">
          <div>
            <div class="acc-range">${g.range}</div>
            <div class="acc-title">${g.name}</div>
            <div class="acc-desc">${g.description}</div>
          </div>
          <span class="acc-arrow">▾</span>
        </button>
        <div class="acc-body">
          <ul>
            ${g.items
              .map(
                (it, j) =>
                  `<li><span class="num-mini">${String(j + 1).padStart(2, "0")}</span><span>${it}</span></li>`
              )
              .join("")}
          </ul>
        </div>
      </div>`
    )
    .join("");
}

// ---------- FAQ ----------
const faqs = [
  { q: "O produto serve para quem está começando?", a: "Sim. O material foi pensado principalmente para profissionais que ainda estão construindo sua base técnica ou aprenderam grande parte da rotina na prática." },
  { q: "O eBook substitui um curso técnico?", a: "Não. Ele é um guia prático para organizar pontos importantes da rotina, mas não substitui formação aprofundada, normas sanitárias ou orientações específicas." },
  { q: "O material garante aprovação em uma fiscalização?", a: "Não. As exigências podem variar conforme o município, o estado e a Vigilância Sanitária local. O conteúdo ajuda a revisar e organizar boas práticas, mas não oferece garantia de aprovação." },
  { q: "Preciso mudar toda a estrutura do meu estúdio?", a: "Não necessariamente. O conteúdo apresenta ajustes simples que podem melhorar a rotina, além de mostrar pontos que precisam ser analisados com mais atenção." },
  { q: "Vou receber os bônus?", a: "Os bônus serão disponibilizados aos 20 primeiros compradores, conforme a condição informada na oferta." },
  { q: "Como receberei o produto?", a: "Após a confirmação do pagamento, o acesso será enviado pela plataforma utilizada na venda." },
  { q: "Posso acessar pelo celular?", a: "Sim. O eBook e os materiais digitais podem ser acessados pelo celular, computador ou tablet." },
  { q: "Tenho garantia?", a: "Sim. A oferta possui garantia de 7 dias." },
];
const faqEl = document.getElementById("faq-accordion");
if (faqEl) {
  faqEl.innerHTML = faqs
    .map(
      (f, i) => `
      <div class="acc-item" data-index="${i}">
        <button class="acc-head" type="button">
          <span class="acc-title">${f.q}</span>
          <span class="acc-arrow">▾</span>
        </button>
        <div class="acc-body-faq">${f.a}</div>
      </div>`
    )
    .join("");
}

// ---------- Delegação de clique para todos os accordions ----------
document.querySelectorAll(".accordion").forEach((container) => {
  container.addEventListener("click", (e) => {
    const head = e.target.closest(".acc-head");
    if (!head) return;
    const item = head.closest(".acc-item");
    const wasOpen = item.classList.contains("open");
    // fecha os outros do mesmo accordion
    container.querySelectorAll(".acc-item").forEach((i) => i.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  });
});

// ---------- CTA sticky mobile: mostra após o hero e some perto da oferta ----------
const sticky = document.getElementById("sticky-mobile");
if (sticky) {
  const onScroll = () => {
    const y = window.scrollY;
    const offer = document.getElementById("oferta");
    const offerTop = offer ? offer.getBoundingClientRect().top : Infinity;
    const shouldShow = y > 500 && offerTop > 300;
    sticky.classList.toggle("visible", shouldShow);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
