
    const chatBtn = document.getElementById('chat-btn');
    const chatWindow = document.getElementById('chat-window');
    const chatBody = document.getElementById('chat-body');

    const fluxo = {
      inicio: {
        texto: "Olá! Você tem interesse em se tornar um microempreendedor individual?",
        tipo: "opcoes",
        opcoes: [
          { texto: "Sim", proximo: "faturamento" },
          { texto: "Não", proximo: "encerrar" },
          { texto: "O que é um microempreendedor individual?", proximo: "explicar" }
        ]
      },

      explicar: {
        texto: "O Microempreendedor Individual (MEI) é a legalização simplificada para quem trabalha por conta própria, com faturamento anual de até R$ 81 mil, sem participar de outras empresas como sócio ou titular. Então, você tem interesse?",
        tipo: "opcoes",
        opcoes: [
          { texto: "Sim", proximo: "faturamento" },
          { texto: "Não", proximo: "encerrar" }
        ]
      },

      faturamento: {
        texto: "O limite de faturamento anual do MEI é de R$ 81.000,00. A média mensal deve ser até R$ 6.750,00. Você está de acordo com essa margem?",
        tipo: "opcoes",
        opcoes: [
          { texto: "Sim", proximo: "funcionarios" },
          { texto: "Não", proximo: "encerrar" }
        ]
      },

      funcionarios: {
        texto: "Um MEI pode ter no máximo um funcionário com carteira assinada. Você está de acordo com isso?",
        tipo: "opcoes",
        opcoes: [
          { texto: "Minha empresa não terá funcionários", proximo: "atividade" },
          { texto: "Sim", proximo: "atividade" },
          { texto: "E se eu quiser mais de um funcionário?", proximo: "incompleto" }
        ]
      },

      atividade: {
        texto: "Ok. O funcionário (se tiver) deve receber o piso da categoria ou o salário mínimo. Você já sabe que atividade quer realizar?",
        tipo: "opcoes",
        opcoes: [
          { texto: "Sim", proximo: "agendamento" },
          { texto: "Não", proximo: "encerrar" }
        ]
      },

      encerrar: {
        texto: "Tudo bem! Caso se interesse novamente em se tornar MEI, abra este chat novamente ou marque uma consulta com o setor NAF.",
        tipo: "fim"
      },

      fim: {
        texto: "Chat encerrado.",
        tipo: "fim"
      },

      agendamento: {
        texto: "Redirecionando para agendamento...",
        tipo: "fim"
      },

      incompleto: {
        texto: "Sua dúvida será encaminhada para o setor NAF. Aguarde resposta.",
        tipo: "fim"
      }
    };

    let etapaAtual = "inicio";

    function adicionarMensagem(remetente, texto) {
      const msg = document.createElement("p");
      msg.innerHTML = `<strong>${remetente}:</strong> ${texto}`;
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function mostrarOpcoes(opcoes) {
      const container = document.createElement("div");
      opcoes.forEach(op => {
        const btn = document.createElement("button");
        btn.classList.add("opcao-btn");
        btn.textContent = op.texto;
        btn.onclick = () => {
          adicionarMensagem("Você", op.texto);
          container.remove();
          etapaAtual = op.proximo;
          setTimeout(fazerPergunta, 600);
        };
        container.appendChild(btn);
      });
      chatBody.appendChild(container);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function fazerPergunta() {
      const etapa = fluxo[etapaAtual];
      if (!etapa) return;
      adicionarMensagem("Bot", etapa.texto);

      if (etapa.tipo === "opcoes") {
        mostrarOpcoes(etapa.opcoes);
      }
    }

    chatBtn.addEventListener("click", () => {
      chatWindow.classList.toggle("open");
      if (chatWindow.classList.contains("open") && etapaAtual === "inicio") {
        setTimeout(fazerPergunta, 500);
      }
    });
  