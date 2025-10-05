# Diagrama de Arquitetura DevOps (CI/CD)

O diagrama de arquitetura DevOps representa o **pipeline de integração e entrega contínua (CI/CD)** adotado no projeto. Ele mostra as etapas desde o desenvolvimento até a implantação e monitoramento em produção.

```mermaid
flowchart LR
  Dev[Desenvolvedor]
  GH[Repositorio GitHub]
  CI[Pipeline CI - GitHub Actions]
  TEST[Testes Automatizados]
  BUILD[Build e Criacao de Imagem]
  REG[Registro de Imagens - Container Registry]
  CD[Pipeline CD - Deploy Automatico]
  CLOUD[Ambiente Cloud - AWS]
  OBS[Observabilidade - Logs e Metricas]

  Dev --> GH --> CI --> TEST --> BUILD --> REG --> CD --> CLOUD --> OBS
