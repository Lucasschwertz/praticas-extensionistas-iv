# Diagrama de Arquitetura de Implantação

O diagrama de implantação representa os componentes físicos e lógicos da aplicação: servidores, banco de dados, rede, armazenamento e monitoramento. Ele mostra **como o sistema é distribuído na infraestrutura em nuvem**.

```mermaid
flowchart TB
  User[Usuario - Navegador ou App Mobile]
  CDN[CDN - CloudFront]
  LB[Load Balancer]
  WEB[Servidor Web ou Container App]
  CACHE[(Cache Redis)]
  DB[(Banco de Dados - RDS)]
  STORAGE[(Armazenamento S3)]
  MON[Monitoramento e Logs]

  User --> CDN --> LB --> WEB
  WEB --> CACHE
  WEB --> DB
  WEB --> STORAGE
  WEB --> MON
