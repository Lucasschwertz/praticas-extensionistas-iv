# Diagrama de Arquitetura DevOps (CI/CD)

O diagrama de arquitetura DevOps representa o **pipeline de integração e entrega contínua (CI/CD)** adotado no projeto. Ele mostra as etapas desde o desenvolvimento até a implantação e monitoramento em produção.

```mermaid
flowchart LR
  Dev[👨‍💻 Desenvolvedor]
  GH[📦 Repositório GitHub]
  CI[⚙️ Pipeline CI (GitHub Actions)]
  TEST[🧪 Testes Automatizados]
  BUILD[🏗️ Build e Criação de Imagem]
  REG[🗂️ Registro de Imagens (Container Registry)]
  CD[🚀 Pipeline CD (Deploy Automático)]
  CLOUD[☁️ Ambiente Cloud (AWS)]
  OBS[📈 Observabilidade (Logs / Métricas)]

  Dev --> GH --> CI --> TEST --> BUILD --> REG --> CD --> CLOUD --> OBS
