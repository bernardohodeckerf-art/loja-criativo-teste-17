# Blu Fit Academia

Site editorial em React, TypeScript, Tailwind CSS e Framer Motion.

## Executar

Requer Node.js 22 ou superior (validado com Node 24) e npm.

```sh
npm ci
npm run dev
```

Para produção: `npm run build`. Os arquivos publicados ficam em `dist/`.
Para conferir o build: `npm run preview`.

## Dados e publicação

Edite `src/config.ts`. Nome, cidade e Instagram foram fornecidos no briefing.

Antes de publicar, confirmar:
- Oferta de Boxe, Muay Thai, Jiu-jitsu e Funcional. Musculação não é anunciada.
- Valores e condições dos quatro planos. Preços de revisão estão na configuração e ficam ocultos enquanto `pricesConfirmed` for falso.
- WhatsApp com país e DDD. Sem ele, os botões abrem o Instagram. Mensagens de plano/modalidade são preenchidas somente quando há WhatsApp.
- Endereço, horários, identidade oficial e fotos reais autorizadas.
- Hero com vídeo 4K local: `public/videos/hero-4k.mp4`, 3840 × 2160, H.264, loop de 8 segundos sem áudio. Fonte: [Lucas STAF no Pexels](https://www.pexels.com/video/fitness-enthusiast-working-out-on-gym-machine-39347711/), [licença Pexels](https://www.pexels.com/license/). É material ilustrativo, não representa instalações ou alunos da Blu Fit. O vídeo só é montado em telas acima de 760 px sem preferência por movimento reduzido, evitando download no celular. A reprodução é automática e contínua, sem botão de pausa. A capa local permanece se houver erro de mídia ou bloqueio de autoplay. Para substituir, altere `video` e `videoPoster` em `src/config.ts`.

A imagem local `public/images/hero.webp` foi gerada por IA e é ilustrativa; não retrata a academia. Fotografias adicionais são referências ilustrativas do Unsplash (licença: https://unsplash.com/license); suas URLs estão em `src/main.tsx`. Se a rede impedir o carregamento, a imagem local é exibida como alternativa. Substituir por fotos reais autorizadas antes da publicação é recomendado. As fontes Barlow e Barlow Condensed são servidas localmente por @fontsource, sob SIL Open Font License.

A referência visual solicitada retornou HTTP 403 nesta sessão; a implementação segue a descrição de direção de arte do briefing.

## Validação executada

- TypeScript e build de produção.
- Chromium desktop (1440 px) e celular (360 px), sem rolagem horizontal.
- Menu móvel e fechamento por navegação, seleção de modalidade, galeria com dialog e Escape.
- Preços pendentes ocultos, preferência de movimento reduzido e ausência de erros de execução JavaScript.

O projeto não contém backend ou formulário de captura. Contato é realizado por Instagram/WhatsApp configurado.
