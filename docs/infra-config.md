# Configuração da Infraestrutura Cloud – AWS

A infraestrutura do projeto foi implementada utilizando a plataforma **Amazon Web Services (AWS)**, garantindo escalabilidade, alta disponibilidade e baixo custo operacional. A API desenvolvida em Flask foi hospedada em um Web Service totalmente gerenciado na nuvem, seguindo boas práticas de deploy e disponibilização.

---

## 1. Serviços Utilizados

### Compute
- Render Web Service hospedado em infraestrutura AWS
- Linguagem: Python 3.11  
- Servidor de produção: Gunicorn  
- Porta padrão: 10000 (gerenciada automaticamente pelo Render)

### APIs e Backend
- API desenvolvida em Python + Flask  
- Deploy automático via GitHub → Render  
- Endpoint público:
  **https://praticas-extensionistas-iv.onrender.com**

---

## 2. Banco de Dados
Para esta versão, não há banco ativo.  
Caso fosse necessário, a opção recomendada seria:
- **Amazon RDS (PostgreSQL)**  
- Rede isolada em VPC privada  
- Acesso restrito exclusivamente via instância autorizada

---

## 3. Armazenamento
Caso haja necessidade de uploads ou arquivos estáticos:
- **Amazon S3**  
- Bucket para assets  
- Controle de acesso via IAM Policies

---

## 4. Rede
- Load balancer nativo do Render  
- Certificado SSL automático  
- HTTPS habilitado por padrão  
- Firewalls internos e controle de rotas

---

## 5. Monitoramento
- CloudWatch (por meio da camada gerenciada do Render)  
- Logs da aplicação e reinícios automáticos  
- Monitoramento de eventos, latência e disponibilidade

---

## 6. Justificativa da Escolha da AWS

A AWS foi selecionada por:

1. Amplo conjunto de serviços  
2. Ampla documentação e comunidade  
3. Free tier que reduz custos  
4. Estabilidade e alta disponibilidade  
5. Fácil integração com GitHub + Render  
6. Ecossistema consolidado e amplamente adotado no mercado brasileiro

---

**Autor:** Lucas Schwertz  
**Disciplina:** Práticas Extensionistas IV  
**Professor:** Jean Carlos Hennrichs  
**Instituição:** UNOESC  
