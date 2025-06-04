// ==UserScript==
// @name         Instalador de Scripts SIGEDUCA
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Instala scripts por perfil no SIGEDUCA
// @match        http://sigeduca.seduc.mt.gov.br/geral/hwlogin2.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const scripts = {
        "Ferramentas TAE": [
            "https://raw.githubusercontent.com/robersonarruda/extratordep/main/extratordep.user.js",
            "https://raw.githubusercontent.com/donidozh/ExtratorGED/main/ExtratorGED.js",
            "https://raw.githubusercontent.com/Jhonatan-Aquino/Lanca-Historico-GED/main/Lancamento-Automatico_Historico.user.js",
            "https://raw.githubusercontent.com/lksoumon/confirmaNotas/main/confirmaNotas.user.js",
            "https://raw.githubusercontent.com/lksoumon/confirmaDiario/main/confimaDiario.user.js",
            "https://raw.githubusercontent.com/lksoumon/sigeducaFichaAnalitica/main/FichaIndividualAnalitica.user.js"
        ],
        "Ferramentas Secretário": [
            "https://raw.githubusercontent.com/robersonarruda/extratorgpe/main/extgpe.user.js",
            "https://raw.githubusercontent.com/lksoumon/confirmaNotas/main/confirmaNotas.user.js",
            "https://raw.githubusercontent.com/lksoumon/confirmaDiario/main/confimaDiario.user.js",
            "https://raw.githubusercontent.com/lksoumon/extrator-Atribui-es-GPE/main/extratorAtribuicao.user.js",
            "https://raw.githubusercontent.com/lksoumon/formataCalendario/main/formataCalendario.user.js",
            "https://raw.githubusercontent.com/lksoumon/extrairMatrizes/main/extrairMatrizes.user.js",
            "https://raw.githubusercontent.com/lksoumon/CalculoGPE/main/CalculoHoras.user.js",
            "https://raw.githubusercontent.com/lksoumon/sigeducaFichaAnalitica/main/FichaIndividualAnalitica.user.js",
            "https://raw.githubusercontent.com/lksoumon/AnaliseDiariosSigeduca/main/ConferidorDiariosClasse.user.js",
            "https://raw.githubusercontent.com/robersonarruda/extratordep/main/extratordep.user.js",
            "https://raw.githubusercontent.com/donidozh/ExtratorGED/main/ExtratorGED.js",
            "https://raw.githubusercontent.com/Jhonatan-Aquino/Lanca-Historico-GED/main/Lancamento-Automatico_Historico.user.js"
        ],
        "Ferramentas Coordenador": [
            "https://raw.githubusercontent.com/lksoumon/confirmaNotas/main/confirmaNotas.user.js",
            "https://raw.githubusercontent.com/lksoumon/confirmaDiario/main/confimaDiario.user.js",
            "https://raw.githubusercontent.com/lksoumon/extrator-Atribui-es-GPE/main/extratorAtribuicao.user.js",
            "https://raw.githubusercontent.com/lksoumon/formataCalendario/main/formataCalendario.user.js",
            "https://raw.githubusercontent.com/lksoumon/extrairMatrizes/main/extrairMatrizes.user.js",
            "https://raw.githubusercontent.com/lksoumon/CalculoGPE/main/CalculoHoras.user.js",
            "https://raw.githubusercontent.com/lksoumon/sigeducaFichaAnalitica/main/FichaIndividualAnalitica.user.js",
            "https://raw.githubusercontent.com/lksoumon/AnaliseDiariosSigeduca/main/ConferidorDiariosClasse.user.js",
            "https://raw.githubusercontent.com/donidozh/ExtratorGED/main/ExtratorGED.js"
        ]
    };

    // Junta todos os scripts sem repetir
    const allScripts = Array.from(new Set(Object.values(scripts).flat()));

    // Cria botão principal
    const mainBtn = document.createElement("button");
    mainBtn.innerText = "📦 Instalar Scripts";
    mainBtn.style.position = "fixed";
    mainBtn.style.top = "10px";
    mainBtn.style.right = "10px";
    mainBtn.style.zIndex = "9999";
    mainBtn.style.padding = "10px";
    mainBtn.style.backgroundColor = "#007bff";
    mainBtn.style.color = "white";
    mainBtn.style.border = "none";
    mainBtn.style.borderRadius = "5px";
    mainBtn.style.cursor = "pointer";

    // Cria submenu
    const submenu = document.createElement("div");
    submenu.style.position = "fixed";
    submenu.style.top = "50px";
    submenu.style.right = "10px";
    submenu.style.zIndex = "9999";
    submenu.style.background = "#fff";
    submenu.style.border = "1px solid #ccc";
    submenu.style.borderRadius = "5px";
    submenu.style.padding = "10px";
    submenu.style.display = "none";
    submenu.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";

    // Função para criar botão de grupo
    function addGroupButton(groupName, urls) {
        const btn = document.createElement("button");
        btn.innerText = groupName;
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.style.marginBottom = "5px";
        btn.style.padding = "6px";
        btn.style.background = "#f0f0f0";
        btn.style.border = "none";
        btn.style.borderRadius = "3px";
        btn.style.cursor = "pointer";

        btn.onclick = () => {
            urls.forEach(url => window.open(url, "_blank"));
            alert(`${groupName} - páginas de instalação abertas`);
        };

        submenu.appendChild(btn);
    }

    // Adiciona grupos ao submenu
    for (const [group, urls] of Object.entries(scripts)) {
        addGroupButton(group, urls);
    }

    // Botão "Instalar Tudo"
    addGroupButton("🚀 Instalar Tudo", allScripts);

    // Alternar submenu
    mainBtn.onclick = () => {
        submenu.style.display = submenu.style.display === "none" ? "block" : "none";
    };

    document.body.appendChild(mainBtn);
    document.body.appendChild(submenu);
})();
