# BI de Suprimentos — contexto para o portfólio

Data de inclusão: 02/11/2026. Posição: primeiro projeto. Categoria: Power BI.

## Resumo publicado no card

Acompanhamento integrado de compras, pedidos e fornecedores, com indicadores de prazos, atrasos e faturamento. Integra dados de notas fiscais para investigar o ciclo do pedido ao recebimento.

Demonstração com dados fictícios. Tecnologias: Power BI, Python e Excel.

## Relatório e imagens

[Demo no Power BI](https://app.powerbi.com/view?r=eyJrIjoiOThiZjlhZjAtODM5Yi00YmM1LWJkMzAtYTlkZjgyNjA1N2YyIiwidCI6ImY1MDM4NzBkLTBhYWUtNDI1Mi05ZjE1LWQ2MTg5NmY5ZjZmZiJ9)

1. Capa: [Performance de Compras](../assets/Suprimentos-compras.png).
2. [Visão geral](../assets/Vis%C3%A3o%20Geral%20Suprimentos.png).
3. [Menu retrátil e pedidos](../assets/Menu%20retratil.png).

O link foi fornecido pelo autor; o relatório não pôde ser validado pela ferramenta web nesta sessão. As capturas e o contexto abaixo fundamentam o resumo. A integração Python foi informada pelo autor, com as limitações registradas na conferência original.

## Contexto original fornecido

O texto abaixo foi preservado como documentação de origem. As referências a autorização e publicação no LinkedIn pertencem ao rascunho original; esta tarefa adiciona o projeto ao portfólio.

BI de Suprimentos — conferência e publicação para LinkedIn

**Status: rascunho aguardando autorização para publicação no LinkedIn.** O autor solicitará autorização antes de publicar, mesmo sendo uma demonstração com dados fictícios.

Data: 02/11/2026. Base da conferência: `Portfolio_Ficticio_Corrigido/Suprimentos_Demo.pbip`, definições PBIR das 24 páginas (12 telas de navegação e 12 auxiliares, incluindo Adiantamentos, configurada como Tooltip) e medidas TMDL. Revisão estática dos arquivos; não foi uma validação visual ou funcional da versão publicada. A publicação da demo foi informada pelo autor.

## Conferência das telas

| Tela | Conteúdo confirmado nos arquivos |
|---|---|
| Home | Entrada e navegação entre módulos. |
| Visão Geral | Compras, pedidos, itens distintos, fornecedores, ticket, prazos, pontualidade, categorias, evolução temporal e distribuição por comprador e solicitante. |
| Solicitação | Requisições por comprador e etapa, quantidades solicitadas/atendidas/pendentes, dias em aberto, SLA e vínculo com pedido. Etapas incluem Aguardando Oferta, Em Oferta, Aguardando Aprovação, Oferta Aprovada e Pedido Parcial. |
| Pedidos | Carteira aberta: atrasados, no prazo, reagendados, distribuição por comprador e detalhes de itens, datas, valores e recebimentos. |
| Agenda de Entregas | Entregas previstas, recorte dos próximos sete dias, vencidos, fornecedores, pedidos, itens e valores. |
| Pedidos Concluídos | Histórico de conclusão, pontualidade, cancelamentos, valores e recebimentos; tabela com tooltip de notas fiscais. |
| Fornecedores | Compras, categorias, concentração/Pareto e prazos. |
| Fornecedores – Performance | Pontualidade, lead time, atrasos, score, classificação e ranking. |
| Fornecedores – Faturamento | Prazo de faturamento, transporte, notas vinculadas e notas emitidas antes do pedido. |
| Compradores | Visão individual de compras, pedidos, itens, ticket e painel do comprador. |
| Compradores · Comparativo | Comparação de volume, participação, fornecedores, SLA, reagendamentos, pontualidade, preços e solicitações sem pedido. |
| Adiantamentos | Adiantado versus consumido, saldo, comprador, pedido, fornecedor, situação de consumo e notas fiscais. |

Os arquivos contêm interações de filtro, navegação por botões e tooltips. Nem todo clique em todo visual foi testado nesta revisão.

## Ajustes à descrição

- Na Visão Geral, a medida chamada `Qtde solicitação` conta pedidos distintos; não usar esse cartão como total de requisições.
- `Qtds de Itens` conta códigos distintos, não a soma das unidades compradas. A quantidade comprada está no detalhamento dos pedidos.
- O status encontrado é **Pedido Parcial**; “impedido parcial” não foi confirmado.
- Os comparativos anuais estão previstos no modelo, mas a demo documentada tem histórico a partir de maio de 2026, com extensão de entregas para novembro. Não apresentar comparação com ano anterior como resultado disponível sem conferir os dados publicados.
- O tooltip de NFs lista as cinco mais recentes **do fornecedor no contexto filtrado**. Não afirmar que todas pertencem exclusivamente ao pedido da linha.
- Posicionamento recomendado: **sistema integrado de acompanhamento operacional de compras e suprimentos**. A revisão não identificou execução de aprovações ou gravação de alterações em pedidos pelo relatório.
- Compradores tem visão individual e comparativa; não replica exatamente os três módulos dos fornecedores.

## Publicação sugerida

Quanto tempo uma compra leva entre o pedido, o faturamento e o recebimento? E em qual etapa o prazo está se alongando?

Essas perguntas fazem parte do projeto que desenvolvi: um sistema integrado de acompanhamento operacional de compras e suprimentos, com Python e Power BI.

Uma parte importante desse trabalho começa nos XMLs das notas fiscais.

Um script em Python extrai e consolida as informações desses arquivos em Excel. Essa base alimenta o Power BI e é cruzada com os dados dos pedidos, dos fornecedores e dos recebimentos.

XML das notas fiscais → Python → Excel → Power BI

Com essa integração, consigo acompanhar:

• O tempo entre a emissão do pedido e o faturamento pelo fornecedor.
• O intervalo entre a emissão da nota fiscal e o recebimento registrado, apoiando o acompanhamento de frete e entrega.
• O prazo total entre o pedido e o recebimento, comparado à data de entrega combinada com o fornecedor.

Esse cruzamento ajuda a investigar onde o prazo está se alongando: antes do faturamento ou entre o faturamento e o recebimento. Assim, as conversas com fornecedor, frete e recebimento passam a contar com mais contexto.

O acompanhamento continua nas demais telas:

• Solicitações: etapas, pendências de aprovação e atendimento parcial.
• Pedidos: carteira em aberto, atrasos, reagendamentos e responsáveis.
• Agenda de entregas: previsões para os próximos dias e pendências vencidas.
• Concluídos: histórico, recebimentos e consulta de notas fiscais por fornecedor.
• Fornecedores: visão geral, performance e faturamento.
• Compradores: visão individual e comparativa.
• Adiantamentos: valores antecipados, consumo e saldo.

Os filtros e as interações permitem partir de um indicador e chegar ao detalhe do pedido, do fornecedor ou do comprador.

A versão demo já está publicada e utiliza dados fictícios para apresentar as funcionalidades do projeto.

Na sua operação, você consegue identificar quanto do prazo de uma compra está antes e quanto está depois do faturamento?

#PowerBI #Python #BusinessIntelligence #Compras #Suprimentos

## Material de apoio

Para acompanhar o texto: sequência de capturas ou vídeo mostrando Visão Geral → Solicitação → Pedidos → Agenda de Entregas → Concluídos → Fornecedores → Compradores → Adiantamentos. Demonstrar uma seleção em gráfico e um tooltip de notas fiscais.

Inserir o link público da demo quando fornecido e conferido. Este arquivo é um rascunho; nenhuma publicação foi enviada ao LinkedIn.

## Integração fiscal — complemento de 02/11/2026

Fluxo XML → script Python → Excel → Power BI informado pelo autor. O script de extração não foi localizado nos diretórios examinados nesta revisão; a leitura e o cruzamento da base consolidada de NF-e foram confirmados no modelo.

Em fPedidoNF, as notas são associadas aos recebimentos pelo CNPJ normalizado do fornecedor e número normalizado da NF. Os cálculos confirmados incluem Data Emissão NF − Data Pedido e Data Recebimento − Data Emissão NF. Há medidas de dias até faturar, dias de transporte e percentual faturado no prazo.

O indicador chamado Dias de Transporte usa o intervalo faturamento–recebimento. Sem datas separadas de expedição/coleta, entrega física e registro de entrada, esse intervalo não isola o tempo de transporte nem o tempo interno do recebimento. A redação evita atribuir todo o intervalo exclusivamente ao setor de frete. Não foi confirmado download automático dos XMLs; o texto descreve extração e consolidação conforme esclarecimento do autor.