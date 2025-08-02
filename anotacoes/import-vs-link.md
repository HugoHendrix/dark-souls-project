## Importando Fontes no CSS: `@import` vs. `<link>`

Ao trabalhar com fontes externas, como as do Google Fonts, você tem principalmente duas abordagens para incluí-las em seu projeto: a regra `@import` dentro do CSS ou a tag `<link>` no HTML. Embora ambas funcionem, uma é geralmente **preferível** por razões de performance e boas práticas.

-----

### A Opção `<style>@import url(...);</style>`

```html
<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=MedievalSharp&family=Pirata+One&family=UnifrakturCook:wght@700&display=swap');
</style>
```

#### Como Funciona

Quando você usa `@import` dentro de uma tag `<style>` no seu HTML (ou diretamente em um arquivo CSS), o navegador precisa **primeiro carregar e analisar o arquivo HTML**, depois encontrar a tag `<style>`, então carregar e analisar o CSS dentro dela e, **só então**, descobrir que precisa carregar o arquivo de fontes referenciado pelo `@import`.

#### Vantagens

  * **Organização (aparente)**: Para alguns, pode parecer mais organizado manter toda a importação de estilos dentro do CSS.

#### Desvantagens

  * **Problemas de Performance (Cascata de Requisições)**: Esta é a principal desvantagem. O `@import` cria uma "cascata" de requisições. O navegador não pode começar a baixar o arquivo de fontes até que o arquivo CSS que o contém seja totalmente baixado e analisado. Isso atrasa a renderização da página, pois as fontes só estarão disponíveis mais tarde. Esse atraso é conhecido como **"Flash of Unstyled Text" (FOUT)**, onde o texto é exibido com uma fonte padrão antes que a fonte customizada seja carregada.
  * **Bloqueio de Renderização**: Embora a importação da fonte em si não seja totalmente bloqueante, o processo atrasado pode contribuir para um carregamento visual mais lento da página.

-----

### A Opção `<link>` no HTML

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=MedievalSharp&family=Pirata+One&family=UnifrakturCook:wght@700&display=swap" rel="stylesheet">
```

#### Como Funciona

A tag `<link>` é colocada diretamente na seção `<head>` do seu documento HTML. Quando o navegador encontra uma tag `<link rel="stylesheet">`, ele pode iniciar o download do arquivo CSS (e, por extensão, as fontes dentro dele ou referenciadas por ele) **paralelamente** ao parseamento do HTML.

Os atributos `rel="preconnect"` e `crossorigin` são otimizações adicionais:

  * **`rel="preconnect"`**: Informa ao navegador que você pretende fazer uma conexão com o domínio `fonts.googleapis.com` e `fonts.gstatic.com` (onde as fontes e os arquivos CSS das fontes estão hospedados) o mais rápido possível. Isso economiza tempo, pois a fase de "handshake" da conexão (DNS lookup, TCP handshake, TLS negotiation) pode começar mais cedo.
  * **`crossorigin`**: É necessário para requisições de fontes de domínios diferentes devido às políticas de CORS (Cross-Origin Resource Sharing).

#### Vantagens

  * **Melhor Performance (Carregamento Paralelo)**: O navegador pode descobrir e iniciar o download do arquivo de fontes (ou do CSS que aponta para elas) muito mais cedo no processo de carregamento da página. Isso reduz o tempo de carregamento da fonte e o FOUT.
  * **Prioridade de Carregamento**: O navegador pode priorizar o carregamento de recursos críticos descobertos no `<head>`.
  * **Otimizações Adicionais**: Permite o uso de `preconnect` para otimizar ainda mais a conexão com o servidor de fontes.
  * **Padrão da Indústria**: É a forma recomendada pela maioria dos fornecedores de fontes e por especialistas em performance web.

-----

### Qual Alternativa é Melhor?

A alternativa **`<link>` no HTML é definitivamente a melhor escolha** para importar fontes externas.

  * **Performance:** Proporciona um carregamento mais rápido das fontes, resultando em uma melhor experiência do usuário e menor impacto no Core Web Vitals (métricas de performance do Google).
  * **Otimização:** Permite o uso de `preconnect` para otimizações de rede.
  * **Padrão:** É a prática recomendada.

**Em resumo:** Sempre que possível, utilize a tag `<link>` na seção `<head>` do seu documento HTML para importar fontes e outros arquivos CSS. Reserve o `@import` apenas para casos muito específicos (como importar um pequeno arquivo CSS dentro de outro arquivo CSS grande, embora mesmo assim `link` seja geralmente preferível para performance).