# Diagrama UML de Pacotes (Arquitetura da Aplicação)

O diagrama de pacotes apresenta a visão de alto nível da aplicação, mostrando os módulos principais, suas responsabilidades e interações. Essa estrutura facilita a manutenção e a escalabilidade do sistema.

```mermaid
flowchart LR
  %% Pacotes principais
  subgraph Apresentacao["Pacote: Apresentação (Web/App)"]
    UI[Interface do Usuário]
  end

  subgraph Aplicacao["Pacote: Aplicação (Serviços e Regras)"]
    Auth[Serviço de Autenticação]
    Api[API REST]
    Rules[Regras de Negócio]
  end

  subgraph Integracao["Pacote: Integração"]
    ERP[Conectores ERP]
    Ext[APIs Externas]
  end

  subgraph Dados["Pacote: Dados"]
    Repo[Repositórios]
    DB[(Banco de Dados)]
  end

  UI --> Api
  Api --> Rules
  Rules --> Repo
  Repo --> DB
  Api --> ERP
  Api --> Ext

Descrição:

O pacote Apresentação cuida da interação com o usuário.

O pacote Aplicação concentra a lógica de negócio.

O pacote Integração trata da comunicação com sistemas externos.

O pacote Dados é responsável pela persistência e acesso ao banco.