# Diagrama de Arquitetura de Implantação

O diagrama de implantação representa os componentes físicos e lógicos da aplicação: servidores, banco de dados, rede, armazenamento e monitoramento. Ele mostra **como o sistema é distribuído na infraestrutura em nuvem**.

```mermaid
flowchart TB
  User[Usuário (Navegador / App Mobile)]
  CDN[CDN / CloudFront]
  LB[Load Balancer]
  WEB[Servidor Web / Container (App)]
  CACHE[(Cache Redis)]
  DB[(Banco de Dados - RDS)]
  STORAGE[(Armazenamento S3)]
  MON[Monitoramento / Logs]

  User --> CDN --> LB --> WEB
  WEB --> CACHE
  WEB --> DB
  WEB --> STORAGE
  WEB --> MON


Descrição:

O usuário acessa o sistema via navegador ou aplicativo.

A requisição passa por uma CDN e por um Load Balancer que distribui o tráfego.

O servidor web/container processa as requisições.

O banco de dados armazena informações persistentes.

O cache otimiza o desempenho das consultas.

O armazenamento guarda arquivos e mídias.

O monitoramento registra logs, métricas e alertas do ambiente.